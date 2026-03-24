import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { providers, SPECIALTIES } from '../data/providers'
import type { Provider } from '../types'
import { ProviderCard } from './ProviderCard'
import { SectionShell } from './SectionShell'

type ProvidersSectionProps = {
  onRequestConsultation: (p: Provider) => void
}

export function ProvidersSection({ onRequestConsultation }: ProvidersSectionProps) {
  const [query, setQuery] = useState('')
  const [specialty, setSpecialty] = useState<(typeof SPECIALTIES)[number]>('All specialties')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return providers.filter((p) => {
      const matchSpec = specialty === 'All specialties' || p.specialty === specialty
      if (!q) return matchSpec
      const blob = `${p.name} ${p.specialty} ${p.bio} ${p.credentials}`.toLowerCase()
      return matchSpec && blob.includes(q)
    })
  }, [query, specialty])

  return (
    <SectionShell
      id="professionals"
      title="Licensed healthcare professionals"
      subtitle="Browse clinicians by specialty, language, and credentials. Consultation requests are recorded in your health hub for follow-up through standard scheduling processes."
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="relative max-w-md flex-1">
          <label htmlFor="provider-search" className="sr-only">
            Search professionals
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-doc-muted"
            aria-hidden
          />
          <input
            id="provider-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, specialty, or keyword…"
            className="w-full rounded-xl border border-doc-border bg-white py-3 pl-11 pr-4 text-doc-ink placeholder:text-doc-muted/80 focus:border-doc-teal-600 focus:outline-none focus:ring-2 focus:ring-doc-teal-600/25"
          />
        </div>
        <div className="sm:w-56">
          <label htmlFor="specialty-filter" className="mb-1 block text-sm font-medium text-doc-muted">
            Specialty
          </label>
          <select
            id="specialty-filter"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value as (typeof SPECIALTIES)[number])}
            className="w-full rounded-xl border border-doc-border bg-white px-4 py-3 text-doc-ink focus:border-doc-teal-600 focus:outline-none focus:ring-2 focus:ring-doc-teal-600/25"
          >
            {SPECIALTIES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-doc-border bg-doc-canvas px-6 py-12 text-center text-doc-muted">
          No professionals match your filters. Try clearing the search or choosing “All specialties.”
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.id}>
              <ProviderCard provider={p} onRequest={onRequestConsultation} />
            </li>
          ))}
        </ul>
      )}
    </SectionShell>
  )
}
