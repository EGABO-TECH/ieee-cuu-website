# IEEE Student Branch — Cavendish University Uganda

Official website for the IEEE Student Branch at Cavendish University Uganda (CUU), part of the IEEE Uganda Section and IEEE Region 8.

Live site: [ieee-cuu-website.vercel.app](https://ieee-cuu-website.vercel.app/)

---

## 1. Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom IEEE brand tokens
- **Validation**: [Zod](https://zod.dev/) (Client & server schema validation)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Architecture**: Content-driven (JSON files in `content/`), date-driven event state engine (Africa/Kampala UTC+3).

---

## 2. Local Setup & Commands

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+

### Setup
```bash
# Clone the repository
git clone https://github.com/EGABO-TECH/ieee-cuu-website.git
cd ieee-cuu-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks
```bash
# Verify TypeScript types
npx tsc --noEmit

# Run event date/status tests
node scripts/test-event-status.mjs

# Build production bundle
npm run build
```

---

## 3. Environment Variables

Configure these in `.env.local` or on your Vercel project settings:

| Variable | Description | Default / Example |
|---|---|---|
| `NEXT_PUBLIC_CANONICAL_URL` | Canonical site origin | `https://ieee-cuu-website.vercel.app` |
| `NEXT_PUBLIC_BRANCH_EMAIL` | Official branch email | `ieee@cavendish.ac.ug` (or branch inbox) |
| `NEXT_PUBLIC_IEEE_LINKEDIN_URL` | LinkedIn company page | `https://www.linkedin.com/company/ieee-cavendish-university-student-branch` |
| `NEXT_PUBLIC_IEEE_X_URL` | X (Twitter) profile | `https://x.com/IEEECavendish` |
| `NEXT_PUBLIC_IEEE_TIKTOK_URL` | TikTok channel | `https://www.tiktok.com/@cavendishieee` |
| `NEXT_PUBLIC_IEEE_WHATSAPP_URL` | Branch WhatsApp invite | `https://chat.whatsapp.com/...` |
| `NEXT_PUBLIC_CUUCSA_WHATSAPP_URL` | CUUCSA WhatsApp invite | `https://chat.whatsapp.com/...` |
| `ADMIN_SECRET` | **Required** for the `/admin` export. Use a long random value; the export is locked when unset. | (no default) |
| `SUBMISSION_WEBHOOK_URL` | **Required on Vercel.** Where Join and Contact submissions are stored (e.g. a Google Apps Script bound to a Sheet). Vercel's filesystem is read-only, so without this the forms show an error instead of losing data. | `https://script.google.com/...` |

---

## 4. Student Handover: How to Add Content (Under 10 Minutes)

### 4.1 How to Add an Event
Events are data-driven. The site computes whether the event is `upcoming`, `registration-open`, `registration-closed`, `live`, or `ended` automatically based on Africa/Kampala time (EAT, UTC+3).

1. Create a new file in `content/events/<slug>.json` (e.g. `content/events/cloud-ai-workshop.json`):
```json
{
  "slug": "cloud-ai-workshop",
  "title": "AWS Cloud & AI Hands-on Workshop",
  "summary": "Practical cloud fundamentals and generative AI lab session at Siyani Campus.",
  "kind": "workshop",
  "startsAt": "2026-11-14T14:00:00+03:00",
  "endsAt": "2026-11-14T17:00:00+03:00",
  "timezone": "Africa/Kampala",
  "venue": {
    "name": "Siyani Campus Computer Lab 2",
    "address": "Plot 1469 Ggaba Road, Kampala"
  },
  "registration": {
    "opensAt": "2026-11-01T09:00:00+03:00",
    "closesAt": "2026-11-14T13:00:00+03:00",
    "membersOnly": false
  }
}
```
2. Import the JSON in `lib/events.ts` under `getAllEvents()`.
3. The event will appear immediately on `/events` and `/events/cloud-ai-workshop`.

### 4.2 How to Add a News Story or Event Recap
1. Create a file in `content/news/<slug>.json` (e.g. `content/news/ieeextreme-recap.json`):
```json
{
  "slug": "ieeextreme-recap",
  "title": "Cavendish University Teams Complete IEEEXtreme 20.0",
  "date": "2026-10-25",
  "author": "Branch Technical Committee",
  "tags": ["Competition", "IEEEXtreme", "Coding"],
  "summary": "CUU student teams tackled algorithmic challenges during the global 24-hour programming contest.",
  "content": "Paragraph 1...\n\nParagraph 2..."
}
```
2. The article will automatically publish to `/news` and `/news/ieeextreme-recap`.

### 4.3 How to Add or Update a Team Member
1. Place the member's photo in `/public/images/team/<name>.jpg` (optional; if omitted, clean branded initials are used).
2. Open `content/team.json` and append a record:
```json
{
  "id": "new-coordinator",
  "name": "Jane Doe",
  "role": "Outreach Coordinator",
  "group": "programs",
  "bio": "Coordinates technical student community outreach and high school STEM programs.",
  "photo": "/images/team/jane-doe.jpg",
  "linkedin": "https://www.linkedin.com/in/janedoe",
  "consent": true,
  "order": 14
}
```
> **Privacy Rule:** Only publish team members who have given written or electronic consent (`consent: true`). Never use LinkedIn search URLs; only link to verified direct profile links.

### 4.4 How to Add Event Photos to Gallery
1. Add optimized images to `/public/images/gallery/<event-slug>/`.
2. Open `app/gallery/page.tsx` and add an album to the `GALLERY` array. Ensure attendees have provided consent for public photography.

### 4.5 How to Feature a Student Project
1. Open `app/projects/page.tsx`.
2. Add the student project entry to the `PROJECTS` array with title, team members, tech tags, GitHub repository URL, and demo URL.

---

## 5. Branch Administration & Sign-up Exports

- **Sign-up Data Storage**: Sign-ups from the `/join` form and inquiries from `/contact` are validated using Zod, spam-protected with honeypot fields and IP rate-limiting, and stored in `content/submissions.json` (or forwarded to an external webhook).
- **Admin Dashboard**: Visit `/admin` and enter the `ADMIN_SECRET` key to review sign-ups in real time.
- **CSV Export Routes**:
  - Sign-ups: `GET /api/admin/export?key=<ADMIN_SECRET>&type=joins`
  - Inquiries: `GET /api/admin/export?key=<ADMIN_SECRET>&type=contacts`
  The secretary can import these CSVs directly into Excel or Google Sheets.

---

## 6. Handover Checklist for Outgoing Executive Committee

When branch leaders graduate, transfer the following assets so the branch maintains continuity:

- [ ] **Domain**: Request Cavendish IT to point `ieee.cavendish.ac.ug` to the Vercel project.
- [ ] **GitHub Repository**: Maintain repository ownership under an official branch organization account (`EGABO-TECH` or branch-owned org), not an individual's personal GitHub account.
- [ ] **Vercel Account**: Ensure the Vercel team/project is accessible to the branch email address (`ieee@cavendish.ac.ug`).
- [ ] **Official Social Accounts**: Store 2FA recovery codes and passwords for LinkedIn, X (@IEEECavendish), and TikTok in a branch password vault shared by the Counselor and Chair.
- [ ] **WhatsApp Community Ownership**: Ensure WhatsApp Community ownership is transferred to the incoming Chair and Secretary before graduating.
- [ ] **Admin Secret Key**: Rotate `ADMIN_SECRET` annually upon election of each new executive committee.
