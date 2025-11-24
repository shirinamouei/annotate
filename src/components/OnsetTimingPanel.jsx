import { useState } from 'react'
import { SelectField, TextField, NumberField } from './FormFields'
import { OPTIONS } from '../utils/templates'

function OnsetTimingPanel({ onsetTiming, onChange }) {
  const [expanded, setExpanded] = useState(true)

  const updateField = (field, value) => {
    onChange({
      ...onsetTiming,
      [field]: value
    })
  }

  const updateTimeField = (field, value) => {
    onChange({
      ...onsetTiming,
      time_since_reference_event: {
        ...onsetTiming.time_since_reference_event,
        [field]: value
      }
    })
  }

  return (
    <div style={styles.container}>
      <button
        onClick={() => setExpanded(!expanded)}
        style={styles.toggleButton}
      >
        {expanded ? '▼' : '▶'} Onset Timing
      </button>

      {expanded && (
        <div style={styles.content}>
          <SelectField
            label="Is Mentioned"
            value={onsetTiming.is_mentioned}
            options={OPTIONS.boolean_nullable}
            onChange={(val) => updateField('is_mentioned', val)}
          />

          <SelectField
            label="Reference Event Identified"
            value={onsetTiming.reference_event_identified}
            options={OPTIONS.boolean_nullable}
            onChange={(val) => updateField('reference_event_identified', val)}
          />

          <SelectField
            label="Onset After Dose Reduction"
            value={onsetTiming.onset_after_dose_reduction}
            options={OPTIONS.boolean_nullable}
            onChange={(val) => updateField('onset_after_dose_reduction', val)}
          />

          <SelectField
            label="Reference Event"
            value={onsetTiming.reference_event}
            options={OPTIONS.reference_event}
            onChange={(val) => updateField('reference_event', val)}
          />

          <TextField
            label="Reference Event (Other)"
            value={onsetTiming.reference_event_other}
            onChange={(val) => updateField('reference_event_other', val)}
            placeholder="If 'other' selected above"
          />

          <div style={styles.timeRow}>
            <div style={styles.timeField}>
              <NumberField
                label="Time Value"
                value={onsetTiming.time_since_reference_event?.value}
                onChange={(val) => updateTimeField('value', val)}
                min={0}
              />
            </div>
            <div style={styles.timeField}>
              <SelectField
                label="Time Unit"
                value={onsetTiming.time_since_reference_event?.unit}
                options={OPTIONS.time_unit}
                onChange={(val) => updateTimeField('unit', val)}
              />
            </div>
          </div>

          <TextField
            label="Description"
            value={onsetTiming.description}
            onChange={(val) => updateField('description', val)}
            placeholder="Additional timing details"
            multiline
          />
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '0.75rem'
  },
  toggleButton: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    background: '#e8e8e8',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'left',
    color: '#555'
  },
  content: {
    padding: '0.75rem',
    background: '#fafafa',
    border: '1px solid #e0e0e0',
    borderTop: 'none',
    borderRadius: '0 0 4px 4px'
  },
  timeRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem'
  },
  timeField: {
    flex: 1
  }
}

export default OnsetTimingPanel
