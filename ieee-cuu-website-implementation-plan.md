# IEEE CUU Student Branch Website: Implementation Plan

Version 1 · 26 October 2026 · Site: https://ieee-cuu-website.vercel.app/
Companion to the "IEEE CUU Student Branch Website: Blueprint v2" doc. The blueprint says *what* the site becomes; this file says *how to build it*, in order.

## 0. Read this first

**Assumptions (verify against the repo before starting).** The site looks like a Next.js app on Vercel (image URLs use `/_next/image`). File paths below assume the App Router (`app/…`). If the repo uses the Pages Router or different folder names, keep the intent and change the paths.

**Dates and timezone.** All deadlines and countdowns use East Africa Time (UTC+3). Store dates as ISO strings with an explicit offset, for example `2026-10-27T23:59:00+03:00`. The existing IEEEXtreme deadline is stated in GMT; keep it as `2026-10-17T23:59:00Z`.

**Truth rules for content.**
- 6 October 2026 (IEEE Day): CUU joined Uganda's student branches at the American Center, Kabalagala, was recognised as one of the branches being reborn, and received an official certificate of approval. Past tense, separate page.
- 4 November 2026 (Wednesday): Official Branch Launch. Time not set. Venue: Cavendish University Uganda, exact location to be announced. No programme yet. Future tense, "to be announced" wording.
- Volunteer call: 15 volunteers, any CUU student, Google Form, closes 27 October 2026.
- Never publish phone numbers or personal emails. Never invent testimonials, attendance numbers or speakers.

**Definition of done for every phase:** `npm run build` passes, link check passes, no visible placeholder text, mobile layout checked at 360 px width.

## 1. Phases at a glance

| Phase | When | Goal | Ship when |
| --- | --- | --- | --- |
| 0. Hotfix | Today, 26 Oct | Volunteer call live; wrong event claims removed | Before end of day |
| 1. Foundations | 27 Oct to 29 Oct | Shared layout, date-driven content, redirects, metadata | Before launch page work |
| 2. Pre-launch content | 28 Oct to 3 Nov | Launch page, team, CUUCSA, Join, Contact, Governance, privacy | By 3 Nov |
| 3. Launch day | 4 Nov | Live "happening today" state | 4 Nov morning |
| 4. Post-launch | 5 to 11 Nov | Recap, gallery, minutes, counter | Within a week |
| 5. Growth | From mid-Nov | Resources, News, newsletter | Monthly rhythm |

Phases 1 and 2 overlap. Do not wait for Phase 1 to finish before Phase 0.

---

## 2. Phase 0: Hotfix (today)

### 2.1 Volunteer page

Create `app/volunteer/page.tsx`.

Content (copy deck):

- Eyebrow: `Call for volunteers`
- Heading: `We're looking for 15 student volunteers`
- Subline: `Open to every Cavendish University Uganda student, any faculty, any year.`
- Buttons: `Apply on Google Forms` (links to the form), `Download the flyer` (links to the flyer file)
- Deadline strip: countdown to `closes`, label `Applications close 27 October 2026`
- Section `What volunteers do`: use the roles printed on the flyer. If the flyer lists none, use: Registration and ushering, Logistics and venue, Media and photography, Social content, Tech and live updates, Mobilisation.
- Section `What you get`: list only confirmed benefits. Hold unconfirmed ones (certificate, letter) until the branch confirms them.
- Section `How selection works`: apply, shortlist, notified by a stated date, short briefing before 4 November.
- FAQ: Do I need IEEE membership? (No.) Do I need technical skills? (No.) What if I miss the deadline? (Join the interest list.)
- After `closes`: switch to `Applications closed. Thank you.` plus a standing `Volunteer interest list` link.

Inputs needed from the branch: Google Form URL, flyer image or PDF, exact closing time (default `23:59` EAT if not given), notification date.

### 2.2 Home-page announcement bar

Create a `components/AnnouncementBar.tsx` driven by the content layer (section 3). Behaviour:

