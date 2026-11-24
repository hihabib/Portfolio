export const profile = {
  name: 'Habibul Islam',
  title: 'Full-Stack Developer',
  location: 'Dhaka, Bangladesh',
  phone: '+880 16219-10241',
  email: 'habibulislam6862@gmail.com',
  github: 'https://github.com/hihabib',
  linkedin: 'https://linkedin.com/in/habibul-islam-8169401aa',
  website: 'https://hihabib.github.io/Portfolio/',
  resume: 'https://drive.google.com/file/d/1CLD2y732U34ZsafLo95xRf-wowxO9bKP/view?usp=sharing',
  stack: ['TypeScript', 'Next.js', 'Node.js', 'REST API', 'React'],
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
    category: 'Frontend · E-commerce · Performance',
    period: 'Nov 2024 – May 2026',
    description:
      'Led frontend architecture for a configurable storefront and ERP order and inventory sync, reducing LCP from 4.2s to 0.9s.',
    contribution:
      'I led the frontend architecture, connected the ordering flow to the ERP, and optimized storefront loading.',
    technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'REST API'],
    metrics: [{ value: '4.2s → 0.9s', label: 'Largest Contentful Paint' }],
    workflow: ['Configure product', 'Place order', 'ERP processing'],
    website: 'https://amaniforged.com',
    docs: 'https://tinyurl.com/4emm7eph',
    details: [
      {
        title: 'Configurable storefront',
        body: 'I led the React and Next.js frontend architecture for interactive product customization and variant selection. The storefront brought configuration, pricing, and ordering into one workflow.',
      },
      {
        title: 'Connecting the storefront to ERP',
        body: 'I integrated the storefront with ERP order processing and inventory synchronization. Customers could send customized selections through the ordering workflow, reducing manual order-handling steps by about 60%.',
      },
      {
        title: 'Performance optimization',
        body: 'The configuration experience depended on loading product content quickly. Optimization work reduced Largest Contentful Paint (LCP) from 4.2 seconds to 0.9 seconds.',
      },
    ],
  },
  {
    id: 'zment',
    name: 'ZMent ERP',
    title: 'ZMent ERP — Multi-Outlet Inventory & POS Platform',
    category: 'ERP · Point of Sale · Inventory',
    period: 'Feb 2022 – Oct 2024',
    description:
      'Built a platform handling 10,000+ daily transactions and 50+ concurrent users with 5+ payment methods. Improved checkout time by about 40% and reduced stock commit errors by 70%+. Mentored two developers and led a four-person team for six months.',
    contribution:
      'I built the checkout and inventory workflows, integrated Redis, and helped establish automated testing and deployment.',
    technologies: ['Node.js', 'React', 'SQL', 'PostgreSQL', 'Redis', 'Docker'],
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
        body: 'Production facilities and retail outlets needed a shared record of stock as batches moved between locations and items were sold. I built batch inventory workflows and a checkout flow supporting five or more payment methods.',
      },
      {
        title: 'Reliable transactions and outlet permissions',
        body: 'I built the transactional workflows on PostgreSQL and integrated Redis into the platform. I implemented role-based access control so users could carry out the checkout and stock operations their roles allowed.',
      },
      {
        title: 'Testing and team leadership',
        body: 'I helped establish automated testing, CI/CD, Docker-based deployment, and production monitoring. I mentored two developers and led the four-person team for six months, working directly with clients, a project manager, and a designer.',
      },
      {
        title: 'Production outcomes',
        body: 'The platform handled 10,000+ daily transactions and 50+ concurrent users. Checkout time fell by approximately 40%, and stock commit errors fell by more than 70%.',
      },
    ],
  },
  {
    id: 'vendor-data',
    name: 'Vendor Product Data Platform',
    title: 'Vendor Product Data Platform — Isolated Processing Pipeline',
    category: 'Backend · Data Pipelines · Docker',
    period: 'Jan 2025 – May 2026',
    description:
      'Engineered an isolated Docker pipeline for 288,820+ products and 441,755+ images, with resumable checkpoints and live Redis and Socket.IO monitoring.',
    contribution:
      'I designed the resumable pipeline and built real-time monitoring for processing progress.',
    technologies: ['Docker', 'Redis', 'Socket.IO', 'Node.js', 'SQL', 'PostgreSQL'],
    metrics: [
      { value: '288,820+', label: 'products processed' },
      { value: '441,755+', label: 'images processed' },
    ],
    workflow: ['Vendor feeds', 'Isolated processing', 'Validated catalog'],
    docs: 'https://tinyurl.com/yeyv5vfd',
    details: [
      {
        title: 'Normalizing multiple sources',
        body: 'Vendor sources provided product records and images in different formats. I built a pipeline that collected, transformed, and validated them into a consistent catalog. Docker isolated processing so workers could be maintained separately.',
      },
      {
        title: 'Resumable checkpoints',
        body: 'Restarting a long run from the beginning repeats completed work. I stored checkpoints in the database so processing could resume from saved progress after an interruption.',
      },
      {
        title: 'Real-time monitoring',
        body: 'I used Redis pub/sub and Socket.IO to surface processing updates in real time. Operators could see how runs were progressing across 288,820+ products and 441,755+ images.',
      },
    ],
  },
]

export const experience = [
  {
    company: 'Elite Wheel Distributors, Inc.',
    role: 'Full Stack Engineer',
    period: 'Nov 2024 – May 2026',
    location: 'USA · Remote',
    achievements: [
      'Built e-commerce applications and third-party integrations with Next.js, Node.js and TypeScript, serving 2,000+ daily visitors.',
      'Engineered a white-label B2B platform for 300+ reseller tenants with isolated data, dynamic pricing and automated onboarding, reducing manual order-handling steps by about 60%.',
    ],
  },
  {
    company: 'DevelopersTroop',
    role: 'Full Stack Engineer',
    period: 'Feb 2022 – Oct 2024',
    location: 'Dhaka, Bangladesh',
    achievements: [
      'Integrated product compatibility and filtering APIs, improving product matching accuracy from 70% to 95%.',
      'Improved asset delivery for 5+ websites, raising GTmetrix performance scores from 55% to 99% and delivered five e-commerce projects end-to-end.',
    ],
  },
]

export const skills = [
  {
    category: 'Core',
    tools: ['TypeScript', 'Next.js', 'Node.js', 'REST API', 'React', 'JavaScript'],
  },
  {
    category: 'Data & state',
    tools: ['SQL', 'MongoDB', 'Redis', 'Redux', 'RTK Query', 'Socket.IO', 'PostgreSQL'],
  },
  {
    category: 'Cloud & quality',
    tools: ['Docker', 'AWS', 'CI/CD', 'Unit testing', 'End-to-end testing', 'Git'],
  },
]

export const education = {
  degree: 'BSc in Computer Science and Engineering',
  institution: 'Daffodil International University',
  period: 'Feb 2023 – Expected Dec 2026',
}

export const earlierExperience = {
  title: 'Earlier experience',
  description: 'Freelance developer — PHP, WordPress and MERN projects (2019–2022)',
}

export const languages = [
  { language: 'English', proficiency: 'Fluent' },
  { language: 'Bengali', proficiency: 'Native' },
]
