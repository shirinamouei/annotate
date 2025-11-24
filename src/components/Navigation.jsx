function Navigation({
  index,
  totalPosts,
  reviewedIds,
  modifiedIds,
  saving,
  onPrevious,
  onNext,
  onGoToIndex,
  onMarkReviewed,
  currentExtractionId
}) {
  const reviewedCount = reviewedIds.size
  const progressPercent = Math.round((reviewedCount / totalPosts) * 100)
  const isCurrentReviewed = reviewedIds.has(currentExtractionId)

  return (
    <>
      {/* Top navigation bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarContent}>
          {/* Left: Navigation controls */}
          <div style={styles.navSection}>
            <button
              onClick={onPrevious}
              disabled={index === 0}
              style={{
                ...styles.navButton,
                ...(index === 0 ? styles.navButtonDisabled : {})
              }}
            >
              Previous
            </button>

            <div style={styles.indexDisplay}>
              <span>Record </span>
              <input
                type="number"
                value={index + 1}
                onChange={(e) => {
                  const newIndex = parseInt(e.target.value) - 1
                  if (!isNaN(newIndex)) onGoToIndex(newIndex)
                }}
                min={1}
                max={totalPosts}
                style={styles.indexInput}
              />
              <span> of {totalPosts}</span>

              {modifiedIds.has(currentExtractionId) && (
                <span style={styles.modifiedIndicator} title="Modified">Modified</span>
              )}
            </div>

            <button
              onClick={onNext}
              disabled={index === totalPosts - 1}
              style={{
                ...styles.navButton,
                ...(index === totalPosts - 1 ? styles.navButtonDisabled : {})
              }}
            >
              Next
            </button>
          </div>

          {/* Right: Progress bar */}
          <div style={styles.progressSection}>
            <div style={styles.progressLabel}>
              Progress: {reviewedCount} / {totalPosts} reviewed ({progressPercent}%)
              {modifiedIds.size > 0 && (
                <span style={styles.modifiedBadge}>
                  {modifiedIds.size} modified
                </span>
              )}
            </div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${progressPercent}%`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom review bar */}
      <div style={styles.bottomBar}>
        <div style={isCurrentReviewed ? styles.reviewBoxChecked : styles.reviewBox}>
          <label style={styles.reviewLabel}>
            <input
              type="checkbox"
              checked={isCurrentReviewed}
              onChange={() => {
                if (!isCurrentReviewed) {
                  onMarkReviewed()
                }
              }}
              disabled={isCurrentReviewed}
              style={styles.reviewCheckbox}
            />
            <span style={styles.reviewText}>
              {isCurrentReviewed ? 'Reviewed' : 'Mark as Reviewed'}
            </span>
            {!isCurrentReviewed && (
              <span style={styles.reviewHint}>— Check this box when you have finished reviewing this record</span>
            )}
            {saving && (
              <span style={styles.savingIndicator}>Saving...</span>
            )}
          </label>
        </div>
      </div>
    </>
  )
}

const styles = {
  topBar: {
    padding: '0.5rem 1rem',
    background: '#f8f8f8',
    borderBottom: '1px solid #ddd',
    flexShrink: 0
  },
  topBarContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem'
  },
  navSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  navButton: {
    padding: '0.375rem 1rem',
    fontSize: '0.8rem',
    background: '#2E5A4C',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  navButtonDisabled: {
    background: '#a5a5a5',
    cursor: 'not-allowed'
  },
  indexDisplay: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem'
  },
  indexInput: {
    width: '50px',
    padding: '0.25rem 0.5rem',
    fontSize: '0.8rem',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  modifiedIndicator: {
    fontSize: '0.7rem',
    background: '#fef3c7',
    color: '#92400e',
    padding: '0.125rem 0.5rem',
    borderRadius: '999px'
  },
  progressSection: {
    flex: 1,
    maxWidth: '400px'
  },
  progressLabel: {
    fontSize: '0.75rem',
    color: '#555',
    marginBottom: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  progressBar: {
    height: '6px',
    background: '#e0e0e0',
    borderRadius: '3px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: '#2E5A4C',
    transition: 'width 0.3s ease'
  },
  modifiedBadge: {
    fontSize: '0.7rem',
    background: '#fef3c7',
    color: '#92400e',
    padding: '0.125rem 0.5rem',
    borderRadius: '999px'
  },
  bottomBar: {
    padding: '0.75rem 1rem',
    background: '#f8f8f8',
    borderTop: '1px solid #ddd',
    flexShrink: 0
  },
  reviewBox: {
    padding: '0.75rem 1rem',
    background: '#fffbeb',
    border: '3px solid #f59e0b',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(245, 158, 11, 0.25)'
  },
  reviewBoxChecked: {
    padding: '0.75rem 1rem',
    background: '#dcfce7',
    border: '3px solid #22c55e',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(34, 197, 94, 0.25)'
  },
  reviewLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer'
  },
  reviewCheckbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#22c55e'
  },
  reviewText: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#333'
  },
  reviewHint: {
    fontSize: '0.8rem',
    color: '#666',
    fontStyle: 'italic'
  },
  savingIndicator: {
    fontSize: '0.75rem',
    color: '#666',
    marginLeft: 'auto'
  }
}

export default Navigation