- Before `volunteer.closes`: `Volunteer call: 15 spots, closes 27 October. Apply now.` linking to `/volunteer`.
- After it: `Official Branch Launch, 4 November. Details soon.` linking to the launch page.
- Render in the shared header area so it appears on every page, not only home.

### 2.3 Remove wrong or stale claims

- Home page: remove the "Upcoming flagship event: IEEE Day 2026" card and the "IEEEXtreme 20.0 team registration" card (registration closed 17 October).
- `app/events/ieee-day-2026/page.tsx` and `app/events/ieee-day/…`: remove "Event ended", the launch-ceremony agenda, "first cohort" and "inaugural" wording. Full rewrite happens in Phase 2; for today replace the body with a short holding paragraph.
- `app/governance/page.tsx`: change the document card "Inaugural IEEE Day 2026 Minutes & Summary … held on 6 October" to `Launch minutes. To be published after the 4 November launch.`
- `app/join/page.tsx`: remove every `TODO(owner)` string. Replace with real answers if known; otherwise delete the line. Check with `grep -R "TODO" app components content`.

### 2.4 Acceptance for Phase 0

- `/volunteer` loads, countdown shows correct days to 27 Oct (EAT), buttons work.
- No page shows "Register Now" for a past date.
- `grep -R "TODO(owner)"` returns nothing.

---

## 3. Phase 1: Foundations

### 3.1 Content layer (one place for dates and lists)

Create a `content/` folder so officers can update facts without touching layout code.

```
content/
  events.ts
  calls.ts
  team-ieee.ts
  team-cuucsa.ts
  programs.ts
  site.ts
lib/
  status.ts
```

`content/events.ts` (shape; fill with real values):

```ts
export type EventItem = {
  slug: string;
  title: string;
  start: string;          // ISO with offset; use date-only noon EAT if time unknown
  end?: string;
  timeTbc?: boolean;      // true until the time is announced
  venue: string;
  venueDetail?: string;   // exact room, when known
  registrationUrl?: string;
  flyer?: string;
  summary: string;
};

export const events: EventItem[] = [
  {
    slug: "branch-launch-2026",
    title: "Official Branch Launch",
    start: "2026-11-04T12:00:00+03:00",
    end: "2026-11-04T23:59:00+03:00",
    timeTbc: true,
    venue: "Cavendish University Uganda",
    venueDetail: undefined,           // "to be announced"
    summary: "The official launch of the IEEE Student Branch at Cavendish University Uganda.",
  },
  {
    slug: "ieee-day-2026",
    title: "IEEE Day 2026 at the American Center",
    start: "2026-10-06T09:00:00+03:00",
    end: "2026-10-06T18:00:00+03:00",
    venue: "American Center, Kabalagala, Kampala",
    summary: "Uganda's student branches celebrated IEEE Day together. CUU received its certificate of approval.",
  },
  {
    slug: "ieeextreme-20",
    title: "IEEEXtreme 20.0",
    start: "2026-10-17T23:59:00Z",   // registration deadline; replace with contest date when known
    venue: "Virtual, with on-campus coordination",
    summary: "24-hour global programming contest. Registration closed 17 October 2026.",
  },
];
```

Note: the start and end times on `ieee-day-2026` above are placeholders for sorting only; do not display a time for it unless the branch supplies one. Hide times whenever `timeTbc` is true.

`content/calls.ts`:

```ts
export const calls = [
  {
    slug: "volunteer-2026",
    title: "Call for 15 student volunteers",
    slots: 15,
    opens: undefined,
    closes: "2026-10-27T23:59:00+03:00", // confirm closing time with the branch
    formUrl: "",       // owner supplies
    flyer: "/images/volunteer-call-flyer.png", // owner supplies file
  },
];
```

`lib/status.ts`:

