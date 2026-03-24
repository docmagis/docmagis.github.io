import type { Provider } from '../types'

export const SPECIALTIES = [
  'All specialties',
  'Family medicine',
  'Internal medicine',
  'Pediatrics',
  'Mental health',
  'Dermatology',
] as const

export const providers: Provider[] = [
  {
    id: 'p1',
    name: 'Dr. Amara Okonkwo, MD',
    specialty: 'Family medicine',
    credentials: 'Board-certified family physician · 12 years experience',
    languages: ['English', 'French'],
    bio: 'Focus on preventive care, chronic disease management, and coordinated referrals when you need a specialist.',
    verified: true,
  },
  {
    id: 'p2',
    name: 'Dr. James Lin, DO',
    specialty: 'Internal medicine',
    credentials: 'Board-certified internist · Telehealth and in-person follow-up',
    languages: ['English', 'Mandarin'],
    bio: 'Helps adults navigate complex symptoms, medication reviews, and lab result follow-up with clear next steps.',
    verified: true,
  },
  {
    id: 'p3',
    name: 'Dr. Sofia Ramirez, MD',
    specialty: 'Pediatrics',
    credentials: 'Board-certified pediatrician · Developmental and acute care',
    languages: ['English', 'Spanish'],
    bio: 'Care for infants through adolescence, including growth, immunizations, and common childhood illnesses.',
    verified: true,
  },
  {
    id: 'p4',
    name: 'Dr. Mei Patel, PhD, LP',
    specialty: 'Mental health',
    credentials: 'Licensed psychologist · CBT and stress management',
    languages: ['English', 'Hindi'],
    bio: 'Short-term therapy, coping strategies for anxiety and burnout, and collaboration with your medical team.',
    verified: true,
  },
  {
    id: 'p5',
    name: 'Dr. Ethan Brooks, MD',
    specialty: 'Dermatology',
    credentials: 'Board-certified dermatologist · Medical dermatology',
    languages: ['English'],
    bio: 'Evaluation of rashes, acne, eczema, and suspicious lesions with photo-friendly tele-dermatology when appropriate.',
    verified: true,
  },
  {
    id: 'p6',
    name: 'Dr. Hana Farouk, MD',
    specialty: 'Family medicine',
    credentials: 'Board-certified family physician · Women’s health',
    languages: ['English', 'Arabic'],
    bio: 'Comprehensive primary care with emphasis on women’s preventive services and reproductive health counseling.',
    verified: true,
  },
]
