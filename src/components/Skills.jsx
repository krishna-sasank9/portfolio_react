import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <p className="section__label">Toolkit</p>
        <h2 className="section__title">Skills &amp; technologies</h2>
        <p className="section__lead">
          The tools I reach for most, grouped by where they sit in the stack.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="skill-card__title">{group.title}</h3>
              <p className="skill-card__blurb">{group.blurb}</p>

              <ul className="skill-card__items">
                {group.items.map(({ name, Icon }) => (
                  <li key={name}>
                    {Icon && <Icon aria-hidden="true" />}
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
