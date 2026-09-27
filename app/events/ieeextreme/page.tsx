import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Users,
  Trophy,
  Code2,
  ArrowUpRight,
  Zap,
  Download,
  CheckCircle2,
  Terminal,
  Cpu,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  HelpCircle,
  Laptop
} from "lucide-react";
import { IEEEXTREME_DEADLINE_ISO, WHATSAPP_INVITE_URL } from "@/lib/data";
import { Countdown } from "@/components/ui/Countdown";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "IEEEXtreme 20.0 | Global 24-Hour Programming Challenge | IEEE CUU",
  description:
    "Compete in IEEEXtreme 20.0 with the IEEE Cavendish University Uganda Student Branch. 24-hour virtual competitive programming challenge for teams of IEEE Student Members.",
};

const STATS = [
  { icon: Clock, value: "24 Hours", label: "Continuous Coding Marathon" },
  { icon: Users, value: "2 to 3 Members", label: "Per Competing Team" },
  { icon: Trophy, value: "60+ Countries", label: "Global Live Ranking" },
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
    desc: "Submit your team name and member IEEE numbers via the official IEEE vTools registration portal by 17 October 2026.",
  },
  {
    step: "04",
    title: "Join the CUU War Room",
    desc: "Connect with our Technical Coordinators for proctor assignment, prep workshops, and access to the on-campus overnight coding hub.",
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
    a: "Yes! The Branch will host a 24-hour 'War Room' with dedicated high-speed internet, power backup, food, coffee, and mentorship support.",
  },
];

