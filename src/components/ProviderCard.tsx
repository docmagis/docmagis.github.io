import { BadgeCheck, Globe2, MessageCircle } from 'lucide-react'
import type { Provider } from '../types'

type ProviderCardProps = {
  provider: Provider
  onRequest: (p: Provider) => void
}

export function ProviderCard({ provider, onRequest }: ProviderCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-doc-border bg-white p-6 shadow-[var(--shadow-doc-card)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-doc-ink">{provider.name}</h3>
          <p className="mt-1 text-sm font-medium text-doc-teal-700">{provider.specialty}</p>
        </div>
        {provider.verified ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-doc-teal-100 px-2.5 py-1 text-xs font-semibold text-doc-teal-800">
            <BadgeCheck className="size-3.5" aria-hidden />
            Verified
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm text-doc-muted">{provider.credentials}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-doc-ink/90">{provider.bio}</p>
      <p className="mt-4 flex items-center gap-2 text-sm text-doc-muted">
        <Globe2 className="size-4 shrink-0" aria-hidden />
        {provider.languages.join(' · ')}
      </p>
      <button
        type="button"
        onClick={() => onRequest(provider)}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-doc-coral-500 px-4 py-3 text-sm font-semibold text-white hover:bg-doc-coral-600"
      >
        <MessageCircle className="size-4" aria-hidden />
        Request consultation
      </button>
    </article>
  )
}
