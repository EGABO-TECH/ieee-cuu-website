# Build Brief: IEEE Student Branch, Cavendish University Uganda (CUU)

> **For the coding agent (Antigravity).** Read this whole document before touching code. Inspect the existing repository first, then write a short plan, then work phase by phase. The existing site is live at https://ieee-cuu-website.vercel.app/ (Next.js, deployed on Vercel). This brief upgrades it; it is not a rewrite from scratch unless the codebase makes a rewrite of a part clearly cheaper.

---

## 0. How to work

1. **Inspect first.** Read `package.json`, the router layout (the image URLs suggest the Next.js App Router with `next/image`), the existing components, styles and any content files. Summarise the current structure in 10 lines or fewer.
2. **Plan before coding.** Produce a plan covering: the design token system (section 8), the sitemap (section 6), the data models (section 7), and the order of work. Show it, then proceed without waiting unless something is blocked.
3. **Work in phases** (sections 4 to 7). Finish and verify each phase before starting the next. Commit after each phase with a clear message.
4. **Never invent facts.** If a fact is not in this brief or the repo, leave a visible `TODO(owner): ...` placeholder in the content file (not in rendered UI) and list it in your final report. See the truthfulness rules in section 3.
5. **Keep it maintainable.** The team will graduate. A future student with basic web skills must be able to add an event, a news post or a team member by editing a content file, without touching components. Document this in `README.md`.
6. **Final report.** End with: what changed, what you verified and how, what is still blocked on the owner, and any risks.

---

## 1. Context

**Who this is for.** Cavendish University Uganda students (computing, engineering, business, health sciences, law and social sciences), plus IEEE Uganda Section and Region 8 contacts, prospective partners and sponsors, and university staff.

**What the site must do.** Accurately showcase the branch and convert visitors into members and participants. A visitor must understand within about ten seconds what the branch is, what is happening next, and how to join.

**Branch facts (confirmed by the existing site; reuse exactly):**

- Name: IEEE Student Branch, Cavendish University Uganda. Part of IEEE Uganda Section and IEEE Region 8.
- Campus: Siyani Campus, Plot 1469 Ggaba Road, Kampala. University site: www.cavendish.ac.ug. University line: +256 41 4531700.
- Launch event: IEEE Day 2026, 6 October 2026, 12:00 to 18:00 EAT, Siyani Campus main auditorium. The branch's first cohort.
- IEEEXtreme 20.0: 24-hour global programming contest, teams of 2 to 3 IEEE Student Members, registration deadline 17 October 2026, 11:59 PM GMT.
- Social: LinkedIn (`ieee-cavendish-university-student-branch`), X (`@IEEECavendish`), TikTok (`@cavendishieee`), WhatsApp group (current invite link in the repo).
- Related campus body: CUUCSA, the Cavendish University Uganda Computing Students' Association, with its own WhatsApp community and LinkedIn page.
- Team (13 people named on the Team page, plus the counselor): Mulondo Andrew (Chair), Dr. John Bosco Ssemakula (Counselor), Betty Williams (Vice Chair), Basiima Nicholas (General Secretary), Sadiyo Abdullahi Hussen (Assistant Secretary), Makhoha Joanita (Treasurer), Kasongo Kamwankana Dondi (Assistant Treasurer), Egabo Aaron (IEEE Ambassador), Mulo Ausi and Niwasiima Ashelycole (Technical Coordinators), Rwothomio Evans E. (Student Lead), and Mobilizers Dahomey Mortifer, Biyinzika Daniel, Natozo Patience Martha, Onyango John Steven.
- Partners shown today: Cavendish University Uganda, CUUCSA, Kahoot, IEEE, AWS Student Builders, Black Python Devs.

**Today's date for planning purposes: 22 October 2026.** The IEEE Day launch and the IEEEXtreme registration deadline have already passed.

---

## 2. Audit summary (what is wrong today)