export default function IEEExtremePage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Top Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[1000px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 40%, transparent 75%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-64 right-10 h-[500px] w-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse at center, #1A9090 0%, transparent 70%)" }}
        />

        {/* ── BREADCRUMB & CONTEXT STRIP ── */}
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-4 pb-2">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-ieee">
                <ArrowLeft size={13} />
                <span>Home</span>
              </Link>
              <span>/</span>
              <Link href="/events" className="transition-colors hover:text-ieee">
                Events
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">IEEEXtreme 20.0</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cuu-steel/30 bg-cuu-steel/10 px-3 py-1 text-[11px] font-semibold text-cuu-steel">
                <span className="h-1.5 w-1.5 rounded-full bg-cuu-steel animate-ping" />
                Team Registration Live
              </span>
              <a
                href="https://xtreme.vtools.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0D6E6E] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1A9090]"
              >
                Register on vTools
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* ── HERO BANNER ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A9090]/40 bg-[#0D6E6E]/20 px-4 py-1.5">
              <Zap size={14} className="text-[#E8F5F5]" fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8F5F5]">
                Global 24-Hour Virtual Hackathon
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              IEEEXtreme 20.0<br />
              <span className="text-[#1A9090] italic">Global Programming</span> Challenge
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted">
              A 24-hour worldwide algorithmic battle for teams of IEEE Student Members.
              Solve intense challenges, test your problem solving under real-time pressure,
              and put Cavendish University Uganda on the global leaderboard.
            </p>

            {/* Quick Meta Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 backdrop-blur-md">
                <Clock size={17} className="text-[#1A9090]" />
                <span className="font-semibold">Registration Closes: 17 Oct 2026 · 11:59 PM GMT</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 backdrop-blur-md">
                <Terminal size={17} className="text-[#0D6E6E]" />
                <span>Format: 24h Algorithmic Hackathon</span>
              </div>
            </div>

            {/* Live Countdown Box */}
            <div className="mt-10 mx-auto max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#E0DDD5]/90 to-[#0B0F19]/90 p-6 shadow-2xl backdrop-blur-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Time Remaining to Register Your Team
              </p>
              <div className="flex justify-center">
                <Countdown targetISO={IEEEXTREME_DEADLINE_ISO} showSeconds={false} />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://xtreme.vtools.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-7 py-3 text-sm font-bold text-ink shadow-lg shadow-[#0D6E6E]/30 transition hover:bg-[#1A9090] hover:-translate-y-0.5"
                >
                  <span>Register Team on vTools</span>
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://ieeextreme.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <span>Official Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-2xl border border-ieee/10 bg-white p-5 text-center backdrop-blur-sm">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D6E6E]/25 text-[#E8F5F5] mb-3">
                    <Icon size={20} />
                  </div>
                  <div className="font-serif text-2xl font-bold text-ink">{s.value}</div>
                  <div className="text-xs text-muted mt-1">{s.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── FLYER & COMPETITION OVERVIEW ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-ieee/10 bg-white overflow-hidden p-8 sm:p-12">
            {/* Left: Flyer */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] group">
                <Image
                  src="/images/IEEEXtreme-Flyer.jpeg"
                  alt="Official IEEEXtreme 20.0 Flyer"
                  width={480}
                  height={480}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <a
                    href="/images/IEEEXtreme-Flyer.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-lg"
                  >
                    View Flyer Fullscreen
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted text-center">
                Official IEEE Xtreme 20.0 Global Banner
              </p>
            </div>

            {/* Right: Challenge Format */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                  About The Hackathon
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">
                  Compete Against The Best Coders on the Planet
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                  IEEEXtreme is a virtual competitive programming challenge where teams of student members compete over a 24-hour time span against thousands of peers worldwide. Problems range from beginner-friendly logic tasks to advanced dynamic programming, graph theory, cryptography, and artificial intelligence puzzles.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <ShieldCheck size={20} className="text-[#E8F5F5] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Official Branch Proctoring</h4>
                    <p className="text-xs text-muted mt-1">Our faculty advisors and IEEE Young Professionals supervise and authenticate CUU team submissions in full compliance with global rules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <Laptop size={20} className="text-[#1A9090] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">24-Hour Campus War Room</h4>
                    <p className="text-xs text-muted mt-1">Don&apos;t worry about power outages or internet drops. Compete from the Cavendish University computer lab equipped with high-speed internet, power redundancy, and snacks.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Join Hackathon WhatsApp Group
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="/images/IEEEXtreme-Flyer.jpeg"
                  download="IEEEXtreme-20-Flyer.jpeg"
                  className="inline-flex items-center gap-2 rounded-full border border-ieee/10 bg-white px-4 py-2.5 text-xs text-muted hover:text-white transition"
                >
                  <Download size={13} />
                  Download Flyer
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4-STEP ROADMAP ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dfeff0] px-3 py-1 text-[12px] font-medium text-[#2f5f68]">
              <span className="h-1 w-1 rounded-full bg-[#2f5f68]/50" aria-hidden="true" />
              Registration roadmap
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
              How to Enter IEEEXtreme 20.0
            </h2>
            <p className="mt-3 text-sm text-muted">
              Follow these simple steps before the registration deadline of 17 October 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PREP_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-ieee/10 bg-white p-6 backdrop-blur-sm transition duration-300 hover:border-[#1A9090]/50 hover:-translate-y-1"
              >
                <div className="font-serif text-3xl font-bold text-[#1A9090]/80 mb-4">{step.step}</div>
                <h3 className="font-bold text-ink text-base mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── EVENT FAQS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 border border-white/15 px-3 py-1 text-[12px] font-medium text-white/70 backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-white/50" aria-hidden="true" />
              Contest inquiries
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-ieee/10 bg-white/80 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-[#E8F5F5] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-ink text-base">{faq.q}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA BANNER ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pb-24 pt-10">
          <div className="relative overflow-hidden rounded-3xl border border-[#1A9090]/40 bg-gradient-to-r from-[#E0DDD5] via-[#E8F0F0] to-[#F7F4EF] p-10 sm:p-14 text-center shadow-2xl">
            <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
              Ready to Represent Cavendish University?
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-muted">
              Register your team on the official IEEE vTools portal before registration locks down.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://xtreme.vtools.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black shadow-xl transition hover:bg-neutral-200 hover:scale-105"
              >
                Register Team on vTools
                <ArrowUpRight size={16} />
              </a>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                View All Events
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
