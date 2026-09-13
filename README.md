# Dipon De — Developer Portfolio

Personal portfolio of **Dipon De** — Machine Learning / Deep Learning / LLM engineer.
Built with React, TypeScript, Tailwind CSS and Framer Motion.

## Sections

- `/` — hero, typewriter roles, intro highlights, social links
- `/about` — bio, experience & education timeline, skills grid, GitHub contributions
- `/projects` — filterable project grid with case-study modals
- `/certifications` — Oracle Certified Professional credentials
- `/research` — published research papers
- `/resume` — inline PDF viewer + download
- anything else — themed 404

A contact form and footer are present on every page.

## Local development

```bash
npm install
npm run dev
```

The dev server prints the local URL.

## Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable | Purpose |
| --- | --- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key from [web3forms.com](https://web3forms.com) — required for the contact form to deliver email. |
| `VITE_SITE_URL` | Public URL of the deployed site, used in metadata. |

Both are client-side (`VITE_` prefixed) values; the Web3Forms access key is designed to be public.

## Build

```bash
npm run build
```

## Deployment

### Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Build command `npm run build`.
3. Add the environment variables above under **Settings → Environment Variables**.
4. Deploy. `vercel.json` is already included.

### Netlify

1. **Add new site → Import an existing project** at [app.netlify.com](https://app.netlify.com).
2. Settings are read from the included `netlify.toml` (build `npm run build`, publish `dist`).
3. Add the environment variables under **Site configuration → Environment variables**.
4. Deploy.

### Cloudflare Pages

1. **Workers & Pages → Create → Pages → Connect to Git**.
2. Build command `npm run build`, build output directory `dist`.
3. Add the environment variables under **Settings → Environment variables**.
4. Deploy.

### Any static host

Run `npm run build` and upload the contents of `dist/` — the site is fully static and
uses no server-side code, database or platform-specific APIs.

## Content

All copy, projects, certifications, publications and skills live in
`src/data/portfolio.ts`. Edit that one file to update the site.

The resume PDF is served from `public/assets/Dipon_De_Resume.pdf` — replace that file
to publish a new CV.
