import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import {
  earlierExperience,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
} from './data/portfolio'
import type { Project } from './data/portfolio'
import './index.css'

const navigation = [
  ['projects', 'Projects'],
  ['case-studies', 'Case Studies'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

const highlights = [
  { metric: '4.2s → 0.9s', label: 'Storefront LCP', link: '#case-amani-forged' },
  { metric: '10,000+', label: 'Daily ERP Transactions', link: '#case-zment' },
  { metric: '300+', label: 'Reseller Tenants Supported', link: '#experience' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.dataset.theme === 'dark'
    }
    return false
  })
  const menuButton = useRef<HTMLButtonElement>(null)
  const firstNavLink = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (menuOpen) firstNavLink.current?.focus()
  }, [menuOpen])

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    setIsDark(!isDark)
    try {
      localStorage.setItem('theme', nextTheme)
    } catch {
      // Ignore if localStorage unavailable
    }
  }

  function handleEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButton.current?.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleEscape}>
      <div className="shell header-inner">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav id="site-nav" className="site-nav" aria-label="Main navigation" data-open={menuOpen}>
          {navigation.map(([id, label], index) => (
            <a
              ref={index === 0 ? firstNavLink : undefined}
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume ↗
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
          <button
            ref={menuButton}
            className="mobile-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-controls="site-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕ Close' : '☰ Menu'}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="shell hero" aria-labelledby="hero-name">
      <h1 id="hero-name">{profile.name}</h1>
      <p className="hero-role">{profile.title} — {profile.location}</p>

      <div className="hero-contacts">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span>·</span>
        <a href={`tel:${profile.phone.replace(/[\s-]/g, '')}`}>{profile.phone}</a>
        <span>·</span>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span>·</span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>·</span>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume (PDF) ↗</a>
      </div>

      <p className="hero-description">{profile.summary}</p>

      <div className="hero-actions">
        <a className="button button-primary" href={profile.resume} target="_blank" rel="noopener noreferrer">
          View Resume ↗
        </a>
        <a className="button button-secondary" href="#projects">Browse Projects</a>
        <a className="button button-secondary" href="#contact">Get in Touch</a>
      </div>

      <div className="highlights-block" aria-label="Key highlights">
        <div className="highlights-title">Selected Outcomes</div>
        <div className="highlights-grid">
          {highlights.map((item) => (
            <a key={item.metric} className="highlight-item" href={item.link}>
              <span className="highlight-metric">{item.metric}</span>
              <span className="highlight-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="project-entry">
      <div className="project-top-row">
        <h3 className="project-name">{project.title}</h3>
        <span className="project-period">{project.period}</span>
      </div>
      <p className="project-meta-line">{project.category}</p>

      <p className="project-text">{project.description}</p>
      <p className="project-contribution">{project.contribution}</p>

      <div className="project-meta-box">
        <div><strong>Key Metrics: </strong>{project.metrics.map((m) => `${m.value} (${m.label})`).join(', ')}</div>
        <div style={{ marginTop: '0.25rem' }}><strong>Technologies: </strong>{project.technologies.join(', ')}</div>
      </div>

      <div className="project-links">
        <a href={`#case-${project.id}`}>Read Case Study ↓</a>
        {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            Live Site ↗
          </a>
        )}
        {project.docs && (
          <a href={project.docs} target="_blank" rel="noopener noreferrer">
            Project Details ↗
          </a>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="shell" id="projects" tabIndex={-1} aria-labelledby="projects-title">
      <h2 id="projects-title">Project Showcase</h2>
      <div>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section className="shell" id="case-studies" tabIndex={-1} aria-labelledby="case-studies-title">
      <h2 id="case-studies-title">Engineering Case Studies</h2>
      <p style={{ fontStyle: 'italic', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        In-depth notes on architectural decisions, performance optimization, and operational reliability.
      </p>
      <div>
        {projects.map((project) => (
          <article
            key={project.id}
            id={`case-${project.id}`}
            className="case-entry"
            tabIndex={-1}
            aria-labelledby={`case-title-${project.id}`}
          >
            <div className="case-entry-header">
              <h3 id={`case-title-${project.id}`}>{project.name}</h3>
              <p>{project.period} · {project.category}</p>
              <a href="#projects" style={{ fontSize: '0.9rem' }}>↑ Back to project showcase</a>
            </div>
            <div>
              {project.details.map(({ title, body }) => (
                <div key={title} className="case-block">
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="shell" id="about" tabIndex={-1} aria-labelledby="about-title">
      <h2 id="about-title">About Me</h2>
      <div>
        <p>
          I am a full-stack developer based in Dhaka, Bangladesh, with 4+ years of experience building
          scalable SaaS platforms, high-throughput ERP systems, backend APIs, and automated data pipelines.
        </p>
        <p>
          My work spans the full stack: from Next.js and React frontend architecture and Core Web Vitals
          optimization to PostgreSQL, MySQL, MongoDB, and Redis-backed services, concurrent Python/Docker
          scraping pipelines, and production AWS/Nginx deployments. I collaborate closely with product
          managers, designers, and API providers under Agile workflows.
        </p>
        <p>
          I have led a four-person engineering team, mentored junior developers, conducted code reviews,
          and delivered end-to-end client and enterprise systems across the full SDLC.
        </p>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="shell" id="experience" tabIndex={-1} aria-labelledby="experience-title">
      <h2 id="experience-title">Professional Experience</h2>

      <div>
        {experience.map((job) => (
          <div key={job.company} className="job-entry">
            <div className="job-top-row">
              <h3 className="job-company">{job.company}</h3>
              <span className="project-period">{job.period}</span>
            </div>
            <p className="job-role-line">{job.role} — {job.stack} · {job.location}</p>
            <ul className="job-achievements">
              {job.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="sub-experience-block">
          <h3>Education</h3>
          <p>
            <strong>{education.institution}</strong> — {education.degree} ({education.period})
          </p>
        </div>

        <div className="sub-experience-block">
          <h3>Earlier Experience</h3>
          <p>{earlierExperience.description}</p>
        </div>

        <div className="sub-experience-block">
          <h3>Languages</h3>
          <p>
            {languages.map((l) => `${l.language} (${l.proficiency})`).join(' · ')}
          </p>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="shell" id="skills" tabIndex={-1} aria-labelledby="skills-title">
      <h2 id="skills-title">Technical Skills</h2>

      <div className="skills-block">
        {skills.map(({ category, tools }) => (
          <div key={category} className="skills-category-row">
            <strong>{category}:</strong> {tools.join(', ')}
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="shell contact-section" id="contact" tabIndex={-1} aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p className="contact-intro">
        I am open to full-stack engineering opportunities, contract roles, and technical collaborations.
      </p>

      <ul className="contact-list">
        <li>
          <strong>Email:</strong>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <strong>Phone:</strong>
          <a href={`tel:${profile.phone.replace(/[\s-]/g, '')}`}>{profile.phone}</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            {profile.linkedin.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            {profile.github.replace('https://', '')}
          </a>
        </li>
        <li>
          <strong>Resume:</strong>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            Google Drive Document ↗
          </a>
        </li>
      </ul>
    </section>
  )
}

export default function Portfolio() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const target = document.getElementById(hash)
      target?.focus({ preventScroll: true })
      target?.scrollIntoView({ behavior: 'instant' })
    }
  }, [])

  return (
    <div id="top" tabIndex={-1}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <CaseStudies />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} {profile.name} — {profile.title}</p>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
