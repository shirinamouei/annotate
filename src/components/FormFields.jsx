import { OPTIONS, NULL_LABEL, TRUE_LABEL, FALSE_LABEL } from '../utils/templates'

// Reusable dropdown for categorical fields
export function SelectField({ label, value, options, onChange, disabled = false }) {
  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <select
        value={value === null ? '__null__' : value === true ? '__true__' : value === false ? '__false__' : value}
        onChange={(e) => {
          const val = e.target.value
          if (val === '__null__') onChange(null)
          else if (val === '__true__') onChange(true)
          else if (val === '__false__') onChange(false)
          else onChange(val)
        }}
        style={styles.select}
        disabled={disabled}
      >
        {options.map((opt, i) => (
          <option
            key={i}
            value={opt === null ? '__null__' : opt === true ? '__true__' : opt === false ? '__false__' : opt}
          >
            {opt === null ? NULL_LABEL : opt === true ? TRUE_LABEL : opt === false ? FALSE_LABEL : opt}
          </option>
        ))}
      </select>
    </div>
  )
}

// Text input field
export function TextField({ label, value, onChange, placeholder = '', multiline = false, disabled = false }) {
  const Component = multiline ? 'textarea' : 'input'

  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <Component
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value || null)}
        placeholder={placeholder}
        style={multiline ? styles.textarea : styles.input}
        disabled={disabled}
      />
    </div>
  )
}

// Number input field
export function NumberField({ label, value, onChange, min, max, step = 1, disabled = false }) {
  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <input
        type="number"
        value={value ?? ''}
        onChange={(e) => {
          const val = e.target.value
          onChange(val === '' ? null : parseFloat(val))
        }}
        min={min}
        max={max}
        step={step}
        style={styles.input}
        disabled={disabled}
      />
    </div>
  )
}

// Display-only field (for extraction_confidence)
export function DisplayField({ label, value }) {
  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <div style={styles.displayValue}>
        {value !== null && value !== undefined ? value : '(not set)'}
      </div>
    </div>
  )
}

const styles = {
  field: {
    marginBottom: '1rem'
  },
  label: {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#555',
    marginBottom: '0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '0.875rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: 'white'
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '0.875rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '0.875rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    minHeight: '80px',
    resize: 'vertical'
  },
  displayValue: {
    padding: '0.5rem',
    fontSize: '0.875rem',
    background: '#f5f5f5',
    borderRadius: '4px',
    color: '#666'
  }
}
