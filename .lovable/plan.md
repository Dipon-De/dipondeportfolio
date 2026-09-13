# Dipon De — Developer Portfolio Rebuild

A full rebuild of your portfolio with the same dark purple identity, modernized, plus two new sections (Certifications, Research Papers) and all content updated from your CV.

## Look and feel

- Near-black background with the diagonal purple gradient you use today, purple accent `#c770f0`, Raleway typography.
- Glass cards with translucent purple borders, purple glow shadow, scale-up on hover; pill buttons with translucent purple fill.
- Animated particle field behind every page (slow drift, no connecting lines, click to spawn), loaded after first paint.
- Short splash/preloader (~1.1s) before the page reveals.
- Light mode toggle with an inverted, still purple-accented palette; dark is the default.
- Reduced-motion setting disables particles and heavy animation.

## Pages

- **Home** — hero with name, waving emoji, typewriter roles (ML Engineer, DL Engineer, LLM/GenAI Developer, Full-Stack Developer), tilt avatar, buttons to Projects and Resume, intro blurb, social links.
- **About** — personal blurb, education and experience timeline (NITTTR LLM internship, Sabudh Foundation/STPI), skills icon grid with hover tooltips, tools grid, GitHub contributions calendar for `Dipon-De`.
- **Projects** — filter chips (Machine Learning, Deep Learning, Computer Vision, LLM, Web App) over a grid of the four projects: Kidney Stone Detection, Real-Time Anomaly Detection, BioGPT + LoRA Medical LLM, Bitcoin Forecasting. Clicking a card opens a case-study overlay with the full description, tech badges and links.
- **Certifications** — five Oracle certification cards with issuer, date and a Verify link placeholder.
- **Research** — citation-style card for your IEEE violence-detection paper with a View Paper link placeholder.
- **Resume** — inline PDF viewer of your uploaded CV with a loading skeleton, plus a Download CV button.
- **404** — themed not-found page with a link home.

Persistent shrinking sticky navbar (active-route highlight, mobile slide-in drawer, GitHub star/fork button) and a footer with social links, auto-updating copyright, tagline, and a working contact form.

## Contact form

Web3Forms, called directly from the browser with your access key in an environment variable. Success and error toasts. No database or backend of ours involved.

## Content

Exactly the identity, summary, education, experience, projects, publications, certifications and skills text you supplied — nothing invented. Your uploaded CV becomes the resume file. Placeholder links stay as placeholders (Verify, View Paper, project repos) for you to fill in.

## Technical notes

- Stack as configured here: TanStack Start (file-based routing under `src/routes/`), React 19, TypeScript, Tailwind v4 tokens in `src/styles.css`, Framer Motion, react-icons, tsparticles, react-parallax-tilt, react-pdf, react-github-calendar.
- No Supabase, no server functions, no database. Web3Forms key read from a `VITE_`-prefixed env var; site URL for meta tags also env-driven, no Lovable preview URLs hard-coded.
- Routing uses TanStack Router instead of React Router (fixed on this stack); route paths are identical to your spec. Unknown paths render the themed 404.
- SEO via each route's own `head()` (title, description, OG, Twitter) instead of react-helmet; plus `robots.txt`, `sitemap.xml`, PWA `manifest.json` with real name/icons and theme color.
- Browser-only libraries (particles, PDF viewer, GitHub calendar) are loaded client-side after hydration so they never block first paint.
- Deployment: `README.md` with steps for Vercel, Netlify, Cloudflare Pages and Lovable publish. GitHub Pages is not covered — this stack's build is not a plain static `dist/` folder, so a pure static host is out of scope.
- Responsive checks at 375px, 768px and 1280px; semantic landmarks, alt text, visible focus states.

## Build order

1. Design tokens, fonts, particles, preloader, navbar + footer shell.
2. Home, About.
3. Projects with filters and case-study overlay.
4. Certifications, Research, Resume.
5. Contact form, SEO/PWA files, 404, README, responsive and accessibility pass.
