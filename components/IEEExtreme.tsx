"use client";

import Image from "next/image";
import { Clock, Users, Trophy, Code2, ArrowUpRight, Zap } from "lucide-react";
import { IEEEXTREME_DEADLINE_ISO } from "@/lib/data";
import { Countdown } from "./ui/Countdown";

const FACTS = [
  { icon: Users, label: "Teams of 2–3" },
  { icon: Clock, label: "24 hours" },
  { icon: Code2, label: "Algorithmic" },
  { icon: Trophy, label: "Global Ranking" },
];

export function IEEExtreme() {
  return (
    <section id="xtreme" className="relative overflow-hidden bg-[#09090B] pb-28 pt-0 sm:pb-36">
      {/* Orange ambient glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(ellipse at center, #ea580c 0%, transparent 70%)" }}
      />
      {/* Deep navy glow bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(ellipse at center, #1d4ed8 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section kicker */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-[#ea580c]/40 bg-[#ea580c]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#fb923c]">
            Global Programming Challenge
          </span>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-3xl border border-white/[0.08] lg:grid-cols-2">

          {/* ── LEFT: Event details ── */}
          <div className="flex flex-col justify-between bg-[#0c0d10] p-10 sm:p-12 lg:p-14 lg:order-1">
            {/* Live pill */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ea580c]/15 px-4 py-1.5 ring-1 ring-[#ea580c]/30">
                <Zap size={13} className="text-[#fb923c]" fill="currentColor" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#fb923c]">
                  Registration is Live
                </span>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                IEEEXtreme 20.0 —{" "}
                <em className="not-italic italic text-[#fb923c]">Team Registration</em>{" "}
                is Open.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A8A8B3]">
                A 24-hour, global programming challenge for teams of IEEE Student Members.
                Algorithmic problem solving, teamwork and coding under real-time pressure.
                Get your team of two or three and register now.
              </p>

              {/* Fact pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {FACTS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    <Icon size={12} className="text-[#fb923c]" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Deadline chip */}
              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-[#ea580c]/30 bg-[#ea580c]/10 px-5 py-3">
                <Clock size={17} className="text-[#fb923c]" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#fb923c]">Deadline</div>
                  <div className="text-sm font-semibold text-white">17 October 2026 · 11:59 PM GMT</div>
                </div>
              </div>
            </div>

            {/* Countdown + CTA */}
            <div className="mt-10 border-t border-white/[0.06] pt-8">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fb923c]">
                Time remaining to register
              </p>
              <Countdown targetISO={IEEEXTREME_DEADLINE_ISO} showSeconds={false} />

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://xtreme.vtools.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ea580c] to-[#f97316] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ea580c]/30 transition hover:-translate-y-0.5 hover:shadow-[#ea580c]/50"
                >
                  Register your team
                  <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://ieeextreme.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Flyer showcase ── */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-[#0d1117] via-[#0f1b2d] to-[#070b12] p-10 sm:p-14 lg:order-2 lg:p-16">
            {/* Subtle dot grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Flyer frame */}
            <div className="group relative w-full max-w-[360px]">
              {/* Outer orange glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#ea580c]/35 via-[#f97316]/15 to-transparent opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-80 group-hover:blur-3xl" />

              {/* Flyer image — slight positive tilt */}
              <div className="relative rotate-2 overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(234,88,12,0.30)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-[0_40px_100px_rgba(234,88,12,0.45)]">
                <Image
                  src="/images/IEEEXtreme-Flyer.jpeg"
                  alt="IEEEXtreme 20.0 Team Registration Flyer"
                  width={480}
                  height={480}
                  className="w-full object-cover"
                />
                {/* Shine on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* "LIVE" badge */}
              <div className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] shadow-lg shadow-[#ea580c]/40 ring-4 ring-[#09090B]">
                <span className="text-[9px] font-black uppercase tracking-wider text-white leading-tight text-center">
                  LIVE<br />NOW
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="mt-6 text-center text-xs tracking-widest text-white/30 uppercase">
          IEEEXtreme 20.0 — @IEEEXtremeOfficial
        </p>
      </div>
    </section>
  );
}
