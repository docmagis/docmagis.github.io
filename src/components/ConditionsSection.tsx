import { useMemo, useState } from 'react'
import { ChevronRight, Search } from 'lucide-react'
import { conditions } from '../data/conditions'
import type { ConditionArticle } from '../types'
import { ConditionPanel } from './ConditionPanel'
import { SectionShell } from './SectionShell'

export function ConditionsSection() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<ConditionArticle | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return conditions
    return conditions.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.overview.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <>
      <SectionShell
        id="conditions"
        title="Health information library"
        subtitle="Concise, structured guides with prompts on when to seek care. Content is for general education only and is not tailored to your individual medical situation."
      >
        <div className="relative mb-8 max-w-md">
          <label htmlFor="condition-search" className="sr-only">
            Search conditions
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-doc-muted"
            aria-hidden
          />
          <input
            id="condition-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics…"
            className="w-full rounded-xl border border-doc-border bg-white py-3 pl-11 pr-4 text-doc-ink placeholder:text-doc-muted/80 focus:border-doc-teal-600 focus:outline-none focus:ring-2 focus:ring-doc-teal-600/25"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-doc-border bg-doc-canvas px-6 py-12 text-center text-doc-muted">
            No topics match that search.
          </p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {filtered.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className="flex w-full items-start justify-between gap-4 rounded-2xl border border-doc-border bg-white p-5 text-left shadow-sm transition hover:border-doc-teal-600/40 hover:shadow-[var(--shadow-doc-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-doc-teal-600/30"
                >
                  <div>
                    <span className="font-semibold text-doc-ink">{c.title}</span>
                    <p className="mt-2 text-sm leading-relaxed text-doc-muted">{c.summary}</p>
                  </div>
                  <ChevronRight className="mt-1 size-5 shrink-0 text-doc-muted" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
      </SectionShell>

      <ConditionPanel open={Boolean(active)} article={active} onClose={() => setActive(null)} />
    </>
  )
}
