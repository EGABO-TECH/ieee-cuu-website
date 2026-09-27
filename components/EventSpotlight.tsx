"use client";

import Image from "next/image";
import { Calendar, MapPin, Users, Lightbulb, Settings, Network, Rocket, ArrowUpRight } from "lucide-react";
import { IEEE_DAY_REGISTRATION_URL, IEEE_DAY_TARGET_ISO } from "@/lib/data";
import { Countdown } from "./ui/Countdown";

const HIGHLIGHTS = [
  { icon: Lightbulb, label: "Tech Talks" },
  { icon: Settings, label: "Workshops" },
  { icon: Network, label: "Networking" },
  { icon: Rocket, label: "Innovation Showcase" },
];

export function EventSpotlight() {
  return (
    <section id="event" className="relative overflow-hidden bg-bg py-28 sm:py-36">
      {/* Deep blue ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse at center, #9abec1 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse at center, #dfeff0 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section kicker */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dfeff0] px-3 py-1 text-[12px] font-medium text-[#2f5f68]">
            <span className="h-1 w-1 rounded-full bg-[#2f5f68]/50" aria-hidden="true" />
            Upcoming flagship event
          </span>
        </div>

        {/* Main card, split layout */}
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-3xl border border-ink/[0.08] lg:grid-cols-2 bg-white">

          {/* ── LEFT: Flyer showcase ── */}
          <div className="relative flex items-center justify-center bg-[#0d1424] p-8 sm:p-12 lg:p-14 border-b border-ink/[0.08] lg:border-b-0 lg:border-r">
            {/* Clean Flyer frame */}
            <div className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/IEEE-Flyer.png"
                alt="IEEE Day 2026 Official Flyer"
                width={480}
                height={672}
                className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

          {/* ── RIGHT: Event details ── */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
            {/* Date badge */}
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-xl border border-[#9dbdc1] bg-[#dfeff0] px-4 py-2.5">
                <Calendar size={18} className="text-[#234a52]" />
                <div>
                  <div className="font-display text-lg font-bold leading-none text-[#234a52]">6th October</div>
                  <div className="text-[11px] tracking-widest text-[#234a52] uppercase font-semibold">2026</div>
                </div>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
                IEEE Day 2026<br />
                <em className="not-italic italic text-[#2f5f68]">CUU Student Branch</em> Launch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Meet the Branch, learn what IEEE membership unlocks, and be part of the first
                cohort of students building this community from day one.
              </p>

              {/* Event meta */}
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex items-center gap-3 text-slate-700">
                  <MapPin size={16} className="shrink-0 text-[#2f5f68]" />
                  Cavendish University Uganda · Siyani Campus
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Users size={16} className="shrink-0 text-[#2f5f68]" />
                  Open to all CUU students, free entry
                </li>
              </ul>

              {/* Activity pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#9dbdc1] bg-[#edf7f8] px-3.5 py-1.5 text-xs font-medium text-[#244b52]"
                  >
                    <Icon size={12} className="text-[#2f5f68]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Countdown + CTA */}
            <div className="mt-10 border-t border-ink/[0.08] pt-8">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#234a52]">
                Counting down to IEEE Day
              </p>
              <Countdown targetISO={IEEE_DAY_TARGET_ISO} />

              <a
                href={IEEE_DAY_REGISTRATION_URL}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#2f5f68] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2f5f68]/25 transition hover:bg-[#234a52] hover:-translate-y-0.5"
              >
                Register Now
                <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="mt-6 text-center text-xs tracking-widest text-white/30 uppercase">
          IEEE Day 2026: Together for a Brighter Future
        </p>
      </div>
    </section>
  );
}