```ts
export type Status = "upcoming" | "live" | "past" | "open" | "closing-soon" | "closed";

export function eventStatus(e: { start: string; end?: string }, now = new Date()): Status {
  const start = new Date(e.start).getTime();
  const end = new Date(e.end ?? e.start).getTime();
  const t = now.getTime();
  if (t < start) return "upcoming";
  if (t <= end) return "live";
  return "past";
}

export function callStatus(c: { opens?: string; closes: string }, now = new Date()): Status {
  const t = now.getTime();
  if (c.opens && t < new Date(c.opens).getTime()) return "upcoming";
  const closes = new Date(c.closes).getTime();
  if (t > closes) return "closed";
  return closes - t < 48 * 3600 * 1000 ? "closing-soon" : "open";
}
```

Rendering rule: pages that show a status must not be fully static. Either use `export const revalidate = 300` on those routes, or render the status in a small client component that recomputes on mount and every 60 seconds. Countdowns are always client components.

### 3.2 Shared layout

- One `components/Header.tsx` and one `components/Footer.tsx`, used by `app/layout.tsx` for every route. Remove any per-page header or footer copies.
- Main menu (all pages): Home, About, The Branch, Events, Programs, CUUCSA, Volunteer, and a highlighted `Join` button. Put `Contact` in the footer (and keep it reachable from the mobile menu).
- Footer columns: Explore (About, The Branch, Team, Programs, CUUCSA), Get involved (Events, Volunteer, Join, Gallery, Contact), Official IEEE links, legal (Privacy, Terms, Cookies, Governance). Use real route links, not `/#about` style anchors.
- Footer map: either keep the embed on every page (and keep the privacy text that mentions it) or remove it. Do not refer to a map that is not shown.

### 3.3 Redirects for old links

In `next.config.js` add permanent redirects so old footer links never 404:

```js
async redirects() {
  return [
    { source: "/events/ieee-day", destination: "/events/ieee-day-2026", permanent: true },
    { source: "/events/ieeextreme", destination: "/events/ieeextreme-20", permanent: true },
  ];
}
```

Test the current event-card buttons on `/events`: they point to `/events/ieee-day` and `/events/ieeextreme`. After this phase every such link must resolve.

### 3.4 Metadata and sharing

- Every route exports `generateMetadata` (or `metadata`) with its own `title`, `description`, `openGraph.title`, `openGraph.description`, `openGraph.images`, and `twitter`.
- Default share image: `/images/og-card.png` (exists). Add page-specific images for Launch and Volunteer when the flyers are ready.
- Add `app/sitemap.ts` and `app/robots.ts`.
- On the launch page add JSON-LD `Event` structured data (name, startDate, location, eventAttendanceMode, organizer). Omit `startDate` time until it is set; a date-only value is valid.

### 3.5 Accessibility and performance baseline

- Countdown: wrap in an element with `role="timer"` and an `aria-label`; provide the static date as text next to it; respect `prefers-reduced-motion`.
- Hero video: add `poster`, `muted`, `playsInline`, captions track if it contains speech, and a pause control. Do not autoplay with sound.
- Images: `next/image` with explicit `width` and `height`; descriptive `alt` text on flyers and the certificate.
- Keyboard: visible focus rings, skip-to-content link, accordion and menu operable by keyboard.
- Target: Lighthouse mobile Performance ≥ 85, Accessibility ≥ 95 on Home, Volunteer, Launch.

### 3.6 Acceptance for Phase 1

- Header and footer identical on every page; `Volunteer` in the menu.
- Old event URLs redirect.
- Each page has a unique title and share card (check by pasting links into WhatsApp and LinkedIn preview tools).
- Status labels switch correctly when you change the system date in tests (write one unit test for `eventStatus` and `callStatus`).

---

## 4. Phase 2: Pre-launch content (28 Oct to 3 Nov)

### 4.1 Home page (`app/page.tsx`)

Section order (from Blueprint §6.1):

