import { motion } from 'framer-motion'
import { FiArrowDownRight, FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'
import { profile } from '../data/profile'
import me from '../assets/portrait.jpg'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

// Children animate in sequence without hand-tuned delays on each one.
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="hero" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <motion.div
        className="hero__inner"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <div className="hero__content">
          <motion.p className="hero__eyebrow" variants={rise}>
            <span className="hero__status" aria-hidden="true" />
            Available for opportunities
          </motion.p>

          <motion.h1 className="hero__name" variants={rise}>
            {profile.name}
          </motion.h1>

          <motion.p className="hero__role" variants={rise} aria-live="polite">
            {typed}
            <span className="hero__caret" aria-hidden="true" />
          </motion.p>

          <motion.p className="hero__tagline" variants={rise}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero__actions" variants={rise}>
            <a className="btn btn--primary" href="#projects">
              View my work <FiArrowDownRight />
            </a>
            <a
              className="btn btn--ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFileText /> Resume
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={rise}>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email">
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait-ring" aria-hidden="true" />
          <img
            src={me}
            alt={`Portrait of ${profile.name}`}
            width="420"
            height="420"
            fetchPriority="high"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
