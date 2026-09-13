import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { profile } from '../data/profile'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'contact', label: 'Contact' },
]

const IDS = LINKS.map((l) => l.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(IDS)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#hero" className="nav__brand">
          {profile.shortName}
          <span>.</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              aria-current={active === id ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__icon-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <a className="btn btn--primary nav__cta" href={`mailto:${profile.email}`}>
            Get in touch
          </a>

          <button
            className="nav__icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map(({ id, label }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
