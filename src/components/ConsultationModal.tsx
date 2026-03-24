import { useState, type FormEvent } from 'react'
import type { Provider } from '../types'
import { Modal } from './Modal'

type ConsultationModalProps = {
  open: boolean
  provider: Provider | null
  onClose: () => void
  onSubmit: (payload: { message: string; preferredTime: string }) => void
}

export function ConsultationModal({ open, provider, onClose, onSubmit }: ConsultationModalProps) {
  const [message, setMessage] = useState('')
  const [preferredTime, setPreferredTime] = useState('')

  const handleClose = () => {
    setMessage('')
    setPreferredTime('')
    onClose()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!provider) return
    onSubmit({ message: message.trim(), preferredTime: preferredTime.trim() })
    handleClose()
  }

  return (
    <Modal
      open={open && Boolean(provider)}
      title={provider ? `Request with ${provider.name}` : 'Request consultation'}
      onClose={handleClose}
      footer={
        <button
          type="submit"
          form="consultation-form"
          className="w-full rounded-xl bg-doc-coral-500 px-4 py-3 text-sm font-semibold text-white hover:bg-doc-coral-600"
        >
          Save to health hub
        </button>
      }
    >
      {provider ? (
        <form id="consultation-form" className="space-y-4" onSubmit={handleSubmit}>
          <p className="text-sm text-doc-muted">
            {provider.specialty} · {provider.credentials}
          </p>
          <div>
            <label htmlFor="consult-msg" className="block text-sm font-medium text-doc-ink">
              What would you like help with?
            </label>
            <textarea
              id="consult-msg"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full resize-y rounded-xl border border-doc-border px-4 py-3 text-doc-ink focus:border-doc-teal-600 focus:outline-none focus:ring-2 focus:ring-doc-teal-600/25"
              placeholder="Provide a concise clinical summary for your care team’s review."
            />
          </div>
          <div>
            <label htmlFor="consult-time" className="block text-sm font-medium text-doc-ink">
              Preferred times
            </label>
            <input
              id="consult-time"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="mt-1 w-full rounded-xl border border-doc-border px-4 py-3 text-doc-ink focus:border-doc-teal-600 focus:outline-none focus:ring-2 focus:ring-doc-teal-600/25"
              placeholder="e.g. weekday mornings, next week"
            />
          </div>
          <p className="text-xs text-doc-muted">
            Upon submission, your request will appear under Upcoming in your health hub. Scheduling and confirmation are
            completed through your clinician’s office or designated scheduling channels.
          </p>
        </form>
      ) : null}
    </Modal>
  )
}
