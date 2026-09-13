import { useEffect, useState } from 'react'

/**
 * Scroll-spy for the nav. Uses IntersectionObserver rather than a scroll
 * listener so it costs nothing on the main thread between intersections.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // The entry closest to the top of the viewport wins.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setActive(visible[0].target.id)
      },
      // Band across the upper-middle of the viewport.
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    )

    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean)
    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [ids])

  return active
}
