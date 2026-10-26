# What's missing and what to add

Status as of 26 October 2026. This file lists everything the site still needs from the branch. Nothing here has been made up to fill a gap: anything we don't know is either hidden or marked "to be confirmed".

Search the code for `TODO(owner)` to find each spot listed below.

---

## 1. Urgent: before the volunteer call closes (27 Oct 2026, 23:59 EAT)

| # | Task | Where |
|---|------|-------|
| 1 | Push `main` to GitHub so Vercel deploys the new site. | `git push origin main` |
| 2 | In Vercel, add the environment variables from section 2. Then redeploy. | Vercel → Project → Settings → Environment Variables |
| 3 | Set up a store for form submissions and set `SUBMISSION_WEBHOOK_URL`. Vercel's disk is read-only, so until this is set the Join and Contact forms show an error and keep nothing. | see section 2 |

## 2. Environment variables

The local `.env` sets every variable the code reads. Vercel does **not** read that file, so each value has to be entered in Vercel too. `.env.example` lists all of them.

| Variable | Status | Notes |
|----------|--------|-------|
| `NEXT_PUBLIC_IEEE_LINKEDIN_URL`, `_X_URL`, `_TIKTOK_URL`, `_WHATSAPP_URL` | Set | Copy to Vercel. |
| `NEXT_PUBLIC_CUUCSA_LINKEDIN_URL`, `NEXT_PUBLIC_CUUCSA_WHATSAPP_URL` | Set | Copy to Vercel. |
| `NEXT_PUBLIC_CANONICAL_URL` | Set | Change it if a custom domain is added. |
| `ADMIN_SECRET` | Set locally | Copy the value from `.env` into Vercel. Never share it in chat or commit it. |
| `SUBMISSION_WEBHOOK_URL` | **Missing** | Needs a Google Apps Script web app (or a similar service) that appends each submission to a Sheet. |
| `NEXT_PUBLIC_BRANCH_EMAIL` | **Missing** | Until the official branch address exists, the site shows "coming soon". |
| `NEXT_PUBLIC_IEEE_EVENT_REGISTRATION_URL` | Set, unused | IEEE Day form. The event has passed. |
| `NEXT_PUBLIC_IEEE_CUUCSA_VOLUNTEER_URL` | Set, unused | The volunteer page reads `formUrl` from `content/calls.json`, which is the same form. |

## 3. Official launch (4 November 2026)

When the details are confirmed, edit only `content/events/branch-launch-2026.json` (see README §4.5):

- [ ] Start and end time: set `timeTbc: false`, `startsAt`, `endsAt`
- [ ] Room: `venue.detail`
- [ ] Programme and speakers (only people who have confirmed)
- [ ] RSVP link, if there is one
- [ ] After the event, add the recap: summary, real attendance figure, 8–12 photos with consent, quotes only with permission

## 4. People and team

- [ ] Advisor **Mr. Tabingwa Evans Maganda**: title, department, photo, short bio, LinkedIn (`content/team.json`)
- [ ] Team headshots and LinkedIn URLs, only where the person consents (`content/team.json`, images in `public/images/team/`)
- [ ] Confirm the name order: "Ausi Mulo" on the CUUCSA page or "Mulo Ausi" on the IEEE team
- [ ] Never publish personal phone numbers or emails

## 5. Documents and media

- [ ] IEEE Day 2026 certificate scan → `public/documents/governance/`, then set `fileUrl` in `app/governance/page.tsx`
- [ ] Branch constitution PDF
- [ ] Launch minutes PDF (after 4 Nov)
- [ ] Annual plan PDF
- [ ] IEEE Day photos, 8–12 with consent → `content/events/ieee-day-2026.json` `recap.photos`
- [ ] Gallery albums → `public/images/gallery/` plus the `GALLERY` array in `app/gallery/page.tsx`; then add Gallery to the nav in `components/SiteHeader.tsx`
- [ ] Student projects, once they are verified → `app/projects/page.tsx`

## 6. Membership and competitions

- [ ] IEEE student membership fee in USD and UGX, accepted payment methods, and the exact branch name to pick on the IEEE form (Join page)
- [ ] Date volunteers will be told the outcome (volunteer page and news post)
- [ ] IEEEXtreme 20.0: contest date, CUU team names, scores and rankings (`content/events/ieeextreme-20.json`, `components/events/IEEExtremeDetail.tsx`)
- [ ] IEEEXtreme 21.0 interest form link

## 7. Wording to confirm

These claims were toned down to stay accurate. Confirm each one before making it stronger:

- [ ] AWS Student Builders perks and compensation; check against AWS's official page (`lib/data.ts`)
- [ ] IEEE Xplore access for student members (sources disagree; the current wording is cautious)
- [ ] Privacy retention terms: Join entries reviewed at handover, contact messages kept 12 months, executive-only access (`app/privacy/page.tsx`)
- [ ] The "reply within three working days" promise on the Contact page
- [ ] The "Planned activities" list on `/events`: confirm the named leads

## 8. Technical follow-ups

- [ ] Upgrade Next.js from 14.2.34, which has a published security advisory; test with `npm run build` and `npm test`
- [ ] Optional: `npm install sharp` for faster image optimisation
- [ ] Remove unused code: `components/IEEExtreme.tsx`, `Membership`, and the legacy `team` array in `lib/data.ts`
- [ ] Run Lighthouse on the live site
- [ ] Check WhatsApp and LinkedIn link previews by pasting the site URL into each
- [ ] Check these links from a normal connection (they could not be reached during the build): authorcenter.ieee.org, blackpythondevs.com, www.cavendish.ac.ug
- [ ] Rotate `ADMIN_SECRET` at every executive handover
