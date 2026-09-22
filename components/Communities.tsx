"use client";

import { useState } from "react";
import {
  Cpu,
  Bot,
  Brain,
  Activity,
  Sparkles,
  Zap,
  Radio,
  GraduationCap,
  AudioLines,
  Globe,
  ArrowUpRight,
  Compass,
  Users,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { communities, WHATSAPP_INVITE_URL } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Cpu,
  Bot,
  Brain,
  Activity,
  Sparkles,
  Zap,
  Radio,
  GraduationCap,
  AudioLines,
  Globe,
};

const COLOR_MAP: Record<
  string,
  {
    tag: string;
    iconBg: string;
    iconColor: string;
    cardBorder: string;
    glow: string;
  }
> = {
  sky: {
    tag: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    iconBg: "bg-sky-500/15 border-sky-500/30",
    iconColor: "text-sky-400",
    cardBorder: "hover:border-sky-500/40",
    glow: "rgba(14,165,233,0.15)",
  },
  amber: {
    tag: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    iconBg: "bg-amber-500/15 border-amber-500/30",
    iconColor: "text-amber-400",
    cardBorder: "hover:border-amber-500/40",
    glow: "rgba(245,158,11,0.15)",
  },
  violet: {
    tag: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    iconBg: "bg-violet-500/15 border-violet-500/30",
    iconColor: "text-violet-400",
    cardBorder: "hover:border-violet-500/40",
    glow: "rgba(139,92,246,0.15)",
  },
  rose: {
    tag: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    iconBg: "bg-rose-500/15 border-rose-500/30",
    iconColor: "text-rose-400",
    cardBorder: "hover:border-rose-500/40",
    glow: "rgba(244,63,94,0.15)",
  },
  fuchsia: {
    tag: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30",
    iconBg: "bg-fuchsia-500/15 border-fuchsia-500/30",
    iconColor: "text-fuchsia-400",
    cardBorder: "hover:border-fuchsia-500/40",
    glow: "rgba(217,70,239,0.15)",
  },
  emerald: {
    tag: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    iconColor: "text-emerald-400",
    cardBorder: "hover:border-emerald-500/40",
    glow: "rgba(16,185,129,0.15)",
  },
  cyan: {
    tag: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    iconColor: "text-cyan-400",
    cardBorder: "hover:border-cyan-500/40",
    glow: "rgba(6,182,212,0.15)",
  },
  indigo: {
    tag: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    iconBg: "bg-indigo-500/15 border-indigo-500/30",
    iconColor: "text-indigo-400",
    cardBorder: "hover:border-indigo-500/40",
    glow: "rgba(99,102,241,0.15)",
  },
  teal: {
    tag: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    iconBg: "bg-teal-500/15 border-teal-500/30",
    iconColor: "text-teal-400",
    cardBorder: "hover:border-teal-500/40",
    glow: "rgba(20,184,166,0.15)",
  },
  orange: {
    tag: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    iconBg: "bg-orange-500/15 border-orange-500/30",
    iconColor: "text-orange-400",
    cardBorder: "hover:border-orange-500/40",
    glow: "rgba(249,115,22,0.15)",
  },
};

const CATEGORIES = [
  "All Disciplines",
  "Computing & AI",
  "Robotics & Energy",
  "Health & Life Sciences",
  "Equity & Leadership",
  "Connectivity & Systems",
] as const;

export function Communities() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Disciplines");

  const filteredCommunities =
    selectedCategory === "All Disciplines"
      ? communities
      : communities.filter((c) => c.category === selectedCategory);

  return (
    <section id="communities" className="relative overflow-hidden bg-[#09090B] py-28 sm:py-36">
      {/* Background glow ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(ellipse at center, #C8A96E 0%, #00629B 50%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Section Header ── */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#C8A96E]">
              <Globe size={12} />
              Open to Every Innovator & Enthusiast
            </span>
            <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Specialized communities to{" "}
              <em className="not-italic italic text-[#C8A96E]">change the world.</em>
            </h2>
            <div className="mt-6 h-[3px] w-16 rounded-full bg-[#C56C47]" />
          </div>

          <div className="lg:col-span-5">
            <p className="text-base leading-[1.8] text-[#A8A8B3] sm:text-lg">
              IEEE is not restricted to computer science. Advancing technology for humanity is an
              all-hands mission. Whether you are passionate about artificial intelligence, clean
              energy, healthcare devices, robotics, education reform, or humanitarian solutions —
              there is a global society ready to empower you.
            </p>
          </div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="mb-12 flex flex-wrap items-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-lg shadow-white/10 scale-100"
                    : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Society Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCommunities.map((c) => {
            const IconComp = ICONS[c.icon] || Compass;
            const theme = COLOR_MAP[c.color] || COLOR_MAP.sky;

            return (
              <div
                key={c.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0d14] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${theme.cardBorder}`}
              >
                {/* Ambient glow on hover */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
                  }}
                />

                <div>
                  {/* Card Top Row: Category tag + Impact badge */}
                  <div className="mb-6 flex items-center justify-between gap-2">
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-[11px] font-bold tracking-wide ${theme.tag}`}
                    >
                      {c.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {c.impact}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${theme.iconBg}`}
                    >
                      <IconComp size={22} className={theme.iconColor} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold leading-tight text-white group-hover:text-[#C8A96E] transition-colors">
                        {c.name}
                      </h3>
                    </div>
                  </div>

                  {/* Focus Subtitle */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A96E]/90 mb-3">
                    {c.focus}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[#A8A8B3] mb-6">{c.description}</p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors">
                    Global Society
                  </span>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#C8A96E] transition-colors"
                  >
                    <span>Visit Society</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Inspiring Multi-Disciplinary Callout Banner ── */}
        <div className="mt-14 relative overflow-hidden rounded-3xl border border-[#C8A96E]/25 bg-gradient-to-br from-[#13131c] via-[#0d0e14] to-[#09090b] p-8 sm:p-12 shadow-2xl">
          {/* Subtle warm glow orb */}
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #C8A96E 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 px-3.5 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8A96E] mb-4">
                <Users size={12} />
                No Tech Background Required
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                You don’t need to be a coder to shape the future.
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A8A8B3]">
                Solving the world&apos;s toughest challenges requires multidisciplinary vision. Whether you study
                Business, Public Health, Law, Design, Education, or Engineering — modern innovation
                demands diverse minds. In IEEE Cavendish University Uganda, your perspective is needed
                to ensure technology truly serves humanity.
              </p>

              {/* Pill highlights */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-white/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Cross-Faculty Teams
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Mentorship & Workshops
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Global IEEE Network
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="font-serif text-3xl font-black text-white">40+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Societies</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-serif text-3xl font-black text-white">160+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Countries</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-serif text-3xl font-black text-[#C8A96E]">100%</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Open to All</div>
                </div>
              </div>

              <a
                href={WHATSAPP_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C8A96E] to-[#B38D48] px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-[#C8A96E]/20 transition-all duration-300 hover:from-[#DFC27D] hover:to-[#C8A96E] hover:scale-[1.02]"
              >
                <span>Find Your Community at CUU</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
