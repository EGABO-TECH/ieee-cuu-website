"use client";

import { membership } from "@/lib/data";
import {
  GraduationCap,
  Award,
  Users,
  ShieldCheck,
  Crown,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TIER_ICONS: Record<string, LucideIcon> = {
  "Student Member": GraduationCap,
  "Graduate Student Member": Award,
  "Associate Member": Users,
  "Member": ShieldCheck,
  "Senior Member": Crown,
};

export function Membership() {
  // Split into prominent Student grades and Professional grades
  const studentTiers = membership.filter(
    (m) => m.tier === "Student Member" || m.tier === "Graduate Student Member"
  );
  const professionalTiers = membership.filter(
    (m) => m.tier !== "Student Member" && m.tier !== "Graduate Student Member"
  );

  return (
    <section id="membership" className="relative overflow-hidden bg-[#09090B] py-28 sm:py-36 text-white">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse at center, #C8A96E 0%, #7C5CFF 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Section Header ── */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#C8A96E]">
              <Sparkles size={11} />
              IEEE Global Membership
            </span>
            <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find the category that{" "}
              <em className="not-italic italic text-[#C8A96E]">fits you.</em>
            </h2>
            <div className="mt-6 h-[3px] w-16 rounded-full bg-[#C56C47]" />
          </div>

          <div className="lg:col-span-5">
            <p className="text-base leading-[1.8] text-[#A8A8B3] sm:text-lg">
              Membership is individual. As a Cavendish University Uganda student or scholar, you qualify for
              heavily subsidised student rates, local Branch voting rights, global research access, and entry into
              prestigious competitions like IEEEXtreme.
            </p>
          </div>
        </div>

        {/* ── Primary Spotlight: Student Grades (Undergrad & Postgrad) ── */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {studentTiers.map((m) => {
            const IconComp = TIER_ICONS[m.tier] || GraduationCap;
            const isHero = m.highlight;

            return (
              <div
                key={m.tier}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 ${
                  isHero
                    ? "border-[#C8A96E]/50 bg-gradient-to-b from-[#C8A96E]/[0.09] via-white/[0.03] to-[#0c0d14] shadow-[0_0_50px_rgba(200,169,110,0.12)] hover:border-[#C8A96E]/80 hover:shadow-[0_0_70px_rgba(200,169,110,0.22)]"
                    : "border-white/[0.12] bg-gradient-to-b from-violet-500/[0.08] via-white/[0.03] to-[#0c0d14] hover:border-violet-400/50 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]"
                }`}
              >
                {/* Decorative background glow */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60 ${
                    isHero ? "bg-[#C8A96E]" : "bg-violet-600"
                  }`}
                />

                <div>
                  {/* Top Badge & Tier Category */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${
                        isHero
                          ? "border-[#C8A96E]/40 bg-[#C8A96E]/15 text-[#E6CA85]"
                          : "border-violet-400/40 bg-violet-500/15 text-violet-300"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isHero ? "bg-[#E6CA85] animate-pulse" : "bg-violet-300"
                        }`}
                      />
                      {m.badge}
                    </span>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                      Academic Grade
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-inner transition-transform duration-300 group-hover:scale-105 ${
                        isHero
                          ? "border-[#C8A96E]/40 bg-[#C8A96E]/20 text-[#E6CA85]"
                          : "border-violet-400/40 bg-violet-500/20 text-violet-300"
                      }`}
                    >
                      <IconComp size={28} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-[#C8A96E] transition-colors">
                        {m.tier}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-[#A8A8B3]">
                        {isHero ? "Undergraduate / Diploma" : "Master's & PhD Candidates"}
                      </p>
                    </div>
                  </div>

                  {/* Who it's for description */}
                  <p className="mb-6 text-sm leading-relaxed text-[#D1D1DB]">{m.who}</p>

                  {/* Perks list */}
                  <div className="mb-8 space-y-2.5 border-t border-white/[0.08] pt-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/50 block mb-3">
                      Key Branch & Global Perks
                    </span>
                    {m.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-2.5 text-xs font-medium text-white/85">
                        <CheckCircle2
                          size={14}
                          className={`shrink-0 ${isHero ? "text-[#C8A96E]" : "text-violet-400"}`}
                        />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    isHero
                      ? "bg-gradient-to-r from-[#C8A96E] to-[#B38D48] text-black shadow-[#C8A96E]/25 hover:from-[#DFC27D] hover:to-[#C8A96E]"
                      : "bg-white/[0.08] text-white border border-white/20 hover:bg-white/[0.14] hover:border-white/30"
                  }`}
                >
                  <span>{m.cta}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            );
          })}
        </div>

        {/* ── Secondary Grid: Professional & General Grades ── */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {professionalTiers.map((m) => {
            const IconComp = TIER_ICONS[m.tier] || Users;

            return (
              <div
                key={m.tier}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-white/70">
                      {m.badge}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                      <IconComp size={18} />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#C8A96E] transition-colors mb-2">
                    {m.tier}
                  </h4>

                  {/* Who it's for */}
                  <p className="text-xs leading-relaxed text-[#A8A8B3] mb-4">{m.who}</p>

                  {/* Quick perks pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {m.perks.map((p) => (
                      <span
                        key={p}
                        className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium text-white/60"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/75 hover:text-[#C8A96E] transition-colors pt-3 border-t border-white/[0.06]"
                >
                  <span>{m.cta}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            );
          })}
        </div>

        {/* ── Crucial CUU Branch Affiliation Reminder ── */}
        <div className="relative overflow-hidden rounded-2xl border border-[#C8A96E]/30 bg-gradient-to-r from-[#C8A96E]/10 via-[#0c0d14] to-transparent p-6 sm:p-7 shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C8A96E]/40 bg-[#C8A96E]/15 text-[#E6CA85]">
                <ShieldAlert size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight text-white sm:text-base">
                  Crucial Student Branch Affiliation: Cavendish University Uganda
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-[#A8A8B3] leading-relaxed max-w-3xl">
                  Fees, eligibility, and discounts can change yearly. When applying or renewing on IEEE.org,
                  always designate <strong className="text-white">Cavendish University Uganda</strong> as your
                  Student Branch to unlock branch workshop access, leadership elections, and local student recognition.
                </p>
              </div>
            </div>

            <a
              href="https://students.ieee.org/membership/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full border border-[#C8A96E]/50 bg-[#C8A96E]/20 px-5 py-2.5 text-xs font-bold text-[#E6CA85] transition-all duration-300 hover:bg-[#C8A96E] hover:text-black hover:shadow-lg hover:shadow-[#C8A96E]/20"
            >
              <span>Confirm on students.ieee.org</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
