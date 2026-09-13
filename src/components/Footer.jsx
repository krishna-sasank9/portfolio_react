import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__name">{profile.shortName}.</p>
          <p className="footer__note">
            Designed &amp; built with React and far too much coffee.
          </p>
        </div>

        <div className="footer__socials">
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
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="footer__bar">
        {/* Derived, so this never goes stale again. */}
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#hero" className="footer__top" aria-label="Back to top">
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  )
}
