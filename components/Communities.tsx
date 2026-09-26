"use client";

import { useState } from "react";
import Image from "next/image";
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
  Camera,
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

/** Top-half visual component for society cards (Official image or themed placeholder) */
function SocietyVisual({
  name,
  category,
  impact,
  image,
  icon: IconComp,
  theme,
}: {
  name: string;
  category: string;
  impact: string;
  image?: string;
  icon: LucideIcon;
  theme: {
    tag: string;
    iconBg: string;
    iconColor: string;
    cardBorder: string;
    glow: string;
  };
}) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image && image.length > 0 && !imgError);

  return (
    <div className="relative h-48 w-full overflow-hidden border-b border-ink/[0.08] bg-ink/5">
      {/* ── Top Floating Badges ── */}
      <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
        <span
          className={`inline-block rounded-full border px-3 py-1 text-[10px] font-bold tracking-wide backdrop-blur-md shadow-sm ${theme.tag}`}
        >
          {category}
        </span>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/10 px-2.5 py-0.5 text-[10px] font-semibold text-ink/80 backdrop-blur-md">
          {impact}
        </span>
      </div>

      {/* ── Image or Placeholder Visual ── */}
      {hasImage ? (
        <div className="relative h-full w-full">
          <Image
            src={image!}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImgError(true)}
          />
          {/* Subtle gradient vignette to blend with card and maintain contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E8F0F0] via-black/20 to-black/50" />
        </div>
      ) : (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {/* Subtle circuit/dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)`,
              backgroundSize: "18px 18px",
            }}
          />

          {/* Ambient colored glowing backdrop */}
          <div
            className="pointer-events-none absolute h-36 w-36 rounded-full opacity-35 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-60"
            style={{
              background: theme.glow.replace("0.15", "0.45"),
            }}
          />

          {/* Centered society emblem & placeholder cue */}
          <div className="relative z-10 flex flex-col items-center gap-2.5 pt-3">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 ${theme.iconBg}`}
            >
              <IconComp size={28} className={theme.iconColor} />
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted backdrop-blur-sm transition-colors group-hover:border-white/20 group-hover:text-muted">
              <Camera size={9} />
              <span>Official Media Slot</span>
            </div>
          </div>

          {/* Subtle corner tech decoration */}
          <div className="pointer-events-none absolute bottom-2 right-3 font-mono text-[9px] uppercase tracking-widest text-white/15">
            IEEE SOCIETY MEDIA
          </div>
        </div>
      )}
    </div>
  );
}

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
    tag: "bg-cuu-steel/15 text-cuu-steel border-cuu-steel/30",
    iconBg: "bg-cuu-steel/15 border-cuu-steel/30",
    iconColor: "text-cuu-steel",
    cardBorder: "hover:border-cuu-steel/40",
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
    <section id="communities" className="relative overflow-hidden bg-bg py-28 sm:py-36 border-t border-ieee/10">
      {/* Background glow ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 50%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Section Header ── */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-md bg-[#0D6E6E]/25 px-3 py-1 text-[12px] font-medium text-[#b8e0e0]">
              <span className="h-1 w-1 rounded-full bg-[#1A9090]" aria-hidden="true" />
              Open to every innovator &amp; enthusiast
            </span>
            <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Specialized communities to{" "}
              <em className="not-italic italic text-[#1A9090]">change the world.</em>
            </h2>
            <div className="mt-6 h-[3px] w-16 rounded-full bg-[#1A9090]" />
          </div>

          <div className="lg:col-span-5">
            <p className="text-base leading-[1.8] text-muted sm:text-lg">
              IEEE is not restricted to computer science. Advancing technology for humanity is an
              all-hands mission. Whether you are passionate about artificial intelligence, clean
              energy, healthcare devices, robotics, education reform, or humanitarian solutions
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
                    : "border border-white/10 bg-white/[0.03] text-ink/70 hover:border-white/20 hover:bg-ink/[0.08] hover:text-ink"
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
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ink/[0.08] bg-[#E8F0F0] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${theme.cardBorder}`}
              >
                {/* Ambient glow on hover */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
                  }}
                />

                {/* ── Top Half: Official Image or Themed Visual Placeholder ── */}
                <SocietyVisual
                  name={c.name}
                  category={c.category}
                  impact={c.impact}
                  image={c.image}
                  icon={IconComp}
                  theme={theme}
                />

                {/* ── Bottom Half: Society Details & Link ── */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    {/* Icon & Title */}
                    <div className="mb-3.5 flex items-center gap-3.5">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${theme.iconBg}`}
                      >
                        <IconComp size={20} className={theme.iconColor} />
                      </div>
                      <h3 className="font-serif text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#1A9090]">
                        {c.name}
                      </h3>
                    </div>

                    {/* Focus Subtitle */}
                    <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A9090]/90">
                      {c.focus}
                    </p>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-muted">{c.description}</p>
                  </div>

                  {/* Card Action Link */}
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="text-xs text-muted transition-colors group-hover:text-muted">
                      Global Society
                    </span>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-ink transition-colors group-hover:text-[#1A9090]"
                    >
                      <span>Visit Society</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Inspiring Multi-Disciplinary Callout Banner ── */}
        <div className="mt-14 relative overflow-hidden rounded-3xl border border-ieee/10 bg-gradient-to-br from-[#E0DDD5] via-[#E8F0F0] to-[#F7F4EF] p-8 sm:p-12 shadow-2xl">
          {/* Subtle warm glow orb */}
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #0D6E6E 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#0D6E6E]/25 px-3 py-1 text-[12px] font-medium text-[#b8e0e0] mb-4">
                <span className="h-1 w-1 rounded-full bg-[#1A9090]" aria-hidden="true" />
                No tech background required
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                You don’t need to be a coder to shape the future.
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
                Solving the world&apos;s toughest challenges requires multidisciplinary vision. Whether you study
                Business, Public Health, Law, Design, Education, or Engineering: modern innovation
                demands diverse minds. In IEEE Cavendish University Uganda, your perspective is needed
                to ensure technology truly serves humanity.
              </p>

              {/* Pill highlights */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-muted">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#1A9090]" />
                  Cross-Faculty Teams
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#1A9090]" />
                  Mentorship & Workshops
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#1A9090]" />
                  Global IEEE Network
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="font-serif text-3xl font-black text-ink">40+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted/70">Societies</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-serif text-3xl font-black text-ink">160+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted/70">Countries</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-serif text-3xl font-black text-[#E8F5F5]">100%</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted/70">Open to All</div>
                </div>
              </div>

              <a
                href={WHATSAPP_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0D6E6E] px-7 py-3.5 text-sm font-bold text-ink shadow-lg shadow-[#0D6E6E]/30 transition-all duration-300 hover:bg-[#1A9090] hover:scale-[1.02]"
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
