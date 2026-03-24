import type { ReactNode } from 'react'

type SectionShellProps = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function SectionShell({ id, title, subtitle, children, className = '' }: SectionShellProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-doc-border bg-doc-surface px-4 py-16 sm:px-6 lg:px-8 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-3xl">
          <h2 id={`${id}-heading`} className="text-3xl font-semibold tracking-tight text-doc-ink">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-lg leading-relaxed text-doc-muted">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}