| ID | Problem | Fix in |
|----|---------|--------|
| A1 | Past events (IEEE Day 6 Oct, IEEEXtreme deadline 17 Oct) are shown as "upcoming" with countdowns | 4.1 |
| A2 | Main "Become a member" button on Home goes to WhatsApp, not membership; nearly all CTAs depend on one invite link | 4.2 |
| A3 | "Checking registration..." placeholder text and `00` countdowns are visible on Home, Events and event pages | 4.1 |
| A4 | Footer anchors (`/#membership`, `/#team`, `/#programs`, `/#communities`, `/#join`, `/#about`, `/#branch`, `/#faqs`) point to home-page sections that do not exist | 4.3 |
| A5 | Home FAQ shows 3 of 4 questions with no answer text | 4.4 |
| A6 | Unverified or overstated claims (fees, Future50, payment methods, "higher grades and careers", "direct recruitment pipelines", "weekly code laboratories", "conference travel grants", "40+ societies") | 5.1 |
| A7 | Team page: only 3 of about 15 people have photos; "Search on LinkedIn" links are searches, not profiles; "Branch Councillor" should be IEEE's term "Counselor"; no faculty counselor card with photo; no branch email | 5.2 |
| A8 | Non-IEEE programs (AWS Student Builders, Black Python Devs) presented as if they were IEEE programs, with no disclaimer | 5.3 |
| A9 | Join page lists Member and Senior Member grades that do not apply to students, adding noise | 5.4 |
| A10 | Missing: contact page and branch email, past-event archive and gallery, news, projects showcase, resources, governance documents, partners page | 6 |
| A11 | `next/image` requests at `w=3840` for team photos, society photos and the footer logo, so phones likely download oversized images; hero video weight | 7.1 |
| A12 | Running on a `vercel.app` subdomain; no evidence of Open Graph images, sitemap or structured data | 7.3 |
| A13 | Generic design tells: italic accent word in headlines ("fits you."), identical card grids, eyebrow labels above everything, numbered markers where content is not a sequence | 8 |

---

## 3. Non-negotiable rules

### Truthfulness
- Do not fabricate statistics, member counts, testimonials, quotes, partner endorsements, event results, photos of people or dates.
- Do not claim programs, societies, certifications, grants or recruiting channels exist unless the owner has confirmed them. Where status is uncertain, use honest labels such as "Interest list open", "Planned" or "Coming soon".
- Numbers about IEEE itself (members, countries, societies) must come from ieee.org or a link to it. If you cannot verify a figure, remove it or write it as a TODO.
- Facts about membership cost, discounts and payment methods are **owner-verified only**. Until confirmed, show "Check current rates on students.ieee.org" with the link, and do not state percentages or named initiatives.

### Brand and governance
- Follow the IEEE Brand Guidelines for logo use, name lockups and colour. Use "IEEE Student Branch, Cavendish University Uganda" consistently. Do not modify the IEEE logo.
- Add a short disclaimer on any page that shows non-IEEE partners or programs: they are campus or community partners, and their inclusion is not an IEEE endorsement.
- IEEE's official role name is **Student Branch Counselor**. Use "Counselor", never "Councillor".

### Privacy and consent
- Only show a person's name, photo, role or LinkedIn if they are in the content file with `consent: true`. Never link to a LinkedIn *search*; link to a real profile URL supplied by the owner or omit the link.
- The join form collects personal data. Collect only what is listed in 4.2, state why, link the Privacy page, and require a consent checkbox. Update the Privacy and Cookies pages to match what the site really does.

### Performance and access (design for Ugandan mobile data)
- Mobile first. Assume mid-range Android phones on 3G/4G, with intermittent connectivity.
- Targets on mobile: Lighthouse Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+; LCP under 2.5 s; no layout shift from countdowns or images.
- Respect `prefers-reduced-motion` and `Save-Data`.

---

## 4. Phase 1: Critical fixes (do these first)

### 4.1 Date-driven events (fixes A1, A3)

Build events as **data**, and compute status from the date, so the site cannot go stale again.

