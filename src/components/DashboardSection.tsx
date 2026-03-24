import { useId, useState } from 'react'
import {
  CalendarClock,
  FileText,
  Pill,
  Plus,
  StickyNote,
  Trash2,
  UserRound,
} from 'lucide-react'
import type {
  ConsultationRequest,
  DemoSession,
  DocumentMeta,
  HealthRecord,
  HealthRecordKind,
} from '../types'
import { SectionShell } from './SectionShell'

const tabs = ['Profile', 'My records', 'Upcoming', 'Documents'] as const

const tabSlug: Record<(typeof tabs)[number], string> = {
  Profile: 'profile',
  'My records': 'records',
  Upcoming: 'upcoming',
  Documents: 'documents',
}

type DashboardSectionProps = {
  session: DemoSession | null
  onOpenSignIn: () => void
  records: HealthRecord[]
  setRecords: React.Dispatch<React.SetStateAction<HealthRecord[]>>
  documents: DocumentMeta[]
  setDocuments: React.Dispatch<React.SetStateAction<DocumentMeta[]>>
  consultations: ConsultationRequest[]
}

export function DashboardSection({
  session,
  onOpenSignIn,
  records,
  setRecords,
  documents,
  setDocuments,
  consultations,
}: DashboardSectionProps) {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Profile')
  const tabListId = useId()

  const addRecord = (kind: HealthRecordKind) => {
    const id = crypto.randomUUID()
    const now = new Date().toISOString()
    setRecords((prev) => [
      {
        id,
        kind,
        title: kind === 'medication' ? 'New medication' : 'New note',
        detail: '',
        updatedAt: now,
      },
      ...prev,
    ])
  }

  const updateRecord = (id: string, patch: Partial<Pick<HealthRecord, 'title' | 'detail'>>) => {
    setRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, ...patch, updatedAt: new Date().toISOString() }
          : r,
      ),
    )
  }

  const removeRecord = (id: string) => {
    setRecords((prev) => prev.filter((r) => r.id !== id))
  }

  const addDocument = () => {
    const label = window.prompt('Document label (e.g. Lab results — March)')
    if (!label?.trim()) return
    setDocuments((prev) => [
      {
        id: crypto.randomUUID(),
        label: label.trim(),
        addedAt: new Date().toISOString(),
      },
      ...prev,
    ])
  }

  const removeDocument = (id: string) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id))
  }

  return (
    <SectionShell
      id="dashboard"
      title="Health hub"
      subtitle="A structured workspace for notes, medication entries, consultation requests, and document references—maintained for continuity within your session."
    >
      {!session ? (
        <div className="rounded-2xl border border-doc-border bg-doc-canvas p-8 text-center">
          <UserRound className="mx-auto size-12 text-doc-teal-700" aria-hidden />
          <p className="mt-4 text-lg font-semibold text-doc-ink">Sign in to use your health hub</p>
          <p className="mt-2 text-sm text-doc-muted">
            Sign in to personalize your health hub. Your display name and entries are retained for your session.
          </p>
          <button
            type="button"
            onClick={onOpenSignIn}
            className="mt-6 rounded-xl bg-doc-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-doc-teal-600"
          >
            Sign in
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-doc-border bg-white shadow-[var(--shadow-doc-card)]">
          <div
            role="tablist"
            aria-labelledby={`${tabListId}-label`}
            className="flex flex-wrap gap-2 border-b border-doc-border p-3 sm:p-4"
          >
            <span id={`${tabListId}-label`} className="sr-only">
              Dashboard sections
            </span>
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                id={`tab-${tabSlug[t]}`}
                aria-controls={`panel-${tabSlug[t]}`}
                onClick={() => setTab(t)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  tab === t
                    ? 'bg-doc-teal-700 text-white'
                    : 'text-doc-muted hover:bg-doc-canvas hover:text-doc-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-6">
            {tab === 'Profile' ? (
              <div
                role="tabpanel"
                id="panel-profile"
                aria-labelledby="tab-profile"
                className="space-y-4"
              >
                <div className="flex items-start gap-4 rounded-2xl bg-doc-canvas p-5">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-doc-teal-700 shadow-sm">
                    <UserRound className="size-8" aria-hidden />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-doc-ink">{session.displayName}</p>
                    <p className="text-sm text-doc-muted capitalize">{session.role} workspace</p>
                    <p className="mt-3 text-sm leading-relaxed text-doc-muted">
                      Use this workspace to organize information in support of your care. Disclosure to third parties
                      follows your authorization and applicable privacy requirements.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {tab === 'My records' ? (
              <div
                role="tabpanel"
                id="panel-records"
                aria-labelledby="tab-records"
                className="space-y-4"
              >
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => addRecord('note')}
                    className="inline-flex items-center gap-2 rounded-xl border border-doc-border bg-white px-4 py-2 text-sm font-semibold text-doc-ink hover:bg-doc-canvas"
                  >
                    <StickyNote className="size-4" aria-hidden />
                    Add note
                  </button>
                  <button
                    type="button"
                    onClick={() => addRecord('medication')}
                    className="inline-flex items-center gap-2 rounded-xl border border-doc-border bg-white px-4 py-2 text-sm font-semibold text-doc-ink hover:bg-doc-canvas"
                  >
                    <Pill className="size-4" aria-hidden />
                    Add medication line
                  </button>
                </div>
                {records.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-doc-border px-4 py-10 text-center text-sm text-doc-muted">
                    No records yet. Add a note or medication entry for your personal reference.
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {records.map((r) => (
                      <li
                        key={r.id}
                        className="rounded-2xl border border-doc-border p-4"
                      >
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-doc-muted">
                            {r.kind === 'medication' ? (
                              <Pill className="size-3.5" aria-hidden />
                            ) : (
                              <StickyNote className="size-3.5" aria-hidden />
                            )}
                            {r.kind}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeRecord(r.id)}
                            className="rounded-lg p-2 text-doc-muted hover:bg-red-50 hover:text-red-700"
                            aria-label={`Remove ${r.kind}`}
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                        <label className="sr-only" htmlFor={`title-${r.id}`}>
                          Title
                        </label>
                        <input
                          id={`title-${r.id}`}
                          value={r.title}
                          onChange={(e) => updateRecord(r.id, { title: e.target.value })}
                          className="mb-2 w-full rounded-lg border border-doc-border px-3 py-2 text-sm font-medium text-doc-ink"
                        />
                        <label className="sr-only" htmlFor={`detail-${r.id}`}>
                          Details
                        </label>
                        <textarea
                          id={`detail-${r.id}`}
                          value={r.detail}
                          onChange={(e) => updateRecord(r.id, { detail: e.target.value })}
                          rows={3}
                          className="w-full resize-y rounded-lg border border-doc-border px-3 py-2 text-sm text-doc-ink"
                          placeholder="Details, doses, questions for your clinician…"
                        />
                        <p className="mt-2 text-xs text-doc-muted">
                          Updated {new Date(r.updatedAt).toLocaleString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}

            {tab === 'Upcoming' ? (
              <div
                role="tabpanel"
                id="panel-upcoming"
                aria-labelledby="tab-upcoming"
                className="space-y-4"
              >
                {consultations.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-doc-border px-4 py-10 text-center text-sm text-doc-muted">
                    No consultation requests yet. Use “Request consultation” on a professional card to add one.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {consultations.map((c) => (
                      <li
                        key={c.id}
                        className="flex gap-3 rounded-2xl border border-doc-border p-4"
                      >
                        <CalendarClock className="mt-0.5 size-5 shrink-0 text-doc-teal-700" aria-hidden />
                        <div>
                          <p className="font-semibold text-doc-ink">{c.providerName}</p>
                          <p className="mt-1 text-sm text-doc-muted">{c.preferredTime || 'No time preference noted'}</p>
                          <p className="mt-2 text-sm leading-relaxed text-doc-ink/90">{c.message}</p>
                          <p className="mt-2 text-xs text-doc-muted">
                            Saved {new Date(c.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}

            {tab === 'Documents' ? (
              <div
                role="tabpanel"
                id="panel-documents"
                aria-labelledby="tab-documents"
                className="space-y-4"
              >
                <button
                  type="button"
                  onClick={addDocument}
                  className="inline-flex items-center gap-2 rounded-xl bg-doc-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-doc-teal-600"
                >
                  <Plus className="size-4" aria-hidden />
                  Add document label
                </button>
                <p className="text-sm text-doc-muted">
                  Document entries record title and date for your records. Attachment handling follows your organization’s
                  clinical information policies.
                </p>
                {documents.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-doc-border px-4 py-10 text-center text-sm text-doc-muted">
                    Track filenames or visit summaries you keep elsewhere.
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {documents.map((d) => (
                      <li
                        key={d.id}
                        className="flex items-center justify-between gap-3 rounded-xl border border-doc-border px-4 py-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <FileText className="size-5 shrink-0 text-doc-muted" aria-hidden />
                          <div className="min-w-0">
                            <p className="truncate font-medium text-doc-ink">{d.label}</p>
                            <p className="text-xs text-doc-muted">
                              Added {new Date(d.addedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeDocument(d.id)}
                          className="shrink-0 rounded-lg p-2 text-doc-muted hover:bg-red-50 hover:text-red-700"
                          aria-label={`Remove ${d.label}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </SectionShell>
  )
}
