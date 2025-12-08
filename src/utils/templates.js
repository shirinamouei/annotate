// Bare-bone templates for new medications and symptoms

export const NEW_MEDICATION_TEMPLATE = {
  name: "",
  route: [null],
  dosage: [null],
  source_text: ""
}

export const NEW_SYMPTOM_TEMPLATE = {
  name: "",
  notes: null,
  status: null,
  associated_medication: null,
  onset_timing: {
    is_mentioned: false,
    reference_event_identified: false,
    onset_after_dose_reduction: null,
    reference_event: null,
    reference_event_other: null,
    time_since_reference_event: {
      value: null,
      unit: null
    },
    description: null
  },
  severity: null,
  duration: null,
  frequency: null,
  source_text: "",
  extraction_confidence: null
}

// Dropdown options for categorical fields
export const OPTIONS = {
  speaker_context: ['self', 'advising', 'unclear'],
  status: [null, 'active', 'historical', 'negated'],
  severity: [null, 'mild', 'moderate', 'severe'],
  frequency: [null, 'constant', 'daily', 'nightly', 'intermittent', 'weekly', 'monthly', 'rarely', 'once'],
  reference_event: [null, 'dose_reduction', 'stressor', 'food', 'other'],
  time_unit: [null, 'days', 'weeks', 'months', 'years'],
  boolean_nullable: [null, true, false]
}

// Labels for null options in dropdowns
export const NULL_LABEL = '-unknown or unclear-'
export const TRUE_LABEL = 'yes'
export const FALSE_LABEL = 'no'