- Create `content/events/` with one file per event (JSON or MDX) following the model in 7.1.
- Compute status in the **Africa/Kampala** timezone (EAT, UTC+3) from `startsAt`, `endsAt`, `registration.opensAt` and `registration.closesAt`:
  `upcoming` → `registration-open` → `registration-closed` → `live` → `ended`.
- Render the correct state on the **server** so there is never a flash of `00` or "Checking registration...". The countdown component renders the correct initial value from the server, then ticks on the client. Reserve fixed dimensions to prevent layout shift. Hide the countdown entirely once the target time passes.
- Every status has real copy and the right call to action:
  - upcoming: "Registration opens on {date}"
  - registration-open: the registration button
  - registration-closed: "Registration closed on {date}", plus the nearest next step
  - live: "Happening now"
  - ended: a recap block (see below)
- Events page: sections for **Upcoming** and **Past**, past ones newest first.
- **IEEE Day 2026 launch**: now in the `ended` state. Build a recap area on its page: summary paragraph, photo gallery slot, agenda kept as "what happened", and a "Join the branch" call to action. Photos and attendance numbers are `TODO(owner)`; the layout must look complete with an empty gallery (no broken boxes) and fill in when photos are added.
- **IEEEXtreme 20.0**: registration closed on 17 Oct 2026. Show it as closed. Add `TODO(owner)` for the contest date, branch team results and any recap.
- The Home page's "flagship" slot shows the **next upcoming event** if one exists, otherwise the **most recent past event** with its recap, otherwise a "Stay in the loop" signup. Never show an expired event as upcoming.
- Add "Add to calendar" (an `.ics` download and a Google Calendar link) for upcoming events.

### 4.2 Real join flow (fixes A2)

- The Home "Become a member" button goes to `/join`.
- Build a **join form** on `/join` with these fields only: full name, university email, student ID (optional), program of study, year of study, areas of interest (multi-select), "I want to be contacted about IEEEXtreme / workshops / volunteering" (checkboxes), and consent.
- Validate on both client and server (a schema library such as zod). Add a honeypot field and basic rate limiting. Do not expose secrets in client code.
- Store submissions in a database the branch owns. Pick the simplest managed option that fits Vercel (Supabase or Vercel Postgres are fine; a Google Sheet through a server route is acceptable as a minimum). Document the choice and the environment variables in the README.
- On success, show a confirmation page with two next steps: **join the IEEE student membership** (link to students.ieee.org/membership) and **join the WhatsApp group**. Say plainly that joining the WhatsApp group is not the same as IEEE membership.
- Provide a minimal password-protected `/admin` view (or a documented export route) so the secretary can view and download sign-ups as CSV. Keep it simple and secure.
- Store every external invite link (WhatsApp branch, WhatsApp CUUCSA, socials) in **one config file**, so rotating a revoked link is a one-line change.

### 4.3 Navigation and footer (fixes A4)

- Repair every footer link so it points to a real page or a real section. Remove links to anything that does not exist.
- Remove duplicated social and WhatsApp links, keeping one clear set in the header or footer.
- Footer content: branch name, short descriptor, address with a lazy-loaded map (or a plain "Open in Maps" link), a **branch email** (`TODO(owner)`), social links, IEEE official links, Privacy / Terms / Cookies, and the non-endorsement disclaimer.
- Add a skip-to-content link, visible keyboard focus and a proper mobile menu.

### 4.4 FAQs (fixes A5)

- Make all FAQ items render with answers. Use accessible disclosure (native `<details>` or a button with `aria-expanded`), and server-render the answer text so it is indexable.
- Provide answers for: "Can Business, Health Sciences, Law or Social Sciences students take part?", "Can I participate without a leadership position?", "Where do I check current membership requirements?". Draft them from the branch's own positions on the Join and About pages; link to students.ieee.org for requirements.
- Consolidate FAQs into one data file used by Home and Join so the answers cannot drift apart.

---

## 5. Phase 2: Credibility and content

### 5.1 Claims review (fixes A6)

Search all content for the following and rewrite or remove. Keep the tone confident but literal.

