import { useState } from "react";

const NAV = ["About", "Experience", "Projects", "Skills", "Contact"];

const SKILLS = [
  "JavaScript", "TypeScript", "Node.js", "React.js", "Next.js",
  "PostgreSQL", "MongoDB", "MySQL", "Redis",
  "TypeORM", "Prisma", "Drizzle", "GraphQL", "REST API",
  "Docker", "AWS", "Nginx", "CI/CD", "Socket.IO",
  "Redux", "RTK Query", "Git",
];

const EXPERIENCE = [
  {
    company: "Elite Wheel Distributors, Inc.",
    role: "Full-Stack Developer",
    period: "Nov 2024 – Present",
    location: "USA (Remote)",
    bullets: [
      "Architected a high-traffic e-commerce platform (Amani Forged) serving 2,000+ daily visitors with advanced product customization, dynamic pricing, and 3D AR visualization.",
      "Led performance optimizations reducing LCP from 4.2s to 0.9s, significantly improving Core Web Vitals.",
      "Designed a scalable multi-tenant platform supporting 300+ reseller tenants with secure data isolation.",
    ],
  },
  {
    company: "DevelopersTroop",
    role: "Full-Stack Developer",
    period: "Feb 2022 – Oct 2024",
    location: "Dhaka, Bangladesh (Remote)",
    bullets: [
      "Integrated Driver Right API into YMM filtering, improving product matching accuracy from 70% to 95% across multiple e-commerce platforms.",
      "Implemented Bunny CDN across client sites, increasing GTMetrix performance from 55% to 99%.",
      "Delivered 5 e-commerce projects end-to-end from initial setup to production handover.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Amani Forged",
    tag: "E-Commerce Platform",
    desc: "Full-stack e-commerce platform for a premium custom wheel brand. Features 3D interactive wheel configurator with AR visualization, bidirectional NetSuite ERP sync, automated S3 media pipelines, and a block-based transactional email builder.",
    highlights: ["60% faster wheel configuration", "100% manual inventory overhead eliminated", "~15% abandoned cart recovery"],
    tech: ["Node.js", "React.js", "PostgreSQL", "AWS S3", "BullMQ", "Socket.IO"],
    link: "https://amaniforged.com",
    detailsLink: "https://tinyurl.com/4emm7eph",
  },
  {
    name: "ZMent",
    tag: "Inventory Management System",
    desc: "Full-stack multi-outlet inventory management platform processing 10,000+ daily transactions. Includes POS with 5+ payment methods, staged batch stock management, fine-grained RBAC, and multi-format financial reporting.",
    highlights: ["10,000+ daily transactions", "50+ active users", "40% faster checkout at peak"],
    tech: ["Node.js", "React.js", "PostgreSQL", "Redis", "Socket.IO"],
    link: null,
    detailsLink: "https://tinyurl.com/4b2cshx7",
  },
  {
    name: "Data Scraper Platform",
    tag: "Internal Infrastructure",
    desc: "Distributed web scraping infrastructure collecting and normalizing product data across multiple sources. Isolated Docker container per source, stealth Playwright automation, step-level pipeline resume, and real-time Redis log streaming.",
    highlights: ["288,820+ products", "441,755+ images", "227GB+ storage, zero data loss on resume"],
    tech: ["Python", "Playwright", "Docker", "Redis", "PostgreSQL", "AWS S3"],
    link: null,
    detailsLink: "https://tinyurl.com/yeyv5vfd",
  },
];

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

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0f1117;
          --surface: #1a1d27;
          --border: #252836;
          --accent: #6c63ff;
          --accent2: #a78bfa;
          --text: #e2e8f0;
          --muted: #8892a4;
          --tag-bg: #1e2235;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          font-size: 15px;
        }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(15,17,23,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 60px;
        }
        .nav-logo {
          font-size: 1.1rem; font-weight: 700;
          color: var(--text); letter-spacing: -0.5px;
        }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links button {
          background: none; border: none; color: var(--muted);
          cursor: pointer; font-size: 0.85rem; letter-spacing: 0.5px;
          transition: color 0.2s; padding: 0;
        }
        .nav-links button:hover { color: var(--text); }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; color: var(--text); font-size: 1.4rem;
        }

        /* MOBILE NAV */
        .mobile-menu {
          position: fixed; top: 60px; left: 0; right: 0;
          background: var(--surface); border-bottom: 1px solid var(--border);
          z-index: 99; padding: 1rem 2rem;
          display: flex; flex-direction: column; gap: 1rem;
        }
        .mobile-menu button {
          background: none; border: none; color: var(--muted);
          cursor: pointer; font-size: 1rem; text-align: left; padding: 0;
        }
        .mobile-menu button:hover { color: var(--text); }

        /* LAYOUT */
        .container { max-width: 900px; margin: 0 auto; padding: 0 2rem; }

        /* HERO */
        #about {
          padding: 140px 2rem 80px;
          max-width: 900px; margin: 0 auto;
        }
        .hero-eyebrow {
          font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 1rem;
        }
        .hero-name {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -1.5px; margin-bottom: 0.75rem;
        }
        .hero-name span { color: var(--accent); }
        .hero-role {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: var(--muted); margin-bottom: 1.5rem; font-weight: 400;
        }
        .hero-bio {
          color: var(--muted); max-width: 600px;
          font-size: 0.95rem; line-height: 1.75; margin-bottom: 2rem;
        }
        .hero-links { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.6rem 1.3rem; border-radius: 6px;
          font-size: 0.85rem; font-weight: 500; text-decoration: none;
          cursor: pointer; transition: all 0.2s; border: none;
        }
        .btn-primary {
          background: var(--accent); color: #fff;
        }
        .btn-primary:hover { background: #5a52d5; }
        .btn-outline {
          background: transparent; color: var(--text);
          border: 1px solid var(--border);
        }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

        /* SECTIONS */
        .section { padding: 70px 2rem; max-width: 900px; margin: 0 auto; }
        .section-title {
          font-size: 1.5rem; font-weight: 700; letter-spacing: -0.5px;
          margin-bottom: 2.5rem; position: relative; display: inline-block;
        }
        .section-title::after {
          content: ''; position: absolute;
          bottom: -8px; left: 0; width: 40px; height: 3px;
          background: var(--accent); border-radius: 2px;
        }

        /* EXPERIENCE */
        .exp-item {
          border: 1px solid var(--border); border-radius: 10px;
          padding: 1.5rem; margin-bottom: 1.25rem;
          background: var(--surface);
          transition: border-color 0.2s;
        }
        .exp-item:hover { border-color: var(--accent); }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem; }
        .exp-company { font-weight: 700; font-size: 1rem; }
        .exp-period { font-size: 0.8rem; color: var(--muted); white-space: nowrap; }
        .exp-role { color: var(--accent); font-size: 0.85rem; margin-bottom: 0.2rem; }
        .exp-location { font-size: 0.8rem; color: var(--muted); margin-bottom: 1rem; }
        .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .exp-bullets li { font-size: 0.88rem; color: var(--muted); padding-left: 1rem; position: relative; }
        .exp-bullets li::before { content: '→'; position: absolute; left: 0; color: var(--accent); }

        /* PROJECTS */
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; }
        .project-card {
          border: 1px solid var(--border); border-radius: 10px;
          padding: 1.5rem; background: var(--surface);
          transition: border-color 0.2s, transform 0.2s;
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .project-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .project-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .project-name { font-weight: 700; font-size: 1rem; }
        .project-link {
          color: var(--muted); font-size: 0.8rem; text-decoration: none;
          transition: color 0.2s; white-space: nowrap;
        }
        .project-link:hover { color: var(--accent); }
        .project-tag {
          display: inline-block; font-size: 0.7rem; letter-spacing: 0.5px;
          text-transform: uppercase; color: var(--accent);
          background: var(--tag-bg); padding: 0.2rem 0.5rem;
          border-radius: 4px; width: fit-content;
        }
        .project-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }
        .project-highlights { display: flex; flex-direction: column; gap: 0.3rem; }
        .project-highlights span {
          font-size: 0.78rem; color: var(--accent2);
          display: flex; align-items: center; gap: 0.4rem;
        }
        .project-highlights span::before { content: '✦'; font-size: 0.6rem; }
        .project-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto; }
        .tech-pill {
          font-size: 0.72rem; background: var(--tag-bg);
          border: 1px solid var(--border); border-radius: 4px;
          padding: 0.15rem 0.5rem; color: var(--muted);
        }

        /* SKILLS */
        .skills-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .skill-badge {
          font-size: 0.82rem; padding: 0.35rem 0.85rem;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 6px; color: var(--text);
          transition: border-color 0.2s, color 0.2s;
        }
        .skill-badge:hover { border-color: var(--accent); color: var(--accent); }

        /* CONTACT */
        .contact-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
        .contact-card {
          border: 1px solid var(--border); border-radius: 10px;
          padding: 1.25rem; background: var(--surface);
          text-decoration: none; display: flex; flex-direction: column; gap: 0.3rem;
          transition: border-color 0.2s;
        }
        .contact-card:hover { border-color: var(--accent); }
        .contact-label { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
        .contact-value { font-size: 0.88rem; color: var(--text); font-weight: 500; }

        /* FOOTER */
        footer {
          text-align: center; padding: 2rem;
          font-size: 0.8rem; color: var(--muted);
          border-top: 1px solid var(--border);
        }

        /* DIVIDER */
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
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV.map((n) => (
            <button key={n} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="about">
        <p className="hero-eyebrow">Full-Stack Developer</p>
        <h1 className="hero-name">Habibul<br /><span>Islam</span></h1>
        <p className="hero-role">Building high-scale business systems &amp; production-grade web applications</p>
        <p className="hero-bio">
          Full-stack developer with experience since 2020, specializing in inventory systems,
          e-commerce platforms, and data automation. I design and maintain applications that handle
          10,000+ daily transactions, multi-outlet operations, and complex business workflows —
          with a focus on reliability, performance, and scalable architecture.
        </p>
        <div className="hero-links">
          <a className="btn btn-primary" href="https://github.com/hihabib" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn btn-outline" href="https://www.linkedin.com/in/habibul-islam-8169401aa/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="btn btn-outline" href="mailto:habibulislam6862@gmail.com">Email Me</a>
        </div>
      </section>

      <hr className="divider" />

      {/* EXPERIENCE */}
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

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-top">
                <span className="project-name">{p.name}</span>
                <div style={{display:"flex", gap:"0.6rem"}}>
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

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="skills-grid">
          {SKILLS.map((s) => <span className="skill-badge" key={s}>{s}</span>)}
        </div>
      </Section>

      <hr className="divider" />

      {/* CONTACT */}
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
        </div>
      </Section>

      <footer>
        <p>Built with React · Habibul Islam © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
