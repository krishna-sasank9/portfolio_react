import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <p className="section__label">Work</p>
        <h2 className="section__title">Things I&rsquo;ve built</h2>
        <p className="section__lead">
          A selection of projects — each one solved a problem I actually wanted solved.
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const { title, year, description, tech, demo, source, image, featured } = project

  return (
    <motion.article
      className={`project ${featured ? 'project--featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project__media">
        {image ? (
          <img src={image} alt={`${title} screenshot`} loading="lazy" />
        ) : (
          // No screenshot yet — fall back to a monogram rather than stock art.
          <div className="project__monogram" aria-hidden="true">
            {title.charAt(0)}
          </div>
        )}
      </div>

      <div className="project__body">
        <div className="project__head">
          <h3 className="project__title">{title}</h3>
          <span className="project__year">{year}</span>
        </div>

        <p className="project__desc">{description}</p>

        <ul className="tag-row">
          {tech.map((t) => (
            <li className="tag" key={t}>
              {t}
            </li>
          ))}
        </ul>

        <div className="project__links">
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live demo <FiArrowUpRight />
            </a>
          )}
          {source && (
            <a href={source} target="_blank" rel="noopener noreferrer">
              <FiGithub /> Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
