import { ArrowRight, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-doc-teal-100/80 via-white to-doc-canvas px-4 pb-20 pt-12 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-doc-teal-600/10 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-doc-border bg-white/80 px-3 py-1 text-sm font-medium text-doc-teal-700 shadow-sm">
            <Sparkles className="size-4" aria-hidden />
            Care navigation, simplified
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-semibold tracking-tight text-doc-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            DocMagis Medical Web connects you with licensed professionals and trusted health context—on one calm page.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-doc-muted">
            Explore curated educational articles, browse our directory of licensed clinicians, and maintain a personal
            health hub—all presented for clarity and continuity of care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#professionals"
              className="inline-flex items-center gap-2 rounded-xl bg-doc-teal-700 px-5 py-3 text-base font-semibold text-white shadow-[var(--shadow-doc-card)] hover:bg-doc-teal-600"
            >
              Find a professional
              <ArrowRight className="size-5" aria-hidden />
            </a>
            <a
              href="#conditions"
              className="inline-flex items-center gap-2 rounded-xl border border-doc-border bg-white px-5 py-3 text-base font-semibold text-doc-ink hover:bg-doc-canvas"
            >
              Browse health topics
            </a>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            <li className="rounded-2xl border border-doc-border bg-white/90 p-4 shadow-[var(--shadow-doc-card)]">
              <ShieldCheck className="size-8 text-doc-teal-700" aria-hidden />
              <p className="mt-3 font-semibold text-doc-ink">Licensed network</p>
              <p className="mt-1 text-sm text-doc-muted">Directory cards highlight credentials and languages.</p>
            </li>
            <li className="rounded-2xl border border-doc-border bg-white/90 p-4 shadow-[var(--shadow-doc-card)]">
              <HeartPulse className="size-8 text-doc-coral-500" aria-hidden />
              <p className="mt-3 font-semibold text-doc-ink">Education-first</p>
              <p className="mt-1 text-sm text-doc-muted">Condition guides with clear “when to seek care” prompts.</p>
            </li>
            <li className="rounded-2xl border border-doc-border bg-white/90 p-4 shadow-[var(--shadow-doc-card)]">
              <Sparkles className="size-8 text-doc-teal-600" aria-hidden />
              <p className="mt-3 font-semibold text-doc-ink">Your health hub</p>
              <p className="mt-1 text-sm text-doc-muted">
                Notes, medications, and consultation requests retained for your convenience.
              </p>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-doc-border bg-white p-6 shadow-[var(--shadow-doc-float)]">
            <p className="text-sm font-semibold uppercase tracking-wide text-doc-muted">At a glance</p>
            <dl className="mt-6 space-y-4">
              <div className="flex justify-between gap-4 border-b border-doc-border pb-4">
                <dt className="text-doc-muted">Directory coverage</dt>
                <dd className="font-semibold text-doc-ink">6 specialties</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-doc-border pb-4">
                <dt className="text-doc-muted">Condition guides</dt>
                <dd className="font-semibold text-doc-ink">6 topics</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-doc-muted">Privacy posture</dt>
                <dd className="text-right font-semibold text-doc-ink">Confidential to your session on this device</dd>
              </div>
            </dl>
            <p className="mt-6 rounded-xl bg-doc-canvas p-4 text-sm leading-relaxed text-doc-muted">
              DocMagis Medical Web supports education and care coordination. It does not replace emergency services or
              the judgment of your treating clinician.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
