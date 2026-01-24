import { useState, useEffect, useCallback, useRef } from 'react'
import { supabase } from '../supabaseClient'
import { posts } from '../mockData'

// Helper to remove _isNew flag from output for saving (keep _reviewed)
function cleanOutput(output) {
  if (!output) return output
  const cleaned = JSON.parse(JSON.stringify(output))
  if (cleaned.medications) {
    cleaned.medications = cleaned.medications.map(m => {
      const { _isNew, ...rest } = m
      return rest
    })
  }
  if (cleaned.symptoms) {
    cleaned.symptoms = cleaned.symptoms.map(s => {
      const { _isNew, ...rest } = s
      return rest
    })
  }
  return cleaned
}

// Helper to strip UI flags (_isNew, _reviewed) for comparison purposes
// Used to determine if actual content was modified
function stripUIFlags(output) {
  if (!output) return output
  const stripped = JSON.parse(JSON.stringify(output))
  if (stripped.medications) {
    stripped.medications = stripped.medications.map(m => {
      const { _isNew, _reviewed, ...rest } = m
      return rest
    })
  }
  if (stripped.symptoms) {
    stripped.symptoms = stripped.symptoms.map(s => {
      const { _isNew, _reviewed, ...rest } = s
      return rest
    })
  }
  return stripped
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
  const [isEditing, setIsEditing] = useState(false)

  const originalOutputRef = useRef(null)
  const currentPost = posts[index]

  // Compute if there are unsaved changes
  const hasUnsavedChanges = hasChanges(currentOutput, originalOutputRef.current, savedModification)

  // Load annotator's existing progress on mount
  useEffect(() => {
    if (!annotator?.id) return

    async function loadProgress() {
      setLoading(true)

      // Load all annotations for this annotator
      const { data: annotations } = await supabase
        .from('annotations')
        .select('extraction_id, was_modified')
        .eq('annotator_id', annotator.id)

      const reviewedSet = new Set(annotations?.map(a => a.extraction_id) || [])
      setReviewedIds(reviewedSet)

      const modifiedSet = new Set(
        annotations?.filter(a => a.was_modified).map(a => a.extraction_id) || []
      )
      setModifiedIds(modifiedSet)

      // Find first unreviewed record and navigate to it
      const firstUnreviewedIndex = posts.findIndex(
        post => !reviewedSet.has(post.extraction_id)
      )

      // If there's an unreviewed record, navigate to it; otherwise stay at index 0
      if (firstUnreviewedIndex !== -1) {
        setIndex(firstUnreviewedIndex)
      }

      setLoading(false)
    }

    loadProgress()
  }, [annotator?.id])

  // Load current record's data (either from annotation or original)
  useEffect(() => {
    if (!annotator?.id || !currentPost) return

    async function loadCurrentRecord() {
      const extractionId = currentPost.extraction_id

      // Store original for comparison
      originalOutputRef.current = JSON.parse(JSON.stringify(currentPost.llm_output))

      // Check if there's an existing annotation for this record
      const { data: annotation, error } = await supabase
        .from('annotations')
        .select('final_output')
        .eq('annotator_id', annotator.id)
        .eq('extraction_id', extractionId)
        .maybeSingle()

      if (annotation && !error) {
        setCurrentOutput(annotation.final_output)
        setSavedModification(annotation.final_output)
      } else {
        // Use original data
        setCurrentOutput(JSON.parse(JSON.stringify(currentPost.llm_output)))
        setSavedModification(null)
      }

      // Reset editing state when loading a new record
      setIsEditing(false)
    }

    loadCurrentRecord()
  }, [annotator?.id, index, currentPost])

  // Save annotation to database
  const saveAnnotation = useCallback(async (newOutput) => {
    if (!annotator?.id || !currentPost) return

    const extractionId = currentPost.extraction_id

    // Clean output (remove _isNew flags) for saving
    const cleanedOutput = cleanOutput(newOutput)
    const originalOutput = originalOutputRef.current
    // Compare with UI flags stripped to determine if actual content changed
    const wasModified = !isEqual(stripUIFlags(cleanedOutput), stripUIFlags(originalOutput))

    setSaving(true)

    // Upsert annotation with both original and final output
    const { error } = await supabase
      .from('annotations')
      .upsert({
        annotator_id: annotator.id,
        extraction_id: extractionId,
        original_llm_output: originalOutput,
        final_output: cleanedOutput,
        was_modified: wasModified,
        reviewed_at: new Date().toISOString()
      }, {
        onConflict: 'annotator_id,extraction_id'
      })

    if (!error) {
      setReviewedIds(prev => new Set([...prev, extractionId]))
      if (wasModified) {
        setModifiedIds(prev => new Set([...prev, extractionId]))
      } else {
        setModifiedIds(prev => {
          const next = new Set(prev)
          next.delete(extractionId)
          return next
        })
      }
    }

    setSaving(false)
    return !error
  }, [annotator?.id, currentPost])

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

  // Mark current record as reviewed (and save annotation)
  const markReviewed = useCallback(async () => {
    if (!annotator?.id || !currentPost) return

    const extractionId = currentPost.extraction_id
    const isAlreadyReviewed = reviewedIds.has(extractionId)

    // Only check if all items are reviewed when marking as reviewed for the first time
    // For updates to already-reviewed records, skip this check
    if (!isAlreadyReviewed && !allItemsReviewed()) {
      alert('Please review all medications and symptoms before marking this record as reviewed.')
      return false
    }

    // Save annotation (handles both new and updates)
    const success = await saveAnnotation(currentOutput)

    if (success) {
      // Update savedModification state to reflect what was just saved
      setSavedModification(cleanOutput(currentOutput))
      // Exit editing mode after saving
      setIsEditing(false)
      return true
    }
    return false
  }, [annotator?.id, currentPost, reviewedIds, saveAnnotation, currentOutput, allItemsReviewed])

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

  // Enable editing for a reviewed record
  const enableEditing = useCallback(() => {
    setIsEditing(true)
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
    cancelNavigation,
    isEditing,
    enableEditing
  }
}
