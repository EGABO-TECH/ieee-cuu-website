"use client";

import { pillars } from "@/lib/data";
import { Cpu, BookOpenText, Users2, Globe2, ArrowUpRight } from "lucide-react";

const ICONS = { cyan: Cpu, violet: BookOpenText, ember: Users2, mint: Globe2 } as const;

const PILLAR_STYLES = {
  cyan: {
    icon: "bg-[#0ea5e9]/10 text-[#38bdf8]",
    border: "hover:border-[#0ea5e9]/30",
    accent: "#38bdf8",
  },
  violet: {
    icon: "bg-[#8b5cf6]/10 text-[#a78bfa]",
    border: "hover:border-[#8b5cf6]/30",
    accent: "#a78bfa",
  },
  ember: {
    icon: "bg-[#f97316]/10 text-[#fb923c]",
    border: "hover:border-[#f97316]/30",
    accent: "#fb923c",
  },
  mint: {
    icon: "bg-[#10b981]/10 text-[#34d399]",
    border: "hover:border-[#10b981]/30",
    accent: "#34d399",
  },
} as const;

export function WhatIsIEEE() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#09090B] py-28 sm:py-36">
      {/* Subtle radial ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse at center, #C8A96E 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Editorial Header ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Large Serif Headline */}
          <div className="flex flex-col justify-center">
            {/* Kicker */}
            <span className="mb-6 inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#C8A96E]">
              What Is IEEE
            </span>

            {/* Headline — bold serif with amber italic phrase inline */}
            <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Built on the belief that{" "}
              <em className="not-italic font-bold italic text-[#C8A96E]">
                technical excellence
              </em>{" "}
              is your greatest asset.
            </h2>

            {/* Decorative rule */}
            <div className="mt-7 h-[3px] w-14 rounded-full bg-[#C56C47]" />
          </div>

          {/* Right: Body Paragraphs */}
          <div className="flex flex-col justify-center gap-6 text-[#A8A8B3] lg:pt-6">
            <p className="text-base leading-[1.8] sm:text-lg">
              <span className="font-semibold uppercase tracking-wide text-white">
                IEEE
              </span>{" "}
              — the Institute of Electrical and Electronics Engineers — is the
              world&apos;s largest technical professional organization, dedicated to
              advancing technology for the benefit of humanity. With over 400,000
              members in 160+ countries, it connects students, engineers,
              researchers and computing professionals in a global community.
            </p>
            <p className="text-base leading-[1.8] sm:text-lg">
              At Cavendish University Uganda, our IEEE Student Branch gives you
              direct access to this worldwide network — offering hands-on
              projects, IEEE Xplore research access, certifications, leadership
              roles and a pathway from curious newcomer to globally recognized
              professional.
            </p>

            <a
              href="#branch"
              className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#C8A96E]/50 hover:bg-[#C8A96E]/10 hover:text-[#C8A96E]"
            >
              Explore the Branch
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-24 border-t border-white/[0.06]" />

        {/* ── Four Pillars Grid ── */}
        <div className="mt-16">
          <div className="mb-10 flex flex-col gap-1">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C8A96E]">
              Why It Matters
            </span>
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Four dimensions of growth
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => {
              const Icon = ICONS[p.accent];
              const styles = PILLAR_STYLES[p.accent];
              return (
                <div
                  key={p.title}
                  className={`group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] ${styles.border}`}
                >
                  {/* Ambient top glow strip */}
                  <div
                    className="absolute inset-x-0 top-0 h-[1px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${styles.accent}60, transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h4 className="mb-3 font-serif text-base font-bold leading-snug text-white">
                    {p.title}
                  </h4>

                  {/* Body */}
                  <p className="text-sm leading-relaxed text-[#A8A8B3]">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