- Fee and discount claims ("50% discount", "Future50", "heavily subsidised", "significantly discounted"): replace with a link to IEEE's current rates until the owner supplies confirmed numbers. Add `TODO(owner)` for cost in USD and UGX.
- Payment methods ("credit/debit cards, PayPal, wire transfers organised by the Branch Treasurer"): replace with `TODO(owner)` and, once confirmed, state exactly how a Ugandan student can pay (including mobile money if applicable).
- "Higher grades and careers", "direct recruitment pipelines", "weekly code laboratories", "full institutional guidance ... submitting papers", "conference travel grants": rewrite as what the branch **does now**, or label as "planned".
- "40+ Societies": verify against ieee.org or link to the official list; otherwise remove the number.
- "Be officially recognized as a founding student member": keep only if accurate (membership requires joining IEEE); rewrite to be precise.
- "Transparent governance ... adhere to IEEE Region 8 reporting": keep only alongside actual published documents (see 6, Governance).

### 5.2 Team page (fixes A7)

- Move people into `content/team.json` (model in 7.2). Page renders from data.
- Consistent photo treatment for everyone. Where a photo is missing, use one designed placeholder (not random coloured initials), and list who is missing in your report.
- Rename "Branch Councillor" to **Counselor**. Show the faculty counselor prominently with photo and a one-line role description. Add `TODO(owner)` for the Faculty Advisor / Dean who appears on the IEEE Day agenda, if different.
- Clarify roles with a one-line description each. Resolve "Chair Lead" versus "Chair" and the position of "Student Lead" relative to the Vice Chair (`TODO(owner)` if unclear).
- Replace LinkedIn search links with real profile URLs (only with consent), or omit.
- Group by function: Leadership, Administration, Finance, Technical, Programs and Outreach.

### 5.3 Programs page (fixes A8)

- Split into two clearly labelled groups: **IEEE programs and societies** and **Campus and community partners**.
- Put AWS Student Builders and Black Python Devs under partners, with the non-endorsement disclaimer.
- For each society, show an honest status: `Active`, `Forming (interest list open)` or `Planned`. Computer Society and Women in Engineering are marked as the first ones being pioneered; keep that wording unless the owner says otherwise. Add a simple "Register interest" action that writes to the same database as the join form.
- Keep the "No tech background required" message; drop unverifiable numbers.

### 5.4 Join and membership page (fixes A9)

- Lead with **Student Member** and **Graduate Student Member**. Collapse Associate, Member and Senior Member under "Other IEEE grades" with a link to ieee.org.
- Add a plain-language "What membership gets you vs. what you can do without it" table (for example: events open to all CUU students; IEEE Xplore, voting and IEEEXtreme need membership).
- Keep the 4-step process (this content really is a sequence). Make step 2 concrete: how to choose Cavendish University Uganda as the branch, with the exact label as it appears on the IEEE form (`TODO(owner)` to confirm).

### 5.5 CUUCSA page

- Keep it, but make the relationship explicit: what CUUCSA is, how it relates to the IEEE branch, who leads it (`TODO(owner)`), and what has actually started versus what is planned.
- Move "will provide" language to honest future tense and remove unconfirmed claims (recruitment pipelines, venture incubation) unless confirmed.

---

## 6. Phase 3: New pages and features (fixes A10)

Target sitemap:

```
/                    Home
/about               About IEEE and the branch
/branch              The Branch (pillars, journey)
/join                Membership and join form (+ /join/success)
/events              Upcoming and past events
/events/[slug]       Event detail (date-driven states)
/gallery             Photos by event
/news                News and stories (MDX), /news/[slug]
/projects            Student projects showcase, /projects/[slug] optional
/resources           Learning and opportunity links
/programs            IEEE societies and partner programs
/cuucsa              CUUCSA
/team                Team
/partners            Partners and sponsorship
/governance          Constitution, code of conduct, reports
/contact             Contact form and details
/privacy /terms /cookies
/admin               Protected sign-up and message view
404 and error pages
```

Requirements for each new page:

- **Contact**: form (name, email, topic, message) with validation, spam protection and server-side storage or email delivery; branch email; map link; response-time note only if the owner confirms one.
- **Gallery**: grouped by event, responsive grid, lazy-loaded optimised images, captions, lightbox that works with a keyboard. Empty state: "Photos from {event} are coming soon."
- **News**: MDX posts from `content/news/` with title, date, author, tags, cover image. First post to draft: the IEEE Day launch recap (body `TODO(owner)`).
- **Projects**: card per project with title, team, tech tags, status, GitHub and demo links. Ship with a submission guide ("Want your project listed? Here is how."). Seed with **zero fake projects**; show an inviting empty state until real ones are added.
- **Resources**: curated, sectioned links: IEEE Xplore basics, IEEEXtreme preparation, student membership, scholarship and internship alerts, IEEE Computer Society and WIE. Link out to official sources; do not copy their text.
- **Partners**: current partners with logos and disclaimer, plus a short "Partner with us" section and contact route.
- **Governance**: documents list (constitution, code of conduct, meeting minutes summary, annual or financial summary) as downloadable PDFs. Ship with the structure and `TODO(owner)` entries; hide any empty document entry.
- **Stay in the loop**: email signup on the Home page and footer, writing to the database, with consent and an unsubscribe note.
- **Search is optional.** Skip unless time remains.

Home page content order (adjust to the final design):

