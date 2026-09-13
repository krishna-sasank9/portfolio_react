import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiChevronDown, FiMapPin } from 'react-icons/fi'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { education, experience } from '../data/experience'

// Long roles collapse to keep the timeline scannable.
const VISIBLE_HIGHLIGHTS = 5

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <p className="section__label">Experience</p>
        <h2 className="section__title">Where I&rsquo;ve worked</h2>
        <p className="section__lead">
          Roles, responsibilities and the things I actually shipped.
        </p>

        <ol className="timeline">
          {experience.map((item, i) => (
            <TimelineItem key={`${item.company}-${item.role}`} item={item} index={i} />
          ))}
        </ol>

        <h3 className="experience__subheading">
          <HiOutlineAcademicCap aria-hidden="true" /> Education
        </h3>

        <ol className="timeline timeline--compact">
          {education.map((item, i) => (
            <TimelineItem
              key={item.school}
              index={i}
              item={{
                role: item.degree,
                company: item.school,
                start: item.start,
                end: item.end,
                description: item.detail,
                highlights: [],
                tech: [],
              }}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }) {
  const [expanded, setExpanded] = useState(false)
  const current = item.end === 'Present'

  const highlights = item.highlights ?? []
  const collapsible = highlights.length > VISIBLE_HIGHLIGHTS
  const shown = collapsible && !expanded ? highlights.slice(0, VISIBLE_HIGHLIGHTS) : highlights

  return (
    <motion.li
      className="timeline__item"
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={`timeline__dot ${current ? 'is-current' : ''}`} aria-hidden="true" />

      <div className="timeline__card">
        <div className="timeline__head">
          <div>
            <h3 className="timeline__role">{item.role}</h3>
            <p className="timeline__company">
              <FiBriefcase aria-hidden="true" />
              {item.company}
              {item.location && (
                <span className="timeline__location">
                  <FiMapPin aria-hidden="true" /> {item.location}
                </span>
              )}
            </p>
          </div>

          <p className={`timeline__period ${current ? 'is-current' : ''}`}>
            {item.start} — {item.end}
          </p>
        </div>

        {item.description && <p className="timeline__desc">{item.description}</p>}

        {highlights.length > 0 && (
          <ul className="timeline__highlights">
            {shown.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {collapsible && (
          <button
            className={`timeline__more ${expanded ? 'is-open' : ''}`}
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded
              ? 'Show less'
              : `Show ${highlights.length - VISIBLE_HIGHLIGHTS} more`}
            <FiChevronDown aria-hidden="true" />
          </button>
        )}

        {item.tech?.length > 0 && (
          <ul className="tag-row">
            {item.tech.map((t) => (
              <li className="tag" key={t}>
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.li>
  )
}
