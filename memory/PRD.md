# Minnerva Innov — Product Requirements Document

## Original problem statement
> "HI We need to develop a website for Minnerva Innov. I have worked on this a lot to make it easy for you to understand. Here's the details." (spec attached as 900_Website.docx + ZIp_Images.zip — 21 images)

Client: Minnerva Innov — a 5-year-old Research & Innovation startup serving Fortune 500 FMCG R&D and Marketing leaders across Oral Care, Personal Care, Laundry, Dishwash.

## User choices (explicitly provided)
1. Contact form → `mailto:` only (no backend storage)
2. "Let's Talk" CTAs → navigate to `/contact`
3. Videos → YouTube short embed for Case Study 2; dark + orbs composition for hero (external video asset 404'd, removed)
4. Scope → static site now; CMS/dashboard planned later

## Architecture
- **Frontend:** React 19 + React Router 7, Tailwind CSS, Framer Motion, react-fast-marquee, Sonner (toasts)
- **Backend:** Unchanged FastAPI boilerplate (no new endpoints). Room reserved for future CMS.
- **MongoDB:** Not used currently.
- **Fonts:** Bebas Neue (display), Cabinet Grotesk (editorial italic), Satoshi (body) via Fontshare CDN
- **Design system:** `#06060A` background · Lime `#C8FF00` hero accent · Ember `#FF5C1A` punch · Red `#F40009`

## Pages
| Route | File | Purpose |
|---|---|---|
| `/` | `pages/HomePage.jsx` | Hero + 3 CTAs, Case Studies, marquee, About+Services, Social Proof, Stakeholder tabs |
| `/case/:slug` | `pages/CaseStudyPage.jsx` | Detail pages for 3 case studies |
| `/services` | `pages/ServicesPage.jsx` | 4 service deep-dives with anchor links |
| `/contact` | `pages/ContactPage.jsx` | Form → opens mailto |

## User personas (from spec)
- R&D Heads / Directors at Fortune 500 FMCG
- Marketing VPs
- CEOs / Global Heads

## What's been implemented (Apr 23)
- Full information architecture (7 sections on home, 3 case study detail pages, services page, contact)
- Custom cursor with mix-blend-mode-exclusion (desktop only)
- Noise texture overlay + parallax orb glows (Framer Motion spring follow)
- Scroll-reveal animations on every section
- Two auto-scrolling testimonial marquees (opposing directions)
- Two full-bleed Quip bars (ember + red)
- Stakeholder moments tab switcher with AnimatePresence
- Responsive mobile nav, complete `data-testid` coverage
- All 21 spec images wired in (`/public/images/`)
- Contact form validates required fields → `mailto:hello@minnervainnov.com`
- Footer with navigation, brand, social links

## Testing
- Frontend E2E via testing agent: **100 % functional, 0 blocking issues**. One network 404 (pixabay hero video) resolved by removing the external asset.

## Backlog (P1)
- **CMS/dashboard** (user plans this next) — Strapi-style or custom admin to edit case studies, testimonials, services, marquee items via MongoDB. Currently content is in `/app/frontend/src/lib/content.js`.
- Replace hero placeholder orbs with hosted lab video (`/public/videos/hero.mp4`)
- Analytics integration (GA4 / Plausible) + UTM capture
- Open Graph / meta tags for social sharing
- SEO sitemap + robots.txt

## Backlog (P2)
- Case study page: pre-footer "next case" recommendation
- Blog / Newsletter archive page
- Password-protected client proposal pages
- Dark/light theme toggle (current is dark-only per spec)

## Key content files
- `/app/frontend/src/lib/content.js` — every string, testimonial, service bullet, case study section
- `/app/frontend/public/images/` — 21 images from spec
