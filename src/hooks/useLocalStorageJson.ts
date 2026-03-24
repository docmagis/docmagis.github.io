import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

export function useLocalStorageJson<T>(
  key: string,
  initial: T,
  validate: (value: unknown) => value is T,
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      if (!raw) return initial
      const parsed: unknown = JSON.parse(raw)
      return validate(parsed) ? parsed : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch {
      /* ignore quota */
    }
  }, [key, state])

  return [state, setState]
}
