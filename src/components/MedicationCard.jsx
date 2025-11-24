import { useState, forwardRef } from 'react'
import { TextField } from './FormFields'

const MedicationCard = forwardRef(function MedicationCard({ medication, index, onChange, onDelete, onHoverSourceText, isNew }, ref) {
  const [expanded, setExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const updateField = (field, value) => {
    onChange({
      ...medication,
      [field]: value
    })
  }

  // Handle array fields (route, dosage) - convert to/from single value for simplicity
  const updateArrayField = (field, value) => {
    onChange({
      ...medication,
      [field]: value ? [value] : [null]
    })
  }

  const getArrayValue = (arr) => {
    if (!arr || arr.length === 0 || arr[0] === null) return ''
    return arr[0]
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (onHoverSourceText && medication.name) {
      onHoverSourceText(medication.name, '#c8e6c8') // light green for medications
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (onHoverSourceText) {
      onHoverSourceText(null, null)
    }
  }

  const cardStyle = {
    ...styles.card,
    ...(isNew ? styles.cardNew : {}),
    ...(isHovered && medication.name ? styles.cardHovered : {})
  }

  const headerStyle = {
    ...styles.header,
    ...(isNew ? styles.headerNew : {}),
    ...(isHovered && medication.name ? styles.headerHovered : {})
  }

  return (
    <div
      ref={ref}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={headerStyle}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={styles.toggleButton}
        >
          {expanded ? '▼' : '▶'}
        </button>
        <span style={styles.index}>
          Medication {index + 1}{medication.name ? `: ${medication.name}` : ''}
          {isNew && <span style={styles.newBadge}>NEW</span>}
        </span>
        <button
          onClick={onDelete}
          style={styles.deleteButton}
          title="Delete medication"
        >
          Delete
        </button>
      </div>

      {expanded && (
        <div style={styles.content}>
          <TextField
            label="Name"
            value={medication.name}
            onChange={(val) => updateField('name', val || '')}
            placeholder="Medication name"
          />

          <TextField
            label="Route"
            value={getArrayValue(medication.route)}
            onChange={(val) => updateArrayField('route', val)}
            placeholder="e.g., oral, injection"
          />

          <TextField
            label="Dosage"
            value={getArrayValue(medication.dosage)}
            onChange={(val) => updateArrayField('dosage', val)}
            placeholder="e.g., 10mg"
          />
        </div>
      )}
    </div>
  )
})

const styles = {
  card: {
    background: '#f9f9f9',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    padding: '0.75rem 1rem',
    marginBottom: '1.25rem',
    transition: 'all 0.15s ease',
    cursor: 'default'
  },
  cardHovered: {
    background: '#e8f5e8',
    border: '2px solid #5a8a5a',
    boxShadow: '0 2px 8px rgba(90, 138, 90, 0.3)'
  },
  cardNew: {
    border: '2px dashed #f59e0b',
    background: '#fffbeb'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'sticky',
    top: '2.75rem',
    zIndex: 5,
    background: '#e8f0e8',
    margin: '-0.75rem -1rem 0 -1rem',
    padding: '0.75rem 1rem',
    borderRadius: '6px 6px 0 0'
  },
  headerHovered: {
    background: '#d8e8d8'
  },
  headerNew: {
    background: '#fef3c7'
  },
  newBadge: {
    marginLeft: '0.5rem',
    padding: '0.125rem 0.5rem',
    fontSize: '0.625rem',
    fontWeight: '700',
    background: '#f59e0b',
    color: 'white',
    borderRadius: '999px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.75rem',
    padding: '0.25rem',
    color: '#666'
  },
  index: {
    flex: 1,
    fontWeight: '600',
    fontSize: '0.875rem',
    color: '#333'
  },
  deleteButton: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    background: '#fee2e2',
    color: '#dc2626',
    border: '1px solid #fca5a5',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  content: {
    marginTop: '0.75rem',
    paddingTop: '0.75rem',
    borderTop: '1px solid #e0e0e0'
  }
}

export default MedicationCard
