export function Footer() {
  return (
    <footer className="border-t border-doc-border bg-doc-ink px-4 py-12 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-lg font-semibold text-white">DocMagis Medical Web</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              Educational information on this site is for general understanding only. It may be incomplete or outdated
              and is not a diagnosis or treatment plan. Always consult a qualified licensed professional for personal
              medical decisions.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Important</p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-400">
              <li>Call your local emergency number for urgent or life-threatening symptoms.</li>
              <li>
                Portal access may begin with a display name you provide; additional identity verification may be required
                for clinical services.
              </li>
              <li>
                Information you enter in the health hub remains associated with your session on this device and may be
                removed when you sign out or reset application data, in line with your preferences.
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} DocMagis Medical Web. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
