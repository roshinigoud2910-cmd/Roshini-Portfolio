# Roshini.dev — Engineering Portfolio

A responsive React + TypeScript portfolio with a dark, writing-first visual identity.

## Requirements

- Node.js LTS
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

## Personalize before publishing

Update the contact constants near the top of `src/App.tsx` with your real GitHub, LinkedIn, and email details. Those links stay hidden until you add them, so the published site will not show broken placeholder links.

1. Add your repository URL to the cloud project in `src/data.ts` when you are ready to share it.
2. Make the cloud project case study specific to what you actually implemented; do not add unmeasured performance claims.
3. Add real writing links when you publish technical posts. The current cards are clearly framed as topics to explore, not published articles.
4. Add your actual resume as `public/resume.pdf` (create the `public` folder first).
5. Keep only technologies you can confidently discuss in an interview.
6. Check mobile layout, keyboard navigation, links, and the production build.

## Deploy

Push the repository to GitHub and import it into Vercel. Use:

- Build command: `npm run build`
- Output directory: `dist`

The portfolio is frontend-only. A backend is not needed unless you later add features that require one.
