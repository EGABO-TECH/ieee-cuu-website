import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Users,
  Trophy,
  Code2,
  ArrowUpRight,
  Download,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  HelpCircle,
  Laptop,
  ExternalLink,
} from "lucide-react";
import { getEventBySlug } from "@/lib/events";
import { SITE } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { btn, nudge } from "@/lib/ui";


const STATS = [
  { icon: Clock, value: "24 Hours", label: "Continuous Coding Marathon" },
  { icon: Users, value: "2–3 Members", label: "Per Competing Team" },
  { icon: Trophy, value: "Worldwide", label: "Global Live Ranking" },
  { icon: Code2, value: "25+ Languages", label: "Python, C++, Java, Go, Rust" },
];

const PREP_STEPS = [
  {
    step: "01",
    title: "Assemble Your Team",
    desc: "Form a team of 2 or 3 students currently enrolled at Cavendish University Uganda. Diverse skills in data structures, algorithms, and mathematics are encouraged.",
  },
  {
    step: "02",
    title: "Verify IEEE Student Memberships",
    desc: "All competing team members must hold an active IEEE Student or Graduate Student membership before the registration cut-off date.",
  },
  {
    step: "03",
    title: "Register on IEEE vTools",
    desc: "Submit your team name and member IEEE numbers via the official IEEE vTools registration portal.",
  },
  {
    step: "04",
    title: "Join the CUU Coordination Group",
    desc: "Connect with our Technical Coordinators for proctor assignment, prep workshops, and on-campus overnight coding hub access.",
  },
];

const FAQS = [
  {
    q: "Who is eligible to participate in IEEEXtreme?",
    a: "Any undergraduate or graduate student at Cavendish University Uganda with an active IEEE Student Membership. Students from all faculties with coding interest are welcome.",
  },
  {
    q: "What programming languages are allowed?",
    a: "The contest platform supports over 25 languages including C, C++, Java, Python, Go, Rust, JavaScript, Kotlin, C#, and Ruby.",
  },
  {
    q: "What is a Proctor and how do I get one?",
    a: "Every team must be monitored by an official IEEE Member proctor. The IEEE CUU Student Branch arranges proctors and testing rooms for all registered CUU teams.",
  },
  {
    q: "Will there be a physical space to code at Cavendish University?",
    a: "The Branch explored a 24-hour workspace for registered teams. Contact the Technical Coordinators via WhatsApp for the latest details.",
  },
];

// Server component — status computed at render time, no client flash
export function IEEExtremeDetail() {
  const event = getEventBySlug("ieeextreme-20");
  const registrationClosed =
    !event ||
    event.status === "registration-closed" ||
    event.status === "ended";

  // TODO(owner): Replace with actual contest results once available
  const hasResults = false;

  return (
    <>
      <main className="min-h-screen bg-bg text-ink">
        <PageHero
          eyebrow="IEEEXtreme 20.0 · Registration closed"
          title={
            <>
              24 hours. One team. <em>The global leaderboard.</em>
            </>
          }
          lede="IEEEXtreme is IEEE's worldwide algorithmic programming contest for teams of IEEE Student Members. Registration for 20.0 closed on 17 October 2026, 11:59 PM GMT; contest date and CUU team results will be added here once confirmed."
          actions={
            <>
              <Link href="/join" className={btn.accent}>
                Join the branch for next year
                <ArrowUpRight size={16} aria-hidden="true" className={nudge} />
              </Link>
              <a href={SITE.ieee.extreme} target="_blank" rel="noopener noreferrer" className={btn.ghost}>
                Official IEEEXtreme site
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </>
          }
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-[#FFC72C]" aria-hidden="true" />
              Registration closed 17 Oct 2026
            </li>
            <li className="flex items-center gap-2">
              <Terminal size={16} className="text-[#FFC72C]" aria-hidden="true" />
              24-hour algorithmic contest
            </li>
          </ul>
        </PageHero>

        {/* ── RESULTS / RECAP ── */}
        {hasResults ? null : (
          <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-8">
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
              <Trophy size={28} className="text-slate-300 mx-auto mb-3" />
              <p className="text-sm text-slate-400 font-medium">CUU team results coming soon</p>
              {/* TODO(owner): Add team names, scores, and global ranking once the contest runs */}
              <p className="text-xs text-slate-500 mt-1">
                Results will be posted here once the branch supplies team names, scores, and ranking.
              </p>
            </div>
          </section>
        )}

        {/* ── STATS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-2xl border border-slate-100 bg-white p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#00629B]/10 bg-[#E6EFF6] text-[#00629B]">
                    <Icon size={20} strokeWidth={2.25} />
                  </div>
                  <div className="font-display text-2xl font-bold text-ink">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── FLYER & OVERVIEW ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-slate-100 bg-white overflow-hidden p-8 sm:p-12">
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-slate-100 shadow-xl group">
                <Image
                  src="/images/IEEEXtreme-Flyer.jpeg"
                  alt="Official IEEEXtreme 20.0 Flyer"
                  width={480}
                  height={480}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 90vw, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <a
                    href="/images/IEEEXtreme-Flyer.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-bold text-black shadow-lg"
                  >
                    View fullscreen
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  Compete Against the Best Coders on the Planet
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  IEEEXtreme is a virtual competitive programming challenge where teams of student members
                  compete over 24 hours against thousands of peers worldwide. Problems range from
                  beginner-friendly logic tasks to advanced dynamic programming, graph theory, and AI puzzles.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <ShieldCheck size={20} className="text-[#00629B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ink text-sm">Official Branch Proctoring</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Faculty advisors and IEEE members supervise and authenticate CUU team submissions in full compliance with global rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <Laptop size={20} className="text-[#007DAF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ink text-sm">On-Campus Coordination</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      The branch coordinated an overnight workspace for registered teams. Contact Technical Coordinators via WhatsApp for details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/images/IEEEXtreme-Flyer.jpeg"
                  download="IEEEXtreme-20-Flyer.jpeg"
                  className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <Download size={13} />
                  Download flyer
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── REGISTRATION ROADMAP ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              How to Enter IEEEXtreme
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              These steps apply for future editions. Registration for IEEEXtreme 20.0 has closed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PREP_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition duration-300 hover:border-[#007DAF]/40 hover:-translate-y-1"
              >
                <div className="font-display text-3xl font-bold text-[#007DAF]/60 mb-4">{step.step}</div>
                <h3 className="font-bold text-ink text-base mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-slate-100 border-y border-slate-100">
            {FAQS.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                  <span className="font-semibold text-ink">{faq.q}</span>
                  <span className="shrink-0 text-[#007DAF] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pb-24 pt-10">
          <div className="relative overflow-hidden rounded-3xl border border-[#007DAF]/30 bg-gradient-to-r from-[#CADCEA] via-[#E6EFF6] to-[#F5F8FB] p-10 sm:p-14 text-center">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Want to compete next year?
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-slate-600">
              Join the branch now so you&apos;re ready when IEEEXtreme 21.0 registration opens.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 bg-[#00629B] px-8 py-3.5 text-sm font-bold text-white shadow-xl transition hover:bg-[#002855]"
              >
                Join the branch
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                View all events
              </Link>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
