import { useState, useEffect } from "react";

const NAV = ["About", "Experience", "Projects", "Skills", "Contact"];

const SKILLS = [
  "JavaScript", "TypeScript", "Node.js", "React.js", "Next.js",
  "PostgreSQL", "MongoDB", "MySQL", "Redis",
  "TypeORM", "Prisma", "Drizzle", "GraphQL", "REST API",
  "Docker", "AWS", "Nginx", "CI/CD", "Socket.IO",
  "Redux", "RTK Query", "Git", "Supabase", "Firebase",
];

const EXPERIENCE = [
  {
    company: "Elite Wheel Distributors, Inc.",
    role: "Full-Stack Developer",
    period: "Nov 2024 – Present",
    location: "USA (Remote)",
    bullets: [
      "Architected a high-traffic e-commerce platform serving 2,000+ daily visitors, integrating advanced product customization, dynamic pricing, and 3D product visualization using Next.js and Node.js.",
      "Led frontend performance optimization that reduced LCP from 4.2s to 0.9s, improving Core Web Vitals scores across all pages.",
      "Designed a scalable multi-tenant whitelabel system supporting 300+ reseller tenants with secure data isolation and automated onboarding workflows.",
    ],
  },
  {
    company: "DevelopersTroop",
    role: "Full-Stack Developer",
    period: "Feb 2022 – Oct 2024",
    location: "Dhaka, Bangladesh (Remote)",
    bullets: [
      "Integrated Driver Right API into a YMM (Year–Make–Model) filtering system, improving product matching accuracy from 70% to 95% across multiple client e-commerce platforms.",
      "Applied Bunny CDN across 5+ client sites, improving GTMetrix performance scores from 55% to 99% through optimized asset delivery and caching strategy.",
      "Delivered 5 e-commerce projects end-to-end — averaging 3–4 months per project — managing full lifecycle from requirements to production handover, with zero post-launch critical bugs reported by clients.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Amani Forged",
    tag: "E-Commerce Platform",
    desc: "E-commerce platform for a custom forged wheel brand, built as a standalone client project with its own modular architecture and ERP integration. Features a 3D interactive wheel configurator with real-time pricing, AR visualization, and automated post-purchase workflows.",
    highlights: ["LCP reduced from 4.2s to 0.9s", "~60% reduction in manual order handling", "~15% abandoned cart recovery"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "BullMQ", "Socket.IO"],
    link: "https://amaniforged.com",
    detailsLink: "https://tinyurl.com/4emm7eph",
  },
  {
    name: "Inventory Management System",
    tag: "Inventory & POS",
    desc: "Full-stack multi-outlet inventory management platform processing 10,000+ daily transactions across production facilities and retail outlets, built with PostgreSQL and Redis to ensure consistency and uptime under load.",
    highlights: ["10,000+ daily transactions", "~40% faster checkout at peak", "70%+ reduction in inventory commit errors"],
    tech: ["Node.js", "React.js", "PostgreSQL", "Redis", "Socket.IO"],
    link: null,
    detailsLink: "https://tinyurl.com/4b2cshx7",
  },
  {
    name: "Data Scraper Platform",
    tag: "Internal Infrastructure",
    desc: "Internal distributed scraping platform collecting and normalizing large-scale product data across multiple vendor sources, with real-time monitoring and data quality analytics.",
    highlights: ["288,820+ products", "441,755+ images", "227GB+ storage, zero data loss on resume"],
    tech: ["Python", "Playwright", "Docker", "Redis", "PostgreSQL", "AWS S3"],
    link: null,
    detailsLink: "https://tinyurl.com/yeyv5vfd",
  },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root, [data-theme="dark"] {
          --bg: #0f1117;
          --surface: #1a1d27;
          --border: #252836;
          --accent: #6c63ff;
          --accent2: #a78bfa;
          --text: #e2e8f0;
          --muted: #8892a4;
          --tag-bg: #1e2235;
          --nav-bg: rgba(15,17,23,0.85);
          --shadow: 0 2px 16px rgba(0,0,0,0.3);
        }

        [data-theme="light"] {
          --bg: #f8f9fc;
          --surface: #ffffff;
          --border: #e2e6ef;
          --accent: #6c63ff;
          --accent2: #7c3aed;
          --text: #0f1117;
          --muted: #5a6478;
          --tag-bg: #f0eeff;
          --nav-bg: rgba(248,249,252,0.88);
          --shadow: 0 2px 16px rgba(0,0,0,0.08);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          font-size: 15px;
          transition: background 0.25s, color 0.25s;
        }

        nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100;
          background: var(--nav-bg);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 60px;
          transition: background 0.25s, border-color 0.25s;
        }
        .nav-logo { font-size: 1.1rem; font-weight: 700; color: var(--text); letter-spacing: -0.5px; }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links button {
          background: none; border: none; color: var(--muted);
          cursor: pointer; font-size: 0.85rem; letter-spacing: 0.5px;
          transition: color 0.2s; padding: 0; position: relative;
        }
        .nav-links button::after {
          content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
          height: 1.5px; background: var(--accent);
          transform: scaleX(0); transition: transform 0.2s;
        }
        .nav-links button:hover { color: var(--accent); }
        .nav-links button:hover::after { transform: scaleX(1); }

        .theme-toggle {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 20px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; color: var(--muted);
          transition: all 0.2s; flex-shrink: 0;
        }
        .theme-toggle:hover { border-color: var(--accent); color: var(--accent); }
        .nav-right { display: flex; align-items: center; gap: 1.25rem; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; color: var(--text); font-size: 1.4rem; }

        .mobile-menu {
          position: fixed; top: 60px; left: 0; right: 0;
          background: var(--surface); border-bottom: 1px solid var(--border);
          z-index: 99; padding: 1rem 2rem;
          display: flex; flex-direction: column; gap: 1rem;
          box-shadow: var(--shadow);
        }
        .mobile-menu button { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 1rem; text-align: left; padding: 0; }
        .mobile-menu button:hover { color: var(--text); }

        #about { padding: 140px 2rem 80px; max-width: 900px; margin: 0 auto; }
        .hero-eyebrow { font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .hero-name { font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 0.75rem; }
        .hero-name span { color: var(--accent); }
        .hero-role { font-size: clamp(1rem, 2.5vw, 1.2rem); color: var(--muted); margin-bottom: 1.5rem; font-weight: 400; }
        .hero-bio { color: var(--muted); max-width: 600px; font-size: 0.95rem; line-height: 1.75; margin-bottom: 2rem; }
        .hero-links { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.6rem 1.3rem; border-radius: 6px;
          font-size: 0.85rem; font-weight: 500; text-decoration: none;
          cursor: pointer; transition: all 0.2s; border: none;
        }
        .btn-primary { background: var(--accent); color: #fff; }
        .btn-primary:hover { background: #5a52d5; }
        .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

        .section { padding: 70px 2rem; max-width: 900px; margin: 0 auto; }
        .section-title { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 2.5rem; position: relative; display: inline-block; }
        .section-title::after { content: ''; position: absolute; bottom: -8px; left: 0; width: 40px; height: 3px; background: var(--accent); border-radius: 2px; }

        .exp-item { border: 1px solid var(--border); border-radius: 10px; padding: 1.5rem; margin-bottom: 1.25rem; background: var(--surface); transition: border-color 0.2s, box-shadow 0.2s; }
        .exp-item:hover { border-color: var(--accent); box-shadow: var(--shadow); }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem; }
        .exp-company { font-weight: 700; font-size: 1rem; color: var(--accent); }
        .exp-period { font-size: 0.8rem; color: var(--muted); white-space: nowrap; }
        .exp-role { color: var(--accent); font-size: 0.85rem; margin-bottom: 0.2rem; }
        .exp-location { font-size: 0.8rem; color: var(--muted); margin-bottom: 1rem; }
        .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .exp-bullets li { font-size: 0.88rem; color: var(--muted); padding-left: 1rem; position: relative; }
        .exp-bullets li::before { content: '→'; position: absolute; left: 0; color: var(--accent); }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; }
        .project-card { border: 1px solid var(--border); border-radius: 10px; padding: 1.5rem; background: var(--surface); transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column; gap: 0.75rem; }
        .project-card:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: var(--shadow); }
        .project-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .project-name { font-weight: 700; font-size: 1rem; }
        .project-link { color: var(--accent); font-size: 0.78rem; text-decoration: none; font-weight: 600; white-space: nowrap; border: 1px solid var(--accent); padding: 0.15rem 0.5rem; border-radius: 4px; transition: background 0.2s, color 0.2s; }
        .project-link:hover { background: var(--accent); color: #fff; }
        .project-tag { display: inline-block; font-size: 0.7rem; letter-spacing: 0.5px; text-transform: uppercase; color: var(--accent); background: var(--tag-bg); padding: 0.2rem 0.5rem; border-radius: 4px; width: fit-content; }
        .project-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }
        .project-highlights { display: flex; flex-direction: column; gap: 0.3rem; }
        .project-highlights span { font-size: 0.78rem; color: var(--accent2); display: flex; align-items: center; gap: 0.4rem; }
        .project-highlights span::before { content: '✦'; font-size: 0.6rem; }
        .project-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto; }
        .tech-pill { font-size: 0.72rem; background: var(--tag-bg); border: 1px solid var(--border); border-radius: 4px; padding: 0.15rem 0.5rem; color: var(--muted); }

        .skills-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .skill-badge { font-size: 0.82rem; padding: 0.35rem 0.85rem; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; color: var(--text); transition: border-color 0.2s, color 0.2s; }
        .skill-badge:hover { border-color: var(--accent); color: var(--accent); }

        .contact-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
        .contact-card { border: 1px solid var(--border); border-radius: 10px; padding: 1.25rem; background: var(--surface); text-decoration: none; display: flex; flex-direction: column; gap: 0.3rem; transition: border-color 0.2s, box-shadow 0.2s; position: relative; }
        .contact-card::after { content: '↗'; position: absolute; top: 1rem; right: 1rem; font-size: 0.8rem; color: var(--accent); opacity: 0.6; transition: opacity 0.2s, transform 0.2s; }
        .contact-card:hover { border-color: var(--accent); box-shadow: var(--shadow); }
        .contact-card:hover::after { opacity: 1; transform: translate(2px, -2px); }
        .contact-label { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
        .contact-value { font-size: 0.88rem; color: var(--accent); font-weight: 500; text-decoration: underline; text-decoration-color: transparent; transition: text-decoration-color 0.2s; }
        .contact-card:hover .contact-value { text-decoration-color: var(--accent); }

        footer { text-align: center; padding: 2rem; font-size: 0.8rem; color: var(--muted); border-top: 1px solid var(--border); }
        .divider { border: none; border-top: 1px solid var(--border); margin: 0; }

        @media (max-width: 640px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .projects-grid { grid-template-columns: 1fr; }
          .contact-grid { grid-template-columns: 1fr 1fr; }
          #about { padding: 110px 1.25rem 60px; }
          .section { padding: 50px 1.25rem; }
        }
      `}</style>

      <nav>
        <div className="nav-logo">Habibul Islam<span>.</span></div>
        <div className="nav-links">
          {NAV.map((n) => (
            <button key={n} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={() => setDark(!dark)} title={dark ? "Switch to light mode" : "Switch to dark mode"}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV.map((n) => (
            <button key={n} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
      )}

      <section id="about">
        <p className="hero-eyebrow">Full-Stack Developer</p>
        <h1 className="hero-name">Habibul<br /><span>Islam</span></h1>
        <p className="hero-role">Building high-scale business systems &amp; production-grade web applications</p>
        <p className="hero-bio">
          Full-stack developer with 6+ years of experience building high-scale business systems including
          inventory, e-commerce, and data automation platforms. I design and maintain applications that handle
          10,000+ daily transactions, multi-outlet operations, and complex business workflows —
          with a focus on reliability, performance, and scalable architecture.
        </p>
        <div className="hero-links">
          <a className="btn btn-primary" href="https://drive.google.com/file/d/1fsg5ETEemjxuZPdR6hPaiXqi6nfWkFSI/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume ↓</a>
          <a className="btn btn-outline" href="https://github.com/hihabib" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn btn-outline" href="https://www.linkedin.com/in/habibul-islam-8169401aa/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="btn btn-outline" href="mailto:habibulislam6862@gmail.com">Email Me</a>
        </div>
      </section>

      <hr className="divider" />

      <Section id="experience" title="Experience">
        {EXPERIENCE.map((e) => (
          <div className="exp-item" key={e.company}>
            <div className="exp-header">
              <span className="exp-company">{e.company}</span>
              <span className="exp-period">{e.period}</span>
            </div>
            <p className="exp-role">{e.role}</p>
            <p className="exp-location">{e.location}</p>
            <ul className="exp-bullets">
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      <hr className="divider" />

      <Section id="projects" title="Projects">
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-top">
                <span className="project-name">{p.name}</span>
                <div style={{ display: "flex", gap: "0.6rem" }}>
                  {p.detailsLink && <a className="project-link" href={p.detailsLink} target="_blank" rel="noreferrer">Details ↗</a>}
                  {p.link && <a className="project-link" href={p.link} target="_blank" rel="noreferrer">Live ↗</a>}
                </div>
              </div>
              <span className="project-tag">{p.tag}</span>
              <p className="project-desc">{p.desc}</p>
              <div className="project-highlights">
                {p.highlights.map((h) => <span key={h}>{h}</span>)}
              </div>
              <div className="project-tech">
                {p.tech.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <hr className="divider" />

      <Section id="skills" title="Skills">
        <div className="skills-grid">
          {SKILLS.map((s) => <span className="skill-badge" key={s}>{s}</span>)}
        </div>
      </Section>

      <hr className="divider" />

      <Section id="contact" title="Contact">
        <div className="contact-grid">
          <a className="contact-card" href="mailto:habibulislam6862@gmail.com">
            <span className="contact-label">Email</span>
            <span className="contact-value">habibulislam6862@gmail.com</span>
          </a>
          <a className="contact-card" href="https://github.com/hihabib" target="_blank" rel="noreferrer">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/hihabib</span>
          </a>
          <a className="contact-card" href="https://www.linkedin.com/in/habibul-islam-8169401aa/" target="_blank" rel="noreferrer">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">habibul-islam-8169401aa</span>
          </a>
          <a className="contact-card" href="https://stackoverflow.com/users/13571609/habib" target="_blank" rel="noreferrer">
            <span className="contact-label">Stack Overflow</span>
            <span className="contact-value">users/13571609/habib</span>
          </a>
          <a className="contact-card" href="https://www.upwork.com/freelancers/habibulislam23" target="_blank" rel="noreferrer">
            <span className="contact-label">Upwork</span>
            <span className="contact-value">freelancers/habibulislam23</span>
          </a>
          <a className="contact-card" href="https://www.freelancer.com/u/habibulislam6868" target="_blank" rel="noreferrer">
            <span className="contact-label">Freelancer</span>
            <span className="contact-value">u/habibulislam6868</span>
          </a>
        </div>
      </Section>

      <footer>
        <p>Built with React · Habibul Islam © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
