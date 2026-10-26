import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Calendar, MapPin, Users, CheckCircle2 } from "lucide-react";
import { Countdown } from "@/components/ui/Countdown";
import { SiteFooter } from "@/components/SiteFooter";
import { VOLUNTEER_CALL as CALL } from "@/lib/calls";
import { callStatus } from "@/lib/status";
import { msUntil } from "@/lib/events";

// Re-render every 5 minutes so the page flips to "closed" after the deadline.
export const revalidate = 300;

const TITLE = "Call for 15 student volunteers";
const DESCRIPTION =
  "Help run the Official Branch Launch of the IEEE Student Branch at Cavendish University Uganda on 4 November 2026. Open to every CUU student. Applications close 27 October 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | IEEE CUU Student Branch`,
    description: DESCRIPTION,
    images: [{ url: CALL.flyer ?? "/images/og-card.png", alt: "Call for volunteers flyer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | IEEE CUU Student Branch`,
    description: DESCRIPTION,
    images: [CALL.flyer ?? "/images/og-card.png"],
  },
};

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
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-28 sm:pt-32">
        {/* ── HERO ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12 py-10 lg:py-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D6E6E]">Call for volunteers</p>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.12] text-slate-900 sm:text-5xl">
                {isOpen ? "We're looking for 15 student volunteers" : "Applications closed. Thank you."}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {isOpen
                  ? "Open to every Cavendish University Uganda student, any faculty, any year. Help make the Official Branch Launch a success."
                  : "Thank you to everyone who applied to volunteer at the Official Branch Launch. Selected volunteers will be contacted before 4 November."}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Calendar size={16} className="shrink-0 text-[#0D6E6E]" aria-hidden="true" />
                  Launch on Wednesday 4 November 2026
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-[#0D6E6E]" aria-hidden="true" />
                  Cavendish University Uganda
                </li>
                <li className="flex items-center gap-3">
                  <Users size={16} className="shrink-0 text-[#0D6E6E]" aria-hidden="true" />
                  15 volunteer spots
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {isOpen ? (
                  <a
                    href={CALL.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#1A9090]"
                  >
                    Apply on Google Forms
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    href="/join"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#1A9090]"
                  >
                    Join the volunteer interest list
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                )}
                {CALL.flyer && (
                  <a
                    href={CALL.flyer}
                    download="IEEE-CUU-Call-for-Volunteers.png"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                  >
                    <Download size={15} aria-hidden="true" />
                    Download the flyer
                  </a>
                )}
              </div>

              {/* Deadline strip */}
              {isOpen && (
                <div className="mt-8 rounded-2xl border border-[#9dbdc1] bg-white p-5">
                  <p className="mb-3 text-sm font-semibold text-[#234a52]">{DEADLINE_LABEL}</p>
                  <Countdown targetISO={CALL.closes} initialMs={msUntil(CALL.closes)} showSeconds={false} />
                </div>
              )}
            </div>

            {CALL.flyer && (
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[360px] overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
                  <Image
                    src={CALL.flyer}
                    alt="Call for volunteers flyer: IEEE CUU Student Branch launch, 4 November 2026 at Cavendish University Uganda. Open to all CUU students, 15 volunteers, application deadline 27 October 2026."
                    width={1024}
                    height={1536}
                    sizes="(max-width: 1024px) 90vw, 360px"
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── ROLES ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12 py-10">
          <h2 className="font-serif text-3xl font-bold text-slate-900">What volunteers do</h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r) => (
              <li key={r.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-900">{r.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{r.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── BENEFITS + SELECTION ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12 py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900">What you get</h2>
              <ul className="mt-4 space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#1A9090]" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900">How selection works</h2>
              <ol className="mt-4 space-y-4">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dfeff0] text-xs font-bold text-[#234a52]">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{s.title}</p>
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
          <h2 className="font-serif text-3xl font-bold text-slate-900">Questions</h2>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {f.q}
                  <span aria-hidden="true" className="text-xl leading-none text-[#1A9090] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {f.a}
                  {f.q === "What if I miss the deadline?" && (
                    <>
                      {" "}
                      <Link href="/join" className="text-[#0D6E6E] underline underline-offset-2">
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
      <SiteFooter />
    </>
  );
}
