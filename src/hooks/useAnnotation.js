import { useState, useEffect, useCallback, useRef } from 'react'
import { supabase } from '../supabaseClient'
import { posts } from '../mockData'

// Helper to remove _isNew and _reviewed flags from output for comparison/saving
function cleanOutput(output) {
  if (!output) return output
  const cleaned = JSON.parse(JSON.stringify(output))
  if (cleaned.medications) {
    cleaned.medications = cleaned.medications.map(m => {
      const { _isNew, _reviewed, ...rest } = m
      return rest
    })
  }
  if (cleaned.symptoms) {
    cleaned.symptoms = cleaned.symptoms.map(s => {
      const { _isNew, _reviewed, ...rest } = s
      return rest
    })
  }
  return cleaned
}

// Deep comparison helper
function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

// Check if there are unsaved changes
function hasChanges(currentOutput, originalOutput, savedModification) {
  if (!currentOutput) return false
  const cleanedCurrent = cleanOutput(currentOutput)
  // Compare against saved modification if exists, otherwise against original
  const compareAgainst = savedModification || originalOutput
  return !isEqual(cleanedCurrent, compareAgainst)
}

export function useAnnotation(annotator) {
  const [index, setIndex] = useState(0)
  const [currentOutput, setCurrentOutput] = useState(null)
  const [reviewedIds, setReviewedIds] = useState(new Set())
  const [modifiedIds, setModifiedIds] = useState(new Set())
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [savedModification, setSavedModification] = useState(null)

  const originalOutputRef = useRef(null)
  const currentPost = posts[index]

  // Compute if there are unsaved changes
  const hasUnsavedChanges = hasChanges(currentOutput, originalOutputRef.current, savedModification)

  // Load annotator's existing progress on mount
  useEffect(() => {
    if (!annotator?.id) return

    async function loadProgress() {
      setLoading(true)

      // Load reviewed IDs
      const { data: reviews } = await supabase
        .from('reviews')
        .select('extraction_id')
        .eq('annotator_id', annotator.id)

      if (reviews) {
        setReviewedIds(new Set(reviews.map(r => r.extraction_id)))
      }

      // Load modified records
      const { data: modifications } = await supabase
        .from('modifications')
        .select('extraction_id')
        .eq('annotator_id', annotator.id)

      if (modifications) {
        setModifiedIds(new Set(modifications.map(m => m.extraction_id)))
      }

      setLoading(false)
    }

    loadProgress()
  }, [annotator?.id])

  // Load current record's data (either modified or original)
  useEffect(() => {
    if (!annotator?.id || !currentPost) return

    async function loadCurrentRecord() {
      const extractionId = currentPost.extraction_id

      // Store original for comparison
      originalOutputRef.current = JSON.parse(JSON.stringify(currentPost.llm_output))

      // Check if there's a modification for this record
      const { data: modification } = await supabase
        .from('modifications')
        .select('llm_output')
        .eq('annotator_id', annotator.id)
        .eq('extraction_id', extractionId)
        .single()

      if (modification) {
        setCurrentOutput(modification.llm_output)
        setSavedModification(modification.llm_output)
      } else {
        // Use original data
        setCurrentOutput(JSON.parse(JSON.stringify(currentPost.llm_output)))
        setSavedModification(null)
      }
    }

    loadCurrentRecord()
  }, [annotator?.id, index, currentPost])

  // Debounced save function
  const saveModification = useCallback(async (newOutput) => {
    if (!annotator?.id || !currentPost) return

    const extractionId = currentPost.extraction_id

    // Clean output (remove _isNew flags) for comparison and saving
    const cleanedOutput = cleanOutput(newOutput)
    const originalOutput = originalOutputRef.current

    // Check if the cleaned output matches the original
    if (isEqual(cleanedOutput, originalOutput)) {
      // No real changes - delete any existing modification and remove from modifiedIds
      if (modifiedIds.has(extractionId)) {
        await supabase
          .from('modifications')
          .delete()
          .eq('annotator_id', annotator.id)
          .eq('extraction_id', extractionId)

        setModifiedIds(prev => {
          const next = new Set(prev)
          next.delete(extractionId)
          return next
        })
      }
      return
    }

    setSaving(true)

    // Upsert modification with cleaned output
    const { error } = await supabase
      .from('modifications')
      .upsert({
        annotator_id: annotator.id,
        extraction_id: extractionId,
        llm_output: cleanedOutput,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'annotator_id,extraction_id'
      })

    if (!error) {
      setModifiedIds(prev => new Set([...prev, extractionId]))
    }

    setSaving(false)
  }, [annotator?.id, currentPost, modifiedIds])

  // Update current output (no auto-save - only saved on review)
  const updateOutput = useCallback((newOutput) => {
    setCurrentOutput(newOutput)
  }, [])

  // Check if all medications and symptoms are reviewed
  const allItemsReviewed = useCallback(() => {
    if (!currentOutput) return false

    const medications = currentOutput.medications || []
    const symptoms = currentOutput.symptoms || []

    // Check if all medications are reviewed
    const allMedsReviewed = medications.length === 0 || medications.every(m => m._reviewed)

    // Check if all symptoms are reviewed
    const allSymptomsReviewed = symptoms.length === 0 || symptoms.every(s => s._reviewed)

    return allMedsReviewed && allSymptomsReviewed
  }, [currentOutput])

  // Mark current record as reviewed (and save any modifications)
  const markReviewed = useCallback(async () => {
    if (!annotator?.id || !currentPost) return

    const extractionId = currentPost.extraction_id

    // Check if all items are reviewed before allowing mark as reviewed
    if (!allItemsReviewed()) {
      alert('Please review all medications and symptoms before marking this record as reviewed.')
      return false
    }

    // Save modifications when marking as reviewed
    await saveModification(currentOutput)

    // If already reviewed, just return after saving
    if (reviewedIds.has(extractionId)) return true

    const { error } = await supabase
      .from('reviews')
      .upsert({
        annotator_id: annotator.id,
        extraction_id: extractionId,
        reviewed_at: new Date().toISOString()
      }, {
        onConflict: 'annotator_id,extraction_id'
      })

    if (!error) {
      setReviewedIds(prev => new Set([...prev, extractionId]))
      return true
    }
    return false
  }, [annotator?.id, currentPost, reviewedIds, saveModification, currentOutput, allItemsReviewed])

  // State for pending navigation (used with confirmation modal)
  const [pendingNavigation, setPendingNavigation] = useState(null)

  // Navigation functions - set pending navigation if unsaved changes exist
  const goToNext = useCallback(() => {
    if (index < posts.length - 1) {
      const newIndex = index + 1
      if (hasUnsavedChanges) {
        setPendingNavigation(newIndex)
      } else {
        setIndex(newIndex)
      }
    }
  }, [index, hasUnsavedChanges])

  const goToPrevious = useCallback(() => {
    if (index > 0) {
      const newIndex = index - 1
      if (hasUnsavedChanges) {
        setPendingNavigation(newIndex)
      } else {
        setIndex(newIndex)
      }
    }
  }, [index, hasUnsavedChanges])

  const goToIndex = useCallback((newIndex) => {
    if (newIndex >= 0 && newIndex < posts.length && newIndex !== index) {
      if (hasUnsavedChanges) {
        setPendingNavigation(newIndex)
      } else {
        setIndex(newIndex)
      }
    }
  }, [index, hasUnsavedChanges])

  // Confirm discard and navigate
  const confirmDiscard = useCallback(() => {
    if (pendingNavigation !== null) {
      setIndex(pendingNavigation)
      setPendingNavigation(null)
    }
  }, [pendingNavigation])

  // Cancel navigation
  const cancelNavigation = useCallback(() => {
    setPendingNavigation(null)
  }, [])

  return {
    currentPost,
    currentOutput,
    updateOutput,
    index,
    totalPosts: posts.length,
    goToNext,
    goToPrevious,
    goToIndex,
    reviewedIds,
    modifiedIds,
    saving,
    loading,
    markReviewed,
    hasUnsavedChanges,
    showDiscardModal: pendingNavigation !== null,
    confirmDiscard,
    cancelNavigation
  }
}