1. Hero: what the branch is, one primary action (**Join**), one secondary (**See what's on**).
2. Next event or latest recap (section 4.1 logic).
3. What members can do (4 short points tied to real activities).
4. Proof: real numbers only when available (members, events held). Hidden if unknown.
5. Societies and programs snapshot.
6. Team snapshot with link to `/team`.
7. FAQ.
8. Partners strip with disclaimer.
9. Stay-in-the-loop signup.

---

## 7. Phase 4: Technical quality

### 7.1 Performance (fixes A11)

- Audit every `next/image` use. Set accurate `sizes` for each image so phones never request `w=3840`. Use AVIF/WebP, correct intrinsic dimensions and `priority` only on the LCP image.
- Compress all images in `/public/images`. Target under 200 KB for most images, under 400 KB for hero imagery.
- Hero video: provide a poster image, `preload="none"` or `metadata`, compress aggressively (target under 2 MB), do not autoplay when `Save-Data` is on, on slow connections or with reduced motion; fall back to the poster. Remove the "Your browser does not support the video tag." text from rendering, or replace it with a real fallback.
- Load fonts with `next/font`, subsetted, with `display: swap`. Limit to two families.
- Keep client JavaScript small: prefer server components; only the countdown, mobile menu, forms and lightbox are client components.
- Lazy-load maps and below-the-fold media.

### 7.2 Accessibility

- WCAG 2.2 AA. Semantic landmarks, one `<h1>` per page, logical heading order.
- Countdowns: do not announce every second. Use a static accessible label (for example "Starts in 3 days") and update politely at coarse intervals.
- All images have meaningful `alt` text (empty `alt` only for decorative images). Team photos use the person's name.
- Colour contrast checked for all text and UI states. Visible focus rings. Full keyboard operation for menu, accordions, lightbox and forms.
- Forms: labels, error messages tied to fields, clear plain-language errors that say how to fix the problem.
- Add an accessibility statement in the footer or on the Terms page with a contact route.

### 7.3 SEO, sharing and domain (fixes A12)

- Use the Next.js Metadata API for per-page `title`, `description` and canonical URLs. `lang="en-UG"` (or `en`).
- Generate Open Graph and Twitter images per page (static or `opengraph-image`), because WhatsApp link previews drive sharing here. Verify previews render for Home, Events and each event.
- Add `app/sitemap.ts` and `app/robots.ts`.
- Add JSON-LD: `Organization` (the branch) and `Event` for each event, with correct dates in EAT.
- Domain: prepare for a custom domain such as `ieee.cavendish.ac.ug` (a request to the university IT office, `TODO(owner)`). Keep the site working on both during transition, and set the canonical to the final domain via an environment variable.

### 7.4 Security and operations

- Security headers (CSP appropriate to the embeds used, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- Secrets only in environment variables; provide `.env.example`. Never commit keys.
- Basic privacy-friendly analytics (for example Vercel Web Analytics or Plausible) with no invasive tracking. Make the Cookies page match what is actually used.
- README sections: stack, local setup, environment variables, how to add an event / news post / team member / photo / project, how to export sign-ups, how to deploy, and a **handover checklist** (ownership of Vercel project, domain, database and social links under branch-owned accounts, not personal ones).
- Add lightweight checks: type-check, lint, and a small test set covering the event-status logic (including EAT boundaries and the passed-event cases for IEEE Day and IEEEXtreme).

---

## 8. Design direction

Aim for a site that is clearly the work of a technical student community in Kampala, credible to IEEE officials and the university, and not mistakable for a template.

**Process.** Before coding, write a compact design plan and review it against this brief:

- **Color:** 4 to 6 named hex values. Anchor on IEEE blue (IEEE's official blue is PMS 3015, commonly rendered near `#00629B`; verify against the brand guidelines), supported by neutrals and one restrained accent. Avoid the common generated-page palettes (cream with terracotta; near-black with acid green).
- **Type:** two clearly distinct typefaces at most, loaded via `next/font`, with a defined scale and line lengths under 80 characters. Choose them deliberately for this brief rather than reaching for the usual defaults.
- **Layout:** a one-sentence concept plus ASCII wireframes of Home and Event detail on mobile and desktop. State the alignment rule (left-aligned body text; centred only for short, standalone moments).
- **Principles:** 3 to 5 lines on what makes this site specific to this branch.

**Rules**

- **One memorable element** and the rest quiet. A good candidate: a real photograph of the launch or campus as the hero, or a restrained signal/circuit-trace motif that links sections. Pick one; do not stack effects.
- **Photography over decoration.** Use real photos supplied by the owner (launch day, team, campus, workshops). No stock photos of people. Use designed empty states where photos are not yet available.
- Remove current template tells: the italic or coloured single accent word in headlines (for example "fits you."), eyebrow labels above every heading, numbered markers where the content is not a sequence (keep them only for the genuine 4-step join process and the 6-step branch journey), identical rounded cards with the same shadow everywhere, gradient washes as decoration, arrows appended to every link.
- Vary component shapes by hierarchy. Not everything is a card.
- Motion: one deliberate page-load moment at most. Hover and press feedback only where it confirms an action. Respect reduced motion.
- Copy: plain, specific, sentence case, active voice. Buttons say what happens ("Join the branch", "Add to calendar", "Download the guide"). Errors explain what went wrong and how to fix it, without apologising.
- Quality floor: responsive from 320 px up, keyboard focus visible, contrast checked, no horizontal scroll.

---

## 9. Data models

### 9.1 Event (`content/events/*.json` or `.mdx` front matter)

```ts
type EventItem = {
  slug: string;
  title: string;
  summary: string;
  kind: "flagship" | "workshop" | "competition" | "talk" | "social";
  startsAt: string;            // ISO 8601 with +03:00 offset
  endsAt: string;
  timezone: "Africa/Kampala";
  venue?: { name: string; address?: string; mapUrl?: string };
  online?: boolean;
  registration?: {
    opensAt?: string;
    closesAt?: string;
    url?: string;              // external or internal
    label?: string;
    membersOnly?: boolean;
  };
  flyer?: string;              // path in /public
  agenda?: { start: string; end: string; title: string; host?: string; description?: string }[];
  recap?: {
    summary?: string;          // TODO(owner) until supplied
    attendance?: number;
    photos?: { src: string; alt: string; caption?: string }[];
    links?: { label: string; url: string }[];
  };
  faq?: { q: string; a: string }[];
};
```

Seed with `ieee-day-2026` (6 Oct 2026, 12:00 to 18:00 EAT, Siyani Campus, full agenda from the existing page, state: ended) and `ieeextreme-20` (registration closing 17 Oct 2026 23:59 GMT, state: registration closed).

### 9.2 Team member (`content/team.json`)

```ts
type Member = {
  id: string;
  name: string;
  role: string;                // official title, for example "Counselor"
  group: "leadership" | "administration" | "finance" | "technical" | "programs" | "outreach";
  bio?: string;                // one line
  photo?: string;              // path; omit if none
  linkedin?: string;           // real profile URL only
  email?: string;
  consent: boolean;            // false means do not render
  order: number;
};
```

### 9.3 Signup, contact and interest records

Fields as in 4.2 and 6, plus `createdAt`, `source` (page or event slug) and `consentAt`. Interest records for societies also store `societySlug`.

### 9.4 Config (`config/site.ts`)

Single source for: branch name, tagline, address, university URL, branch email, all social and WhatsApp URLs, IEEE official links, canonical domain.

---

## 10. Acceptance criteria

The work is done when all of these are true. Verify each and say how in the report.

**Events and status**
- [ ] No expired event appears as upcoming anywhere. Changing the system date in a test flips states correctly.
- [ ] No "Checking registration..." text and no `00` countdown flash on any page.
- [ ] IEEE Day 2026 appears as ended with a recap layout; IEEEXtreme 20.0 appears as registration closed.

**Joining**
- [ ] The Home primary button leads to `/join`; the form submits, validates, stores and confirms.
- [ ] Success page distinguishes IEEE membership from the WhatsApp group.
- [ ] Sign-ups are viewable and exportable by an authorised person only.
- [ ] All invite links come from one config file.

**Content integrity**
- [ ] Every flagged claim in 5.1 is removed, rewritten or marked `TODO(owner)`.
- [ ] "Counselor" used throughout; non-IEEE programs sit under partners with the disclaimer.
- [ ] No LinkedIn search links remain; no person is shown without `consent: true`.
- [ ] Every internal link and anchor resolves (run a link checker and report the result).

**Pages and features**
- [ ] All pages in the sitemap exist and handle empty states gracefully.
- [ ] Contact form works and is protected against spam.

**Quality**
- [ ] Mobile Lighthouse scores meet the targets in section 3 on Home, Events, Join and Team (report actual numbers).
- [ ] No image is requested wider than needed for its slot (check network panel on a 360 px viewport).
- [ ] Keyboard-only walkthrough of Home → Join → submit succeeds; axe (or equivalent) shows no serious issues.
- [ ] Open Graph previews render for key pages; sitemap, robots and JSON-LD present.
- [ ] README lets a new student add an event, news post and team member in under 10 minutes.

---

## 11. Owner inputs needed (list these in your final report as still blocked)

1. Branch email address and, if available, a phone or WhatsApp contact for enquiries.
2. Confirmed membership cost (USD and UGX), any real discount scheme, and how Ugandan students can pay.
3. Photos from the IEEE Day launch (with attendee consent), a recap paragraph and attendance numbers.
4. Headshots for every team member, consent for each, and real LinkedIn URLs where wanted.
5. Faculty Advisor / Dean name and role, and confirmation of Counselor details.
6. IEEEXtreme 20.0 contest date and branch team results (if any).
7. Status of Computer Society and Women in Engineering at CUU (active, forming, planned).
8. Governance documents (constitution, code of conduct, reports).
9. Custom domain request to Cavendish IT.
10. Confirmation of which database and email service the branch can own and pay for (free tiers acceptable).
11. The exact name of the branch as it appears on the IEEE membership form.

---

## 12. Out of scope

- Rebuilding the brand identity or logo.
- A full custom CMS or user accounts for members.
- Payment processing for IEEE membership (IEEE handles this).
- Fabricating placeholder photos, testimonials, statistics or projects.

---

## 13. Reporting format

Finish with a short report containing:

1. **Changes made**, grouped by phase.
2. **Verification**: commands run, Lighthouse numbers, link-check result, accessibility check, event-status tests.
3. **Open items**: the `TODO(owner)` list from section 11, with the file and line of each placeholder.
4. **Risks and recommendations** for the next iteration.
