"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, BadgeCheck, Camera, CheckCircle2, Sparkles, User } from "lucide-react";
import { programs } from "@/lib/data";

/* Cohesive colour tokens tailored to official logos */
const ACCENT = {
  cyan: {
    tag: "bg-[#FF9900]/10 text-[#FFB800] border border-[#FF9900]/30",
    glow: "rgba(255,153,0,0.12)",
    cardBorder: "hover:border-[#FF9900]/40",
    pill: "bg-white/[0.04] text-white/80 border border-white/[0.08]",
    cta: "bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold shadow-md",
    badgeCheck: "text-[#FFB800]",
    avatarBg: "rgba(255,153,0,0.1)",
    avatarBorder: "rgba(255,153,0,0.3)",
    logoBg: "bg-[#0b0f19]",
    logoBorder: "border-[#FF9900]/30",
    logoShadow: "shadow-lg",
    ambassadorBadgeBg: "bg-[#FF9900]/10",
    ambassadorBadgeIcon: "text-[#FFB800]",
    check: "text-[#FFB800]",
  },
  violet: {
    tag: "bg-[#8b5cf6]/10 text-[#c4b5fd] border border-[#8b5cf6]/30",
    glow: "rgba(139,92,246,0.12)",
    cardBorder: "hover:border-[#8b5cf6]/40",
    pill: "bg-white/[0.04] text-white/80 border border-white/[0.08]",
    cta: "bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold shadow-md",
    badgeCheck: "text-[#c4b5fd]",
    avatarBg: "rgba(139,92,246,0.1)",
    avatarBorder: "rgba(139,92,246,0.3)",
    logoBg: "bg-[#0b0f19]",
    logoBorder: "border-white/10",
    logoShadow: "shadow-lg",
    ambassadorBadgeBg: "bg-[#8b5cf6]/10",
    ambassadorBadgeIcon: "text-[#c4b5fd]",
    check: "text-[#c4b5fd]",
  },
  ember: {
    tag: "bg-[#C8A96E]/10 text-[#E6CA85] border border-[#C8A96E]/30",
    glow: "rgba(200,169,110,0.12)",
    cardBorder: "hover:border-[#C8A96E]/40",
    pill: "bg-white/[0.04] text-white/80 border border-white/[0.08]",
    cta: "bg-[#C8A96E] hover:bg-[#b89355] text-black font-bold shadow-md",
    badgeCheck: "text-[#E6CA85]",
    avatarBg: "rgba(200,169,110,0.1)",
    avatarBorder: "rgba(200,169,110,0.3)",
    logoBg: "bg-white",
    logoBorder: "border-[#C8A96E]/30",
    logoShadow: "shadow-lg",
    ambassadorBadgeBg: "bg-[#C8A96E]/10",
    ambassadorBadgeIcon: "text-[#C8A96E]",
    check: "text-[#E6CA85]",
  },
} as const;