1. Announcement bar (done in Phase 0).
2. Hero. Keep "Engineering ideas into real-world impact." Buttons: `Join the branch`, `RSVP for the launch` (or `Launch details` until RSVP exists).
3. Launch block, from `events.ts`: date `Wednesday 4 November 2026`; if `timeTbc` show `Time and venue details coming soon`; countdown to the date; add-to-calendar button only after the time is fixed.
4. Three ways in: Join, Volunteer, Compete (link to the IEEEXtreme page and the 21.0 interest list when it exists).
5. What you get: four to six concrete benefits, each linking to its page.
6. Student journey (six steps already written).
7. Recognition: `Recognised on IEEE Day 2026` badge with the certificate image and two or three photos from the American Center event, linking to `/events/ieee-day-2026`.
8. Leadership strip: Chair, Counselor, Advisor.
9. CUUCSA two-line tie-in using the independence wording in §4.6.
10. FAQ, official IEEE links, partners, partner disclaimer.

Do not show a founding-member counter until the number is real.

### 4.2 Events hub (`app/events/page.tsx`)

- Three tabs driven by `eventStatus` and `callStatus`: `Upcoming` (Branch Launch), `Open calls` (Volunteer, until it closes), `Past` (IEEE Day 2026 at the American Center, IEEEXtreme 20.0).
- Each card: status chip, date, venue, who can attend, one button. Remove the `Checking registration...` text; the status chip replaces it.
- Add a calendar link per event: for the launch use an all-day `.ics` until the time is set. Generate `.ics` in a route handler at `app/events/[slug]/calendar.ics/route.ts`.

### 4.3 Official Branch Launch page

Create `app/events/branch-launch-2026/page.tsx`.

Before the event show:

- Title, `Wednesday 4 November 2026`.
- Time: `To be announced`. Venue: `Cavendish University Uganda` with `Exact location on campus to be announced`.
- Free entry for CUU students only if the branch confirms it.
- Programme: `Programme to be announced` with a notify-me link (WhatsApp group or a Google Form). Do not reuse the earlier agenda.
- RSVP button when the registration link exists.
- FAQ: Who can attend, do I need membership (no), how do I join afterwards, who do I contact.
- Share card for WhatsApp using the flyer.

After the event (Phase 4) the same route flips to a recap using `eventStatus === "past"`.

### 4.4 IEEE Day 2026 recap page (rewrite)

Rewrite `app/events/ieee-day-2026/page.tsx` as a true recap:

- Heading: `IEEE Day 2026 at the American Center, Kabalagala`.
- Short account (3 to 5 sentences): student branches from across Uganda celebrated together; universities present included Makerere, Kyambogo, ISBAT, UCU, Ernest Cook, MUBS, KIU and Cavendish; CUU was recognised as one of the branches being reborn and received an official certificate of approval; engagement, perspective sharing, networking.
- Certificate image (legible branch name) with `alt` text.
- 8 to 12 photos in a grid with captions. Use only photos with consent from people pictured.
- Button: `Next: Official Branch Launch, 4 November`.
- Remove the invented ceremony agenda, speakers and "cake cutting" content.

### 4.5 Team pages

**IEEE Team (`content/team-ieee.ts`).** Add:

```ts
{ name: "Mr. Tabingwa Evans Maganda", role: "Advisor", group: "Governance and advisory",
  blurb: "Advises the branch executive. (Branch to supply final title, department and one-line bio.)" }
```

Place him in a `Governance and advisory` row at the top, next to Dr. John Bosco Ssemakula (Branch Counselor).

Other changes:
- Use the IEEE term `Counselor` consistently (Team and Governance pages).
- Replace `Search on LinkedIn` links with direct profile links as each person supplies one; hide the link if none.
- Add photo fields; keep initials as the fallback.
- Replace the volunteer button's WhatsApp link with `/volunteer`.
- Pick one name order per person across both teams. The CUUCSA register lists `Ausi Mulo`; the current IEEE Team page lists `Mulo Ausi`. Confirm with him, then use the same form everywhere.

