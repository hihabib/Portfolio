import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
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
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

const impact = [
  { metric: '4.2s → 0.9s', label: 'Storefront LCP', link: '#case-amani-forged' },
  { metric: '10,000+', label: 'Daily ERP transactions', link: '#case-zment' },
  { metric: '300+', label: 'Reseller tenants supported', link: '#experience' },
]

const iconPaths = {
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" /></>,
  moon: <path d="M20.9 13.4A9 9 0 0 1 10.6 3.1 9 9 0 1 0 20.9 13.4Z" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  location: <><path d="M20 10c0 5-8 10-8 10S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" /></>,
  data: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
  browser: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18m-13 5h3m-3 3h8" /></>,
}

function Icon({ name }: { name: keyof typeof iconPaths }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none"
      stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name]}
    </svg>
  )
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(document.documentElement.dataset.theme === 'dark')
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
      // The theme still applies when browser storage is unavailable.
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
          <span className="monogram" aria-hidden="true">HI</span>
          <span>{profile.name}</span>
        </a>
        <nav id="site-nav" className="site-nav" aria-label="Main navigation" data-open={menuOpen}>
          {navigation.map(([id, label], index) => (
            <a ref={index === 0 ? firstNavLink : undefined} key={id} href={`#${id}`}
              onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}>Resume ↗</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button ref={menuButton} className="icon-button mobile-toggle" type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-controls="site-nav"
            aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="shell hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="role">{profile.title}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-stack">{profile.stack.join(' · ')}</p>
        <p className="hero-description">
          Full-Stack Developer building high-scale e-commerce, ERP, and data platform systems.
          Experienced in Next.js, Node.js, and TypeScript, delivering transactional APIs, resilient
          processing pipelines, and high-performance user interfaces.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={profile.resume} target="_blank" rel="noopener noreferrer">
            View Resume ↗
          </a>
          <a className="button button-secondary" href="#projects">View Projects</a>
          <a className="button button-secondary" href="#contact">Contact Me</a>
        </div>
        <div className="hero-profiles">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span><Icon name="location" />{profile.location}</span>
        </div>
      </div>
      <aside className="impact-panel" aria-labelledby="impact-title">
        <h2 id="impact-title">Production impact</h2>
        <ul className="impact-list">
          {impact.map((item) => (
            <li key={item.metric}>
              <a href={item.link}>
                <strong>{item.metric}</strong>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

function SectionHeading({ id, title, children }: { id: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

function Workflow({ project }: { project: Project }) {
  const icon = project.id === 'zment' ? 'layers' : project.id === 'vendor-data' ? 'data' : 'browser'

  return (
    <figure className={`workflow workflow-${project.id}`}>
      <figcaption><Icon name={icon} /> Workflow overview</figcaption>
      <ol role="list">
        {project.workflow.map((step) => <li key={step}>{step}</li>)}
      </ol>
    </figure>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="project-contribution">{project.contribution}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
      <div className="project-evidence">
        <Workflow project={project} />
        <dl className="project-metrics">
          {project.metrics.map(({ value, label }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="project-actions">
        <a className="button button-secondary" href={`#case-${project.id}`}
          aria-label={`Read Case Study for ${project.name}`}>Read Case Study</a>
        {project.website && (
          <a className="text-link" href={project.website} target="_blank" rel="noopener noreferrer">
            Live Site ↗
          </a>
        )}
        {project.docs && (
          <a className="text-link" href={project.docs} target="_blank" rel="noopener noreferrer">
            Project Docs ↗
          </a>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="shell section" id="projects" tabIndex={-1} aria-labelledby="projects-title">
      <SectionHeading id="projects-title" title="Project showcase" />
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section className="case-section section" aria-labelledby="case-studies-title">
      <div className="shell">
        <SectionHeading id="case-studies-title" title="Engineering case studies">
          The decisions behind the systems, from checkout and stock commits to data recovery and storefront performance.
        </SectionHeading>
        {projects.map((project) => (
          <article key={project.id} id={`case-${project.id}`} className="case-study" tabIndex={-1}
            aria-labelledby={`case-title-${project.id}`}>
            <div>
              <p className="project-category">{project.category}</p>
              <h3 id={`case-title-${project.id}`}>{project.name}</h3>
              <p className="case-period">{project.period}</p>
              <a className="text-link case-back" href="#projects">Back to project showcase</a>
            </div>
            <div className="case-details">
              {project.details.map(({ title, body }) => (
                <div key={title}>
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
    <section id="about" className="shell section split-section" tabIndex={-1} aria-labelledby="about-title">
      <SectionHeading id="about-title" title="About me" />
      <div className="about-copy">
        <p>
          I’m a full-stack developer based in Dhaka, Bangladesh. I build web applications and
          third-party integrations with Next.js, Node.js, and TypeScript, serving thousands of daily visitors.
        </p>
        <p>
          I work across the stack, from frontend architecture and Core Web Vitals optimization to
          designing SQL workflows, resilient Docker data pipelines, and multi-tenant platforms.
          I’ve worked directly with clients and cross-functional teams to turn complex requirements
          into maintainable production systems.
        </p>
        <p>
          I’ve mentored developers, led four-person teams, and delivered enterprise and client projects end-to-end.
        </p>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="shell section split-section" tabIndex={-1}
      aria-labelledby="experience-title">
      <SectionHeading id="experience-title" title="Professional experience" />
      <div>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company}>
              <h3>{job.company}</h3>
              <p className="job-role">{job.role}</p>
              <p className="job-meta">{job.period} · {job.location}</p>
              <ul className="job-achievements">
                {job.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
            </li>
          ))}
        </ol>
        <div className="earlier-experience">
          <h3>Education</h3>
          <p className="job-role" style={{ marginBlockStart: '.25rem' }}>{education.degree}</p>
          <p className="job-meta">{education.institution} · {education.period}</p>
        </div>
        <div className="earlier-experience">
          <h3>{earlierExperience.title}</h3>
          <p>{earlierExperience.description}</p>
        </div>
        <div className="earlier-experience">
          <h3>Languages</h3>
          <p>{languages.map((l) => `${l.language} (${l.proficiency})`).join(' · ')}</p>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="shell section" tabIndex={-1} aria-labelledby="skills-title">
      <SectionHeading id="skills-title" title="Technical skills" />
      <div className="skills-grid">
        {skills.map(({ category, tools }) => (
          <article key={category} className="skill-group">
            <h3>{category}</h3>
            <ul className="tag-list">
              {tools.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="shell section" tabIndex={-1} aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <h2 id="contact-title">Get in touch</h2>
          <p>I’m open to full-stack engineering opportunities, contract roles, and technical collaborations.</p>
        </div>
        <div className="contact-links">
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact-socials">
            <a href={`tel:${profile.phone.replace(/[\s-]/g, '')}`}>{profile.phone}</a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1))
    target?.focus({ preventScroll: true })
    target?.scrollIntoView({ behavior: 'instant' })
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
          <p>© {new Date().getFullYear()} {profile.name} · {profile.title}</p>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
