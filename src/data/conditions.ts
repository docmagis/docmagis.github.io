import type { ConditionArticle } from '../types'

/** Educational summaries for UI demo only — not a substitute for professional care. */
export const conditions: ConditionArticle[] = [
  {
    id: 'c1',
    title: 'Hypertension (high blood pressure)',
    summary:
      'Long-term elevation of blood pressure that can strain the heart and vessels when untreated.',
    overview:
      'Blood pressure measures how hard blood pushes against artery walls. “High” readings over time can raise risk of stroke, heart disease, and kidney problems. Many people have no symptoms, which is why screening matters.',
    symptoms: [
      'Often none — may be found on a routine check',
      'Possible headaches, shortness of breath, or nosebleeds at very high levels',
    ],
    whenToSeekCare: [
      'If home readings are repeatedly high or you feel chest pain, severe headache, confusion, or vision changes — seek urgent care.',
      'Schedule routine follow-up if you are starting or changing blood pressure treatment.',
    ],
    selfCareTips: [
      'Limit sodium, maintain a healthy weight, stay active as advised by your clinician',
      'Take medications as prescribed; do not stop without medical guidance',
    ],
  },
  {
    id: 'c2',
    title: 'Type 2 diabetes',
    summary:
      'A metabolic condition where the body has trouble using insulin effectively, leading to higher blood sugar.',
    overview:
      'Glucose builds up in the blood when cells do not respond well to insulin. Over time, high sugar can affect nerves, eyes, kidneys, and circulation. Lifestyle, medications, and monitoring work together in a care plan.',
    symptoms: [
      'Increased thirst and urination',
      'Fatigue, blurred vision, slow-healing cuts',
    ],
    whenToSeekCare: [
      'If you have vomiting, abdominal pain, rapid breathing, or confusion — urgent evaluation is needed.',
      'Book care if you have excessive thirst/urination or unexplained weight loss.',
    ],
    selfCareTips: [
      'Follow your clinician’s guidance on diet, activity, and glucose checks',
      'Keep vaccinations up to date as recommended',
    ],
  },
  {
    id: 'c3',
    title: 'Seasonal allergic rhinitis',
    summary:
      'Immune overreaction to airborne allergens such as pollen, causing nose and eye symptoms.',
    overview:
      'Histamine release leads to sneezing, itching, and congestion. Triggers vary by season and environment. Treatment ranges from avoidance strategies to medications your clinician recommends.',
    symptoms: [
      'Sneezing, itchy nose or eyes, runny nose',
      'Nasal congestion, post-nasal drip',
    ],
    whenToSeekCare: [
      'If symptoms interfere with sleep, work, or asthma control',
      'If you develop wheezing or breathing difficulty',
    ],
    selfCareTips: [
      'Track pollen counts; keep windows closed on high-count days when practical',
      'Rinse nasal passages only with methods your clinician approves',
    ],
  },
  {
    id: 'c4',
    title: 'Migraine',
    summary:
      'A neurological condition with recurring headaches often accompanied by nausea or sensitivity to light.',
    overview:
      'Episodes can last hours to days. Triggers may include sleep disruption, certain foods, stress, or hormonal changes. Accurate diagnosis helps distinguish migraine from other serious headaches.',
    symptoms: [
      'Throbbing head pain, often one-sided',
      'Nausea; sensitivity to light or sound',
    ],
    whenToSeekCare: [
      '“Thunderclap” worst-ever headache, fever with stiff neck, new weakness, or confusion — emergency care.',
      'If headaches are new, more frequent, or different from your usual pattern.',
    ],
    selfCareTips: [
      'Regular sleep, meals, and hydration; stress reduction techniques',
      'Use a headache diary to share patterns with your clinician',
    ],
  },
  {
    id: 'c5',
    title: 'Gastroesophageal reflux (GERD)',
    summary:
      'Stomach acid flowing back into the esophagus, causing heartburn or regurgitation.',
    overview:
      'A weak lower esophageal sphincter or pressure changes can allow reflux. Occasional symptoms are common; frequent symptoms deserve medical evaluation to rule out other conditions.',
    symptoms: [
      'Burning behind the breastbone after meals',
      'Sour taste, cough, or hoarseness in some cases',
    ],
    whenToSeekCare: [
      'Difficulty swallowing, unintentional weight loss, vomiting blood, or black stools — urgent evaluation.',
      'Symptoms more than twice weekly or disrupting sleep.',
    ],
    selfCareTips: [
      'Smaller meals; avoid lying down soon after eating',
      'Discuss triggers like alcohol, caffeine, or specific foods with your clinician',
    ],
  },
  {
    id: 'c6',
    title: 'Depression (major depressive disorder)',
    summary:
      'A mood disorder with persistent low mood, loss of interest, and cognitive or physical symptoms.',
    overview:
      'Depression is common and treatable. It can affect energy, concentration, sleep, and appetite. Professional assessment helps tailor therapy, lifestyle supports, or medication when appropriate.',
    symptoms: [
      'Sadness, emptiness, or irritability most of the day',
      'Loss of interest, fatigue, sleep or appetite changes',
    ],
    whenToSeekCare: [
      'Thoughts of self-harm or suicide — call your local emergency number or crisis line now.',
      'If symptoms last two weeks or more or impair daily life — reach out promptly.',
    ],
    selfCareTips: [
      'Maintain social connection and routine where possible',
      'Combine professional treatment with sleep and movement goals your team supports',
    ],
  },
]
