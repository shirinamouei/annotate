import { useState, useRef, useEffect } from 'react'
import { SelectField } from './FormFields'
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
    const oldSymptom = newSymptoms[index]
    newSymptoms[index] = newSymptom

    // If the symptom name changed, update all_symptom_names
    if (oldSymptom.name !== newSymptom.name) {
      const allNames = [...(output.summary?.all_symptom_names || [])]

      // Remove old name if it exists
      if (oldSymptom.name) {
        const oldIndex = allNames.indexOf(oldSymptom.name)
        if (oldIndex !== -1) {
          allNames.splice(oldIndex, 1)
        }
      }

      // Add new name if it's not empty and not already in the list
      if (newSymptom.name && !allNames.includes(newSymptom.name)) {
        allNames.push(newSymptom.name)
      }

      onChange({
        ...output,
        symptoms: newSymptoms,
        summary: {
          ...output.summary,
          all_symptom_names: allNames
        }
      })
    } else {
      onChange({
        ...output,
        symptoms: newSymptoms
      })
    }
  }

  const deleteSymptom = (index) => {
    if (window.confirm(`Delete symptom "${output.symptoms[index]?.name || 'unnamed'}"?`)) {
      const deletedSymptom = output.symptoms[index]
      const newSymptoms = output.symptoms.filter((_, i) => i !== index)

      // Remove the symptom name from all_symptom_names if it exists
      let allNames = [...(output.summary?.all_symptom_names || [])]
      if (deletedSymptom.name) {
        const nameIndex = allNames.indexOf(deletedSymptom.name)
        if (nameIndex !== -1) {
          allNames.splice(nameIndex, 1)
        }
      }

      onChange({
        ...output,
        symptoms: newSymptoms,
        summary: {
          ...output.summary,
          all_symptom_names: allNames
        }
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

  const updateKeyPhrase = (index, value) => {
    const phrases = [...(output.summary?.key_phrases || [])]
    phrases[index] = value
    updateSummary('key_phrases', phrases)
  }

  const addKeyPhrase = () => {
    const phrases = [...(output.summary?.key_phrases || []), '']
    updateSummary('key_phrases', phrases)
  }

  const deleteKeyPhrase = (index) => {
    const phrases = (output.summary?.key_phrases || []).filter((_, i) => i !== index)
    updateSummary('key_phrases', phrases)
  }

  const updateSymptomName = (index, value) => {
    const names = [...(output.summary?.all_symptom_names || [])]
    names[index] = value
    updateSummary('all_symptom_names', names)
  }

  const addSymptomName = () => {
    const names = [...(output.summary?.all_symptom_names || []), '']
    updateSummary('all_symptom_names', names)
  }

  const deleteSymptomName = (index) => {
    const names = (output.summary?.all_symptom_names || []).filter((_, i) => i !== index)
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

            <div style={styles.keyPhrasesSection}>
              <div style={styles.keyPhrasesHeader}>
                <label style={styles.keyPhrasesLabel}>Key Phrases</label>
                <button onClick={addKeyPhrase} style={styles.addKeyPhraseButton}>
                  + Add
                </button>
              </div>
              {(output.summary?.key_phrases || []).length === 0 && (
                <p style={styles.emptyKeyPhrases}>No key phrases. Click "+ Add" to add one.</p>
              )}
              {(output.summary?.key_phrases || []).map((phrase, i) => (
                <div key={i} style={styles.keyPhraseRow}>
                  <input
                    type="text"
                    value={phrase}
                    onChange={(e) => updateKeyPhrase(i, e.target.value)}
                    placeholder="Enter key phrase"
                    style={styles.keyPhraseInput}
                  />
                  <button
                    onClick={() => deleteKeyPhrase(i)}
                    style={styles.deleteKeyPhraseButton}
                    title="Delete phrase"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div style={styles.symptomNamesSection}>
              <div style={styles.symptomNamesHeader}>
                <label style={styles.symptomNamesLabel}>All Symptom Names</label>
                <button onClick={addSymptomName} style={styles.addSymptomNameButton}>
                  + Add
                </button>
              </div>
              {(output.summary?.all_symptom_names || []).length === 0 && (
                <p style={styles.emptySymptomNames}>No symptom names. Click "+ Add" to add one.</p>
              )}
              {(output.summary?.all_symptom_names || []).map((name, i) => {
                // Find the symptom with this name to get its source_text
                const matchingSymptom = output.symptoms?.find(s => s.name === name)
                const sourceText = matchingSymptom?.source_text

                return (
                  <div key={i} style={styles.symptomNameRow}>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => updateSymptomName(i, e.target.value)}
                      onMouseEnter={() => {
                        if (sourceText && sourceText.trim() && onHoverSourceText) {
                          onHoverSourceText(sourceText.trim(), '#ffeef3')
                        }
                      }}
                      onMouseLeave={() => onHoverSourceText && onHoverSourceText(null, null)}
                      placeholder="Enter symptom name"
                      style={styles.symptomNameInput}
                    />
                    <button
                      onClick={() => deleteSymptomName(i)}
                      style={styles.deleteSymptomNameButton}
                      title="Delete symptom name"
                    >
                      ×
                    </button>
                  </div>
                )
              })}
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
  },
  keyPhrasesSection: {
    marginBottom: '1rem'
  },
  keyPhrasesHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  keyPhrasesLabel: {
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#444'
  },
  addKeyPhraseButton: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.7rem',
    background: '#f0f9ff',
    color: '#0369a1',
    border: '1px solid #bae6fd',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  emptyKeyPhrases: {
    color: '#999',
    fontSize: '0.8rem',
    fontStyle: 'italic',
    margin: '0.5rem 0'
  },
  keyPhraseRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.375rem'
  },
  keyPhraseInput: {
    flex: 1,
    padding: '0.375rem 0.5rem',
    fontSize: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  deleteKeyPhraseButton: {
    padding: '0.25rem 0.5rem',
    fontSize: '1rem',
    background: '#fef2f2',
    color: '#dc2626',
    border: '1px solid #fecaca',
    borderRadius: '4px',
    cursor: 'pointer',
    lineHeight: 1
  },
  symptomNamesSection: {
    marginBottom: '1rem',
    borderRadius: '4px',
    padding: '0.25rem',
    transition: 'background 0.15s ease'
  },
  symptomNamesHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  symptomNamesLabel: {
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#444'
  },
  addSymptomNameButton: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.7rem',
    background: '#fdf2f8',
    color: '#be185d',
    border: '1px solid #fbcfe8',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  emptySymptomNames: {
    color: '#999',
    fontSize: '0.8rem',
    fontStyle: 'italic',
    margin: '0.5rem 0'
  },
  symptomNameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.375rem'
  },
  symptomNameInput: {
    flex: 1,
    padding: '0.375rem 0.5rem',
    fontSize: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  deleteSymptomNameButton: {
    padding: '0.25rem 0.5rem',
    fontSize: '1rem',
    background: '#fef2f2',
    color: '#dc2626',
    border: '1px solid #fecaca',
    borderRadius: '4px',
    cursor: 'pointer',
    lineHeight: 1
  }
}

export default AnnotationForm
