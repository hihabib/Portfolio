export const profile = {
  name: 'Habibul Islam',
  title: 'Full-Stack Developer',
  location: 'Dhaka, Bangladesh',
  phone: '+880 16219-10241',
  email: 'habibulislam6862@gmail.com',
  github: 'https://github.com/hihabib',
  linkedin: 'https://www.linkedin.com/in/habibul-islam-8169401aa/',
  website: 'https://hihabib.github.io/Portfolio/',
  resume: 'https://drive.google.com/file/d/1LJ3TfsZnMvd3ZtWOBoZTS_QKcioC-yBE/view?usp=sharing',
  stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'REST API Development'],
  summary:
    'Full-Stack Developer with 4+ years of experience building scalable SaaS platforms, high-throughput ERP systems, backend APIs, and automated data pipelines. Focused on system architecture, performance optimization, production reliability, and end-to-end engineering ownership.',
}

interface Metric {
  value: string
  label: string
}

export interface Project {
  id: string
  name: string
  title: string
  category: string
  period: string
  description: string
  contribution: string
  technologies: string[]
  metrics: Metric[]
  workflow: string[]
  website?: string
  docs?: string
  details: { title: string; body: string }[]
}

export const projects: Project[] = [
  {
    id: 'amani-forged',
    name: 'Amani Forged',
    title: 'Amani Forged — Custom E-commerce',
    category: 'Elite Wheel Distributors · Frontend · E-commerce · Performance',
    period: 'Nov 2024 – May 2026',
    description:
      'Led frontend architecture for a configurable storefront with real-time 3D visualization and product customization.',
    contribution:
      'Integrated ERP order processing and inventory synchronization, reducing manual order-handling steps by about 60% and LCP from 4.2s to 0.9s.',
    technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'REST API', 'PostgreSQL'],
    metrics: [
      { value: '4.2s → 0.9s', label: 'Largest Contentful Paint' },
      { value: '~60%', label: 'fewer manual order-handling steps' },
    ],
    workflow: ['Configure product', '3D visualization', 'ERP processing'],
    website: 'https://amaniforged.com',
    docs: 'https://tinyurl.com/4emm7eph',
    details: [
      {
        title: 'Configurable storefront with 3D visualization',
        body: 'I led the React and Next.js frontend architecture for interactive product customization, variant selection, and real-time 3D visualization. The storefront brought configuration, pricing, and ordering into one unified workflow.',
      },
      {
        title: 'ERP order and inventory synchronization',
        body: 'I integrated the storefront with ERP order processing and inventory synchronization. Customers could send customized selections directly through the ordering workflow, reducing manual order-handling steps by about 60%.',
      },
      {
        title: 'Performance optimization',
        body: 'The interactive customization experience depended on loading product content quickly. Frontend and asset optimization reduced Largest Contentful Paint (LCP) from 4.2 seconds to 0.9 seconds.',
      },
    ],
  },
  {
    id: 'zment',
    name: 'ZMent ERP',
    title: 'ZMent ERP — Multi-Outlet Inventory & POS',
    category: 'Independent Client Project · ERP · Inventory & POS',
    period: 'Feb 2022 – Oct 2024',
    description:
      'Engineered a PostgreSQL and Redis-backed ERP platform processing 10,000+ daily transactions with 50+ concurrent users and 5+ payment methods.',
    contribution:
      'Designed batch inventory and POS workflows, reducing checkout time by about 40% and stock commit errors by over 70%. Led a four-person team for six months, mentoring two junior developers and managing task assignments, client meetings, and requirement analysis.',
    technologies: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { value: '10,000+', label: 'daily transactions' },
      { value: '50+', label: 'concurrent users' },
      { value: '≈40%', label: 'shorter checkout time' },
      { value: '70%+', label: 'fewer stock commit errors' },
    ],
    workflow: ['Production', 'Outlet inventory', 'Checkout'],
    docs: 'https://tinyurl.com/4b2cshx7',
    details: [
      {
        title: 'Connecting stock and sales across outlets',
        body: 'Production facilities and retail outlets needed a shared record of stock as batches moved between locations and items were sold. I designed batch inventory workflows and a POS checkout flow supporting five or more payment methods.',
      },
      {
        title: 'Reliable transactions and outlet permissions',
        body: 'I engineered transactional workflows backed by PostgreSQL and Redis. I implemented role-based access control so users could perform the checkout and inventory operations permitted for their roles.',
      },
      {
        title: 'Team leadership and engineering standards',
        body: 'I led a four-person team for six months, mentoring two junior developers and managing task assignments, client meetings, and requirement analysis while establishing automated testing, CI/CD, and Docker-based deployments.',
      },
      {
        title: 'Production outcomes',
        body: 'The platform handled 10,000+ daily transactions and 50+ concurrent users. Checkout time decreased by approximately 40%, and stock commit errors dropped by more than 70%.',
      },
    ],
  },
  {
    id: 'vendor-data',
    name: 'Vendor Product Data Platform',
    title: 'Vendor Product Data Platform',
    category: 'Elite Wheel Distributors · Backend · Data Pipelines · Docker',
    period: 'Jan 2025 – May 2026',
    description:
      'Architected fault-isolated Docker data pipelines processing 288,820+ products and 441,755+ images across vendor sources.',
    contribution:
      'Implemented concurrent scraping, database checkpointing, resumable processing, and real-time monitoring using Redis and Socket.IO.',
    technologies: ['Python', 'Docker', 'Redis', 'Socket.IO', 'Node.js', 'PostgreSQL'],
    metrics: [
      { value: '288,820+', label: 'products processed' },
      { value: '441,755+', label: 'images processed' },
    ],
    workflow: ['Vendor feeds', 'Isolated processing', 'Validated catalog'],
    docs: 'https://tinyurl.com/yeyv5vfd',
    details: [
      {
        title: 'Fault-isolated Docker pipelines',
        body: 'Vendor sources provided product records and images in disparate formats. I architected fault-isolated Docker data pipelines that collected, transformed, and validated records across 288,820+ products and 441,755+ images.',
      },
      {
        title: 'Concurrent scraping and database checkpointing',
        body: 'Restarting long scraping and ingestion runs from scratch wastes completed work. I implemented concurrent scraping and stored checkpoints in the database so processing could resume cleanly from saved progress after any interruption.',
      },
      {
        title: 'Real-time monitoring',
        body: 'I used Redis and Socket.IO to broadcast live pipeline progress and worker telemetry, giving operators real-time visibility into processing runs.',
      },
    ],
  },
]