### 4.6 CUUCSA page (`app/cuucsa/page.tsx`)

Structure (Blueprint §6.9):

1. Hero: seal, motto `LEARN. BUILD. INNOVATE. IMPACT.`, buttons for the CUUCSA WhatsApp community and LinkedIn (links already on the page).
2. Independence statement (use exactly):
   > CUUCSA is the Cavendish University Uganda Computing Students' Association, an independent student association of the Faculty of Science and Technology. IEEE CUU Student Branch collaborates with CUUCSA by mutual agreement. Each keeps its own membership, funds and records.
3. Vision and mission.
   - Vision: To be a leading student computing community that develops innovative, skilled and entrepreneurial technology creators capable of solving real-world challenges and driving digital transformation.
   - Mission: To unite and empower computing students at Cavendish University Uganda through academic support, practical technical training, research, innovation, entrepreneurship, professional mentorship, interdisciplinary collaboration and technology-driven community engagement.
4. Student journey line: Join → Learn → Practise → Build → Innovate → Connect → Launch → Impact.
5. Six pillars (`content/cuucsa.ts`):

| Pillar | Outcome shown on the page |
| --- | --- |
| Academic Excellence | Mentorship, clinics, resources and representation |
| Technical Excellence | Labs, code-alongs, challenges and projects |
| Research and Innovation | Research pipeline, Innovation Hub, prototypes, demos |
| Entrepreneurship and Careers | Mentors, industry exposure, portfolios, internships, pitch pathways |
| Digital Impact | Documented campus solutions and community digital-literacy work |
| Representation and Governance | Regular forums, responsive representation, records and handover |

6. Eight flagship programmes, each with a one-line purpose and its lead office: Academy (Academic Affairs + Technical Lead), CodeLab (Technical Lead), Innovation Hub (Vice President + Technical Lead), Research Lab (Technical Lead + Academic Affairs + Legal), Techpreneur (Vice President + PR/Partnerships), Industry Connect (PR and Partnerships), Digital Impact (Vice President + Technical Lead), Representation Forum (President + Academic Affairs + Batch Reps).
7. Flagship events (names only until dates are set): Tech Week, Hackathon, Career and Industry Day, Research and Innovation Expo, Startup Challenge, Solve a Cavendish Problem.
8. **Core team** from `content/team-cuucsa.ts` (all listed members have agreed to be listed):

```ts
export const cuucsaCore = [
  { office: "President", name: "Ausi Mulo", programme: "BSE" },
  { office: "Vice President", name: "Nakanjako Victoria", programme: "BSE" },
  { office: "Secretary General", name: "Nuwasiima Libby", programme: "BSE" },
  { office: "Assistant Secretary", name: "Ekalam Joshua", programme: "BCS" },
  { office: "Junior Treasurer", name: "Ntambi Calvin", programme: "BSE" },
  { office: "Technical Lead", name: "Egabo Aaron", programme: "BSE" },
  { office: "Academic Affairs Officer", name: "Rwothomio Evans E.", programme: "BSE" },
  { office: "PR and Partnerships Officer", name: "Niwasiima Ashelycole", programme: "BSE" },
  { office: "Legal and Compliance Officer", name: "Bamidele-Oseni Oyindamola Abigail", programme: "LLB" },
  { office: "Advisor", name: "Kayizzi Sadat", programme: "BIT",
    note: "Outgoing Minister of ICT and Innovation" },
];

export const cuucsaBatchReps = [
  "Maha Ahmed Farah", "Onyango John Steven", "Namusana Rebecca", "Kawuma Michael",
  "Natozo Patience Martha", "Nassuna Marsha Favour Ntale", "Olubwar Stephen",
  "Shambe Andrew", "Naume Catherine", "Atukwatse Arnold", "Dahomey Mortifer",
];
```

   Show offices as cards with initials or photo; add a `batch representatives` list below. No phone numbers or emails anywhere.
