import { useCallback, useState } from 'react'
import type { DemoSession, DemoRole } from '../types'

const STORAGE_KEY = 'docmagis_session'

function readSession(): DemoSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as DemoSession
    if (
      parsed &&
      typeof parsed.displayName === 'string' &&
      (parsed.role === 'patient' || parsed.role === 'caregiver')
    ) {
      return parsed
    }
    return null
  } catch {
    return null
  }
}

export function useDemoSession() {
  const [session, setSession] = useState<DemoSession | null>(() =>
    typeof window === 'undefined' ? null : readSession(),
  )

  const signIn = useCallback((displayName: string, role: DemoRole) => {
    const next: DemoSession = { displayName: displayName.trim() || 'Guest', role }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setSession(next)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setSession(null)
  }, [])

  return { session, signIn, signOut }
}
