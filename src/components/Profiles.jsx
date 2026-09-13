import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiCodechef, SiGithub, SiLeetcode } from 'react-icons/si'
import { profiles } from '../data/profile'

// Local icons rather than hotlinked logos from third-party CDNs.
const ICONS = {
  LeetCode: SiLeetcode,
  CodeChef: SiCodechef,
  GitHub: SiGithub,
}

export default function Profiles() {
  return (
    <section id="profiles" className="section profiles">
      <div className="section__inner">
        <p className="section__label">Profiles</p>
        <h2 className="section__title">Find me elsewhere</h2>
        <p className="section__lead">
          Competitive programming keeps my fundamentals sharp — here&rsquo;s the proof.
        </p>

        <div className="profiles__grid">
          {profiles.map((item, i) => {
            const Icon = ICONS[item.name]

            return (
              <motion.a
                className="profile-card"
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="profile-card__top">
                  {Icon && <Icon className="profile-card__icon" aria-hidden="true" />}
                  <FiArrowUpRight className="profile-card__arrow" aria-hidden="true" />
                </div>

                <p className="profile-card__stat">{item.stat}</p>
                <p className="profile-card__stat-label">{item.statLabel}</p>

                <div className="profile-card__foot">
                  <span className="profile-card__name">{item.name}</span>
                  <span className="profile-card__handle">@{item.handle}</span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
