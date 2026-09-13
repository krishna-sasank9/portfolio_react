import { useEffect, useState } from 'react'

/**
 * Types each word out, holds, deletes, moves to the next.
 * Replaces the `typewriter-effect` dependency with ~30 lines.
 */
export function useTypewriter(words, { typeMs = 90, deleteMs = 45, holdMs = 1800 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const word = words[index % words.length]

    // Finished typing — pause before deleting.
    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(hold)
    }

    // Finished deleting — advance to the next word.
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const tick = setTimeout(
      () =>
        setText((current) =>
          deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1)
        ),
      deleting ? deleteMs : typeMs
    )
    return () => clearTimeout(tick)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs])

  return text
}
