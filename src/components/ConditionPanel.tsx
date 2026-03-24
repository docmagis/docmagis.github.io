import { useEffect, useId } from 'react'
import { BookOpen, X } from 'lucide-react'
import type { ConditionArticle } from '../types'

type ConditionPanelProps = {
  open: boolean
  article: ConditionArticle | null
  onClose: () => void
}

export function ConditionPanel({ open, article, onClose }: ConditionPanelProps) {
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open || !article) return null

  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
        aria-label="Close panel"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-y-0 right-0 flex w-full max-w-lg flex-col border-l border-doc-border bg-white shadow-[var(--shadow-doc-float)] sm:rounded-l-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-doc-border px-6 py-4">
          <div className="flex gap-3">
            <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-doc-teal-100 text-doc-teal-700">
              <BookOpen className="size-5" aria-hidden />
            </span>
            <div>
              <h2 id={titleId} className="text-xl font-semibold text-doc-ink">
                {article.title}
              </h2>
              <p className="mt-1 text-sm text-doc-muted">{article.summary}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-doc-muted hover:bg-doc-canvas hover:text-doc-ink"
            aria-label="Close article"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <p className="rounded-xl border border-amber-200/80 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
            <strong className="font-semibold">Educational only.</strong> This summary supports general understanding. It
            is not medical advice, is not individualized to you, and does not replace evaluation by a licensed
            clinician.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-doc-muted">Overview</h3>
          <p className="mt-2 text-sm leading-relaxed text-doc-ink/90">{article.overview}</p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-doc-muted">Common symptoms</h3>
          <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-doc-ink/90">
            {article.symptoms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-doc-muted">When to seek care</h3>
          <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-doc-ink/90">
            {article.whenToSeekCare.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          {article.selfCareTips.length > 0 ? (
            <>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-doc-muted">
                Self-care topics to discuss
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-doc-ink/90">
                {article.selfCareTips.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
