function ConfirmModal({ isOpen, title, message, confirmLabel, cancelLabel, onConfirm, onCancel }) {
  if (!isOpen) return null

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.message}>{message}</p>
        <div style={styles.buttons}>
          <button onClick={onCancel} style={styles.cancelButton}>
            {cancelLabel || 'Cancel'}
          </button>
          <button onClick={onConfirm} style={styles.confirmButton}>
            {confirmLabel || 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modal: {
    background: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
  },
  title: {
    margin: '0 0 0.75rem 0',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#333'
  },
  message: {
    margin: '0 0 1.5rem 0',
    fontSize: '0.9rem',
    color: '#555',
    lineHeight: '1.5'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem'
  },
  cancelButton: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    background: '#f3f4f6',
    color: '#374151',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500'
  },
  confirmButton: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    background: '#dc2626',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500'
  }
}

export default ConfirmModal
