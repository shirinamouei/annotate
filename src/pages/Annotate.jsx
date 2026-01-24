import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAnnotation } from '../hooks/useAnnotation'
import AnnotationForm from '../components/AnnotationForm'
import BottomReviewBar from '../components/BottomReviewBar'
import HighlightedPost from '../components/HighlightedPost'
import ConfirmModal from '../components/ConfirmModal'

// Wrapper component that handles auth loading
function Annotate() {
  const navigate = useNavigate()

  // Read sessionStorage synchronously (no useState needed)
  const stored = sessionStorage.getItem('annotator')
  const annotator = stored ? JSON.parse(stored) : null

  // Handle redirect in useEffect (side effect)
  useEffect(() => {
    if (!annotator) {
      navigate('/')
    }
  }, [annotator, navigate])

  // Don't render content until annotator is available
  if (!annotator) {
    return null
  }

  return <AnnotateContent annotator={annotator} />
}

// Content component that uses the annotation hook
function AnnotateContent({ annotator }) {
  const navigate = useNavigate()
  const [highlightText, setHighlightText] = useState(null)
  const [highlightColor, setHighlightColor] = useState(null)
  const [highlightTerms, setHighlightTerms] = useState(null)

  const handleHoverSourceText = (text, color, terms = null) => {
    setHighlightText(text)
    setHighlightColor(color)
    setHighlightTerms(terms)
  }

  const {
    currentPost,
    currentOutput,
    updateOutput,
    index,
    totalPosts,
    goToNext,
    goToPrevious,
    goToIndex,
    reviewedIds,
    modifiedIds,
    saving,
    loading,
    markReviewed,
    hasUnsavedChanges,
    showDiscardModal,
    confirmDiscard,
    cancelNavigation,
    isEditing,
    enableEditing
  } = useAnnotation(annotator)

  const handleLogout = () => {
    sessionStorage.removeItem('annotator')
    navigate('/')
  }

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <p>Loading your progress...</p>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Annotation Tool</h1>
        <div style={styles.headerRight}>
          <span style={styles.annotatorName}>Annotator: {annotator.name}</span>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.mainContent}>
        {/* Left panel - Forum post */}
        <div style={styles.leftPanel}>
          <h3 style={styles.panelTitle}>Forum Post</h3>
          <div style={styles.postMeta}>
            <span>ID: {currentPost?.extraction_id}</span>
            <span>Post ID: {currentPost?.post_id}</span>
          </div>
          <div style={styles.postContent}>
            <HighlightedPost
              text={currentPost?.forum_post}
              highlightText={highlightText}
              highlightColor={highlightColor}
              highlightTerms={highlightTerms}
            />
          </div>
        </div>

        {/* Right panel - Annotation form */}
        <div style={{
          ...styles.rightPanel,
          border: reviewedIds.has(String(currentPost?.extraction_id)) && !isEditing
            ? '2px solid #2E5A4C'
            : styles.rightPanel.border,
          transition: 'border 0.2s ease'
        }}>
          <h3 style={styles.panelTitle}>
            <span>Annotation</span>
            <div style={styles.titleRight}>
              <span style={styles.medicationChip}>
                {(() => {
                  const total = currentOutput?.medications?.length || 0
                  const reviewed = currentOutput?.medications?.filter(m => m._reviewed).length || 0
                  return `${reviewed}/${total} Medication${total !== 1 ? 's' : ''} Reviewed`
                })()}
              </span>
              <span style={styles.symptomChip}>
                {(() => {
                  const total = currentOutput?.symptoms?.length || 0
                  const reviewed = currentOutput?.symptoms?.filter(s => s._reviewed).length || 0
                  return `${reviewed}/${total} Symptom${total !== 1 ? 's' : ''} Reviewed`
                })()}
              </span>
              {saving && <span style={styles.savingBadge}>Saving...</span>}
              {!saving && hasUnsavedChanges && <span style={styles.unsavedBadge}>Unsaved changes</span>}
            </div>
          </h3>

          <div style={{
            ...styles.formContainer,
            position: 'relative'
          }}>
            <AnnotationForm
              output={currentOutput}
              onChange={updateOutput}
              onHoverSourceText={handleHoverSourceText}
            />
            {/* Green overlay when reviewed and not editing */}
            {reviewedIds.has(String(currentPost?.extraction_id)) && !isEditing && (
              <div style={styles.reviewedOverlay} />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Review Bar */}
      <BottomReviewBar
        reviewedIds={reviewedIds}
        modifiedIds={modifiedIds}
        saving={saving}
        onMarkReviewed={markReviewed}
        onEnableEditing={enableEditing}
        isEditing={isEditing}
        currentExtractionId={String(currentPost?.extraction_id)}
        index={index}
        totalPosts={totalPosts}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToIndex={goToIndex}
      />

      {/* Discard changes confirmation modal */}
      <ConfirmModal
        isOpen={showDiscardModal}
        title="Unsaved Changes"
        message="You have unsaved changes. If you navigate away, your changes will be lost."
        confirmLabel="Discard changes"
        cancelLabel="Cancel"
        onConfirm={confirmDiscard}
        onCancel={cancelNavigation}
      />
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#f5f5f5',
    overflow: 'hidden'
  },
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    background: 'white',
    borderBottom: '1px solid #ddd'
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: '600'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  annotatorName: {
    fontSize: '0.875rem',
    color: '#555'
  },
  logoutButton: {
    padding: '0.375rem 0.75rem',
    fontSize: '0.75rem',
    background: '#f3f4f6',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  mainContent: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    padding: '1rem',
    overflow: 'hidden'
  },
  leftPanel: {
    background: 'white',
    borderRadius: '8px',
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  rightPanel: {
    background: '#fdfdfd',
    borderRadius: '8px',
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  panelTitle: {
    margin: 0,
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem'
  },
  titleLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  titleRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  medicationChip: {
    fontSize: '0.7rem',
    fontWeight: '500',
    background: '#e8f5e8',
    color: '#2d5a3d',
    padding: '0.25rem 0.5rem',
    borderRadius: '999px',
    border: '1px solid #a8d5a8'
  },
  symptomChip: {
    fontSize: '0.7rem',
    fontWeight: '500',
    background: '#ffeef3',
    color: '#8a3952',
    padding: '0.25rem 0.5rem',
    borderRadius: '999px',
    border: '1px solid #f5c2d5'
  },
  postMeta: {
    padding: '0.5rem 1rem',
    fontSize: '0.75rem',
    color: '#666',
    background: '#fafafa',
    borderBottom: '1px solid #eee',
    display: 'flex',
    gap: '1rem'
  },
  postContent: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    fontSize: '0.9rem',
    lineHeight: '1.6'
  },
  formContainer: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto'
  },
  savingBadge: {
    fontSize: '0.75rem',
    color: '#666',
    fontWeight: 'normal'
  },
  unsavedBadge: {
    fontSize: '0.75rem',
    color: '#f59e0b',
    fontWeight: '500',
    background: '#fef3c7',
    padding: '0.125rem 0.5rem',
    borderRadius: '4px',
    border: '1px solid #fcd34d'
  },
  reviewedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(46, 90, 76, 0.1)',
    pointerEvents: 'none',
    zIndex: 10,
    transition: 'opacity 0.2s ease'
  }
}

export default Annotate
