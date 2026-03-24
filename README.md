# DocMagis Medical Web

Single-page demonstration app that connects **explore-only** clinician profiles, **educational** condition summaries, and a **local-only** health hub in one cohesive experience.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

```bash
npm run build   # production build to dist/
npm run preview # serve dist/
npm run lint    # ESLint
```

## What this build is

- **Professionals:** Mock directory with search, specialty filter, and “Request consultation” — saves a reminder in `localStorage` only; no booking or notifications.
- **Health information:** Demo articles with “when to seek care” prompts. **Not individualized medical advice** and not a substitute for a licensed clinician.
- **Health hub:** After **demo sign-in** (display name + role), you can edit notes, medication lines, document labels, and view saved consultation requests. Data stays in **this browser** and is **not** HIPAA-compliant storage.

## Production follow-ups

- Real authentication (e.g. OIDC), backend API, and encrypted storage for any PHI.
- Privacy policy, terms of use, telehealth and licensing compliance for your jurisdiction.
- Clinical content reviewed or licensed from authoritative sources; remove “demo” disclaimers only when legally and clinically appropriate.

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`), Lucide icons, Source Sans 3 (`@fontsource/source-sans-3`).
