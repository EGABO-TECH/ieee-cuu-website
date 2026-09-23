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
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse at center, #00629B 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section kicker */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase text-[#C8A96E]">
            Global Programming Challenge
          </span>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-3xl border border-white/[0.08] lg:grid-cols-2 bg-[#111827]">

          {/* ── LEFT: Event details ── */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14 lg:order-1">
            {/* Live pill */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00629B]/30 bg-[#00629B]/10 px-4 py-1.5">
                <Zap size={13} className="text-[#38BDF8]" fill="currentColor" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                  Registration is Live
                </span>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                IEEEXtreme 20.0 —{" "}
                <em className="not-italic italic text-[#C8A96E]">Team Registration</em>{" "}
                is Open.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
                A 24-hour, global programming challenge for teams of IEEE Student Members.
                Algorithmic problem solving, teamwork and coding under real-time pressure.
                Get your team of two or three and register now.
              </p>

              {/* Fact pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {FACTS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80"
                  >
                    <Icon size={12} className="text-[#38BDF8]" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Deadline chip */}
              <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3">
                <Clock size={17} className="text-[#C8A96E]" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#C8A96E]">Deadline</div>
                  <div className="text-sm font-semibold text-white">17 October 2026 · 11:59 PM GMT</div>
                </div>
              </div>
            </div>

            {/* Countdown + CTA */}
            <div className="mt-10 border-t border-white/[0.08] pt-8">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
                Time remaining to register
              </p>
              <Countdown targetISO={IEEEXTREME_DEADLINE_ISO} showSeconds={false} />

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://xtreme.vtools.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#00629B] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00629B]/25 transition hover:bg-[#004f7d] hover:-translate-y-0.5"
                >
                  Register your team
                  <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://ieeextreme.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Flyer showcase ── */}
          <div className="relative flex items-center justify-center bg-[#0d1424] p-8 sm:p-12 lg:p-14 lg:order-2 border-t border-white/[0.08] lg:border-t-0 lg:border-l">
            {/* Clean Flyer frame */}
            <div className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/IEEEXtreme-Flyer.jpeg"
                alt="IEEEXtreme 20.0 Team Registration Flyer"
                width={480}
                height={480}
                className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="mt-6 text-center text-xs tracking-widest text-white/30 uppercase">
          IEEEXtreme 20.0 — Official Global Student Hackathon
        </p>
      </div>
    </section>
  );
}
