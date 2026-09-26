"use client";

import Image from "next/image";
import { 
  Terminal, 
  Cpu, 
  Briefcase, 
  Users2, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  ChevronRight
} from "lucide-react";
import { CUUCSA_LINKEDIN_URL, CUUCSA_WHATSAPP_URL } from "@/lib/data";

const PILLARS = [
  {
    icon: Terminal,
    title: "Academy & CodeLab",
    subtitle: "Hands-on Engineering",
    desc: "Intensive coding bootcamps, algorithmic problem solving, modern web/cloud architectures, and open-source contributions.",
    tag: "Core Technical",
  },
  {
    icon: Cpu,
    title: "Innovation & Research Hub",
    subtitle: "Applied Problem Solving",
    desc: "Hackathon strike teams, AI & data science projects, hardware tinkering, and student-led tech research papers.",
    tag: "Applied Tech",
  },
  {
    icon: Briefcase,
    title: "Techpreneur & Industry Connect",
    subtitle: "Career & Venture Building",
    desc: "Direct recruitment pipelines, industry speaker sessions, portfolio teardowns, and tech founder venture incubation.",
    tag: "Industry Link",
  },
  {
    icon: Users2,
    title: "Guild & Student Representation",
    subtitle: "Advocacy & Community",
    desc: "Unified computing student voice, peer study circles, women-in-tech initiatives, and Students' Guild alignment.",
    tag: "Ecosystem",
  },
];

const MOTTO = [
  { word: "LEARN", desc: "Foundational mastery & deep technical literacy" },
  { word: "BUILD", desc: "Production-ready software & real systems" },
  { word: "INNOVATE", desc: "Breakthrough prototypes & applied research" },
  { word: "IMPACT", desc: "Transforming industry & community across Uganda" },
];

