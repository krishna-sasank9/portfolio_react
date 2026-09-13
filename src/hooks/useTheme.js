import { useCallback, useEffect, useState } from 'react'

// The initial value is already on <html> from the inline script in index.html,
// so we read it back rather than recomputing (and re-flashing) it here.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Private browsing — the theme still applies for this session.
    }
  }, [theme])

  const toggle = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  )

  return { theme, toggle }
}
