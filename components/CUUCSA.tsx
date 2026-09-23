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
    <section id="cuucsa" className="relative overflow-hidden bg-[#07090E] py-28 sm:py-36">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #018FFC 0%, #023791 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-0 h-[450px] w-[500px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
        }}
      />

      {/* Subtle digital grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Section Kicker ── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#018FFC]/30 bg-[#018FFC]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#38BDF8] backdrop-blur-md shadow-[0_0_20px_rgba(1,143,252,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#018FFC]" />
            </span>
            Official Arrival · Cavendish University Uganda
          </div>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Introducing{" "}
            <span className="bg-gradient-to-r from-[#018FFC] via-[#38BDF8] to-blue-300 bg-clip-text text-transparent">
              CUUCSA
            </span>
          </h2>

          <p className="mt-4 text-base font-medium uppercase tracking-[0.18em] text-[#94A3B8] sm:text-lg">
            Cavendish University Uganda Computing Students’ Association
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
            A disciplined student technology ecosystem arriving to ignite builders, software engineers, 
            and innovators at Siyani Campus. Grounded in a unified operational framework for 2026–2027.
          </p>
        </div>

        {/* ── High-Impact 4-Pillar Motto Strip ── */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {MOTTO.map((m, idx) => (
            <div
              key={m.word}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#018FFC]/40 hover:bg-[#018FFC]/[0.06] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(1,143,252,0.15)]"
            >
              <div className="text-[10px] font-bold tracking-widest text-[#018FFC] uppercase">
                Phase 0{idx + 1}
              </div>
              <div className="mt-1 font-mono text-xl font-black tracking-wider text-white group-hover:text-[#38BDF8] transition-colors">
                {m.word}.
              </div>
              <p className="mt-2 text-xs leading-snug text-[#94A3B8]">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Master Showcase Card ── */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0c101a]/90 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            
            {/* ── Left Column: Identity & What to Expect (7 cols) ── */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-7 lg:p-12">
              <div>
                {/* Official Logo Banner Display */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                  <div className="relative h-12 w-64 sm:h-14 sm:w-72">
                    <Image
                      src="/images/cuucsa/cuucsa-logo.png"
                      alt="CUUCSA - Cavendish University Uganda Computing Students' Association"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                    <Sparkles size={12} />
                    Blueprint Edition 2026–2027
                  </span>
                </div>

                {/* Executive Brief Statement */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-[#018FFC] uppercase">
                    <Compass size={14} />
                    Executive Operating Blueprint
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Bridging Lecture Halls to Real-World Tech Impact.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
                    Built from the Revised CUUCSA Constitution and Official Directory, CUUCSA answers five decisive questions: 
                    <span className="text-white font-medium"> Who is CUUCSA? Where is it going? What will it do? How will it deliver? And what impact will it make?</span> 
                    It positions Cavendish computing students at the absolute vanguard of regional technology.
                  </p>
                </div>

                {/* Key Initiatives / What to Expect Grid */}
                <div className="mt-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                      What to expect from CUUCSA
                    </span>
                    <span className="text-[11px] font-medium text-[#38BDF8]">
                      4 Strategic Pillars
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {PILLARS.map((p) => {
                      const Icon = p.icon;
                      return (
                        <div
                          key={p.title}
                          className="group/p relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#018FFC]/30 hover:bg-[#018FFC]/[0.05]"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#018FFC]/15 text-[#38BDF8] ring-1 ring-[#018FFC]/30">
                              <Icon size={18} />
                            </div>
                            <span className="rounded-full bg-white/[0.05] px-2.5 py-0.5 text-[10px] font-semibold text-white/50 group-hover/p:text-[#38BDF8] group-hover/p:bg-[#018FFC]/10 transition-colors">
                              {p.tag}
                            </span>
                          </div>
                          <h4 className="mt-3 text-sm font-bold text-white group-hover/p:text-[#38BDF8] transition-colors">
                            {p.title}
                          </h4>
                          <p className="text-[11px] font-medium text-[#018FFC]/90">
                            {p.subtitle}
                          </p>
                          <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
                            {p.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-8 border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  <ShieldCheck size={16} className="text-[#38BDF8] shrink-0" />
                  <span>
                    Aligned with Faculty of Science & Technology · Students’ Guild
                  </span>
                </div>
                <a
                  href="#join"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#018FFC] to-[#023791] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#018FFC]/25 transition hover:scale-105 hover:shadow-[#018FFC]/40"
                >
                  <span>Connect with CUUCSA</span>
                  <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* ── Right Column: Visual Emblem & Blueprint Card (5 cols) ── */}
            <div className="relative flex flex-col justify-between border-t border-white/[0.08] bg-gradient-to-b from-[#090e1a] via-[#0b1222] to-[#050810] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:col-span-5 lg:p-12">
              {/* Radial backdrop */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  background: "radial-gradient(circle at 50% 30%, #018FFC 0%, transparent 60%)",
                }}
              />

              {/* Emblem Stage */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative flex h-40 w-40 sm:h-44 sm:w-44 items-center justify-center rounded-3xl border border-[#018FFC]/40 bg-[#060a14] p-5 shadow-[0_0_60px_rgba(1,143,252,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_80px_rgba(1,143,252,0.5)]">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/cuucsa/cuucsa-emblem.png"
                      alt="CUUCSA Official Emblem"
                      fill
                      className="object-contain"
                      sizes="176px"
                      priority
                    />
                  </div>
                  {/* Status Indicator Badge */}
                  <div className="absolute -bottom-3 rounded-full border border-[#018FFC]/40 bg-[#090e1c] px-3 py-1 shadow-md">
                    <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                      Official Seal
                    </span>
                  </div>
                </div>

                <h3 className="mt-8 font-serif text-2xl font-bold tracking-tight text-white">
                  Student Tech Powerhouse
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#018FFC] uppercase tracking-wider">
                  Cavendish University Uganda · Siyani Campus
                </p>
              </div>

              {/* Blueprint Fast-Facts Cards */}
              <div className="relative z-10 mt-8 space-y-3">
                <div className="rounded-xl border border-white/[0.08] bg-black/40 p-3.5 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60 font-medium">Operating Architecture</span>
                    <span className="font-mono font-bold text-[#38BDF8]">8-Stage Journey</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-1 text-[10px] font-mono text-white/70 overflow-x-auto py-0.5">
                    <span className="rounded bg-white/5 px-1.5 py-0.5">Join</span>
                    <ChevronRight size={10} className="text-white/30" />
                    <span className="rounded bg-white/5 px-1.5 py-0.5">Learn</span>
                    <ChevronRight size={10} className="text-white/30" />
                    <span className="rounded bg-white/5 px-1.5 py-0.5">Build</span>
                    <ChevronRight size={10} className="text-white/30" />
                    <span className="rounded bg-white/5 px-1.5 py-0.5">Certify</span>
                    <ChevronRight size={10} className="text-white/30" />
                    <span className="rounded bg-sky-500/20 text-sky-300 font-bold px-1.5 py-0.5">Impact</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/[0.08] bg-black/40 p-3 backdrop-blur-md">
                    <div className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                      Target Audience
                    </div>
                    <div className="mt-1 text-sm font-bold text-white">
                      All Computing
                    </div>
                    <p className="text-[10px] text-[#94A3B8]">BSIT, BSCS, DIT, BIT & AI</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-black/40 p-3 backdrop-blur-md">
                    <div className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="mt-1 text-sm font-bold text-white">
                      Siyani Campus
                    </div>
                    <p className="text-[10px] text-[#94A3B8]">Opp. American Embassy</p>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="relative z-10 mt-6 rounded-2xl border border-[#018FFC]/25 bg-[#018FFC]/10 p-3.5 text-center">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-white">
                  <Layers size={14} className="text-[#38BDF8]" />
                  <span>2026–2027 Executive Rollout</span>
                </div>
                <p className="mt-1 text-[11px] text-[#94A3B8]">
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