export const experience = [
  {
    company: 'Elite Wheel Distributors, Inc.',
    role: 'Full Stack Engineer',
    stack: 'TypeScript, Next.js, Python, PostgreSQL, MongoDB',
    period: 'Nov 2024 – May 2026',
    location: 'USA · Remote',
    achievements: [
      'Architected e-commerce applications and third-party API integrations serving 2,000+ daily visitors.',
      'Engineered a multi-tenant B2B SaaS platform for 300+ reseller tenants with isolated data, dynamic pricing, and automated onboarding.',
      'Developed automated vendor data scraping workflows and managed production deployments and debugging.',
      'Collaborated with product managers, UI/UX designers, and API providers on responsive design and Agile methodologies; conducted code reviews.',
    ],
  },
  {
    company: 'DevelopersTroop',
    role: 'Full Stack Engineer',
    stack: 'TypeScript, PHP, MySQL',
    period: 'Feb 2022 – Oct 2024',
    location: 'Dhaka, Bangladesh',
    achievements: [
      'Integrated product compatibility and filtering APIs, improving product matching accuracy from 70% to 95%.',
      'Optimized CDN caching and asset delivery across 5+ websites, raising GTmetrix performance scores from 55% to 99%.',
      'Delivered five e-commerce applications across the software development life cycle (SDLC), from requirement analysis to production deployment; developed automated data scraping solutions.',
    ],
  },
]

export const skills = [
  {
    category: 'Core',
    tools: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'REST API Development'],
  },
  {
    category: 'Data',
    tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Socket.IO'],
  },
  {
    category: 'Infrastructure & Quality',
    tools: ['AWS (EC2, S3)', 'Docker', 'Linux', 'Nginx', 'Git', 'CI/CD', 'Vitest', 'E2E testing'],
  },
]

export const education = {
  degree: 'BSc in Computer Science and Engineering',
  institution: 'Daffodil International University',
  period: 'Feb 2023 – Dec 2026',
}

export const earlierExperience = {
  title: 'Earlier Experience',
  description: 'Freelance Developer — PHP, WordPress, and MERN applications (2019–2022)',
}

export const languages = [
  { language: 'English', proficiency: 'Fluent' },
  { language: 'Bengali', proficiency: 'Native' },
]