9. Membership categories: Ordinary, Associate (other faculties), Alumni, Staff or Faculty, Honorary, Founding. Link to the constitution once it is published.
10. Governance in brief: twice-monthly Executive meetings, monthly general meeting, annual general meeting, handover.
11. FAQ (keep the existing five), Connect links.

Do **not** publish: KPI targets, finance and asset registers, the internal operating-systems list.

### 4.7 Join page (`app/join/page.tsx`)

- Replace the three TODO items with real answers: exact branch name as it appears on the IEEE form; current fee in USD and approximate UGX; payment methods that work for Ugandan students. If unknown, say `Check students.ieee.org/membership for the current fee` and remove the TODO sentence.
- Present as a three-step wizard: (1) register interest here, (2) join the WhatsApp community, (3) become an IEEE Student Member at students.ieee.org and select the CUU branch.
- Verify the with/without-membership table shows its tick marks (icons) on mobile and with screen readers; add visually hidden text such as `Yes` and `No`.
- **Form audit (critical).** Find where the form submits. The privacy policy currently says the site has no first-party registration form. Pick one:
  - Keep the form: record where submissions go, who can see them, retention period, and deletion route; update the privacy policy to match.
  - Or replace it with a Google Form link and say so in the policy.
  Keep the honeypot field if it exists; add rate limiting on the submit route.

### 4.8 Contact page

- Publish the branch email at the top once created.
- Add a form (name, email, topic, message) with a consent line that matches the privacy policy, or a Google Form link.
- Show a response-time promise you can keep (for example `within three working days`).
- Add a `Sponsors and partners` block: what the branch offers, who to write to.
- Add `Find us on campus`: building, room, regular meeting day, once known.

### 4.9 Governance page

- Name both Dr. John Bosco Ssemakula (Branch Counselor) and Mr. Tabingwa Evans Maganda (Advisor) with one sentence on each role.
- Add the IEEE certificate of approval (6 October 2026) as the first official document, shown as an image or PDF.
- Keep the other three document cards with their real status (`Draft in review`, `PDF coming soon`). Update the minutes card as in §2.3.

### 4.10 Programs page

- Add to each program card: who can apply, how, by when, first step.
- Verify the AWS Student Builders description (paid role, credits) against AWS's own page before launch.
- Soften `100% Open to All` and `40+ Societies` or add a source.
- Add a short checklist `How to start a society chapter here` for Computer Society and WIE.

### 4.11 The Branch page

- Add a timeline component fed from a short array: petition, approval, Counselor appointed, IEEE Day recognition and certificate (6 Oct 2026), Advisor joined, volunteer call (27 Oct 2026), Official Launch (4 Nov 2026). Add exact dates only when confirmed.
- Replace outcome promises with things the branch can show. Publish a real schedule before keeping `weekly code laboratories`.
- Confirm `/orientation-guide.pdf` exists; otherwise hide the button.

### 4.12 Privacy, Terms, Cookies

- Update the privacy policy to match reality (form, Google Forms links, map embed, analytics if added). Set a new effective date.
- Review Terms and Cookies for the same consistency (these were not reviewed in the audit).

### 4.13 Acceptance for Phase 2

- Every page in the sitemap resolves; no visible placeholders; no past event shown as upcoming.
- Launch page reads correctly with `timeTbc: true` and no programme.
- IEEE Day recap shows certificate and photos, with consent confirmed.
- CUUCSA page shows all 10 office-holders and 11 batch representatives, no contact details.
- Team and Governance pages show both the Counselor and the Advisor.

---

## 5. Phase 3: Launch day (4 November)

- When time and venue are set, edit `events.ts` only: `timeTbc: false`, `start`, `end`, `venueDetail`. All countdowns and the calendar file update from that.
- Between `start` and `end` the home page shows `Happening today` with the venue and a link to live updates.
- Keep the announcement bar on `Launch day: <venue>`.
- Prepare a pinned post for the branch's X, LinkedIn and TikTok accounts linking to the launch page.

---

