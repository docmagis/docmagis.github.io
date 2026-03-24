import { useState, type FormEvent } from 'react'
import type { DemoRole, DemoSession } from '../types'
import { Modal } from './Modal'

type SignInModalProps = {
  open: boolean
  onClose: () => void
  session: DemoSession | null
  onSignIn: (name: string, role: DemoRole) => void
  onSignOut: () => void
}

export function SignInModal({ open, onClose, session, onSignIn, onSignOut }: SignInModalProps) {
  const [name, setName] = useState('')
  const [role, setRole] = useState<DemoRole>('patient')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSignIn(name, role)
    onClose()
    setName('')
  }

  if (session) {
    return (
      <Modal
        open={open}
        title="Your session"
        onClose={onClose}
        footer={
          <button
            type="button"
            onClick={() => {
              onSignOut()
              onClose()
            }}
            className="w-full rounded-xl border border-doc-border bg-white px-4 py-3 text-sm font-semibold text-doc-ink hover:bg-doc-canvas"
          >
            Sign out
          </button>
        }
      >
        <p className="text-sm text-doc-muted">
          Signed in as <strong className="text-doc-ink">{session.displayName}</strong> (
          {session.role === 'patient' ? 'Patient' : 'Caregiver'} view).
        </p>
        <p className="mt-4 text-sm leading-relaxed text-doc-muted">
          Your session is identified by the display name and role you selected. Clinical services may require further
          authentication and verification in accordance with applicable standards.
        </p>
      </Modal>
    )
  }

  return (
    <Modal
      open={open}
      title="Sign in"
      onClose={onClose}
      footer={
        <button
          type="submit"
          form="portal-signin-form"
          className="w-full rounded-xl bg-doc-teal-700 px-4 py-3 text-sm font-semibold text-white hover:bg-doc-teal-600"
        >
          Continue
        </button>
      }
    >
      <form id="portal-signin-form" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="portal-display-name" className="block text-sm font-medium text-doc-ink">
            Display name
          </label>
          <input
            id="portal-display-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className="mt-1 w-full rounded-xl border border-doc-border px-4 py-3 text-doc-ink focus:border-doc-teal-600 focus:outline-none focus:ring-2 focus:ring-doc-teal-600/25"
            placeholder="e.g. Alex Rivera"
          />
        </div>
        <div>
          <span className="block text-sm font-medium text-doc-ink">Role</span>
          <div className="mt-2 flex gap-3">
            <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-xl border border-doc-border px-4 py-3 has-[:checked]:border-doc-teal-600 has-[:checked]:bg-doc-teal-100/50">
              <input
                type="radio"
                name="role"
                checked={role === 'patient'}
                onChange={() => setRole('patient')}
              />
              <span className="text-sm font-medium">Patient</span>
            </label>
            <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-xl border border-doc-border px-4 py-3 has-[:checked]:border-doc-teal-600 has-[:checked]:bg-doc-teal-100/50">
              <input
                type="radio"
                name="role"
                checked={role === 'caregiver'}
                onChange={() => setRole('caregiver')}
              />
              <span className="text-sm font-medium">Caregiver</span>
            </label>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-doc-muted">
          By continuing, you agree to use this portal in accordance with its terms and privacy notices. Access to
          regulated health information may be subject to additional safeguards.
        </p>
      </form>
    </Modal>
  )
}