export function CUUCSA() {
  return (
    <section id="cuucsa" className="relative overflow-hidden bg-bg py-28 sm:py-36 border-t border-ieee/10">
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #0D6E6E 0%, #1A9090 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Section Kicker ── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-ieee/25 bg-ieee/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase text-ieee">
            Official Arrival · Cavendish University Uganda
          </div>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Introducing <span className="text-[#0D6E6E]">CUUCSA</span>
          </h2>

          <p className="mt-4 text-base font-semibold uppercase tracking-[0.2em] text-[#0D6E6E] sm:text-sm">
            Cavendish University Uganda Computing Students’ Association
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            A disciplined student technology ecosystem arriving to ignite builders, software engineers, 
            and innovators at Siyani Campus. Grounded in a unified operational framework for 2026 to 2027.
          </p>
        </div>

        {/* ── 4-Pillar Motto Strip ── */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {MOTTO.map((m, idx) => (
            <div
              key={m.word}
              className="group relative overflow-hidden rounded-2xl border border-ieee/15 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-ieee/60 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-[10px] font-bold tracking-widest text-[#0D6E6E] uppercase">
                Phase 0{idx + 1}
              </div>
              <div className="mt-1 font-mono text-xl font-bold tracking-wider text-ink group-hover:text-ieee transition-colors">
                {m.word}.
              </div>
              <p className="mt-2 text-xs leading-snug text-muted">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Master Showcase Card ── */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-ieee/15 bg-white shadow-[0_20px_60px_rgba(13,110,110,0.08)]">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            
            {/* ── Left Column: Identity & What to Expect (7 cols) ── */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-7 lg:p-12">
              <div>
                {/* Official Logo Banner Display */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/[0.08] pb-6">
                  <div className="relative h-12 w-64 sm:h-14 sm:w-72">
                    <Image
                      src="/images/cuucsa/cuucsa-logo.png"
                      alt="CUUCSA - Cavendish University Uganda Computing Students' Association"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ieee/20 bg-ieee/10 px-3.5 py-1 text-xs font-semibold text-[#0D6E6E]">
                    <Sparkles size={12} />
                    Blueprint Edition 2026 to 2027
                  </span>
                </div>

                {/* Executive Brief Statement */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-[#0D6E6E] uppercase">
                    <Compass size={14} />
                    Executive Operating Blueprint
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    Bridging Lecture Halls to Real-World Tech Impact.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    Built from the Revised CUUCSA Constitution and Official Directory, CUUCSA answers five decisive questions: 
                    <span className="text-ink font-semibold"> Who is CUUCSA? Where is it going? What will it do? How will it deliver? And what impact will it make?</span> 
                    It positions Cavendish computing students at the absolute vanguard of regional technology.
                  </p>
                </div>

                {/* Key Initiatives / What to Expect Grid */}
                <div className="mt-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink/75">
                      What to expect from CUUCSA
                    </span>
                    <span className="text-[11px] font-semibold text-[#0D6E6E]">
                      4 Strategic Pillars
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {PILLARS.map((p) => {
                      const Icon = p.icon;
                      return (
                        <div
                          key={p.title}
                          className="group/p relative rounded-2xl border border-ieee/15 bg-bg/50 p-4 transition-all duration-300 hover:border-ieee/50 hover:bg-white hover:shadow-md"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ieee/10 text-ieee ring-1 ring-ieee/20">
                              <Icon size={18} />
                            </div>
                            <span className="rounded-full bg-ieee/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#0D6E6E]">
                              {p.tag}
                            </span>
                          </div>
                          <h4 className="mt-3 text-sm font-bold text-ink group-hover/p:text-ieee transition-colors">
                            {p.title}
                          </h4>
                          <p className="text-[11px] font-medium text-[#0D6E6E]">
                            {p.subtitle}
                          </p>
                          <p className="mt-1.5 text-xs leading-relaxed text-muted">
                            {p.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-8 border-t border-ink/[0.08] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <ShieldCheck size={16} className="text-[#0D6E6E] shrink-0" />
                  <span>
                    Aligned with Faculty of Science & Technology · Students’ Guild
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={CUUCSA_WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0D6E6E] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#074040] hover:-translate-y-0.5"
                  >
                    <span>Connect with CUUCSA</span>
                    <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={CUUCSA_LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition hover:border-[#0D6E6E]/40 hover:text-[#0D6E6E]"
                  >
                    <span>LinkedIn</span>
                    <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right Column: Visual Emblem & Blueprint Card (5 cols) ── */}
            <div className="relative flex flex-col justify-between border-t border-ieee/10 bg-[#F2EDE4]/70 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:col-span-5 lg:p-12">
              {/* Emblem Stage */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center rounded-2xl border border-ieee/15 bg-white p-4 shadow-xl">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/cuucsa/cuucsa-emblem.png"
                      alt="CUUCSA Official Emblem"
                      fill
                      className="object-contain"
                      sizes="160px"
                      priority
                    />
                  </div>
                  {/* Status Indicator Badge */}
                  <div className="absolute -bottom-3 rounded-full border border-ieee/30 bg-[#0D6E6E] px-3.5 py-0.5 shadow-md">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Official Seal
                    </span>
                  </div>
                </div>

                <h3 className="mt-8 font-serif text-2xl font-bold tracking-tight text-ink">
                  Student Tech Powerhouse
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#0D6E6E] uppercase tracking-wider">
                  Cavendish University Uganda · Siyani Campus
                </p>
              </div>

              {/* Blueprint Fast-Facts Cards */}
              <div className="relative z-10 mt-8 space-y-3">
                <div className="rounded-xl border border-ieee/15 bg-white/80 p-3.5 shadow-sm">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted font-medium">Operating Architecture</span>
                    <span className="font-mono font-bold text-[#0D6E6E]">8-Stage Journey</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-1 text-[10px] font-mono text-ink/80 overflow-x-auto py-0.5">
                    <span className="rounded bg-black/[0.04] px-1.5 py-0.5 font-medium">Join</span>
                    <ChevronRight size={10} className="text-muted/50" />
                    <span className="rounded bg-black/[0.04] px-1.5 py-0.5 font-medium">Learn</span>
                    <ChevronRight size={10} className="text-muted/50" />
                    <span className="rounded bg-black/[0.04] px-1.5 py-0.5 font-medium">Build</span>
                    <ChevronRight size={10} className="text-muted/50" />
                    <span className="rounded bg-black/[0.04] px-1.5 py-0.5 font-medium">Certify</span>
                    <ChevronRight size={10} className="text-muted/50" />
                    <span className="rounded bg-[#0D6E6E] text-white font-bold px-2 py-0.5">Impact</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-ieee/15 bg-white/80 p-3 shadow-sm">
                    <div className="text-[10px] font-semibold text-muted uppercase tracking-wider">
                      Target Audience
                    </div>
                    <div className="mt-1 text-sm font-bold text-ink">
                      All Computing
                    </div>
                    <p className="text-[10px] text-muted">BSIT, BSCS, DIT, BIT & AI</p>
                  </div>
                  <div className="rounded-xl border border-ieee/15 bg-white/80 p-3 shadow-sm">
                    <div className="text-[10px] font-semibold text-muted uppercase tracking-wider">
                      Location
                    </div>
                    <div className="mt-1 text-sm font-bold text-ink">
                      Siyani Campus
                    </div>
                    <p className="text-[10px] text-muted">Opp. American Embassy</p>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="relative z-10 mt-6 rounded-2xl border border-ieee/20 bg-white/90 p-3.5 text-center shadow-sm">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-ink">
                  <Layers size={14} className="text-[#0D6E6E]" />
                  <span>2026 to 2027 Executive Rollout</span>
                </div>
                <p className="mt-1 text-[11px] text-muted">
                  Sub-committees and student developer cohorts activating this semester.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
