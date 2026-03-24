import { useEffect, useId, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

type ModalProps = {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
}

export function Modal({ open, title, onClose, children, footer }: ModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 p-4 sm:items-center"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[min(90dvh,720px)] w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-doc-float)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-doc-border px-5 py-4">
          <h2 id={titleId} className="text-lg font-semibold text-doc-ink">
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-doc-muted hover:bg-doc-canvas hover:text-doc-ink"
            aria-label="Close dialog"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="max-h-[min(60dvh,480px)] overflow-y-auto px-5 py-4">{children}</div>
        {footer ? (
          <div className="border-t border-doc-border bg-doc-canvas/60 px-5 py-4">{footer}</div>
        ) : null}
      </div>
    </div>
  )
}
