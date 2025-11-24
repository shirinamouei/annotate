function BottomReviewBar({
  reviewedIds,
  modifiedIds,
  saving,
  onMarkReviewed,
  currentExtractionId,
  index,
  totalPosts,
  onPrevious,
  onNext,
  onGoToIndex
}) {
  const isCurrentReviewed = reviewedIds.has(currentExtractionId)

  return (
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
  )
}

const styles = {
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

export default BottomReviewBar
