export const posts = [
  {
    "extraction_id": 8,
    "post_id": 272496,
    "date_created": "2021-09-30 06:09:08",
    "topic_id": 2559,
    "user_id": 10654,
    "forum_post": "I\u2019ve been on neaulactil 2.5 for 5 years for anxiety. I tried to switch to another antidepressant but after only taking 1/2 of one of the anti depressants\u00a0\u00a0while still taking half neaulactil I was violently ill. After having a wafer on my tongue in hospital I went home and didn\u2019t take anything at all. No nausea so I\u00a0was happy enough but\u00a0\u00a0After 6 weeks of chronic insomnia I went back on neaulactil 2.5 mg. Now 10 days Ago I tapered my drug by half And now I have awful nausea all day although the half a tablet gets me to sleep. I don\u2019t no what to do as the last 6 days of nausea had been dreadful, I only am trying to go off them as I read awful things about them but while on them I have no side effects that I no of.",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Neulactil",
          "route": [
            null
          ],
          "dosage": [
            "2.5 mg",
            "half tablet (about 1.25 mg)"
          ],
          "source_text": "neaulactil 2.5"
        },
        {
          "name": "antidepressant (unspecified)",
          "route": [
            null
          ],
          "dosage": [
            "1/2 tablet"
          ],
          "source_text": "1/2 of one of the anti depressants"
        }
      ],
      "symptoms": [
        {
          "name": "nausea",
          "notes": null,
          "status": "active",
          "associated_medication": "Neulactil",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 10,
              "unit": "days"
            },
            "description": "After halving dose 10 days ago; last 6 days particularly dreadful"
          },
          "severity": "severe",
          "duration": "6 days so far",
          "frequency": "constant",
          "source_text": "Now 10 days Ago I tapered my drug by half And now I have awful nausea all day ... the last 6 days of nausea had been dreadful",
          "extraction_confidence": 0.92
        },
        {
          "name": "insomnia",
          "notes": null,
          "status": "historical",
          "associated_medication": "Neulactil",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "stopped all medications",
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "Developed after stopping all medication"
          },
          "severity": null,
          "duration": "6 weeks",
          "frequency": "nightly",
          "source_text": "After 6 weeks of chronic insomnia I went back on neaulactil 2.5 mg.",
          "extraction_confidence": 0.86
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "tapered my drug by half",
          "awful nausea all day",
          "last 6 days of nausea had been dreadful",
          "6 weeks of chronic insomnia",
          "went back on neaulactil 2.5 mg"
        ],
        "all_symptom_names": [
          "nausea",
          "insomnia"
        ]
      }
    }
  },
  {
    "extraction_id": 74,
    "post_id": 495038,
    "date_created": "2013-01-30 00:24:53",
    "topic_id": 11597,
    "user_id": 20282,
    "forum_post": "Hello SA. Community   , \u00a0 I have never really been into chat posts/blogs etc. so am new to this whole concept, however the last week has not been good for me going from 1/2 a tab to no tab, I went to my local MIND drop in, and decided I couldn't face visiting such a depressing environment to get support!  This evening I had a particularly horrible bout of anger that my husband was on the receiving end of, so I searched on-line for reduction symptoms, of anger- to help remind me and Boo (Husband) that it isn't ME that's a crazy banshee- its my neuro-chemicals that are making me ACT like a crazy banshee...I was able to assert some restraint over my behaviour, eventually, and I just need to know other people are managing these symptoms to eventually be free of the antideps. \u00a0 I am pretty annoyed with my GP as she has prescribed me Sertroline to start taking once I'm off the Venlafaxine (which she wants me off of because a)it doesn't appear to be working and  I am on meds for high BP, and Venlafaxine is known for raising BP. No guidance or warning about reduction symptoms, no guidance on when to start the Sertroline- which I won't be doing! Seeing her next MOnday for a review (which I insisted on 1 month on from last appt) Herein lies another story involving PCOS (polycystic ovarian syndrome), insulin resistance, betablockers and evidence based medicine- rather than person centred medicine! I shall explore the site further tomorrow, but have already found it a source of support and reassurance. Glad I found it!",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Venlafaxine",
          "route": [
            null
          ],
          "dosage": [
            "1/2 a tab"
          ],
          "source_text": "last week has not been good for me going from 1/2 a tab to no tab ... once I'm off the Venlafaxine"
        }
      ],
      "symptoms": [
        {
          "name": "anger",
          "notes": "Evening rage/bout after stopping venlafaxine; described as acting like a 'crazy banshee.'",
          "status": "active",
          "associated_medication": "Venlafaxine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "weeks"
            },
            "description": "This evening after going from 1/2 a tab to no tab over the last week."
          },
          "severity": "severe",
          "duration": null,
          "frequency": "once",
          "source_text": "This evening I had a particularly horrible bout of anger",
          "extraction_confidence": 0.86
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "going from 1/2 a tab to no tab",
          "off the Venlafaxine",
          "particularly horrible bout of anger",
          "Sertroline prescribed but not starting"
        ],
        "all_symptom_names": [
          "anger"
        ]
      }
    }
  },
  {
    "extraction_id": 148,
    "post_id": 200594,
    "date_created": "2022-10-03 11:21:38",
    "topic_id": 2068,
    "user_id": 7592,
    "forum_post": "Hi, \u00a0 Im Claire from Irland . My Dr. put me on depacote/ Epilim 3 weeks ago. Its not the right med , side effects wise. He said I can simply stop ( 500mg) I just wanted to double check with you guys because a couple of days ago I took 300 and two days later I had anxiety all day. Thanks in advance.\u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Depakote/Epilim (valproate)",
          "route": [
            null
          ],
          "dosage": [
            "500 mg",
            "300 mg"
          ],
          "source_text": "My Dr. put me on depacote/ Epilim 3 weeks ago... He said I can simply stop ( 500mg )... a couple of days ago I took 300"
        }
      ],
      "symptoms": [
        {
          "name": "anxiety",
          "notes": "Occurred after reducing Depakote/Epilim dose",
          "status": "historical",
          "associated_medication": "Depakote/Epilim (valproate)",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 2,
              "unit": "days"
            },
            "description": "Two days after reducing dose to 300 mg"
          },
          "severity": null,
          "duration": "all day",
          "frequency": "once",
          "source_text": "two days later I had anxiety all day",
          "extraction_confidence": 0.9
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "put me on depacote/Epilim 3 weeks ago",
          "He said I can simply stop (500mg)",
          "a couple of days ago I took 300",
          "two days later I had anxiety all day"
        ],
        "all_symptom_names": [
          "anxiety"
        ]
      }
    }
  },
  {
    "extraction_id": 196,
    "post_id": 358546,
    "date_created": "2016-03-05 19:35:47",
    "topic_id": 8514,
    "user_id": 14667,
    "forum_post": "Hi everyone...I'm on Welbutrin & my doc wants to switch me to Paxil.He told me Thursday to \"just stop taking the Welbutrin\" (while starting the Paxil). I thought that was a bad idea, but maybe the Paxil would compensate, and he's supposed to know what he's doing, right?Gah!I was right. It's not a good idea to stop suddenly. After a pretty miserable day Friday, I came home from work, took a dose of Welbutrin, and started searching for some solid advice (preferably backed by good sources such as PubMed, or reputable colleges), which is how I stumbled across this site.So I'm working on tapering off, will probably stop the Paxil, and am seriously thinking about dumping that doctor.It's not an uncommon thing to have problems coming off antidepressants, and there are published studies from 10+ years ago talking about it, so how could he not know? And if he did, why did he give me the direction he did, why give me harmful advice?Problem is, I can't switch doctors until mid-summer, because that's when their semester ends. (I go to a free clinic through the local medical college, their psych training program.)Also, while I generally do OK over the summer, I definitely have SAD, so dread facing fall & winter without medicine. \u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Wellbutrin",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "I'm on Welbutrin & my doc wants to switch me to Paxil."
        },
        {
          "name": "Paxil",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "while starting the Paxil"
        }
      ],
      "symptoms": [
        {
          "name": "feeling miserable",
          "notes": "Occurred the day after abruptly stopping Wellbutrin; they resumed a dose that evening and plan to taper.",
          "status": "historical",
          "associated_medication": "Wellbutrin",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 1,
              "unit": "days"
            },
            "description": "The day after stopping Wellbutrin suddenly"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "once",
          "source_text": "After a pretty miserable day Friday",
          "extraction_confidence": 0.64
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "just stop taking the Welbutrin",
          "After a pretty miserable day Friday",
          "started searching for some solid advice",
          "working on tapering off",
          "will probably stop the Paxil"
        ],
        "all_symptom_names": [
          "feeling miserable"
        ]
      }
    }
  },
  {
    "extraction_id": 147,
    "post_id": 415052,
    "date_created": "2020-12-12 04:45:49",
    "topic_id": 4513,
    "user_id": 17163,
    "forum_post": "Hi, \u00a0 It's been over 3 months since my last pill of Prozac @20mg which I was prescribed for a series of panic attacks I had. I only took it for four days and I went through what seemed to bee all the horrible acute WD symptoms such as akathisia (very low) insomnia, anxiety, headaches, brainzaps, apathy and dry mouth \u00a0 But that's not the issues which I have currently face!\u00a0 It seems as though I cycle between good and bad moods including incredible levels of insomnia and energy then extreme levels of fatigue and tiredness. I work in a factory so I am under extreme physical stress and I feel like my body is tired all the time no matter if I have 7-8-9 hour of sleep.\u00a0 \u00a0 Is this normal i only took 4 pills then CT'd \u00a0 what are some simple strategies you found has worked? is it too early to be taking 5htp becaues my kinesiologist reccomended it to me. \u00a0 also taking stress (100777) homeopathic remedy drops \u00a0 mouth is also very dry too which is causing halitosis and nervous twitching. \u00a0 \u00a0 help \u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Prozac",
          "route": [
            null
          ],
          "dosage": [
            "20mg"
          ],
          "source_text": "last pill of Prozac @20mg"
        },
        {
          "name": "stress (100777) homeopathic remedy drops",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "also taking stress (100777) homeopathic remedy drops"
        }
      ],
      "symptoms": [
        {
          "name": "mood swing",
          "notes": "cycles between good and bad moods",
          "status": "active",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "I cycle between good and bad moods",
          "extraction_confidence": 0.79
        },
        {
          "name": "insomnia",
          "notes": null,
          "status": "active",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "incredible levels of insomnia",
          "extraction_confidence": 0.86
        },
        {
          "name": "increased energy",
          "notes": null,
          "status": "active",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "incredible levels of ... energy",
          "extraction_confidence": 0.74
        },
        {
          "name": "fatigue",
          "notes": "feels tired all the time despite 7\u20139 hours sleep; physically demanding factory work",
          "status": "active",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "extreme levels of fatigue and tiredness... I feel like my body is tired all the time no matter if I have 7-8-9 hour of sleep",
          "extraction_confidence": 0.85
        },
        {
          "name": "dry mouth",
          "notes": "causing halitosis",
          "status": "active",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "mouth is also very dry too which is causing halitosis",
          "extraction_confidence": 0.82
        },
        {
          "name": "halitosis",
          "notes": "linked to dry mouth",
          "status": "active",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "halitosis",
          "extraction_confidence": 0.7
        },
        {
          "name": "twitching",
          "notes": "nervous twitching",
          "status": "active",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "nervous twitching",
          "extraction_confidence": 0.69
        },
        {
          "name": "headache",
          "notes": null,
          "status": "historical",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "headaches",
          "extraction_confidence": 0.77
        },
        {
          "name": "brain zap",
          "notes": null,
          "status": "historical",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "brainzaps",
          "extraction_confidence": 0.86
        },
        {
          "name": "apathy",
          "notes": null,
          "status": "historical",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "apathy",
          "extraction_confidence": 0.74
        },
        {
          "name": "anxiety",
          "notes": null,
          "status": "historical",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "anxiety",
          "extraction_confidence": 0.72
        },
        {
          "name": "akathisia",
          "notes": "described as very low intensity during acute WD",
          "status": "historical",
          "associated_medication": "Prozac",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "over 3 months since last pill after CT"
          },
          "severity": "mild",
          "duration": null,
          "frequency": null,
          "source_text": "akathisia (very low)",
          "extraction_confidence": 0.78
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "over 3 months since my last pill of Prozac @20mg",
          "only took it for four days then CT'd",
          "acute WD symptoms: akathisia, insomnia, anxiety, headaches, brainzaps, apathy, dry mouth",
          "cycle between good and bad moods",
          "incredible levels of insomnia and energy",
          "extreme levels of fatigue and tiredness",
          "mouth is very dry causing halitosis and nervous twitching"
        ],
        "all_symptom_names": [
          "mood swing",
          "insomnia",
          "increased energy",
          "fatigue",
          "dry mouth",
          "halitosis",
          "twitching",
          "headache",
          "brain zap",
          "apathy",
          "anxiety",
          "akathisia"
        ]
      }
    }
  },
  {
    "extraction_id": 129,
    "post_id": 260232,
    "date_created": "2022-07-20 22:52:20",
    "topic_id": 2455,
    "user_id": 10066,
    "forum_post": "I tapered from 10mg to 5mg in 4 weeks. Was doing ok. 4 weeks later I got hit with 2 weeks of bad anxiety. I got better. 8 weeks after that I got hit again and it hasn\u2019t let up. After 2 weeks of suffering I went up to 7.5mg. That was 8 days again and I\u2019m still suffering badly. My appointment with the psychiatrist is next week. I wish I could talk to her sooner. Not sure if I should stay at 7.5mg or go to 10mg.\u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": null,
          "route": [
            null
          ],
          "dosage": [
            "10 mg",
            "5 mg",
            "7.5 mg"
          ],
          "source_text": "I tapered from 10mg to 5mg in 4 weeks... After 2 weeks of suffering I went up to 7.5mg."
        }
      ],
      "symptoms": [
        {
          "name": "anxiety",
          "notes": "Described as bad/severe; occurred in waves after taper, initially 4 weeks post-reduction for 2 weeks, then recurred 8 weeks later and has not let up despite updose 8 days ago.",
          "status": "active",
          "associated_medication": null,
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 4,
              "unit": "weeks"
            },
            "description": "First onset 4 weeks after reducing to 5 mg; recurred 8 weeks later; ongoing despite 7.5 mg for 8 days."
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "4 weeks later I got hit with 2 weeks of bad anxiety... 8 weeks after that I got hit again and it hasn\u2019t let up... I\u2019m still suffering badly.",
          "extraction_confidence": 0.76
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "tapered from 10mg to 5mg",
          "bad anxiety",
          "hit again and hasn\u2019t let up",
          "went up to 7.5mg",
          "still suffering badly"
        ],
        "all_symptom_names": [
          "anxiety"
        ]
      }
    }
  },
  {
    "extraction_id": 48,
    "post_id": 362563,
    "date_created": "2016-08-05 22:55:06",
    "topic_id": 8594,
    "user_id": 14836,
    "forum_post": "Hello, I was glad to find this site! \u00a0 I was diagnosed with fibromyalgia about 10 years ago.\u00a0 Since then I have tried many of the antidepressant drugs they usually give for this and none has worked for me. \u00a0 I have tried Lyrica, Cymbalta, Effexor, and am presently taking neuronton and tramadol in very low dosage. \u00a0 I have had some experiences that I think will be very helpful to all of you hard working researchers so please take time to look over my wordyness and see my addition to the equation. I studied a lot myself, because like you, Im fighting for my life. I have been married three times and have learned that every time I got divorced and lived alone for a while I would start having much less pain. Then when I got in another relationship I would get married and pain would esculate to breaking point. All Im saying in this section is that my pain is deffinately stress related. I did choose poorly might I add! \u00a0 The first thing that happened though was that I hurt my back at work but it came on gradually so im nor really sure on that. After that I had several auto accidents and ended up on tramadol for back pain. Thinking back though, i was handling the back pain ok until I took some tramadol for a toothache! After that Started asking the doc for tramadol for my back. Then after that I started having this overall pain. \u00a0 Later Dr's put me on all these antidepressants for the fibromyalgia. These meds always helped the pain but the depression they caused and all other symptoms were way worse than pain! So I did not stay on those long enough to get addicted. However they did put me on neuronton which helps tremendously with pain but it has terrible side effects too. \u00a0 Ok in closing I have one more thing to add that may help someone and I have a question. Once I was in the hospital for intestinal problems. It was a very serious condition. I could not eat or drink for three whole weeks and was only getting fluids through IV. I was never so pain free in my ten years of fibro!!! I had no pain medication as it was too hard on my stomach. Then as soon as I got well enough to eat my first meal, I had to ask for a benydriil so I could sleep because my pain level shot through the roof! Ive tried all the food diets too so it dont help sadly. \u00a0 Ok, question: Im thinking maybe if I stay single, and stop all meds (im tapering off now) Maybe I can beat this thing. I did stay off for a year once though and still had pain but I was in a relationship. How do I tell the difference between fibromyalgia pain/symptoms and withdrawal pain? Sorry so lengthy!",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Lyrica",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "I have tried Lyrica, Cymbalta, Effexor"
        },
        {
          "name": "Cymbalta",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "I have tried Lyrica, Cymbalta, Effexor"
        },
        {
          "name": "Effexor",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "I have tried Lyrica, Cymbalta, Effexor"
        },
        {
          "name": "Neurontin",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "am presently taking neuronton and tramadol in very low dosage"
        },
        {
          "name": "tramadol",
          "route": [
            null
          ],
          "dosage": [
            "very low dosage"
          ],
          "source_text": "am presently taking neuronton and tramadol in very low dosage"
        },
        {
          "name": "Benadryl",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "I had to ask for a benydriil so I could sleep"
        }
      ],
      "symptoms": [],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "tapering off now",
          "have tried Lyrica, Cymbalta, Effexor",
          "presently taking neuronton and tramadol in very low dosage",
          "asked for a benydriil so I could sleep"
        ],
        "all_symptom_names": []
      }
    }
  },
  {
    "extraction_id": 130,
    "post_id": 185351,
    "date_created": "2019-05-09 13:02:12",
    "topic_id": 5653,
    "user_id": 2858,
    "forum_post": "Admin note: link to benzo forum thread -\u00a0AlexRussia: Need advice \u00a0 Hello My name is Alexander. I am Russian , 31,\u00a0 live near Moscow . My English is not good, but Ill try my best. \u00a0 Year and a half ago I traveled\u00a0 a lot and couldn't sleep at new places so my grandma gave me phenazepam (potent Russian benzo, very addictive) She , former doctor said that its absolutely safe drug and I can take it if needed. That time I knew nothing about benzos and I believed her because she was a doctor. \u00a0 I took phenazepam sometimes not every day even not every week for sleep. After half a year I noticed that my sleep become much worse and I become very anxious . Never have problems with sleep at home before phenazepam. At one time I realised that I cant sleep more that 4 hours without phenazepam and I always anxious without it. I realised that something is wrong.\u00a0 \u00a0 SO I took blood test, MRT, another blood test, everything was fine.\u00a0 Don't get me wrong I never abuse that drug , I took it only when needed, sometimes only one pill two pills a month, sometimes when travelling 7-10 pills a month.\u00a0 I noticed that after every short term use of that benzo I felt like **** for weeks, and after every course I felt worse.\u00a0 \u00a0 I went to psychiatrist, told her about my possible benzo addiction, she said that I have gad and I need to take antidepressants. I got prescribed amitriptilline.\u00a0 After few days I got heart palpations on it and could . I went to another psychiatrist she said that amitriptilline is very old drug and prescribed paroxetine. After a few days on paroxetine I stopped sleeping , and my new doctor said that it cannot be, she said that I am lying. \u00a0 So I went to another doctor and instantly feel smell of alchogol from him , I got prescribed trazadone with paroxetine with amytriptillene the same time. WOW. I went to another doctor. She said there is no benzo addiction its a myth. Next time I went to honored psychiatrist of Russia at one of Russian leading psychiatry center. She said that I have to take more phenazepam because there is no physical bezno addiction , only mental so I need to have more sex to deal with my anxiety. WOW Really??? \u00a0 I went to another honored doctor at another leading Russian center at Moscow , center sponsored by administration of out president PUTIN. She said that I have schizophrenia.... I went to another honored doctor at another honored big center at Moscow and he said that I definitely have no shizofprenia . I got prescribed more benzos..... \u00a0\u00a0 I am not joking... I was so confused .\u00a0 I Finally I found doctor with big expirence at one of the best private clinics in Moscow. AT that time I was in very bad condition. could not sleep more then 3-4 hours. Extremely anxious.\u00a0 Burning skin. I got prescribed escitalopram.\u00a0 \u00a0 After a week on 5mg dose my sleep desapeared completely . So my doctor prescribed me guess what? right! phenazepam. Once again I had been told that benzo addiction is vary rare and its not your case.\u00a0 So on her advise I started to take phenazepam on daily basis. After a month on escitalopram and phenazepam I felt great , sleep 7-8 hours. \u00a0 so I asked my doctor if I can stop phenazepam. She agreed , said I need no taper.\u00a0 So I stopped and hell broke loose.\u00a0 After I week without benzo I were lying in bed not sleeping at all grasping for air, heart palpations, high blood pressure and tons of other symptoms.\u00a0 \u00a0 Of course i called my doctor , she said its IMPOSSIBLE,\u00a0 its must be something else , it cant be benzo withdrawal. She asked me to up my escitalopram dose. I did it and felt worse. So my doctor CT me from escitalopram , and I felt much worse . It was so bad so I wanted to die. After 5 days of not sleeping i started seeing thing that do not exist\u00a0 Finally I got hospitalazied to psych ward.\u00a0 They took me neuroleptics but they didn't work, so I got prescribed phenazepam one again.\u00a0 I felt better , in slept few hours, now more halucinations. Next day nurse had left her program opened and I saw my diagnose Shizofrenia . \u00a0 They diagnosed me without even talking to me only because I had halucinations after 5 days without sleep and more days with a little sleep before.\u00a0 So I waited until morning and when first doctor unlocked the door to department\u00a0 I pushed him and escaped.\u00a0 At home I google thing that every doctor asked me not to. I google internet about benzodiazepines, antidepressants, withdrawal symptoms., kindling.. \u00a0 AT this time phenazepam almost stopped working for me so reinstate and slow taper wasn't a option .\u00a0 I had a lot of symptoms but my biggest issue was brutal insomnia. . I could not sleep for week.\u00a0 So I went to another psychiatrist and started mirtazapne , it worked at the beginning then I stopped working\u00a0 again and got andrenaline rushed, diarrhea . Then I tried clomipramine and got seizures after one pill. Then mirtazapine again with little effect. Then fluvoxamine with no effect. Somehow I started sleeping even without antidepressant. And benzo withdrawal symptoms changed to antidepressants withdrawal simptomes (hives, allergy to food and a tons of other things after mirtazapine) then trembling after clomipramine. blurred vision after fluvoxamine. \u00a0 I accumulated every symptome. So I stopped trying antidepressants and started Seroquel and Depakote(possibly kindled gaba receptors on it), it worked for my sleep for two months and then stopped . I didn't change dose I slowly tapered and\u00a0 quit all drugs. \u00a0 I almost didnt sleep for three weeks but then I started sleeping again 2-3 hours a day.\u00a0 After four months I quit every drug I were sleeping 3-6 hours of broke sleep.\u00a0 Some symptoms subdue. I even watched avengers endgame at cinema , yeah I had almost a dozen panic attacks at cinema scaring people around but I did it.\u00a0 \u00a0 I was getting better. But I wanted more sleep so I tried so \"natural antidepressant\" L-tryptophan. I thought if we eat tryptophan with food its safe to take it as supplement. \u00a0 I was wrong.\u00a0 I took 500mg every day for a week., I slept really better on it but suddenly it stopped working and\u00a0 half of my symptoms returned. Worst\u00a0 part I cant sleep at all after I tried l-tryptophan . It have been three days without sleep. I am exhausted. I am so angry on myself. This message is warning to everybody everybody who think about using supplements while in withdrawal. I think I had this type of reaction because I tried antidepressants before. It seems kindling can occur not only with benzo but with antidepressants too. Once again sorry for my bad English.",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "phenazepam",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "my grandma gave me phenazepam (potent Russian benzo, very addictive)"
        },
        {
          "name": "amitriptyline",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "I got prescribed amitriptilline."
        },
        {
          "name": "paroxetine",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "prescribed paroxetine"
        },
        {
          "name": "escitalopram",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "I got prescribed escitalopram."
        },
        {
          "name": "mirtazapine",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "started mirtazapne"
        },
        {
          "name": "clomipramine",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Then I tried clomipramine"
        },
        {
          "name": "fluvoxamine",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Then fluvoxamine with no effect."
        },
        {
          "name": "quetiapine",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "started Seroquel and Depakote"
        },
        {
          "name": "valproate",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Seroquel and Depakote"
        },
        {
          "name": "L-tryptophan",
          "route": [
            null
          ],
          "dosage": [
            "500 mg daily (patient-reported)"
          ],
          "source_text": "I took 500mg every day for a week."
        }
      ],
      "symptoms": [
        {
          "name": "insomnia",
          "notes": "Sleep much worse; could not sleep more than 4 hours without phenazepam (interdose withdrawal).",
          "status": "historical",
          "associated_medication": "phenazepam",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "when not taking phenazepam between intermittent doses"
          },
          "severity": null,
          "duration": null,
          "frequency": "nightly",
          "source_text": "I cant sleep more that 4 hours without phenazepam",
          "extraction_confidence": 0.87
        },
        {
          "name": "anxiety",
          "notes": "Reported as extreme during benzo-related instability; also anxious without phenazepam.",
          "status": "historical",
          "associated_medication": "phenazepam",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "when not taking phenazepam between intermittent doses"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "Extremely anxious. ... I always anxious without it.",
          "extraction_confidence": 0.79
        },
        {
          "name": "insomnia",
          "notes": "Stopped sleeping after a few days on paroxetine.",
          "status": "historical",
          "associated_medication": "paroxetine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after a few days on paroxetine"
          },
          "severity": null,
          "duration": null,
          "frequency": "nightly",
          "source_text": "After a few days on paroxetine I stopped sleeping",
          "extraction_confidence": 0.93
        },
        {
          "name": "insomnia",
          "notes": "Sleep disappeared completely after a week on 5 mg escitalopram.",
          "status": "historical",
          "associated_medication": "escitalopram",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 1,
              "unit": "weeks"
            },
            "description": "after a week on 5 mg escitalopram"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "nightly",
          "source_text": "After a week on 5mg dose my sleep desapeared completely",
          "extraction_confidence": 0.93
        },
        {
          "name": "insomnia",
          "notes": "Not sleeping at all after stopping phenazepam without taper.",
          "status": "historical",
          "associated_medication": "phenazepam",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 1,
              "unit": "weeks"
            },
            "description": "after stopping phenazepam without taper (cold turkey)"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "After I week without benzo I were lying in bed not sleeping at all",
          "extraction_confidence": 0.95
        },
        {
          "name": "shortness of breath",
          "notes": "Described as grasping for air after phenazepam CT.",
          "status": "historical",
          "associated_medication": "phenazepam",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 1,
              "unit": "weeks"
            },
            "description": "after stopping phenazepam without taper (cold turkey)"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "grasping for air",
          "extraction_confidence": 0.86
        },
        {
          "name": "heart palpitation",
          "notes": "Palpitations during acute phenazepam withdrawal.",
          "status": "historical",
          "associated_medication": "phenazepam",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 1,
              "unit": "weeks"
            },
            "description": "after stopping phenazepam without taper (cold turkey)"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "heart palpations",
          "extraction_confidence": 0.88
        },
        {
          "name": "high blood pressure",
          "notes": "Elevated BP during acute phenazepam withdrawal.",
          "status": "historical",
          "associated_medication": "phenazepam",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 1,
              "unit": "weeks"
            },
            "description": "after stopping phenazepam without taper (cold turkey)"
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "high blood pressure",
          "extraction_confidence": 0.83
        },
        {
          "name": "hallucination",
          "notes": "Visual hallucinations after 5 days with no sleep following benzo CT.",
          "status": "historical",
          "associated_medication": "phenazepam",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after ~5 days without sleep following phenazepam CT"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "once",
          "source_text": "After 5 days of not sleeping i started seeing thing that do not exist",
          "extraction_confidence": 0.9
        },
        {
          "name": "heart palpitation",
          "notes": "Occurred a few days after starting amitriptyline.",
          "status": "historical",
          "associated_medication": "amitriptyline",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after a few days on amitriptyline"
          },
          "severity": null,
          "duration": null,
          "frequency": "once",
          "source_text": "After few days I got heart palpations on it",
          "extraction_confidence": 0.92
        },
        {
          "name": "burning skin",
          "notes": "During benzo-related crisis before escitalopram.",
          "status": "historical",
          "associated_medication": "phenazepam",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": null,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "during phenazepam tolerance/withdrawal before escitalopram"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "Extremely anxious.  Burning skin.",
          "extraction_confidence": 0.71
        },
        {
          "name": "insomnia",
          "notes": "Almost no sleep for three weeks after tapering and quitting all drugs (Seroquel/Depakote).",
          "status": "historical",
          "associated_medication": null,
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after tapering off and quitting Seroquel and Depakote"
          },
          "severity": "severe",
          "duration": "about three weeks",
          "frequency": "constant",
          "source_text": "I almost didnt sleep for three weeks",
          "extraction_confidence": 0.86
        },
        {
          "name": "insomnia",
          "notes": "Three days without sleep after taking L-tryptophan for a week (supplement reaction in withdrawal).",
          "status": "active",
          "associated_medication": "L-tryptophan",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "food",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after a week on L-tryptophan, it stopped working; then complete insomnia"
          },
          "severity": "severe",
          "duration": "3 days without sleep (at time of writing)",
          "frequency": "constant",
          "source_text": "Worst part I cant sleep at all after I tried l-tryptophan . It have been three days without sleep.",
          "extraction_confidence": 0.88
        },
        {
          "name": "adrenaline rush",
          "notes": "Occurred when mirtazapine stopped working.",
          "status": "historical",
          "associated_medication": "mirtazapine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after starting mirtazapine when it stopped working"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "then I stopped working  again and got andrenaline rushed",
          "extraction_confidence": 0.76
        },
        {
          "name": "diarrhea",
          "notes": "Occurred with mirtazapine.",
          "status": "historical",
          "associated_medication": "mirtazapine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after starting mirtazapine when it stopped working"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "diarrhea",
          "extraction_confidence": 0.78
        },
        {
          "name": "seizure",
          "notes": "Seizure after one pill of clomipramine.",
          "status": "historical",
          "associated_medication": "clomipramine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 1,
              "unit": "days"
            },
            "description": "after one pill of clomipramine"
          },
          "severity": "severe",
          "duration": null,
          "frequency": "once",
          "source_text": "got seizures after one pill",
          "extraction_confidence": 0.94
        },
        {
          "name": "tremor",
          "notes": "Trembling after clomipramine.",
          "status": "historical",
          "associated_medication": "clomipramine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after clomipramine"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "then trembling after clomipramine.",
          "extraction_confidence": 0.82
        },
        {
          "name": "blurred vision",
          "notes": "After fluvoxamine.",
          "status": "historical",
          "associated_medication": "fluvoxamine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after fluvoxamine"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "blurred vision after fluvoxamine.",
          "extraction_confidence": 0.88
        },
        {
          "name": "hive",
          "notes": "Part of 'antidepressant withdrawal symptoms' noted after mirtazapine.",
          "status": "historical",
          "associated_medication": "mirtazapine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after mirtazapine"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "hives, allergy to food and a tons of other things after mirtazapine",
          "extraction_confidence": 0.69
        },
        {
          "name": "food allergy",
          "notes": "Reported as part of antidepressant withdrawal after mirtazapine.",
          "status": "historical",
          "associated_medication": "mirtazapine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "after mirtazapine"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "hives, allergy to food and a tons of other things after mirtazapine",
          "extraction_confidence": 0.67
        },
        {
          "name": "panic attack",
          "notes": "Almost a dozen panic attacks during a single cinema visit, about 4 months after quitting all drugs.",
          "status": "historical",
          "associated_medication": null,
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 4,
              "unit": "months"
            },
            "description": "months after quitting all drugs"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "yeah I had almost a dozen panic attacks at cinema",
          "extraction_confidence": 0.85
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "cant sleep more that 4 hours without phenazepam",
          "Extremely anxious",
          "stopped sleeping",
          "sleep desapeared completely",
          "not sleeping at all grasping for air, heart palpations, high blood pressure",
          "started seeing thing that do not exist",
          "Burning skin",
          "got seizures after one pill",
          "andrenaline rushed, diarrhea",
          "trembling after clomipramine",
          "blurred vision after fluvoxamine",
          "hives, allergy to food",
          "I almost didnt sleep for three weeks",
          "It have been three days without sleep",
          "almost a dozen panic attacks at cinema"
        ],
        "all_symptom_names": [
          "insomnia",
          "anxiety",
          "shortness of breath",
          "heart palpitation",
          "high blood pressure",
          "hallucination",
          "burning skin",
          "seizure",
          "adrenaline rush",
          "diarrhea",
          "tremor",
          "blurred vision",
          "hive",
          "food allergy",
          "panic attack"
        ]
      }
    }
  },
  {
    "extraction_id": 199,
    "post_id": 291788,
    "date_created": "2021-03-08 22:25:13",
    "topic_id": 2739,
    "user_id": 11269,
    "forum_post": "Hi all, \u00a0 I have been a lurker on this forum for a while and I think it\u2019s finally time I tell my story as I\u2019m started to get very scared.\u00a0\u00a0 I underwent gallbladder surgery in October 2020. I always was an over thinker and an anxious person but it never affected my life. I started to develop a little bit of health anxiety due to the surgery and I also found out from having gallstones that I had an ovarian cyst (it eventually went) so I became stressed about my health. My surgery went really well but I was stressed about blood clots afterwards etc. And I noticed I developed shortness of breath. At first I thought it was from the surgery and it went away about a week later. It then came back again (after I convinced myself that my cyst had returned)\u00a0and I started to panic thinking something was truly wrong. After a trip to the GP and then to hospital to undergo tests I was told it was anxiety. I actually didn\u2019t believe it at the time as I have never experienced any sort of physical symptoms associated with anxiety. I had asked my doctor for a Xanax to test this theory but instead she prescribed me lexapro 10mg for a month. I took the prescription but decided I wouldn\u2019t take it just yet. However over the weekend I became so fixated on my SOB\u00a0that I couldn\u2019t leave the house and started to get really sad panicked about it not going. I decided I would start taking lexapro. Looking back I wish I had never even taken that step but little did I know what would happen.\u00a0\u00a0 the first two days I was a complete zombie and my mam told me to cut the pill in half to 5mg. So for 6 weeks I was on 5mg. I had the first week of horrible flu like symptoms but a week in I got the worst heightened anxiety. My time on lexapro was absolutely horrendous (with the odd few days of feeling great from time to time)\u00a0and I kept sticking it out to the 6 week mark as I kept telling myself and reading things that suggested that i just needed to adjust to it. I ended up getting depressive crying episodes on it and I just said enough is enough. My SOB actually did go but that was after I found out my cyst was completely gone and I had nothing to worry about.\u00a0\u00a0 I went to my gp and see agreed i quit and told me to drop to 2.5mg for 2 weeks. Because I had 2 weeks off work and I knew I would have some sort of withdrawals I quit a little earlier after 10 days. Looking back I should have quit more slowly but I just thought I had only been on them 6 weeks.\u00a0\u00a0 the first 2 days off were fine. I felt no different. Then the feeling of on edge hit and feeling so nervous. This feeling of heightened anxiety I had experienced \u00a0throughout taking lexapro. The first 2 weeks were awful and I felt very depressed. The next week it got better and then I hit a slump again. Some symptoms have come and gone, some have lingered. I now know what\u2019s been happening is the waves and windows. My windows recently had been a lot better from my symptoms becoming manageable to feeling nearly 100% with the odd symptom here or there. Recently because my windows had been so great I thought I was getting out of it. The past\u00a0few days I am having a wave. The thing about this wave is mentally I\u2019m just exhausted. The past few weeks in my waves I was still rational and had hope and even when I was crying in despair it would only be for a few minutes and I\u2019d be back to being rational. This time I\u2019m having negative thoughts about never getting better and scared and really fearful for my future ( job, losing people). I wouldn't say I am suicidal but sometimes I have scary thoughts about not being able to get through the days or overcome this. Now I feel like it\u2019s consuming me and I just need some reassurance. I\u2019m scared that maybe it\u2019s not withdrawal and that maybe its\u00a0just me and I need to get help for it before it gets worse. I feel like I can\u2019t reinstate because I was never myself on this drug and I fear it is the cause behind all of this. I am going to CBT and she has suggested that between the trauma of surgery and adverse affects from getting on lex and coming off of it my whole nervous system is oversensitised which would make sense I guess.\u00a0\u00a0 basically my symptoms right now are tingling arms and shoulders, jolts at night where I am about to fall sleep and get jolted \u00a0awake, negative thoughts, pins and needles in my legs and feet, thumping heart and the worst one is this deep emotional sadness in my chest that becomes so overwhelming that I end up having crying spells. The sadness and the constant crying spells are the worst and with that comes the negative thoughts. Im just so scared that I won\u2019t be able to get though this. I was only on lexapro for 6 weeks for crying out loud and at such a low dose. I literally looking back didn\u2019t even need it. I was never this type of person before lexapro. I was such a happy\u00a0person. I had never experienced depression. EVER. None of the symptoms I have now I ever had before lex. I just feel like it\u2019s never ending. I just want my life back and to stop crying. I haven\u2019t felt fully myself consistently since my surgery back at the beginning of October. I am now coming up to 3 months off.\u00a0\u00a0 any success stories are most welcome.\u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Lexapro",
          "route": [
            null
          ],
          "dosage": [
            "10 mg",
            "5 mg",
            "2.5 mg"
          ],
          "source_text": "she prescribed me lexapro 10mg for a month... the first two days I was a complete zombie and my mam told me to cut the pill in half to 5mg. So for 6 weeks I was on 5mg... told me to drop to 2.5mg for 2 weeks... I quit a little earlier after 10 days."
        }
      ],
      "symptoms": [
        {
          "name": "tingling",
          "notes": "arms and shoulders",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Started a few days after stopping; first two days off were fine, then symptoms began."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "basically my symptoms right now are tingling arms and shoulders",
          "extraction_confidence": 0.82
        },
        {
          "name": "pins and needles",
          "notes": "legs and feet",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Started a few days after stopping; first two days off were fine, then symptoms began."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "pins and needles in my legs and feet",
          "extraction_confidence": 0.83
        },
        {
          "name": "hypnic jerks",
          "notes": "jolts awake right as falling asleep",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Started a few days after stopping; first two days off were fine, then symptoms began."
          },
          "severity": null,
          "duration": null,
          "frequency": "nightly",
          "source_text": "jolts at night where I am about to fall sleep and get jolted awake",
          "extraction_confidence": 0.86
        },
        {
          "name": "negative thoughts",
          "notes": "fears about never getting better, job, losing people",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Started a few days after stopping; first two days off were fine, then symptoms began."
          },
          "severity": "moderate",
          "duration": null,
          "frequency": null,
          "source_text": "This time I\u2019m having negative thoughts about never getting better and scared and really fearful for my future",
          "extraction_confidence": 0.82
        },
        {
          "name": "palpitations",
          "notes": "thumping heart",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Started a few days after stopping; first two days off were fine, then symptoms began."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "thumping heart",
          "extraction_confidence": 0.74
        },
        {
          "name": "sadness",
          "notes": "deep emotional sadness in chest, overwhelming",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Started a few days after stopping; first two days off were fine, then symptoms began."
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "the worst one is this deep emotional sadness in my chest that becomes so overwhelming",
          "extraction_confidence": 0.86
        },
        {
          "name": "crying spells",
          "notes": "accompanying overwhelming sadness",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Started a few days after stopping; first two days off were fine, then symptoms began."
          },
          "severity": "severe",
          "duration": null,
          "frequency": "daily",
          "source_text": "I end up having crying spells... The sadness and the constant crying spells are the worst",
          "extraction_confidence": 0.87
        },
        {
          "name": "anxiety",
          "notes": "feeling on edge and very nervous; waves and windows pattern",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Started a few days after stopping; first two days off were fine, then symptoms began."
          },
          "severity": "moderate",
          "duration": null,
          "frequency": null,
          "source_text": "Then the feeling of on edge hit and feeling so nervous... This feeling of heightened anxiety... The first 2 weeks were awful",
          "extraction_confidence": 0.84
        },
        {
          "name": "sedation",
          "notes": "felt like a complete zombie during first two days on 10 mg",
          "status": "historical",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "starting lexapro",
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "First two days after starting 10 mg."
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "the first two days I was a complete zombie",
          "extraction_confidence": 0.86
        },
        {
          "name": "flu-like symptoms",
          "notes": "occurred during first week on medication",
          "status": "historical",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "starting lexapro",
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "First week after starting."
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "I had the first week of horrible flu like symptoms",
          "extraction_confidence": 0.86
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "waves and windows",
          "jolts at night",
          "negative thoughts",
          "thumping heart",
          "deep emotional sadness",
          "crying spells",
          "tingling",
          "pins and needles",
          "feeling on edge",
          "first two days I was a complete zombie",
          "horrible flu like symptoms",
          "3 months off"
        ],
        "all_symptom_names": [
          "tingling",
          "pins and needles",
          "hypnic jerks",
          "negative thoughts",
          "palpitations",
          "sadness",
          "crying spells",
          "anxiety",
          "sedation",
          "flu-like symptoms"
        ]
      }
    }
  },
  {
    "extraction_id": 192,
    "post_id": 303949,
    "date_created": "2018-02-28 15:50:55",
    "topic_id": 7211,
    "user_id": 11526,
    "forum_post": "has anyone tapered off of gabapentin?",
    "llm_output": {
      "speaker_context": "unclear",
      "medications": [],
      "symptoms": [],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "tapered off",
          "gabapentin"
        ],
        "all_symptom_names": []
      }
    }
  },
  {
    "extraction_id": 86,
    "post_id": 460607,
    "date_created": "2015-11-22 01:44:55",
    "topic_id": 10231,
    "user_id": 18829,
    "forum_post": "I stopped Prestique and Adderall two days ago. I have not experienced withdrawal symptoms yet. I am 70 yrs old with high blood pressure and cholesterol.  Any suggestions.  Ran out of Prestique and new doctor won't prescribe adderall. thank you,  this is my first \"forum\" ever. Leitha",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Prestique",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Prestique"
        },
        {
          "name": "Adderall",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Adderall"
        }
      ],
      "symptoms": [
        {
          "name": "withdrawal symptom",
          "notes": "The author is reporting on their status two days after stopping medication and has not yet experienced any withdrawal symptoms.",
          "status": "negated",
          "associated_medication": null,
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 2,
              "unit": "days"
            },
            "description": "I stopped Prestique and Adderall two days ago."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "I have not experienced withdrawal symptoms yet.",
          "extraction_confidence": 1.0
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "stopped Prestique and Adderall",
          "two days ago",
          "not experienced withdrawal symptoms"
        ],
        "all_symptom_names": [
          "withdrawal symptom"
        ]
      }
    }
  },
  {
    "extraction_id": 159,
    "post_id": 148758,
    "date_created": "2023-03-28 22:53:29",
    "topic_id": 1646,
    "user_id": 5401,
    "forum_post": "Sup, how do i explain? It's not a decision i have taken from myself at least not entirely, i literally don't have money to buy more Lexapro(escitalopram) and gonna complete a week without this thing, i've been on this for 2 years and my dose is basically 20mg, i feel like ****, most of the time at least, i've been trying to get my hands on the med to cut it off slowly but i think it's gonna take a while and i don't really know what to do anymore, should i go back with a dose of 10mg and start going down from there every month or should i just endure this hell? i must say this 5 days have been the best days in months to some degree, even with the horrible symptoms, i feel alive somehow. \u00a0 I AM NOT ENCOURANGING DOING WHAT I AM DOING, basically i am ***** and in a living hell, i am not eating well at all too, i am broke to the zero, i've been surviving this month on beans processed on the blender and i am not kidding, let's just say the situation is not very good. \u00a0 So, resuming everything, i can't afford the med and even food is a problem, but i think i'am gonna be able to get some of my meds, should i just take and slowly go down to 10mg or not?",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "escitalopram",
          "route": [
            null
          ],
          "dosage": [
            "20mg"
          ],
          "source_text": "Lexapro(escitalopram) and gonna complete a week without this thing, i've been on this for 2 years and my dose is basically 20mg"
        }
      ],
      "symptoms": [
        {
          "name": "feeling unwell",
          "notes": "User describes the experience as 'feel like ****', 'horrible symptoms', and 'a living hell'.",
          "status": "active",
          "associated_medication": "escitalopram",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 5,
              "unit": "days"
            },
            "description": "User stopped taking medication about a week ago and reports symptoms starting within that timeframe ('this 5 days have been... with the horrible symptoms')."
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "i feel like ****",
          "extraction_confidence": 1
        },
        {
          "name": "poor appetite",
          "notes": "Author attributes being broke and unable to afford food as a reason for not eating well, which may be a confounding factor with a potential withdrawal symptom of appetite loss.",
          "status": "active",
          "associated_medication": "escitalopram",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "i am not eating well at all too",
          "extraction_confidence": 0.6
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "week without this thing",
          "20mg",
          "feel like ****",
          "horrible symptoms",
          "living hell",
          "not eating well"
        ],
        "all_symptom_names": [
          "feeling unwell",
          "poor appetite"
        ]
      }
    }
  },
  {
    "extraction_id": 18,
    "post_id": 86468,
    "date_created": "2023-10-17 15:17:13",
    "topic_id": 708,
    "user_id": 3057,
    "forum_post": "hello i am\u00a0 looking for any hope and recovery stories. anything to help me. i losing this fight. last year i was admitted to hospital (not my first admission) due to my eating disorder, its something i have dealt with all my life from the age 13.\u00a0 Last year was my 7th admission. its a real battle. I hadnt been on any antipsychotic drug before in my life, so i hadnt a clue on how they effect you. December 2022 was when my nightmare began, i was forced an antipsychotic drug injection for called pailperdrone aka invega sustenna. i had two in december, first one was 100mg the second was 50mg one in january 2023\u00a0 was 50mg and one in febuary 2023 was 50mg. ever since then my life has been ruined I have no thoughts or feelings, no emotions what so ever. ANHEDONIA i cant concentrate, think, eg read, write, watch tv/youtube, listen to music or do\u00a0 my paintings and poetry. i have no motivation to do anything eg wash myself like take a shower, change my clothes and brush my teeth, i cant help around the family home and look after my family.\u00a0 very low memory and struggle to retain information. i just dont have any feelings to care. i have no hunger or thirst and constipated i also cant sleep i havent sleep since November 2022 that was before they gave the injections nothing has changed in 8 months , i fear so much that i am going to be like this forever, i dont know much about this drug, i have read that it stops dopamine, setatonin and it looks like its has stopped melatonin in my body. i am very suicidal everyday because of it. i cant do anything to relief it, i dont think i will heal im so scared and hopeless \u00a0 \u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "paliperidone",
          "route": [
            "injection"
          ],
          "dosage": [
            "100mg",
            "50mg"
          ],
          "source_text": "pailperdrone aka invega sustenna"
        }
      ],
      "symptoms": [
        {
          "name": "emotional blunting",
          "notes": "Described as having no thoughts, feelings, or emotions.",
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": "severe",
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "I have no thoughts or feelings, no emotions what so ever.",
          "extraction_confidence": 1
        },
        {
          "name": "anhedonia",
          "notes": "Author explicitly uses the term 'ANHEDONIA' and cites inability to enjoy reading, writing, watching TV/YouTube, listening to music, painting, or poetry.",
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": "severe",
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "ANHEDONIA i cant concentrate, think, eg read, write, watch tv/youtube, listen to music or do my paintings and poetry.",
          "extraction_confidence": 1
        },
        {
          "name": "inability to concentrate",
          "notes": null,
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": null,
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "i cant concentrate",
          "extraction_confidence": 1
        },
        {
          "name": "avolition",
          "notes": "Manifests as lack of motivation for basic self-care (showering, changing clothes, brushing teeth) and household responsibilities.",
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": null,
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "i have no motivation to do anything eg wash myself like take a shower, change my clothes and brush my teeth, i cant help around the family home and look after my family.",
          "extraction_confidence": 1
        },
        {
          "name": "memory impairment",
          "notes": "Includes difficulty retaining information.",
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": "severe",
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "very low memory and struggle to retain information.",
          "extraction_confidence": 1
        },
        {
          "name": "apathy",
          "notes": null,
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": null,
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "i just dont have any feelings to care.",
          "extraction_confidence": 1
        },
        {
          "name": "loss of appetite",
          "notes": null,
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": null,
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "i have no hunger",
          "extraction_confidence": 1
        },
        {
          "name": "loss of thirst",
          "notes": null,
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": null,
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "or thirst",
          "extraction_confidence": 1
        },
        {
          "name": "constipation",
          "notes": null,
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": null,
          "duration": "8 months",
          "frequency": "constant",
          "source_text": "and constipated",
          "extraction_confidence": 1
        },
        {
          "name": "insomnia",
          "notes": "Author specifies this symptom started *before* the injections.",
          "status": "active",
          "associated_medication": null,
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "before medication injections started",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "since November 2022 that was before they gave the injections"
          },
          "severity": null,
          "duration": "since November 2022",
          "frequency": "constant",
          "source_text": "i also cant sleep i havent sleep since November 2022",
          "extraction_confidence": 1
        },
        {
          "name": "suicidal ideation",
          "notes": "Author states this is 'because of' the medication's effects.",
          "status": "active",
          "associated_medication": "paliperidone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "start of medication injections",
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "December 2022 was when my nightmare began"
          },
          "severity": "severe",
          "duration": "8 months",
          "frequency": "daily",
          "source_text": "i am very suicidal everyday because of it.",
          "extraction_confidence": 1
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "pailperdrone aka invega sustenna",
          "December 2022 was when my nightmare began",
          "ever since then my life has been ruined",
          "I have no thoughts or feelings, no emotions what so ever",
          "ANHEDONIA",
          "i have no motivation to do anything",
          "nothing has changed in 8 months",
          "very low memory",
          "i am very suicidal everyday"
        ],
        "all_symptom_names": [
          "emotional blunting",
          "anhedonia",
          "inability to concentrate",
          "avolition",
          "memory impairment",
          "apathy",
          "loss of appetite",
          "loss of thirst",
          "constipation",
          "insomnia",
          "suicidal ideation"
        ]
      }
    }
  },
  {
    "extraction_id": 87,
    "post_id": 259028,
    "date_created": "2018-10-06 06:17:12",
    "topic_id": 6661,
    "user_id": 9958,
    "forum_post": "Hi. I'm new to this site.\u00a0 I have been diagnosed with metabolic depression, the type that responds to medication, which I've had since I was,16. I am now 57 years old. I was on Cymbalta for the last couple of years but recently switched to Aropax. I was also prescribed a small dose of antipsychotic in 2014 and after trialing Seroquel and then Olanzapine I was given Saphris.\u00a0 This seemed to work best for morning drowsiness however is proving near impossible to come of. I have managed to get it to one twentieth of a 5mg wafer but can't seem to drop that last\"speck\".\u00a0 Just wondering if you can dissolve a wafer in water, and if anyone out there has been able to get off this drug?!",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Cymbalta",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Cymbalta"
        },
        {
          "name": "Aropax",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Aropax"
        },
        {
          "name": "Seroquel",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Seroquel"
        },
        {
          "name": "Olanzapine",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Olanzapine"
        },
        {
          "name": "Saphris",
          "route": [
            null
          ],
          "dosage": [
            "one twentieth of a 5mg wafer"
          ],
          "source_text": "Saphris.  This seemed to work best for morning drowsiness however is proving near impossible to come of. I have managed to get it to one twentieth of a 5mg wafer"
        }
      ],
      "symptoms": [],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "metabolic depression",
          "switched to Aropax",
          "near impossible to come of",
          "can't seem to drop that last \"speck\"",
          "get off this drug"
        ],
        "all_symptom_names": []
      }
    }
  },
  {
    "extraction_id": 28,
    "post_id": 310237,
    "date_created": "2017-12-23 04:13:44",
    "topic_id": 7481,
    "user_id": 12128,
    "forum_post": "Hi all, I am searching for information/experiences relating to propanolol and weaning off of it. I have a diagnosis of chronic/intractable miraine and propanolol is a first line treatment even though it's off labeI. 'm currently a year into a regular Botox regimen and my head has been a lot better. So at my last neurologist appointment I decided to try to wean off of propanolol since it is notorious for weight gain and fatigue and I struggle with both. Of course the doctor's taper was pretty rapid- basically a 50% reduction every week then jumping off at 20 mg BID (I was at 80mg BID for a year.) I was doing great until I got down to 20 mg BID. Suddenly, I was hit with a ton of physical anxiety, insomnia, racing heart and a deep sense of depression all at once. I started sleeping 2-3 hours a night. After a week of this I reluctantly went back up to 40mg BID 4 days ago and now I feel completely normal again. \u00a0I'm fully aware of the problems with rapid tapering ADs and other psych drugs but I didn't realize a beta blocker could be problematic to wean off of. I'd really love to get some more info on propanolol (beyond the basic info on drugs.com) Especially in terms of psychological side effects, sleep, and of course taperin it. Has anyone else had difficulty weaning off- both physically and mentally?\u00a0I read some of the thread about tapering Beta blockers and it says they require a 10% rate like psych drugs.Why is this?\u00a0 \u00a0 PS I had a p-drug history relating to pregnancy and post partum. It was all a big mess and I am not able to tolerate most psychoactive drugs, which I learned the hard way. My zoloft withdrawal story came to a close a few years ago and I've completely moved on and made a full recovery. My goal is to be able to quit the propanolol and later the gabapentin and just rely on Botox. I've had migaines for years, they went chronic in 2016.",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Propranolol",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "propanolol... I was at 80mg BID for a year... jumping off at 20 mg BID... I got down to 20 mg BID... I reluctantly went back up to 40mg BID"
        },
        {
          "name": "Zoloft",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "My zoloft withdrawal story came to a close a few years ago"
        },
        {
          "name": "Gabapentin",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "My goal is to be able to quit the propanolol and later the gabapentin"
        }
      ],
      "symptoms": [
        {
          "name": "physical anxiety",
          "notes": "Symptom occurred after reducing Propranolol from an unknown dose to 20mg BID and resolved after increasing the dose to 40mg BID.",
          "status": "historical",
          "associated_medication": "Propranolol",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "I was doing great until I got down to 20 mg BID. Suddenly, I was hit with a ton of physical anxiety..."
          },
          "severity": "severe",
          "duration": "a week",
          "frequency": "constant",
          "source_text": "a ton of physical anxiety",
          "extraction_confidence": 1.0
        },
        {
          "name": "insomnia",
          "notes": "User specifies sleeping only 2-3 hours a night. Symptom occurred after reducing Propranolol and resolved after increasing the dose.",
          "status": "historical",
          "associated_medication": "Propranolol",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "I was doing great until I got down to 20 mg BID. Suddenly, I was hit with...insomnia...all at once. I started sleeping 2-3 hours a night."
          },
          "severity": "severe",
          "duration": "a week",
          "frequency": "nightly",
          "source_text": "insomnia...I started sleeping 2-3 hours a night.",
          "extraction_confidence": 1.0
        },
        {
          "name": "racing heart",
          "notes": "Symptom occurred after reducing Propranolol and resolved after increasing the dose.",
          "status": "historical",
          "associated_medication": "Propranolol",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "I was doing great until I got down to 20 mg BID. Suddenly, I was hit with...racing heart...all at once."
          },
          "severity": null,
          "duration": "a week",
          "frequency": "constant",
          "source_text": "racing heart",
          "extraction_confidence": 1.0
        },
        {
          "name": "depression",
          "notes": "Symptom occurred after reducing Propranolol and resolved after increasing the dose.",
          "status": "historical",
          "associated_medication": "Propranolol",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "I was doing great until I got down to 20 mg BID. Suddenly, I was hit with...a deep sense of depression all at once."
          },
          "severity": "severe",
          "duration": "a week",
          "frequency": "constant",
          "source_text": "a deep sense of depression",
          "extraction_confidence": 1.0
        },
        {
          "name": "weight gain",
          "notes": "Reported as a side effect and a reason for wanting to taper off Propranolol.",
          "status": "active",
          "associated_medication": "Propranolol",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "it is notorious for weight gain and fatigue and I struggle with both.",
          "extraction_confidence": 1.0
        },
        {
          "name": "fatigue",
          "notes": "Reported as a side effect and a reason for wanting to taper off Propranolol.",
          "status": "active",
          "associated_medication": "Propranolol",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "it is notorious for weight gain and fatigue and I struggle with both.",
          "extraction_confidence": 1.0
        },
        {
          "name": "withdrawal",
          "notes": "Refers to a past withdrawal experience from Zoloft from which the user has fully recovered.",
          "status": "historical",
          "associated_medication": "Zoloft",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "years"
            },
            "description": "My zoloft withdrawal story came to a close a few years ago"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "My zoloft withdrawal story",
          "extraction_confidence": 1.0
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "wean off of propanolol",
          "rapid taper",
          "50% reduction every week",
          "physical anxiety",
          "insomnia",
          "racing heart",
          "deep sense of depression",
          "went back up",
          "zoloft withdrawal story"
        ],
        "all_symptom_names": [
          "physical anxiety",
          "insomnia",
          "racing heart",
          "depression",
          "weight gain",
          "fatigue",
          "withdrawal"
        ]
      }
    }
  },
  {
    "extraction_id": 125,
    "post_id": 401757,
    "date_created": "2021-02-24 18:02:43",
    "topic_id": 4089,
    "user_id": 16447,
    "forum_post": "Greetings,\u00a0 \u00a0 I started taking lexapro 10mg mid July 2020. I should have never tried this drug. The reason I was\u00a0prescribed in the first place was during a\u00a0dr visit to determine whether a tumor in my armpit was malignant or not, I was visibly anxious during this visit (crazy.. right?) and\u00a0my dr pushed for me to try a medication. I have a stressful job, and I do stress about certain situations a little more than they deserve but at the end of the day I could always relax, but I thought Id give it a try to take the edge off.\u00a0Never in my life have I felt depressed or anxious for no reason. Anxiety with physical symptoms is not something I ever experienced outside of flying, my one lifelong phobia. \u00a0 I started on 10mg in July, 3 months later my dr asked how it was going. I said, fine, I don\u2019t notice anything.. he said lets bump you up to 20mg. What he didn\u2019t ask was are you feeling anxiety or depression? The answer would have been, no. But I did as I was told. Shortly after I noticed night twitching and sleep sweats. I have used small amounts of cannabis for years at night and I noticed now it was making me feel twitchy. I reduced the lexapro from 20 to 5 in the span of about 5 weeks. I became irritable, but was doing ok. After stopping on 1/4/21 (I was on 5 mg for 13 days, dr said no need to taper from there)\u00a0I was hit pretty hard with withdrawals around 1/17. Very emotional, crying, surges of anxiety, depression, tension headaches, pulses pounding all over my body, night sweats,\u00a0terrible insomnia, all things completely foreign to my 38 years of life. Drs told me it was just my anxiety, nothing to do with lexapro, that the meds are out of my system after 6 days so it cant be lexapro. This is even coming from a dr at the Mayo Clinic. Im feeling better emotionally now, not at baseline yet, but struggling mostly with headaches, insomnia, strong pulses back of my head,\u00a0back and\u00a0stomach,\u00a0and the 4am wake up call with anxiety. I cant use cannabis anymore, makes me more jittery, I haven\u2019t used caffeine in months, keep in mind I was on around 200mg daily for 15 years, never caused any anxiety before.\u00a0So far Ive had blood labs, EKG test on my heart, seen 3 physicians, 2 nurse practitioners, and a psychiatrist at Mayo, and they all labeled me someone with good old\u00a0fashioned American GAD and sent me away. Quite the coincidence it hits me at age 38 weeks after stopping lexapro eh?\u00a0\u00a0\u00a0\u00a0 not sure where to go from here. If I dont get back to baseline soon would a taper of lexapro starting at 5mg be wise? Or am I possibly in the final stages of this stuff and keep going med free? \u00a0 sorry for the long read and thank you in advance\u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "lexapro",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "lexapro 10mg mid July 2020...bump you up to 20mg...reduced the lexapro from 20 to 5 in the span of about 5 weeks...was on 5 mg for 13 days"
        }
      ],
      "symptoms": [
        {
          "name": "twitching",
          "notes": "Occurred at night and was also noticed when using cannabis.",
          "status": "historical",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "dose increase to 20mg",
            "time_since_reference_event": null,
            "description": "Shortly after I noticed night twitching... I noticed now it was making me feel twitchy."
          },
          "severity": null,
          "duration": null,
          "frequency": "nightly",
          "source_text": "night twitching",
          "extraction_confidence": null
        },
        {
          "name": "night sweats",
          "notes": "Initially occurred after a dose increase and was also experienced during acute withdrawal.",
          "status": "historical",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 13,
              "unit": "days"
            },
            "description": "After stopping on 1/4/21...I was hit pretty hard with withdrawals around 1/17"
          },
          "severity": null,
          "duration": null,
          "frequency": "nightly",
          "source_text": "sleep sweats...night sweats",
          "extraction_confidence": null
        },
        {
          "name": "irritability",
          "notes": null,
          "status": "historical",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": null,
            "description": "I reduced the lexapro from 20 to 5 in the span of about 5 weeks. I became irritable"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "irritable",
          "extraction_confidence": null
        },
        {
          "name": "crying spells",
          "notes": "Described as being 'Very emotional'.",
          "status": "historical",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 13,
              "unit": "days"
            },
            "description": "After stopping on 1/4/21...I was hit pretty hard with withdrawals around 1/17"
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "Very emotional, crying",
          "extraction_confidence": null
        },
        {
          "name": "anxiety",
          "notes": "Described as 'surges'.",
          "status": "historical",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 13,
              "unit": "days"
            },
            "description": "After stopping on 1/4/21...I was hit pretty hard with withdrawals around 1/17"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "surges of anxiety",
          "extraction_confidence": null
        },
        {
          "name": "depression",
          "notes": null,
          "status": "historical",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 13,
              "unit": "days"
            },
            "description": "After stopping on 1/4/21...I was hit pretty hard with withdrawals around 1/17"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "depression",
          "extraction_confidence": null
        },
        {
          "name": "headache",
          "notes": "Described as 'tension headaches'.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 13,
              "unit": "days"
            },
            "description": "After stopping on 1/4/21...I was hit pretty hard with withdrawals around 1/17"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "tension headaches",
          "extraction_confidence": null
        },
        {
          "name": "pounding pulse",
          "notes": "Felt 'all over my body' and specifically in 'back of my head, back and stomach'.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 13,
              "unit": "days"
            },
            "description": "After stopping on 1/4/21...I was hit pretty hard with withdrawals around 1/17"
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "pulses pounding all over my body...strong pulses back of my head, back and stomach",
          "extraction_confidence": null
        },
        {
          "name": "insomnia",
          "notes": "Includes waking up at 4am.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 13,
              "unit": "days"
            },
            "description": "After stopping on 1/4/21...I was hit pretty hard with withdrawals around 1/17"
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "terrible insomnia...the 4am wake up call",
          "extraction_confidence": null
        },
        {
          "name": "anxiety",
          "notes": "Occurs upon waking at 4am.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 13,
              "unit": "days"
            },
            "description": "After stopping on 1/4/21...I was hit pretty hard with withdrawals around 1/17"
          },
          "severity": null,
          "duration": null,
          "frequency": "daily",
          "source_text": "the 4am wake up call with anxiety",
          "extraction_confidence": null
        },
        {
          "name": "jitters",
          "notes": "A new sensitivity to cannabis that developed after stopping Lexapro.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": null,
            "description": "I cant use cannabis anymore, makes me more jittery"
          },
          "severity": null,
          "duration": null,
          "frequency": "intermittent",
          "source_text": "makes me more jittery",
          "extraction_confidence": null
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "hit pretty hard with withdrawals",
          "Very emotional, crying",
          "surges of anxiety",
          "tension headaches",
          "pulses pounding all over my body",
          "terrible insomnia",
          "strong pulses",
          "4am wake up call with anxiety"
        ],
        "all_symptom_names": [
          "twitching",
          "night sweats",
          "irritability",
          "crying spells",
          "anxiety",
          "depression",
          "headache",
          "pounding pulse",
          "insomnia",
          "jitters"
        ]
      }
    }
  },
  {
    "extraction_id": 146,
    "post_id": 156260,
    "date_created": "2020-02-09 19:23:52",
    "topic_id": 5188,
    "user_id": 5647,
    "forum_post": "Questions: I have been withdrawing from Sertraline for 9 weeks. Doctor put me on two sleeping aids in between to help with insomnia and had Serotonin Syndrome again (trazodone and mirtzopan). Did this put me back at square one with withdrawal symptoms from Sertraline?\u00a0 \u00a0 9 weeks ago my body began rejecting Sertraline\u00a0after I was tapering (bad tapering for a year). I developed Serotonin Syndrome and was told to stop the medicine cold turkey. I have been on Sertraline for 7 years transitioning from Cymbalta right before that b/c of pregnancies. Was on it for 5 years) After 3 weeks I had to find relief b/c of the horrible side effects and dark thoughts. \u00a0 I was put on Buspar (just six weeks ago). I read that Buspar doesn't help with withdrawal which was disappointing. But in between the cold turkey of Sertaline\u00a0(9 weeks ago) my doctor has put me on two serotonin sleep aids because of the horrible insomnia (which I've never suffered with as an adult). I had Serotonin Syndrome again both times. \u00a0 I\"m so much better than i was that first month. Dizziness is mostly gone, my appetite is back, I'm laughing again, enjoying activities, but still struggling. BUT my insomnia is still horrible. I took a few days off of .5 klonopin to try over the counter sleep aids. Worked for a few days and then wore off. So my pharmacist put me on both the over counter sleep aids to take with my low dosage of Klonopin (taking .25 or less at night)\u00a0so that I can eventually wean off of the klonopin. Some nights bendryl has been enough. Other nights, not at all. I\"m so discouraged b/c I want to stop the klonopin. This is really the thing that is making me the most depressed. \u00a0 This is when my neuropsychologist put me on mirtzopane and trazadone. Both caused the serotonin syndrome. \u00a0 My question is this. 2 weeks ago was when I took my last dose of trazadone (which i had the adverse affect) does this mean I'm at square one again with my withdrawal symptoms? I\"m definitely feeling better but i have to admit. These have been the hardest 9 weeks of my life! I know I will get better but this is hard. Any help and encouraging words would be great. My withdrawal symptoms are now at the moderate stage from the sheets people have posted on here. Thanks and light and love to you all!\u00a0 \u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Sertraline",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "withdrawing from Sertraline for 9 weeks"
        },
        {
          "name": "Cymbalta",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "transitioning from Cymbalta"
        },
        {
          "name": "Trazodone",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "trazodone and mirtzopan"
        },
        {
          "name": "Mirtazapine",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "mirtzopane and trazadone"
        },
        {
          "name": "Buspar",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "I was put on Buspar (just six weeks ago)"
        },
        {
          "name": "Klonopin",
          "route": [
            null
          ],
          "dosage": [
            "0.5",
            "0.25"
          ],
          "source_text": "took a few days off of .5 klonopin...taking .25 or less at night"
        },
        {
          "name": "Benadryl",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "Some nights bendryl has been enough"
        }
      ],
      "symptoms": [
        {
          "name": "serotonin syndrome",
          "notes": "First occurrence, which led to the instruction to stop Sertraline cold turkey.",
          "status": "historical",
          "associated_medication": "Sertraline",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 9,
              "unit": "weeks"
            },
            "description": "Developed 9 weeks ago during a bad taper from Sertraline."
          },
          "severity": null,
          "duration": null,
          "frequency": "once",
          "source_text": "I developed Serotonin Syndrome and was told to stop the medicine cold turkey.",
          "extraction_confidence": 1
        },
        {
          "name": "dark thoughts",
          "notes": null,
          "status": "historical",
          "associated_medication": "Sertraline",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": null,
            "description": "Occurred within the first 3 weeks after stopping Sertraline."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "horrible side effects and dark thoughts",
          "extraction_confidence": 1
        },
        {
          "name": "dizziness",
          "notes": "Symptom has mostly resolved.",
          "status": "historical",
          "associated_medication": "Sertraline",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": null,
            "description": "Occurred after stopping Sertraline."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "Dizziness is mostly gone",
          "extraction_confidence": 1
        },
        {
          "name": "loss of appetite",
          "notes": "Symptom inferred from the statement that appetite has returned.",
          "status": "historical",
          "associated_medication": "Sertraline",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": null,
            "description": "Occurred after stopping Sertraline."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "my appetite is back",
          "extraction_confidence": 1
        },
        {
          "name": "insomnia",
          "notes": "Author states they have never suffered with this as an adult prior to withdrawal.",
          "status": "active",
          "associated_medication": "Sertraline",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 9,
              "unit": "weeks"
            },
            "description": "Began after stopping Sertraline cold turkey 9 weeks ago."
          },
          "severity": "severe",
          "duration": null,
          "frequency": "nightly",
          "source_text": "my insomnia is still horrible",
          "extraction_confidence": 1
        },
        {
          "name": "serotonin syndrome",
          "notes": "Second occurrence of serotonin syndrome after being prescribed a sleep aid.",
          "status": "historical",
          "associated_medication": "Trazodone",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "taking trazodone",
            "time_since_reference_event": {
              "value": 2,
              "unit": "weeks"
            },
            "description": "Occurred after taking Trazodone. Last dose was 2 weeks ago."
          },
          "severity": null,
          "duration": null,
          "frequency": "once",
          "source_text": "had Serotonin Syndrome again (trazodone and mirtzopan)",
          "extraction_confidence": 1
        },
        {
          "name": "serotonin syndrome",
          "notes": "Third occurrence of serotonin syndrome after being prescribed a sleep aid.",
          "status": "historical",
          "associated_medication": "Mirtazapine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "taking mirtazapine",
            "time_since_reference_event": null,
            "description": "Occurred after taking Mirtazapine."
          },
          "severity": null,
          "duration": null,
          "frequency": "once",
          "source_text": "had Serotonin Syndrome again (trazodone and mirtzopan)",
          "extraction_confidence": 1
        },
        {
          "name": "depression",
          "notes": "Author attributes this feeling to the situation of wanting to stop Klonopin.",
          "status": "active",
          "associated_medication": "Klonopin",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": null,
            "description": null
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "This is really the thing that is making me the most depressed.",
          "extraction_confidence": 0.9
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "withdrawing from Sertraline",
          "Serotonin Syndrome",
          "stop the medicine cold turkey",
          "horrible side effects",
          "dark thoughts",
          "horrible insomnia",
          "withdrawal symptoms"
        ],
        "all_symptom_names": [
          "serotonin syndrome",
          "dark thoughts",
          "dizziness",
          "loss of appetite",
          "insomnia",
          "depression"
        ]
      }
    }
  },
  {
    "extraction_id": 33,
    "post_id": 417568,
    "date_created": "2015-11-27 19:43:22",
    "topic_id": 4577,
    "user_id": 17295,
    "forum_post": "I was on lexapro for 10 years and tapered off. \u00a0I have been completely off for 3 months. \u00a0At first I felt pretty good but anxiety has been creeping back, that feeling like you are watching yourself in a movie instead of real life. \u00a0I feel agitated, my memory is scary and wake up every morning around 5am regardless of what time I go to bed, and lastly, just not happy. \u00a0\u00a0 \u00a0 How do you know if this is withdrawal still or relapse? \u00a0I know withdrawal is difficult but relapse is also a real possibility. My doctor will be of no help. \u00a0He already told me before I tapered I would be done with withdrawal very quickly....drug half life etc. etc. \u00a0 I would appreciate any advice.",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "lexapro",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "lexapro for 10 years"
        }
      ],
      "symptoms": [
        {
          "name": "anxiety",
          "notes": "The author notes the anxiety is 'creeping back'.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Symptoms started sometime after an initial period of feeling good, within the 3 months since being completely off the medication."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "anxiety has been creeping back",
          "extraction_confidence": 1.0
        },
        {
          "name": "depersonalization",
          "notes": "Described colloquially as 'feeling like you are watching yourself in a movie instead of real life'.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Symptoms started sometime after an initial period of feeling good, within the 3 months since being completely off the medication."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "that feeling like you are watching yourself in a movie instead of real life",
          "extraction_confidence": 1.0
        },
        {
          "name": "agitation",
          "notes": null,
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Symptoms started sometime after an initial period of feeling good, within the 3 months since being completely off the medication."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "I feel agitated",
          "extraction_confidence": 1.0
        },
        {
          "name": "memory impairment",
          "notes": null,
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Symptoms started sometime after an initial period of feeling good, within the 3 months since being completely off the medication."
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "my memory is scary",
          "extraction_confidence": 1.0
        },
        {
          "name": "early morning awakening",
          "notes": "Wakes around 5am regardless of bedtime.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Symptoms started sometime after an initial period of feeling good, within the 3 months since being completely off the medication."
          },
          "severity": null,
          "duration": null,
          "frequency": "daily",
          "source_text": "wake up every morning around 5am regardless of what time I go to bed",
          "extraction_confidence": 1.0
        },
        {
          "name": "anhedonia",
          "notes": "Described as 'just not happy'.",
          "status": "active",
          "associated_medication": "lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "months"
            },
            "description": "Symptoms started sometime after an initial period of feeling good, within the 3 months since being completely off the medication."
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "just not happy",
          "extraction_confidence": 1.0
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "tapered off",
          "completely off for 3 months",
          "anxiety has been creeping back",
          "watching yourself in a movie",
          "agitated",
          "memory is scary",
          "wake up every morning",
          "not happy",
          "withdrawal still or relapse"
        ],
        "all_symptom_names": [
          "anxiety",
          "depersonalization",
          "agitation",
          "memory impairment",
          "early morning awakening",
          "anhedonia"
        ]
      }
    }
  },
  {
    "extraction_id": 75,
    "post_id": 375806,
    "date_created": "2016-05-14 02:03:00",
    "topic_id": 8753,
    "user_id": 15367,
    "forum_post": "Hi im new here, I left antidepresants 5 weeks ago after taking a lot of them over 8 years, left them because they were not working anymore and were making depression worst, after i stopped taking them felt good for about three weeks, then had some weeks of anger and crying, but now i am starting to feel down. Is there a way to know if what im starting to feel is a result of withdrawl or the return of depression? Im really scared.\u00a0 Also wanted to ask if somebody has tried high doses of niacin to treat depression.\u00a0 \u00a0 \u00a0 \u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "antidepressants",
          "route": [
            null
          ],
          "dosage": [
            null
          ],
          "source_text": "antidepresants"
        }
      ],
      "symptoms": [
        {
          "name": "worsening depression",
          "notes": "User states the medication was making their depression worse before they stopped taking it.",
          "status": "historical",
          "associated_medication": "antidepressants",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": false,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "were making depression worst",
          "extraction_confidence": 0.9
        },
        {
          "name": "anger",
          "notes": null,
          "status": "historical",
          "associated_medication": "antidepressants",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "weeks"
            },
            "description": "felt good for about three weeks, then had some weeks of anger and crying"
          },
          "severity": null,
          "duration": "some weeks",
          "frequency": null,
          "source_text": "anger",
          "extraction_confidence": 1
        },
        {
          "name": "crying",
          "notes": null,
          "status": "historical",
          "associated_medication": "antidepressants",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 3,
              "unit": "weeks"
            },
            "description": "felt good for about three weeks, then had some weeks of anger and crying"
          },
          "severity": null,
          "duration": "some weeks",
          "frequency": null,
          "source_text": "crying",
          "extraction_confidence": 1
        },
        {
          "name": "feeling down",
          "notes": "User is questioning if this is a withdrawal symptom or a return of their original depression.",
          "status": "active",
          "associated_medication": "antidepressants",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 5,
              "unit": "weeks"
            },
            "description": "now i am starting to feel down"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "feel down",
          "extraction_confidence": 1
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "left antidepresants 5 weeks ago",
          "making depression worst",
          "felt good for about three weeks",
          "weeks of anger and crying",
          "starting to feel down",
          "withdrawl or the return of depression"
        ],
        "all_symptom_names": [
          "worsening depression",
          "anger",
          "crying",
          "feeling down"
        ]
      }
    }
  },
  {
    "extraction_id": 61,
    "post_id": 298856,
    "date_created": "2018-04-06 00:02:30",
    "topic_id": 7018,
    "user_id": 11517,
    "forum_post": "I have a very serious traumatic brain injury, that\u00a0happen 24 years ago. Still I have come a ver long way since my injury. Twenty years ago, while living in a group home, I was placed on heavy doses of both anti-anxiety medicine (Ativan,) and an Antidepressant (Anafranil.) I was also placed on many other types of medication, including seizure meds, even though I had a completely clear EEG. I was almost immediately removed from the other medication, as soon as I left the group home.\u00a0\u00a0I successfully titrated the Ativan ten years ago, and am in the process of reducing Luvox. The Anafranil had caused me bad urinary side effects 15 years ago, and I was switched to Luvox.. \u00a0 I actually reduce a little bit slower then ten percent. I'm reducing ten milligrams a month out of 150 milligrams of water titrated Luvox. I am currently at just under 1/5 of the dose of Luvox, and am doing well psychologically. My left arm is another story. My injury was right brain, and I damaged some nerves, mainly my radial nerve, controlling my arm, and hand , and thumb\u00a0in my brain. As the dose becomes less, I am noticing difficulty using it more, and have pain in my forearm.\u00a0I don't recall myself, or anyone mentioning that I had pain in my arm before. So I think it is basically from being over medicated, ignoring it, and using it wrong for an extended period of time. Body awareness is crucial for physical healing, and the SSRI had me in a fog for an awful long time. \u00a0 Still wt more awareness, and now paying attention to how I use my arm more properly, and have even changed my gym workout to something called Tai Chi weight wlifting. Ta Chi weight lifting is basically less weight 10 - 20 lbs, and\u00a0a ton of reps. Sometimes hundreds of reps, a least until you muscles are fatigued.\u00a0\u00a0It is less strenuous on short muscles, but still builds long\u00a0muscle. When I was lifting heavy weights, I was causing my arm muscles and nerves pain and trouble. \u00a0 Question, is it okay to lesson the the speed more then ten percent a month.\u00a0I was\u00a0titrating at 10 mg of 150 mg, 6.6.66...%\u00a0&\u00a0when I reached 30 mg, out of 150 mg, I began reducing at only 5 mg., or 3.33...%. I am doing it that way, because it is easiest on my body. \u00a0My mind could probably handle a faster titrating, but I don't believe my left arm, & other muscles\u00a0could.\u00a0I mean is there a reason the we use 10%? \u00a0 Reducing at first was very easy. In fact I actually was able to cut my pill immediately\u00a0in half, w/o any difficulty. Still as my dosage gets less, I need to slow it down more. Do others have similar experiences. I remember that when I reduced my Ativan years ago, that during my last ten days, although I had been reducing a milligram a day, I had to reduce by a tent of a milligram. SSRI reduction is different the benzo\u00a0withdrawal, but do they share similarities. I'm just curious if others share any of my withdrawal experience.\u00a0\u00a0 \u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Ativan",
          "route": null,
          "dosage": null,
          "source_text": "anti-anxiety medicine (Ativan,)"
        },
        {
          "name": "Anafranil",
          "route": null,
          "dosage": null,
          "source_text": "an Antidepressant (Anafranil.)"
        },
        {
          "name": "Luvox",
          "route": [
            "oral"
          ],
          "dosage": [
            "150 mg",
            "30 mg"
          ],
          "source_text": "150 milligrams of water titrated Luvox"
        }
      ],
      "symptoms": [
        {
          "name": "urinary side effect",
          "notes": null,
          "status": "historical",
          "associated_medication": "Anafranil",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": "while taking medication",
            "time_since_reference_event": {
              "value": 15,
              "unit": "years"
            },
            "description": "15 years ago"
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "The Anafranil had caused me bad urinary side effects 15 years ago",
          "extraction_confidence": 1
        },
        {
          "name": "difficulty using arm",
          "notes": "The user has a right brain injury from 24 years ago that damaged nerves controlling their left arm. They believe this symptom is becoming more noticeable as the SSRI dose is reduced.",
          "status": "active",
          "associated_medication": "Luvox",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "As the dose becomes less"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "As the dose becomes less, I am noticing difficulty using it more",
          "extraction_confidence": 1
        },
        {
          "name": "forearm pain",
          "notes": "The user has a right brain injury from 24 years ago that damaged nerves controlling their left arm. They believe this symptom is becoming more noticeable as the SSRI dose is reduced.",
          "status": "active",
          "associated_medication": "Luvox",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": "As the dose becomes less"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "have pain in my forearm",
          "extraction_confidence": 1
        }
      ],
      "summary": {
        "multiple_medications_mentioned": true,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "traumatic brain injury",
          "urinary side effects",
          "reducing Luvox",
          "difficulty using it more",
          "pain in my forearm",
          "SSRI had me in a fog"
        ],
        "all_symptom_names": [
          "urinary side effect",
          "difficulty using arm",
          "forearm pain"
        ]
      }
    }
  },
  {
    "extraction_id": 119,
    "post_id": 518102,
    "date_created": "2016-04-21 05:26:16",
    "topic_id": 12157,
    "user_id": 9327,
    "forum_post": "Small update Ok - 2 days now of 1.2mg of Lexapro from a fresh bottle And I'm positive I can \"feel\" its affects - albeit slightly, but none-the-less there. \u00a0Slightly less aware of surroundings, little slower thinking. \u00a0 I really do think that I was effectively taking almost no Lexapro on the expired bottle.",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Lexapro",
          "route": [
            null
          ],
          "dosage": [
            "1.2 mg"
          ]
        }
      ],
      "symptoms": [
        {
          "name": "reduced awareness of surroundings",
          "notes": "Feels the medication effects slightly after starting a fresh bottle; believes previous expired bottle had little effect.",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 2,
              "unit": "days"
            },
            "description": "after starting 1.2 mg Lexapro from a fresh bottle"
          },
          "severity": "mild",
          "duration": null,
          "frequency": null,
          "source_text": "Slightly less aware of surroundings",
          "extraction_confidence": 0.84
        },
        {
          "name": "slowed thinking",
          "notes": "Feels the medication effects slightly after starting a fresh bottle; believes previous expired bottle had little effect.",
          "status": "active",
          "associated_medication": "Lexapro",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": false,
            "reference_event": "other",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 2,
              "unit": "days"
            },
            "description": "after starting 1.2 mg Lexapro from a fresh bottle"
          },
          "severity": "mild",
          "duration": null,
          "frequency": null,
          "source_text": "little slower thinking",
          "extraction_confidence": 0.84
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "2 days now of 1.2mg of Lexapro from a fresh bottle",
          "positive I can feel its affects",
          "Slightly less aware of surroundings",
          "little slower thinking",
          "effectively taking almost no Lexapro on the expired bottle"
        ],
        "all_symptom_names": [
          "reduced awareness of surroundings",
          "slowed thinking"
        ]
      }
    }
  },
  {
    "extraction_id": 38,
    "post_id": 26986,
    "date_created": "2022-06-28 16:19:55",
    "topic_id": 369,
    "user_id": 582,
    "forum_post": "You know, I think the start of a taper is very scary. I hope that it goes smoothly for you and you\u2019ll start feeling a bit more confident. I remember about 4 nights into my first week of tapering I didn\u2019t sleep much at all and it was very difficult, that was fortunately the worst it got. Once my body realised the drug was reducing it was able to adapt. Of course everyone is different. It has also got easier over time as the drug is reducing.\u00a0",
    "llm_output": {
      "speaker_context": "advising",
      "medications": [],
      "symptoms": [],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "start of a taper is very scary",
          "hope it goes smoothly",
          "4 nights into my first week of tapering",
          "didn\u2019t sleep much at all",
          "worst it got",
          "body adapted as the drug was reducing",
          "got easier over time"
        ],
        "all_symptom_names": []
      }
    }
  },
  {
    "extraction_id": 187,
    "post_id": 238640,
    "date_created": "2015-01-03 05:56:49",
    "topic_id": 2364,
    "user_id": 9364,
    "forum_post": "I know it may not work this far in the game but IF I decided to reinstate a small dose and stablize am I going to have just as tought a time getting off as I am now? I was already weaned down to 1mg and I still ended up with withdrawal so I'm wondering if it even matters if I did reinstate and leveled out again on 1mg if I would just probably go through all this again. I do not want to reinstate. :/",
    "llm_output": {
      "speaker_context": "self",
      "medications": [],
      "symptoms": [
        {
          "name": "withdrawal",
          "notes": "Occurred after tapering down to 1 mg; currently struggling with getting off and considering but rejecting reinstatement.",
          "status": "active",
          "associated_medication": null,
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "I was already weaned down to 1mg and I still ended up with withdrawal",
          "extraction_confidence": 0.63
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "weaned down to 1mg",
          "ended up with withdrawal",
          "reinstate a small dose",
          "do not want to reinstate"
        ],
        "all_symptom_names": [
          "withdrawal"
        ]
      }
    }
  },
  {
    "extraction_id": 3,
    "post_id": 482578,
    "date_created": "2014-12-20 10:05:37",
    "topic_id": 10862,
    "user_id": 188,
    "forum_post": "\u00a0 I was also terrified of everything.\u00a0 I would have to force myself to go and sit on a chair in my back yard for 5 minutes but the whole time I was wanting to come back in the house because the trees and fence and birds and plants scared me.\u00a0 If anything moved, my heart would beat faster and I would break out in a sweat.\u00a0 I was trying to get some fresh air and sun, but it was overwhelming and I could never stay out longer than a few minutes. \u00a0 Then I would come in the house and see a cup in the sink, that would scare me.\u00a0 I couldn't take a shower because the thought of it was terrifying.\u00a0 The sounds of voices, even those of my family would give me a rush of adrenaline.\u00a0 Going into a grocery store to buy milk was like being in a living nightmare, it would take me two days to recover. \u00a0 Its not something we can control, its our nervous system being over activated, its on high alert all the time, our senses our primed for danger and so everything is magnified.\u00a0 The slightest thing signals danger and we go into fight or flight with all the physical symptoms.\u00a0 But it calms down over time if you do the best you can to minimize stress and not do things which cause the terror. \u00a0 I made the mistake of pushing myself to do more than I was ready to do.\u00a0 Some of it was because I had to.\u00a0 Only do pleasant calming things.\u00a0 Not everything works for everyone.\u00a0 Some people feel calm walking in nature, around a nice park.\u00a0 But that terrified me.\u00a0 Find the things which make you feel calmer and do them.\u00a0 If you can't find anything which calms you, find something which distracts you.\u00a0 I used to play a lot of mindless facebook games and listen to educational and spiritual talks on youtube, when I was able to listen to sounds, sometimes I couldn't stand listening to any sounds though. \u00a0 Its going to take some time, but you will get better.\u00a0 I also didn't believe that I was recovering, but I am, very slowly. I also didn't believe recovery stories.\u00a0 I would think, \"well, that is you, but I am different, I'm not going to recover and I will be sick like this for the rest of my life\"\u00a0 But its not true, I am getting better.\u00a0 I also spent months not wanting to be alive because living was like being in a nightmare through every waking moment.\u00a0 But slowly I got moments of starting to feel a little bit better.\u00a0 That gave me hope that perhaps I was able to recover. \u00a0 I didn't take anti psychotics, but I was on SSRIs for over 13 years and also a lot of other drugs which damaged my brain and nervous system.\u00a0 It doesn't matter which drug causes the damage, the recovery process is going to be the same.\u00a0 You are going to recover if you keep living, one day at a time, one moment at a time. \u00a0 I'm doing better today than I was a year ago.\u00a0 I went for a walk around a park, drove and bought some groceries, did some light exercise.\u00a0 This time last year, doing those things was close to impossible, but today it wasn't so bad. \u00a0 Hang in there, you will get through this, those windows will come if you give it more time.",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "SSRIs",
          "route": [
            null
          ],
          "dosage": [
            null
          ]
        }
      ],
      "symptoms": [
        {
          "name": "terror",
          "notes": "Terrified of everything; overwhelming fear outdoors; could not stay outside longer than a few minutes",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "I was also terrified of everything... it was overwhelming and I could never stay out longer than a few minutes.",
          "extraction_confidence": 0.9
        },
        {
          "name": "racing heart",
          "notes": "Triggered by movement and environmental stimuli",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "moderate",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "If anything moved, my heart would beat faster",
          "extraction_confidence": 0.86
        },
        {
          "name": "sweating",
          "notes": "Breaks out in a sweat when triggered by movement",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "moderate",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "my heart would beat faster and I would break out in a sweat",
          "extraction_confidence": 0.86
        },
        {
          "name": "sound sensitivity",
          "notes": "Voices triggered adrenaline rush; sometimes couldn't stand listening to any sounds",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "severe",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "The sounds of voices, even those of my family would give me a rush of adrenaline... sometimes I couldn't stand listening to any sounds though.",
          "extraction_confidence": 0.92
        },
        {
          "name": "adrenaline rush",
          "notes": "Triggered by voices/sounds",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "moderate",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "The sounds of voices, even those of my family would give me a rush of adrenaline.",
          "extraction_confidence": 0.86
        },
        {
          "name": "fear of showering",
          "notes": "Avoided showering due to terror",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "I couldn't take a shower because the thought of it was terrifying.",
          "extraction_confidence": 0.88
        },
        {
          "name": "sensory overload",
          "notes": "Overwhelmed by being outdoors; could not stay outside more than a few minutes",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "severe",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "I was trying to get some fresh air and sun, but it was overwhelming and I could never stay out longer than a few minutes.",
          "extraction_confidence": 0.88
        },
        {
          "name": "hypervigilance",
          "notes": "On high alert all the time; senses primed for danger",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "severe",
          "duration": null,
          "frequency": "constant",
          "source_text": "its our nervous system being over activated, its on high alert all the time, our senses our primed for danger",
          "extraction_confidence": 0.78
        },
        {
          "name": "suicidal ideation",
          "notes": "Spent months not wanting to be alive",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "severe",
          "duration": null,
          "frequency": null,
          "source_text": "I also spent months not wanting to be alive because living was like being in a nightmare through every waking moment.",
          "extraction_confidence": 0.93
        },
        {
          "name": "panic",
          "notes": "Grocery store felt like a living nightmare; needed two days to recover",
          "status": "historical",
          "associated_medication": "SSRIs",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": null
            },
            "description": null
          },
          "severity": "severe",
          "duration": null,
          "frequency": "intermittent",
          "source_text": "Going into a grocery store to buy milk was like being in a living nightmare, it would take me two days to recover.",
          "extraction_confidence": 0.84
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "terrified of everything",
          "rush of adrenaline",
          "on high alert all the time",
          "couldn't stand listening to any sounds",
          "months not wanting to be alive",
          "living nightmare in grocery store"
        ],
        "all_symptom_names": [
          "terror",
          "racing heart",
          "sweating",
          "sound sensitivity",
          "adrenaline rush",
          "fear of showering",
          "sensory overload",
          "hypervigilance",
          "suicidal ideation",
          "panic"
        ]
      }
    }
  },
  {
    "extraction_id": 186,
    "post_id": 440650,
    "date_created": "2020-02-27 00:23:43",
    "topic_id": 5094,
    "user_id": 3792,
    "forum_post": "Dissolved 2ml of water with 20mg of celexa. Day 2. 5:20 pm once dissolved i stirred it well and took\u00a01 mg with syringe. Day 1 i took at 7pm. But i didnt sleep so i took it a little earlier today.\u00a0I used to take celexa in the morn.\u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "celexa",
          "route": [
            "oral"
          ],
          "dosage": [
            "1 mg"
          ]
        }
      ],
      "symptoms": [
        {
          "name": "insomnia",
          "notes": "No sleep after taking 7 pm dose on Day 1; adjusted dose time earlier on Day 2.",
          "status": "historical",
          "associated_medication": "celexa",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": null,
            "reference_event": "other",
            "reference_event_other": "took 7 pm dose (changed dosing time to evening)",
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "Occurred the night after taking the 7 pm dose on Day 1."
          },
          "severity": "severe",
          "duration": "one night",
          "frequency": "once",
          "source_text": "But i didnt sleep so i took it a little earlier today.",
          "extraction_confidence": 0.76
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "took 1 mg with syringe",
          "Day 2",
          "Day 1 i took at 7pm",
          "i didnt sleep",
          "used to take celexa in the morn"
        ],
        "all_symptom_names": [
          "insomnia"
        ]
      }
    }
  },
  {
    "extraction_id": 37,
    "post_id": 34194,
    "date_created": "2020-05-22 10:04:14",
    "topic_id": 50,
    "user_id": 371,
    "forum_post": "That\u2019s when the withdrawal kicks in. My symptoms kicks\u00a0in after two weeks.\u00a0",
    "llm_output": {
      "speaker_context": "self",
      "medications": [],
      "symptoms": [],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "withdrawal kicks in",
          "symptoms kick in after two weeks"
        ],
        "all_symptom_names": []
      }
    }
  },
  {
    "extraction_id": 103,
    "post_id": 422820,
    "date_created": "2020-10-09 21:40:16",
    "topic_id": 4786,
    "user_id": 43,
    "forum_post": "Welcome to SA, Ang2. \u00a0 I've brought your situation to the attention of the other staff. \u00a0 \u00a0 \u00a0 \u00a0 \u00a0",
    "llm_output": {
      "speaker_context": "advising",
      "medications": [],
      "symptoms": [],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "Welcome to SA",
          "brought your situation to the attention of the other staff"
        ],
        "all_symptom_names": []
      }
    }
  },
  {
    "extraction_id": 14,
    "post_id": 181039,
    "date_created": "2022-07-27 22:11:24",
    "topic_id": 1931,
    "user_id": 48,
    "forum_post": "\u00a0 No more than 10% of current dose followed by a hold of at least 4 weeks to allow the brain to adapt to not getting as much of the drug: \u00a0 Why taper by 10% of my dosage?",
    "llm_output": {
      "speaker_context": "advising",
      "medications": [],
      "symptoms": [],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "10% taper",
          "hold of at least 4 weeks",
          "Why taper by 10% of my dosage?"
        ],
        "all_symptom_names": []
      }
    }
  },
  {
    "extraction_id": 59,
    "post_id": 103829,
    "date_created": "2023-09-03 11:09:06",
    "topic_id": 820,
    "user_id": 3050,
    "forum_post": "Hi again everyone, posting again after almost a year...My life lately has been occupied with working with stress. I had a burnout last spring, which really required me to pause my taper and work on my self-care skills. I was unemployed for a while, but now I'm back at work again. \u00a0 I don't know what exactly it is, but I've been having more stress and greater stress responses starting from somewhere around the beginning of the last year... I'm thinking that maybe it's due to me approaching lower doses of olanzapine? Anyone else taking olanzapine / Zyprexa experiencing this?I'm also feeling anger more often. And as for the latest drop - I am already feeling low grade anxiety since the drop (which was only 2 days ago!) I'm genuinely interested of how this drop goes. I'm willing to face some anxiety and loss of sleep, but not in excess.I seem to remember people mentioning in this forum that things will become more difficult around the 2.5 mg mark. That might be what this is...Happy (or at least bearable\u00a0\ud83d\ude42) tapering, all!Bokart",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "olanzapine",
          "route": [
            null
          ],
          "dosage": [
            null
          ]
        }
      ],
      "symptoms": [
        {
          "name": "anxiety",
          "notes": null,
          "status": "active",
          "associated_medication": "olanzapine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": true,
            "onset_after_dose_reduction": true,
            "reference_event": "dose_reduction",
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": 2,
              "unit": "days"
            },
            "description": null
          },
          "severity": "mild",
          "duration": null,
          "frequency": null,
          "source_text": "I am already feeling low grade anxiety since the drop (which was only 2 days ago!)",
          "extraction_confidence": 0.95
        },
        {
          "name": "increased stress",
          "notes": null,
          "status": "active",
          "associated_medication": "olanzapine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "starting from somewhere around the beginning of the last year"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "I've been having more stress and greater stress responses starting from somewhere around the beginning of the last year...",
          "extraction_confidence": 0.72
        },
        {
          "name": "heightened stress response",
          "notes": null,
          "status": "active",
          "associated_medication": "olanzapine",
          "onset_timing": {
            "is_mentioned": true,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": "starting from somewhere around the beginning of the last year"
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "I've been having more stress and greater stress responses starting from somewhere around the beginning of the last year...",
          "extraction_confidence": 0.68
        },
        {
          "name": "anger",
          "notes": null,
          "status": "active",
          "associated_medication": "olanzapine",
          "onset_timing": {
            "is_mentioned": false,
            "reference_event_identified": false,
            "onset_after_dose_reduction": null,
            "reference_event": null,
            "reference_event_other": null,
            "time_since_reference_event": {
              "value": null,
              "unit": "days"
            },
            "description": null
          },
          "severity": null,
          "duration": null,
          "frequency": null,
          "source_text": "I'm also feeling anger more often.",
          "extraction_confidence": 0.75
        }
      ],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": true,
        "key_phrases": [
          "pause my taper",
          "approaching lower doses of olanzapine",
          "already feeling low grade anxiety since the drop (2 days ago)",
          "more stress and greater stress responses",
          "feeling anger more often",
          "2.5 mg mark"
        ],
        "all_symptom_names": [
          "anxiety",
          "increased stress",
          "heightened stress response",
          "anger"
        ]
      }
    }
  },
  {
    "extraction_id": 169,
    "post_id": 399555,
    "date_created": "2012-06-01 01:34:58",
    "topic_id": 4061,
    "user_id": 2312,
    "forum_post": "Update : \u00a0 I made another taper last night on the Risperdal. I'm now at 0.325. Hopefully this taper will go as well as the last two. So far, so good!!!",
    "llm_output": {
      "speaker_context": "self",
      "medications": [
        {
          "name": "Risperdal",
          "route": [
            null
          ],
          "dosage": [
            "0.325"
          ]
        }
      ],
      "symptoms": [],
      "summary": {
        "multiple_medications_mentioned": false,
        "multiple_symptoms_mentioned": false,
        "key_phrases": [
          "made another taper last night",
          "Risperdal",
          "now at 0.325",
          "so far, so good"
        ],
        "all_symptom_names": []
      }
    }
  }
]