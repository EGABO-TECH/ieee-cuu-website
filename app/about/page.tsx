import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe2, Cpu, BookOpenText, Users2, ShieldCheck, Award, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatIsIEEE } from "@/components/WhatIsIEEE";

export const metadata: Metadata = {
  title: "About IEEE | Cavendish University Uganda Student Branch",
  description:
    "Learn about IEEE, the world's largest technical professional organization, and the IEEE Student Branch at Cavendish University Uganda.",
};

const STATS = [
  { value: "400,000+", label: "Global IEEE Members", sub: "Engineers, scientists & students" },
  { value: "160+", label: "Countries Worldwide", sub: "Global technical presence" },
  { value: "Region 8", label: "Europe, Middle East & Africa", sub: "Our regional affiliation" },
  { value: "Uganda Section", label: "National Section", sub: "Connecting local professionals" },
];

const VALUES = [
  {
    icon: Cpu,
    title: "Technological Excellence",
    desc: "Fostering engineering rigor, scientific curiosity, and high standards across all student projects and research.",
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    desc: "Connecting students in Kampala directly with peers, mentors, and industry pioneers worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Practice",
    desc: "Committed to the IEEE Code of Ethics, ensuring technology is developed responsibly for the benefit of humanity.",
  },
  {
    icon: Award,
    title: "Student Empowerment",
    desc: "Cultivating leadership, public speaking, and project management skills to prepare graduates for global careers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[550px] w-[1100px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 50%, transparent 75%)" }}
        />

        {/* ── BREADCRUMB STRIP ── */}
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-4 pb-2">
          <div className="flex items-center gap-2 text-xs text-slate-600 border-b border-slate-200 pb-4">
            <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-ieee">
              <ArrowLeft size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">About IEEE</span>
          </div>
        </div>

        {/* ── PAGE HERO ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
          <span className="inline-block rounded-full border border-[#1A9090]/40 bg-[#0D6E6E]/20 px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-slate-700">
            Global Institution · Local Campus Impact
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Advancing Technology<br />
            <span className="text-[#1A9090] italic">for Humanity</span> at CUU
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted">
            The Institute of Electrical and Electronics Engineers (IEEE) is the world&apos;s largest technical
            professional organization dedicated to advancing technology for the benefit of humanity.
          </p>

          {/* Key Stats Bar */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-ieee/10 bg-white p-5 backdrop-blur-sm">
                <div className="font-serif text-3xl font-bold text-ink">{s.value}</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">{s.label}</div>
                <div className="text-[11px] text-muted mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CORE COMPONENT EMBED (WHAT IS IEEE) ── */}
        <WhatIsIEEE />

        {/* ── GUIDING VALUES SECTION ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
              Our Foundation
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Principles Guiding Our Branch
            </h2>
            <p className="mt-3 text-sm text-muted">
              Rooted in the century-old global IEEE heritage and tailored for student innovation at Cavendish University Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-ieee/10 bg-white/80 p-6 transition duration-300 hover:border-[#1A9090]/40 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D6E6E]/25 text-[#E8F5F5] mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-ink text-base mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CALL TO ACTION STRIP ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pb-24 pt-8">
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-r from-[#0d1424] to-[#12141f] p-8 sm:p-12 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Ready to Explore Branch Opportunities?
            </h2>
            <p className="mt-3 text-sm text-muted max-w-lg mx-auto">
              Discover how to join the Cavendish University Uganda branch, participate in ambassador initiatives, or compete in global challenges.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/branch"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-7 py-3 text-xs sm:text-sm font-bold text-ink transition hover:bg-[#1A9090]"
              >
                Learn About The Branch
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Membership Options
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
