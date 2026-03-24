export interface Provider {
  id: string
  name: string
  specialty: string
  credentials: string
  languages: string[]
  bio: string
  verified: boolean
}

export interface ConditionArticle {
  id: string
  title: string
  summary: string
  overview: string
  symptoms: string[]
  whenToSeekCare: string[]
  selfCareTips: string[]
}

export type HealthRecordKind = 'note' | 'medication'

export interface HealthRecord {
  id: string
  kind: HealthRecordKind
  title: string
  detail: string
  updatedAt: string
}

export interface ConsultationRequest {
  id: string
  providerId: string
  providerName: string
  message: string
  preferredTime: string
  createdAt: string
}

export interface DocumentMeta {
  id: string
  label: string
  addedAt: string
}

export type DemoRole = 'patient' | 'caregiver'

export interface DemoSession {
  displayName: string
  role: DemoRole
}
