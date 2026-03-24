import type {
  ConsultationRequest,
  DocumentMeta,
  HealthRecord,
} from '../types'

function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null && !Array.isArray(x)
}

export function isHealthRecordArray(value: unknown): value is HealthRecord[] {
  if (!Array.isArray(value)) return false
  return value.every(
    (item) =>
      isRecord(item) &&
      typeof item.id === 'string' &&
      (item.kind === 'note' || item.kind === 'medication') &&
      typeof item.title === 'string' &&
      typeof item.detail === 'string' &&
      typeof item.updatedAt === 'string',
  )
}

export function isDocumentMetaArray(value: unknown): value is DocumentMeta[] {
  if (!Array.isArray(value)) return false
  return value.every(
    (item) =>
      isRecord(item) &&
      typeof item.id === 'string' &&
      typeof item.label === 'string' &&
      typeof item.addedAt === 'string',
  )
}

export function isConsultationArray(value: unknown): value is ConsultationRequest[] {
  if (!Array.isArray(value)) return false
  return value.every(
    (item) =>
      isRecord(item) &&
      typeof item.id === 'string' &&
      typeof item.providerId === 'string' &&
      typeof item.providerName === 'string' &&
      typeof item.message === 'string' &&
      typeof item.preferredTime === 'string' &&
      typeof item.createdAt === 'string',
  )
}
