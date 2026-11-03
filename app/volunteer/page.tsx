import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, Calendar, MapPin, Users, CheckCircle2 } from "lucide-react";
import { Countdown } from "@/components/ui/Countdown";
import { VOLUNTEER_CALL as CALL } from "@/lib/calls";
import { callStatus } from "@/lib/status";
import { msUntil } from "@/lib/events";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { btn, nudge } from "@/lib/ui";

// Re-render every 5 minutes so the page flips to "closed" after the deadline.
export const revalidate = 300;

const TITLE = "Call for 15 student volunteers";
const DESCRIPTION =
  "Help run the Official Branch Launch of the IEEE Student Branch at Cavendish University Uganda on 4 November 2026. Open to every CUU student. Applications close 27 October 2026.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/volunteer",
  image: CALL.flyer,
  imageAlt: "Call for volunteers flyer",
});

const ROLES = [
  { title: "Registration and ushering", desc: "Welcome guests, manage sign-in and guide people to their seats." },
  { title: "Logistics and venue", desc: "Set up the room, manage equipment and keep the programme on schedule." },
  { title: "Media and photography", desc: "Capture photos and short clips of the day." },
  { title: "Social content", desc: "Post updates to the branch's LinkedIn, X and TikTok accounts." },
  { title: "Tech and live updates", desc: "Run slides, sound checks and live updates on the website." },
  { title: "Mobilisation", desc: "Spread the word across faculties before the launch." },
];

const BENEFITS = [
  "A working role at the Official Branch Launch on 4 November 2026.",
  "Time alongside the IEEE CUU Student Branch and CUUCSA teams who are organising it.",
];

const STEPS = [
  { title: "Apply", desc: "Fill in the Google Form before the deadline." },
  { title: "Shortlist", desc: "The branch executive reviews applications and picks 15 volunteers." },
  { title: "Notification", desc: "Selected volunteers are contacted before the launch." },
  { title: "Briefing", desc: "A short briefing before 4 November assigns roles and timings." },
];

const FAQS = [
  { q: "Do I need IEEE membership?", a: "No. Any Cavendish University Uganda student can apply." },
  { q: "Do I need technical skills?", a: "No. Most roles need reliability and enthusiasm, not code." },
  {
    q: "What if I miss the deadline?",
    a: "Register your interest on the Join page. The branch will reach out when the next volunteer opportunity opens.",
  },
];

const DEADLINE_LABEL = "Applications close 27 October 2026, 11:59 PM EAT";

export default function VolunteerPage() {
  const status = callStatus(CALL);
  const isOpen = status === "open" || status === "closing-soon";

  return (
    <>
      <main className="min-h-screen bg-bg text-ink">
        <PageHero
          eyebrow="Call for volunteers"
          title={isOpen ? <>We&apos;re looking for <em>15 student volunteers</em></> : <>Applications closed. <em>Thank you.</em></>}
          lede={
            isOpen
              ? "Open to every Cavendish University Uganda student, any faculty, any year. Help make the Official Branch Launch a success."
              : "Thank you to everyone who applied to volunteer at the Official Branch Launch. Selected volunteers have been contacted, and the next call will be announced here."
          }
          photo="solarTechnicians"
          actions={
            <>
              {isOpen ? (
                <a href={CALL.formUrl} target="_blank" rel="noopener noreferrer" className={btn.accent}>
                  Apply on Google Forms
                  <ArrowUpRight size={16} aria-hidden="true" className={nudge} />
                </a>
              ) : (
                <Link href="/join" className={btn.accent}>
                  Join the volunteer interest list
                  <ArrowUpRight size={16} aria-hidden="true" className={nudge} />
                </Link>
              )}
              {CALL.flyer && (
                <a href={CALL.flyer} download="IEEE-CUU-Call-for-Volunteers.png" className={btn.ghost}>
                  <Download size={15} aria-hidden="true" />
                  Download the flyer
                </a>
              )}
            </>
          }
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Calendar size={16} className="text-[#FFC72C]" aria-hidden="true" />
              Launch: Wednesday 4 November 2026
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FFC72C]" aria-hidden="true" />
              Cavendish University Uganda
            </li>
            <li className="flex items-center gap-2">
              <Users size={16} className="text-[#FFC72C]" aria-hidden="true" />
              15 volunteer spots
            </li>
          </ul>
          {isOpen && (
            <div className="mt-8 bg-white p-5 text-ink">
              <p className="mb-3 text-sm font-semibold text-[#2D4D76]">{DEADLINE_LABEL}</p>
              <Countdown targetISO={CALL.closes} initialMs={msUntil(CALL.closes)} showSeconds={false} />
            </div>
          )}
        </PageHero>
        <div className="h-6" aria-hidden="true" />

        {/* ── ROLES ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12 py-10">
          <h2 className="font-display text-3xl font-bold text-ink">What volunteers do</h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r) => (
              <li key={r.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-semibold text-ink">{r.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{r.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── BENEFITS + SELECTION ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12 py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-ink">What you get</h2>
              <ul className="mt-4 space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#007DAF]" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-ink">How selection works</h2>
              <ol className="mt-4 space-y-4">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CADCEA] text-xs font-bold text-[#2D4D76]">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{s.title}</p>
                      <p className="text-sm text-slate-600">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-3xl px-4 sm:px-10 py-10 pb-24">
          <h2 className="font-display text-3xl font-bold text-ink">Questions</h2>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {f.q}
                  <span aria-hidden="true" className="text-xl leading-none text-[#007DAF] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {f.a}
                  {f.q === "What if I miss the deadline?" && (
                    <>
                      {" "}
                      <Link href="/join" className="text-[#00629B] underline underline-offset-2">
                        Go to the Join page
                      </Link>
                      .
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