/** Generate initials from a full name */
function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/** Ambassador avatar with photo support and stylish placeholder */
function AmbassadorAvatar({
  name,
  image,
  accent,
}: {
  name: string;
  image?: string;
  accent: {
    avatarBorder: string;
    avatarBg: string;
    badgeCheck: string;
  };
}) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image && image.length > 0 && !imgError);

  return (
    <div className="relative shrink-0">
      <div
        className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border shadow-inner transition-all duration-300 group-hover/amb:scale-105 group-hover/amb:shadow-md ${
          !hasImage ? "border-dashed" : ""
        }`}
        style={{
          borderColor: accent.avatarBorder,
          background: accent.avatarBg,
        }}
      >
        {hasImage ? (
          <Image
            src={image!}
            alt={name}
            fill
            sizes="48px"
            className="object-cover transition-transform duration-500 group-hover/amb:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center bg-black/20">
            {/* Ambient subtle user backdrop */}
            <User
              size={26}
              className="absolute -bottom-1 text-white/10 pointer-events-none"
            />
            <span className="relative z-10 font-serif text-sm font-black tracking-wider text-white drop-shadow-sm">
              {initials(name)}
            </span>
            {/* Camera badge indicating photo slot */}
            <span
              className="absolute bottom-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black/60 text-white/70 ring-1 ring-white/10"
              title="Ambassador Photo Slot"
            >
              <Camera size={8} />
            </span>
          </div>
        )}
      </div>

      {/* Verified check badge */}
      <div
        className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0c0d14] ring-1 ring-white/20 shadow"
        title="Verified CUU Campus Ambassador"
      >
        <BadgeCheck size={12} className={accent.badgeCheck} />
      </div>
    </div>
  );
}

export function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-[#09090B] py-28 sm:py-36">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse at center, #C8A96E 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Section header ── */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#C8A96E]">
              <Sparkles size={11} />
              Beyond the Branch
            </span>
            <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
              Ambassadorial programs{" "}
              <em className="not-italic italic text-[#C8A96E]">arriving at CUU.</em>
            </h2>
            <div className="mt-6 h-[3px] w-14 rounded-full bg-[#C56C47]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base leading-[1.8] text-[#A8A8B3] sm:text-lg">
              IEEE is one part of a vibrant student-tech ecosystem. These are globally recognised
              programs arriving at Cavendish University Uganda — championed on campus by our own
              appointed student ambassadors. Application windows, workshops, and info sessions
              will be shared directly through the Branch.
            </p>
          </div>
        </div>

        {/* ── Program cards ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {programs.map((p) => {
            const s = ACCENT[p.accent];
            return (
              <div
                key={p.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0d14] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] ${s.cardBorder}`}
              >
                {/* ── Logo Showcase Stage ── */}
                <div className="relative flex h-52 sm:h-56 items-center justify-center overflow-hidden bg-[#08090e]">
                  {/* Accent ambient glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-80"
                    style={{
                      background: `radial-gradient(circle at center, ${s.glow} 0%, transparent 72%)`,
                    }}
                  />

                  {/* Dot matrix grid */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* Bottom fade into card body */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c0d14] to-transparent" />

                  {/* Top Category Badge */}
                  <span
                    className={`absolute left-4 top-4 z-10 inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-wide backdrop-blur-md ${s.tag}`}
                  >
                    {p.tag}
                  </span>

                  {/* Top Right Status Badge */}
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white/80 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Arriving at CUU
                  </span>

                  {/* Centered Logo Emblem */}
                  <div
                    className={`relative z-10 flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-2xl border p-3.5 transition-all duration-500 group-hover:scale-105 ${s.logoBg} ${s.logoBorder} ${s.logoShadow}`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={p.image}
                        alt={`${p.title} official logo`}
                        fill
                        className="object-contain"
                        sizes="128px"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-1 flex-col p-7">
                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white">{p.title}</h3>

                  {/* Body */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#A8A8B3]">{p.body}</p>

                  {/* Perks */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.perks.map((perk) => (
                      <span
                        key={perk}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${s.pill}`}
                      >
                        <CheckCircle2 size={12} className={s.check} />
                        {perk}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-white/[0.08]" />

                  {/* ── Prominent Ambassador Spotlight ── */}
                  <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-4">
                    {/* Header with verified badge */}
                    <div className="mb-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`flex h-6 w-6 items-center justify-center rounded-lg ${s.ambassadorBadgeBg}`}>
                          <Award size={13} className={s.ambassadorBadgeIcon} />
                        </div>
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
                          Campus Ambassador{p.ambassadors.length > 1 ? "s" : ""}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        CUU Lead
                      </span>
                    </div>

                    {/* Ambassadors List */}
                    <div className="flex flex-col gap-2.5">
                      {p.ambassadors.map((amb) => (
                        <div
                          key={amb.name}
                          className="group/amb relative flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                        >
                          {/* Ambassador Avatar (Photo with fallback placeholder) */}
                          <AmbassadorAvatar
                            name={amb.name}
                            image={amb.image}
                            accent={s}
                          />

                          {/* Ambassador Name & Role */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1.5">
                              <h4 className="text-[14px] font-bold tracking-tight text-white group-hover/amb:text-white transition-colors truncate">
                                {amb.name}
                              </h4>
                              {!Boolean(amb.image) && (
                                <span
                                  className="shrink-0 inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[9px] font-medium text-white/40 group-hover/amb:border-white/20 group-hover/amb:text-white/70 transition-colors"
                                  title="Ambassador portrait placeholder slot"
                                >
                                  <Camera size={9} />
                                  <span>Photo</span>
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-xs font-semibold text-[#C8A96E] truncate">
                              {amb.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Interactive CTA Button ── */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${s.cta}`}
                  >
                    <span>Explore Program</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Footer notice ── */}
        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-[#C56C47]/20 bg-[#C56C47]/5 px-6 py-5">
          <Sparkles size={18} className="mt-0.5 shrink-0 text-[#C8A96E]" />
          <p className="text-sm leading-relaxed text-[#A8A8B3]">
            <span className="font-semibold text-white">More programs on the horizon.</span>{" "}
            As new ambassador and campus initiatives open applications — cloud, AI, open source, or
            mentorship — the Branch will announce details, prerequisite workshops, and nomination links
            first in the official CUU community channels.
          </p>
        </div>
      </div>
    </section>
  );
}

