import { Menu, Stethoscope, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#professionals', label: 'Professionals' },
  { href: '#conditions', label: 'Health info' },
  { href: '#dashboard', label: 'Health hub' },
] as const

type HeaderProps = {
  onSignInClick: () => void
  sessionLabel?: string | null
}

export function Header({ onSignInClick, sessionLabel }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-doc-border/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-lg text-doc-ink focus-visible:outline-offset-4"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-doc-teal-100 text-doc-teal-700">
            <Stethoscope className="size-5" aria-hidden />
          </span>
          <span className="text-left font-semibold leading-tight">
            DocMagis
            <span className="block text-xs font-normal text-doc-muted">Medical Web</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-doc-muted hover:bg-doc-canvas hover:text-doc-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {sessionLabel ? (
            <span className="hidden max-w-[10rem] truncate text-sm text-doc-muted sm:inline" title={sessionLabel}>
              {sessionLabel}
            </span>
          ) : null}
          <button
            type="button"
            onClick={onSignInClick}
            className="rounded-xl bg-doc-teal-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-doc-teal-600 md:px-4"
          >
            {sessionLabel ? 'Account' : 'Sign in'}
          </button>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-doc-ink md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-doc-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-base font-medium text-doc-ink hover:bg-doc-canvas"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                onSignInClick()
              }}
              className="mt-2 rounded-xl bg-doc-teal-700 px-4 py-3 text-center text-base font-semibold text-white"
            >
              {sessionLabel ? 'Account / sign out' : 'Sign in'}
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
