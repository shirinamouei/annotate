import { useState, forwardRef } from 'react'
import { SelectField, TextField, DisplayField } from './FormFields'
import { OPTIONS } from '../utils/templates'
import OnsetTimingPanel from './OnsetTimingPanel'

const SymptomCard = forwardRef(function SymptomCard({ symptom, index, onChange, onDelete, onHoverSourceText, isNew }, ref) {
  const [expanded, setExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const updateField = (field, value) => {
    onChange({
      ...symptom,
      [field]: value
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (onHoverSourceText && symptom.source_text) {
      onHoverSourceText(symptom.source_text, '#f8d7e0') // light pink for symptoms
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
    ...(isHovered && symptom.source_text ? styles.cardHovered : {})
  }

  const headerStyle = {
    ...styles.header,
    ...(isNew ? styles.headerNew : {}),
    ...(isHovered && symptom.source_text ? styles.headerHovered : {})
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
          Symptom {index + 1}{symptom.name ? `: ${symptom.name}` : ''}
          {isNew && <span style={styles.newBadge}>NEW</span>}
        </span>
        <label style={styles.reviewLabel}>
          <input
            type="checkbox"
            checked={symptom._reviewed || false}
            onChange={(e) => updateField('_reviewed', e.target.checked)}
            style={styles.reviewCheckbox}
          />
          <span style={styles.reviewText}>Reviewed</span>
        </label>
        <button
          onClick={onDelete}
          style={styles.deleteButton}
          title="Delete symptom"
        >
          Delete
        </button>
      </div>

      {expanded && (
        <div style={styles.content}>
          <TextField
            label="Name"
            value={symptom.name}
            onChange={(val) => updateField('name', val || '')}
            placeholder="Symptom name (singular, no severity)"
          />

          <SelectField
            label="Status"
            value={symptom.status}
            options={OPTIONS.status}
            onChange={(val) => updateField('status', val)}
          />

          <SelectField
            label="Severity"
            value={symptom.severity}
            options={OPTIONS.severity}
            onChange={(val) => updateField('severity', val)}
          />

          <TextField
            label="Duration"
            value={symptom.duration}
            onChange={(val) => updateField('duration', val)}
            placeholder="e.g., 2 weeks"
          />

          <SelectField
            label="Frequency"
            value={symptom.frequency}
            options={OPTIONS.frequency}
            onChange={(val) => updateField('frequency', val)}
          />

          <TextField
            label="Associated Medication"
            value={symptom.associated_medication}
            onChange={(val) => updateField('associated_medication', val)}
            placeholder="Related medication name"
          />

          <OnsetTimingPanel
            onsetTiming={symptom.onset_timing}
            onChange={(val) => updateField('onset_timing', val)}
          />

          <TextField
            label="Source Text"
            value={symptom.source_text}
            onChange={(val) => updateField('source_text', val || '')}
            placeholder="Quote from forum post"
            multiline
          />

          <TextField
            label="Notes"
            value={symptom.notes}
            onChange={(val) => updateField('notes', val)}
            placeholder="Additional notes"
            multiline
          />

          <DisplayField
            label="Extraction Confidence"
            value={symptom.extraction_confidence}
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
    background: '#ffeef3',
    border: '2px solid #d88aa0',
    boxShadow: '0 2px 8px rgba(216, 138, 160, 0.3)'
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
    background: '#f5e8ed',
    margin: '-0.75rem -1rem 0 -1rem',
    padding: '0.75rem 1rem',
    borderRadius: '6px 6px 0 0'
  },
  headerHovered: {
    background: '#f0d8e2'
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
  reviewLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    cursor: 'pointer',
    fontSize: '0.75rem',
    color: '#555',
    marginLeft: 'auto',
    marginRight: '1rem'
  },
  reviewCheckbox: {
    width: '14px',
    height: '14px',
    cursor: 'pointer',
    accentColor: '#22c55e'
  },
  reviewText: {
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  content: {
    marginTop: '0.75rem',
    paddingTop: '0.75rem',
    borderTop: '1px solid #e0e0e0'
  }
}

export default SymptomCard
