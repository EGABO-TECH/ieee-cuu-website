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
    <section id="event" className="relative overflow-hidden bg-[#09090B] py-28 sm:py-36">
      {/* Deep blue ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(ellipse at center, #1a56db 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse at center, #0ea5e9 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section kicker */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-[#1a56db]/40 bg-[#1a56db]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#60a5fa]">
            Upcoming · Flagship Event
          </span>
        </div>

        {/* Main card — split layout */}
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-3xl border border-white/[0.08] lg:grid-cols-2">

          {/* ── LEFT: Flyer showcase ── */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#060e1c] p-10 sm:p-14 lg:p-16">
            {/* Grid pattern overlay */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Flyer frame with tilt + glow */}
            <div className="group relative w-full max-w-[320px]">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#1a56db]/40 via-[#0ea5e9]/20 to-transparent opacity-60 blur-xl transition-all duration-500 group-hover:opacity-90 group-hover:blur-2xl" />

              {/* Flyer image */}
              <div className="relative -rotate-2 overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(26,86,219,0.35)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-[0_40px_100px_rgba(26,86,219,0.5)]">
                <Image
                  src="/images/IEEE-Flyer.png"
                  alt="IEEE Day 2026 Official Flyer"
                  width={480}
                  height={672}
                  className="w-full object-cover"
                  priority
                />
                {/* Subtle shine overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* LIVE badge */}
              <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1a56db] to-[#0ea5e9] shadow-lg shadow-[#1a56db]/40 ring-4 ring-[#09090B]">
                <span className="text-[9px] font-black uppercase tracking-wider text-white leading-tight text-center">
                  OPEN<br/>NOW
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Event details ── */}
          <div className="flex flex-col justify-between bg-[#0c0c10] p-10 sm:p-12 lg:p-14">
            {/* Date badge */}
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-[#1a56db]/10 px-4 py-2.5 ring-1 ring-[#1a56db]/25">
                <Calendar size={18} className="text-[#60a5fa]" />
                <div>
                  <div className="font-display text-lg font-extrabold leading-none text-white">6th October</div>
                  <div className="text-[11px] tracking-widest text-[#60a5fa] uppercase">2026</div>
                </div>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                IEEE Day 2026 —<br />
                <em className="not-italic italic text-[#60a5fa]">CUU Student Branch</em> Launch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A8A8B3]">
                Meet the Branch, learn what IEEE membership unlocks, and be part of the first
                cohort of students building this community from day one.
              </p>

              {/* Event meta */}
              <ul className="mt-6 space-y-3 text-sm text-[#A8A8B3]">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-[#60a5fa]" />
                  Cavendish University Uganda · Siyani Campus
                </li>
                <li className="flex items-center gap-3">
                  <Users size={16} className="shrink-0 text-[#60a5fa]" />
                  Open to all CUU students — free entry
                </li>
              </ul>

              {/* Activity pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    <Icon size={12} className="text-[#60a5fa]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Countdown + CTA */}
            <div className="mt-10 border-t border-white/[0.06] pt-8">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
                Counting down to IEEE Day
              </p>
              <Countdown targetISO={IEEE_DAY_TARGET_ISO} />

              <a
                href={IEEE_DAY_REGISTRATION_URL}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a56db] to-[#0ea5e9] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1a56db]/30 transition hover:-translate-y-0.5 hover:shadow-[#1a56db]/50"
              >
                Register Now
                <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="mt-6 text-center text-xs tracking-widest text-white/30 uppercase">
          IEEE Day 2026 — Together for a Brighter Future
        </p>
      </div>
    </section>
  );
}
