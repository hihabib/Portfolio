# Portfolio optimization report

Updated on November 20, 2026, in the local `v1` worktree, the branch confirmed by the portfolio owner. The public site served as the baseline for the audit.

## Before implementation

The portfolio was a single-page React application with a TypeScript entry point, Vite, pnpm, and no router. One JSX file contained the content, page sections, and active CSS. The existing light and dark themes, section-based navigation, and measurable project outcomes were worth keeping.

| Area | Finding |
| --- | --- |
| Positioning | The hero used an ambiguous experience claim and gave the résumé the primary action. ERP, POS, and SaaS expertise was hard to identify at a glance. |
| Projects | Amani Forged appeared first. All three engineering projects used shortened documentation links. The repository contained no approved project screenshots. |
| Career and skills | Elite Wheel Distributors was listed as current. A long badge list mixed core strengths with technologies outside the latest résumé. |
| Usability | Section links depended on a scroll handler and did not update the URL. The mobile menu had an unlabeled icon. Motion preferences and initial theme application needed attention. |
| Build and metadata | The source had a generic title and generated root-relative assets. The published build used manually relative asset URLs. There was no repository test script or CI workflow. |

## Implementation

| File | Change |
| --- | --- |
| `src/App.tsx` | Replaced `src/App.jsx` with a typed single-page app. Added a clearer hero and About section, first-class project cards, linkable case studies, an experience timeline, grouped skills, and focused contact and footer sections. |
| `src/data/portfolio.ts` | Centralized identity, professional skills, employer history, and project facts with a shared type for project data. |
| `src/index.css` | Replaced the unused starter stylesheet with the active responsive layout and shared violet theme tokens. Used a system font stack, flexible grids, and reduced-motion rules. |
| `index.html` | Added a descriptive title, canonical URL, Open Graph and X metadata, Person structured data, a JavaScript-disabled fallback, and theme initialization before rendering. |
| `public/favicon.svg` and `public/portfolio-share.png` | Added a compact favicon and a 1,200 × 630 social preview to match the portfolio identity. |
| `vite.config.ts` | Configured `/Portfolio/` as the base for built and public assets. |

The hero presents 4+ years of full-stack work and links directly to the production projects. The About section gives the broader web-development timeline from 2020. ZMent leads with checkout, stock commits, permissions, and production outcomes. The Vendor Product Data Platform covers isolation, checkpoints, and real-time monitoring. Amani Forged explains the configurable storefront and ERP integration and attributes the 4.2-to-0.9-second LCP result to the historical project.

Employment titles and the May 2026 Elite Wheel Distributors end date follow the supplied résumé. Earlier work is condensed. The résumé corroborates the dates used for Exyconn Business Solutions and the three featured projects. Conflicting older freelance dates were omitted. Project figures are owner-reported results. The workflow figures use public, high-level project descriptions.

Accessibility work included semantic landmarks and headings, a skip link, native fragment navigation with direct-link focus, visible focus indicators, keyboard handling for the mobile menu, and explicit theme and menu labels. The source requires no remote fonts or added packages. The build uses existing tooling, and the rendered page uses no third-party scripts.

## Verification

| Check | Observed result |
| --- | --- |
| `pnpm install --frozen-lockfile --fetch-retries=0` | Blocked because `registry.npmjs.org` did not resolve. The exact lockfile dependencies could not be installed from the local cache. |
| `pnpm build` and `pnpm lint` in the checkout | Blocked by missing TypeScript and ESLint executables after the install failure. |
| `pnpm build` and `pnpm lint` in an isolated copy | Passed using locally available React 19.2.4, Vite 7.3.1, TypeScript 5.9.3, and ESLint 9.39.2. The build command ran `tsc -b` before bundling. Gzipped output was 66.42 kB JavaScript, 3.64 kB CSS, and 1.12 kB HTML. These sizes describe the isolated build. |
| Built-bundle DOM smoke checks | Passed for rendering, project order, headings, unique IDs, fragment links, direct-link focus, mobile menu focus and Escape behavior, stored themes, storage failure handling, canonical metadata, and the existence of built assets referenced under `/Portfolio/`. No errors were logged by the DOM harness. |
| Color contrast | Selected text and button combinations measured at least 6.55:1 in light mode and 5.09:1 in dark mode. Selected workflow labels and focus rings met the checked contrast thresholds. |
| External links | The GitHub profile and Amani Forged storefront loaded. LinkedIn matched the résumé address and redirected the signed-out view to authentication. The email link matches the supplied address. |
| Browser and screenshots | The isolated browser processes could not launch in this workspace, and local preview could not bind to loopback. Rendered layouts at 320, 375, 768, 1024, and 1440 px, browser-console behavior, and page screenshots remain unverified. The social preview image was visually inspected. |
| Repository integrity | `git diff --check` passed. The checkout remains on `v1`. Branch refs are unchanged. No push or deployment occurred. |

The repository has no existing test command. The DOM checks ran against the isolated production build. The Git-tracked `dist/` files still represent the previous build and need a fresh production build from the locked dependencies before release.

## Outstanding items

- Run the frozen install, build, and lint in an environment with access to the registry. Complete the five-width browser review and collect screenshots there.
- Replace the workflow figures with approved anonymized screenshots if available. Internal case studies are supplemented with verified project documentation links from the resume. The resume link has been updated with the current Google Drive PDF link (`https://drive.google.com/file/d/1LJ3TfsZnMvd3ZtWOBoZTS_QKcioC-yBE/view?usp=sharing`).
- Verify logged-in LinkedIn access and the live social preview after an authorized release. The portfolio makes no claim about its own Core Web Vitals or accessibility certification.
- The optional bilingual ERP demo was deferred to keep the portfolio focused on the three shipped projects. Arabic RTL, TanStack Query expertise, and finance compliance are absent from the professional claims.
