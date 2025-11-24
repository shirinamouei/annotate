import { useState, useRef, useEffect } from 'react'
import { SelectField, TextField } from './FormFields'
import { OPTIONS, NEW_MEDICATION_TEMPLATE, NEW_SYMPTOM_TEMPLATE } from '../utils/templates'
import MedicationCard from './MedicationCard'
import SymptomCard from './SymptomCard'

function AnnotationForm({ output, onChange, onHoverSourceText }) {
  const [medicationsExpanded, setMedicationsExpanded] = useState(true)
  const [symptomsExpanded, setSymptomsExpanded] = useState(true)
  const [summaryExpanded, setSummaryExpanded] = useState(true)
  const [newSymptomIndex, setNewSymptomIndex] = useState(null)
  const [newMedicationIndex, setNewMedicationIndex] = useState(null)
  const symptomRefs = useRef({})
  const medicationRefs = useRef({})

  if (!output) return <div>Loading...</div>

  const updateField = (field, value) => {
    onChange({
      ...output,
      [field]: value
    })
  }

  // Medication handlers
  const addMedication = () => {
    const newIndex = output.medications?.length || 0
    setMedicationsExpanded(true)
    onChange({
      ...output,
      medications: [...(output.medications || []), { ...NEW_MEDICATION_TEMPLATE, _isNew: true }]
    })
    setNewMedicationIndex(newIndex)
  }

  // Scroll to new medication when added
  useEffect(() => {
    if (newMedicationIndex !== null && medicationRefs.current[newMedicationIndex]) {
      medicationRefs.current[newMedicationIndex].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [newMedicationIndex])

  const updateMedication = (index, newMed) => {
    const newMeds = [...output.medications]
    newMeds[index] = newMed
    onChange({
      ...output,
      medications: newMeds
    })
  }

  const deleteMedication = (index) => {
    if (window.confirm(`Delete medication "${output.medications[index]?.name || 'unnamed'}"?`)) {
      onChange({
        ...output,
        medications: output.medications.filter((_, i) => i !== index)
      })
    }
  }

  // Symptom handlers
  const addSymptom = () => {
    const newIndex = output.symptoms?.length || 0
    setSymptomsExpanded(true)
    const newSymptom = JSON.parse(JSON.stringify(NEW_SYMPTOM_TEMPLATE))
    newSymptom._isNew = true
    onChange({
      ...output,
      symptoms: [...(output.symptoms || []), newSymptom]
    })
    setNewSymptomIndex(newIndex)
  }

  // Scroll to new symptom when added
  useEffect(() => {
    if (newSymptomIndex !== null && symptomRefs.current[newSymptomIndex]) {
      symptomRefs.current[newSymptomIndex].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [newSymptomIndex])

  const updateSymptom = (index, newSymptom) => {
    const newSymptoms = [...output.symptoms]
    newSymptoms[index] = newSymptom
    onChange({
      ...output,
      symptoms: newSymptoms
    })
  }

  const deleteSymptom = (index) => {
    if (window.confirm(`Delete symptom "${output.symptoms[index]?.name || 'unnamed'}"?`)) {
      onChange({
        ...output,
        symptoms: output.symptoms.filter((_, i) => i !== index)
      })
    }
  }

  // Summary handlers
  const updateSummary = (field, value) => {
    onChange({
      ...output,
      summary: {
        ...output.summary,
        [field]: value
      }
    })
  }

  const updateKeyPhrases = (value) => {
    // Split by comma and trim
    const phrases = value ? value.split(',').map(p => p.trim()).filter(p => p) : []
    updateSummary('key_phrases', phrases)
  }

  const updateAllSymptomNames = (value) => {
    const names = value ? value.split(',').map(n => n.trim()).filter(n => n) : []
    updateSummary('all_symptom_names', names)
  }

  return (
    <div style={styles.container}>
      {/* Speaker Context */}
      <div style={styles.speakerSection}>
        <SelectField
          label="Speaker Context"
          value={output.speaker_context}
          options={OPTIONS.speaker_context}
          onChange={(val) => updateField('speaker_context', val)}
        />
      </div>

      {/* Medications Section */}
      <div style={styles.medicationsSection}>
        <div style={{...styles.sectionHeader, ...styles.sectionHeaderMedications}}>
          <div style={styles.sectionTitleRow}>
            <button
              onClick={() => setMedicationsExpanded(!medicationsExpanded)}
              style={styles.sectionToggle}
            >
              {medicationsExpanded ? '▼' : '▶'}
            </button>
            <h3 style={styles.sectionTitle}>
              Medications {output.medications?.length > 0 && `(${output.medications.length})`}
            </h3>
          </div>
          <button onClick={addMedication} style={styles.addButton}>
            + Add Medication
          </button>
        </div>

        {medicationsExpanded && (
          <>
            {output.medications?.length === 0 && (
              <p style={styles.emptyMessage}>No medications. Click "Add Medication" to add one.</p>
            )}

            {output.medications?.map((med, i) => (
              <MedicationCard
                key={i}
                ref={el => medicationRefs.current[i] = el}
                medication={med}
                index={i}
                isNew={med._isNew}
                onChange={(newMed) => updateMedication(i, newMed)}
                onDelete={() => deleteMedication(i)}
                onHoverSourceText={onHoverSourceText}
              />
            ))}
          </>
        )}
      </div>

      {/* Symptoms Section */}
      <div style={styles.symptomsSection}>
        <div style={{...styles.sectionHeader, ...styles.sectionHeaderSymptoms}}>
          <div style={styles.sectionTitleRow}>
            <button
              onClick={() => setSymptomsExpanded(!symptomsExpanded)}
              style={styles.sectionToggle}
            >
              {symptomsExpanded ? '▼' : '▶'}
            </button>
            <h3 style={styles.sectionTitle}>
              Symptoms {output.symptoms?.length > 0 && `(${output.symptoms.length})`}
            </h3>
          </div>
          <button onClick={addSymptom} style={styles.addButton}>
            + Add Symptom
          </button>
        </div>

        {symptomsExpanded && (
          <>
            {output.symptoms?.length === 0 && (
              <p style={styles.emptyMessage}>No symptoms. Click "Add Symptom" to add one.</p>
            )}

            {output.symptoms?.map((symptom, i) => (
              <SymptomCard
                key={i}
                ref={el => symptomRefs.current[i] = el}
                symptom={symptom}
                index={i}
                isNew={symptom._isNew}
                onChange={(newSymptom) => updateSymptom(i, newSymptom)}
                onDelete={() => deleteSymptom(i)}
                onHoverSourceText={onHoverSourceText}
              />
            ))}
          </>
        )}
      </div>

      {/* Summary Section */}
      <div style={styles.summarySection}>
        <div style={{...styles.sectionHeader, ...styles.sectionHeaderSummary}}>
          <div style={styles.sectionTitleRow}>
            <button
              onClick={() => setSummaryExpanded(!summaryExpanded)}
              style={styles.sectionToggle}
            >
              {summaryExpanded ? '▼' : '▶'}
            </button>
            <h3 style={styles.sectionTitle}>Summary</h3>
          </div>
        </div>

        {summaryExpanded && (
          <>
            <SelectField
              label="Multiple Medications Mentioned"
              value={output.summary?.multiple_medications_mentioned}
              options={OPTIONS.boolean_nullable}
              onChange={(val) => updateSummary('multiple_medications_mentioned', val)}
            />

            <SelectField
              label="Multiple Symptoms Mentioned"
              value={output.summary?.multiple_symptoms_mentioned}
              options={OPTIONS.boolean_nullable}
              onChange={(val) => updateSummary('multiple_symptoms_mentioned', val)}
            />

            <TextField
              label="Key Phrases (comma-separated)"
              value={output.summary?.key_phrases?.join(', ') || ''}
              onChange={updateKeyPhrases}
              placeholder="phrase 1, phrase 2, phrase 3"
            />

            <div
              onMouseEnter={() => {
                const names = output.summary?.all_symptom_names || []
                if (names.length > 0 && onHoverSourceText) {
                  onHoverSourceText(null, '#f8d7e0', names) // pink, pass array of terms
                }
              }}
              onMouseLeave={() => onHoverSourceText && onHoverSourceText(null, null, null)}
              style={styles.hoverableField}
            >
              <TextField
                label="All Symptom Names (comma-separated)"
                value={output.summary?.all_symptom_names?.join(', ') || ''}
                onChange={updateAllSymptomNames}
                placeholder="symptom 1, symptom 2"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100%',
    overflowY: 'auto'
  },
  speakerSection: {
    marginBottom: '1rem',
    padding: '1rem',
    background: '#fafafa',
    borderRadius: '8px',
    border: '1px solid #eee'
  },
  medicationsSection: {
    marginBottom: '1rem',
    padding: '1rem',
    background: '#fafcfa',
    borderRadius: '8px',
    borderLeft: '3px solid #a8c8a8'
  },
  symptomsSection: {
    marginBottom: '1rem',
    padding: '1rem',
    background: '#fffbfc',
    borderRadius: '8px',
    borderLeft: '3px solid #f0c8d8'
  },
  summarySection: {
    marginBottom: '1rem',
    padding: '1rem',
    background: '#fafcff',
    borderRadius: '8px',
    borderLeft: '3px solid #a0c8f0'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    margin: '-1rem -1rem 0.75rem -1rem',
    padding: '0.75rem 1rem',
    borderRadius: '8px 8px 0 0'
  },
  sectionHeaderMedications: {
    background: '#fafcfa'
  },
  sectionHeaderSymptoms: {
    background: '#fffbfc'
  },
  sectionHeaderSummary: {
    background: '#fafcff'
  },
  sectionTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  sectionToggle: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.75rem',
    padding: '0.25rem',
    color: '#666'
  },
  sectionTitle: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333'
  },
  addButton: {
    padding: '0.375rem 0.75rem',
    fontSize: '0.75rem',
    background: 'white',
    color: '#0369a1',
    border: '1px solid #7dd3fc',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500'
  },
  emptyMessage: {
    color: '#666',
    fontSize: '0.875rem',
    fontStyle: 'italic'
  },
  hoverableField: {
    borderRadius: '4px',
    transition: 'background 0.15s ease',
    margin: '-0.25rem',
    padding: '0.25rem',
    cursor: 'default'
  }
}

export default AnnotationForm