## 6. Phase 4: Post-launch (5 to 11 November)

- Launch page flips to recap: attendance count, 5 to 8 photos with consent, two quotes, speaker slides, a one-minute video, founding-member list.
- Gallery (`app/gallery/page.tsx`): 12 to 20 launch photos in albums with captions, a `Submit a photo` link, and a consent and takedown note. Add Gallery to the main menu only now.
- Governance: publish launch minutes when approved.
- Home: add `Latest from the branch` (three most recent news posts) once News exists; add a founding-member counter once the number is real.
- First newsletter, only after the privacy policy covers email lists.

---

## 7. Phase 5: Growth (from mid-November)

- `app/resources/page.tsx`: IEEE Xplore search guide, how to join IEEE step by step, IEEEXtreme practice problems and prep plan, free cloud and AI learning links, CV and GitHub templates, opportunity alerts.
- `app/news/page.tsx` plus `app/news/[slug]/page.tsx`: short dated posts (150 to 300 words) from MDX files. First four posts: `Call for 15 volunteers`, `Official Launch on 4 November`, `Meet the team and our new Advisor`, `Xplore 101: your first search`.
- IEEEXtreme 21.0 interest list form on the IEEEXtreme page.
- Testimonials once real members have given permission.
- Monthly rhythm: one event, one news post, one resource, one spotlight.

---

## 8. QA checklist (run before each release)

**Content**
- [ ] `grep -R "TODO" app components content` returns nothing visible to users.
- [ ] No page says `Event ended` for the launch, or shows a past date as upcoming.
- [ ] Names, spellings and name order match across IEEE Team and CUUCSA pages.
- [ ] No phone numbers or personal emails appear for individuals.
- [ ] Every claim with a number (members, countries, societies) has a source or softened wording.

**Links and routes**
- [ ] Link checker passes on all internal routes (use a crawler or `linkinator`).
- [ ] Old routes redirect (`/events/ieee-day`, `/events/ieeextreme`).
- [ ] External links open correctly (WhatsApp groups, Google Forms, IEEE pages).

**Data and privacy**
- [ ] Every form states what is collected, why, who sees it, how to delete.
- [ ] Privacy policy matches the forms and embeds actually on the site.

**Technical**
- [ ] `npm run build` and lint pass; unit tests for `lib/status.ts` pass.
- [ ] Per-page title, description and share image verified with a link preview tool.
- [ ] Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95 (Home, Volunteer, Launch).
- [ ] Tested at 360 px, 768 px and 1280 px widths; keyboard-only pass on menu, accordion, forms.
- [ ] Countdown has text equivalent and `role="timer"`; reduced-motion respected.

---

## 9. Inputs still needed from the branch

| Item | Needed for | Owner |
| --- | --- | --- |
| Volunteer Google Form URL, flyer file, exact closing time, notification date | Phase 0 | Branch |
| Launch start and end time, room on campus, speakers, programme | Phase 2 and 3 | Branch |
| Branch email address | Phase 2 | Branch |
| Certificate image and 8 to 12 photos from 6 October (with consent) | Phase 2 | Branch |
| Mr. Tabingwa Evans Maganda: exact title, department, photo, short bio, LinkedIn | Phase 2 | Branch |
| Photos and LinkedIn links from CUUCSA members who want them | Phase 2 | CUUCSA |
| IEEE membership fee, UGX guidance, payment options, exact branch name on the IEEE form | Phase 2 | Treasurer |
| Where the Join form currently submits, and who can access it | Phase 2 | Developer |
| Launch photos (with consent), attendance count, quotes | Phase 4 | Branch |

## 10. How to know it worked

- Volunteer applications received against the 15 spots.
- RSVPs to the launch and attendance on the day.
- Join-form submissions and completed IEEE Student Memberships.
- WhatsApp group joins and traffic from WhatsApp, LinkedIn and TikTok.
- Every page that mentions a date was updated in the last 30 days.
- Zero broken links, zero visible placeholders.
