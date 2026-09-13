import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { coreStrengths } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner about__grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section__label">About</p>
          <h2 className="section__title">A bit about me</h2>

          {profile.bio.map((paragraph) => (
            <p className="about__text" key={paragraph.slice(0, 24)}>
              {paragraph}
            </p>
          ))}

          <ul className="about__pills">
            {coreStrengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </motion.div>

        <motion.aside
          className="about__stats"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Stat value="2+" label="Years building production systems" />
          <Stat value="750+" label="DSA problems solved" />
          <Stat value="8.91" label="B.Tech CGPA" />
        </motion.aside>
      </div>
    </section>
  )
}

const Stat = ({ value, label }) => (
  <div className="stat">
    <p className="stat__value">{value}</p>
    <p className="stat__label">{label}</p>
  </div>
)
