# Admission Turkey Website

Production-quality React.js website for **Admission Turkey**, built to match the provided Figma/PDF design.

## Tech Stack

- **React 19** + **Vite 6**
- **Framer Motion** for scroll animations, hover effects, and micro-interactions
- Responsive CSS (desktop, tablet, mobile)

## Getting Started

> **Note:** The workspace folder `Sheroz#1` contains a `#` character which breaks Vite's module resolver. Use one of these options:

### Option A — Run from the junction (recommended)

```bash
cd d:\ADmissionTurkey\AdmissinTurkeyWebsite
npm install
npm run dev
```

### Option B — Run from the clean copy

```bash
cd d:\ADmissionTurkey\website-react
npm install
npm run dev
```

The site opens at **http://localhost:3000**

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── components/
│   ├── layout/     Header, Footer, Loader
│   ├── sections/   All page sections
│   └── ui/         AnimatedSection wrapper
├── hooks/          useScrollAnimation
├── App.jsx         Main page composition
└── index.css       Global styles
public/
└── assets/         Logo, images from design PDF
```

## Sections

1. Hero — Study Abroad headline with stats
2. Trusted By — University logos
3. Unlock Success — Accordion with campus image
4. Search — Course/University/Scholarship finder
5. Ambition — Opportunity section with student photos
6. Find University — Aerial campus with badge stats
7. Let's Connect — Marquee banner
8. Why Choose Us — Features and reviews
9. Our Process — Circular process diagram
10. Testimonials — Client reviews
11. Contact — Form with map
12. Newsletter + Footer

## Design Assets

Images were extracted from the provided design PDF. The official logo is used in the header and footer.
