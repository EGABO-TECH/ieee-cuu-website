# IEEE Student Branch — Cavendish University Uganda

Official website for the IEEE Student Branch at Cavendish University Uganda, built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/                 App Router entry (layout, global styles, page)
components/          One component per section (Hero, EventSpotlight, Programs, ...)
components/ui/       Small reusable UI primitives (Countdown)
lib/data.ts          All site copy: pillars, journey steps, programs, team, FAQ, resources
lib/useCountdown.ts  Client hook powering the live countdown timers
public/favicon.svg   Site favicon
```

## Before you deploy — replace these placeholders

Open `lib/data.ts` and update:

- `WHATSAPP_INVITE_URL` — the real IEEE CUU WhatsApp group invite link.
- `IEEE_DAY_REGISTRATION_URL` — the real IEEE Day / Branch launch registration link (the flyer only shows a QR code, so this is `"#"` for now).
- `IEEE_DAY_TARGET_ISO` / `IEEEXTREME_DEADLINE_ISO` — adjust if the official times change.
- `team` — keep this in sync with the current Executive Committee.

## Design system

- **Fonts:** Sora (display/headings) + IBM Plex Sans (body), loaded via `next/font/google`.
- **Palette:** deep indigo base (`bg`, `surface`, `surface2`) with three accent colors — violet, cyan and ember — used per-section so the page doesn't read as a single monotone block. Defined in `tailwind.config.ts`.
- **Motion:** a few deliberate touches (hero gradient blobs, orbiting ring, pulsing nodes) — everything respects `prefers-reduced-motion`.

## Deploying

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any Node host:

```bash
vercel deploy
```
