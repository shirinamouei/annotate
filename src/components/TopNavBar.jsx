function TopNavBar({
  index,
  totalPosts,
  reviewedIds,
  modifiedIds,
  onPrevious,
  onNext,
  onGoToIndex,
  currentExtractionId
}) {
  const reviewedCount = reviewedIds.size
  const progressPercent = Math.round((reviewedCount / totalPosts) * 100)

  return (
    <div style={styles.topBar}>
      <div style={styles.topBarContent}>
        {/* Left: Progress bar */}
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

        {/* Right: Navigation controls */}
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
      </div>
    </div>
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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    alignItems: 'center'
  },
  navSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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
    paddingRight: '1rem'
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
  }
}

export default TopNavBar
