import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Rocket, Sparkles, BookOpen, Users, Compass, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { Journey } from "@/components/Journey";

export const metadata: Metadata = {
  title: "The Branch | IEEE Student Branch Cavendish University Uganda",
  description:
    "Explore the IEEE Student Branch at Cavendish University Uganda, our 6-step student journey, core pillars, and orientation guide.",
};

const BRANCH_HIGHLIGHTS = [
  {
    icon: Compass,
    title: "Guided Student Roadmap",
    desc: "From your very first orientation session to leading international tech tracks, we chart a clear progression for your technical and professional growth.",
  },
  {
    icon: Rocket,
    title: "Practical Engineering Labs",
    desc: "Move past dry slides with weekly code laboratories, cloud workshops, and collaborative open-source sprints led by experienced peers.",
  },
  {
    icon: BookOpen,
    title: "IEEE Xplore & Research Access",
    desc: "Full institutional guidance on conducting literature reviews, academic citations, and submitting papers to regional IEEE conferences.",
  },
  {
    icon: Users,
    title: "Vibrant Cross-Faculty Culture",
    desc: "Whether you study Computing, Business Administration, Public Health, or Law, technology touches your discipline. Everyone belongs here.",
  },
];

export default function BranchPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[550px] w-[1100px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 40%, transparent 75%)" }}
        />

        {/* ── BREADCRUMB STRIP ── */}
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-4 pb-2">
          <div className="flex items-center gap-2 text-xs text-slate-600 border-b border-slate-200 pb-4">
            <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-ieee">
              <ArrowLeft size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">The Branch</span>
          </div>
        </div>

        {/* ── PAGE HERO ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
          <span className="inline-block rounded-full border border-[#1A9090]/40 bg-[#0D6E6E]/20 px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-slate-700">
            Cavendish University Uganda
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            The Branch: Where<br />
            <span className="text-[#1A9090] italic">Ambition Meets</span> Technical Mastery
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted">
            Founded to bridge classroom curricula with real-world engineering excellence.
            Discover how the IEEE Student Branch at Cavendish University Uganda equips you
            with global tools, networks, and opportunities.
          </p>
        </section>

        {/* ── CORE COMPONENT EMBED (JOURNEY) ── */}
        <Journey />

        {/* ── BRANCH HIGHLIGHTS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
              Branch Architecture
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Why Join the CUU Student Branch?
            </h2>
            <p className="mt-3 text-sm text-muted">
              A dynamic campus ecosystem structured to support members at every phase of their university experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRANCH_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-ieee/10 bg-white p-7 transition duration-300 hover:border-[#1A9090]/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D6E6E]/25 text-[#E8F5F5] mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-ink text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CALL TO ACTION STRIP ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pb-24 pt-8">
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-r from-[#0d1424] to-[#12141f] p-8 sm:p-12 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Get Involved with the IEEE Student Branch
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">
              Meet the student leaders, explore our campus ambassador programs, or join the official WhatsApp group for branch news and opportunities.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-7 py-3 text-xs sm:text-sm font-bold text-ink transition hover:bg-[#1A9090]"
              >
                Meet the Team
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Explore Membership
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
