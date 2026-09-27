"use client";

import Image from "next/image";
import { Clock, Users, Trophy, Code2, ArrowUpRight, Zap } from "lucide-react";
import { IEEEXTREME_DEADLINE_ISO } from "@/lib/data";
import { Countdown } from "./ui/Countdown";
import { DeadlineRegistrationAction, DeadlineRegistrationStatus } from "./DeadlineRegistration";

const FACTS = [
  { icon: Users, label: "Teams of 2 to 3" },
  { icon: Clock, label: "24 hours" },
  { icon: Code2, label: "Algorithmic" },
  { icon: Trophy, label: "Global Ranking" },
];

export function IEEExtreme() {
  return (
    <section id="xtreme" className="relative overflow-hidden bg-bg pb-28 pt-0 sm:pb-36">
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse at center, #9abec1 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section kicker */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dfeff0] px-3 py-1 text-[12px] font-medium text-[#2f5f68]">
            <span className="h-1 w-1 rounded-full bg-[#2f5f68]/50" aria-hidden="true" />
            Global programming challenge
          </span>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-3xl border border-ink/[0.08] bg-white lg:grid-cols-2">

          {/* ── RIGHT: Flyer showcase (shown first on mobile) ── */}
          <div className="order-1 flex items-center justify-center bg-[#0d1424] p-8 sm:p-12 lg:order-2 lg:border-l lg:border-ink/[0.08] lg:p-14">
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

          {/* ── LEFT: Event details ── */}
          <div className="order-2 flex flex-col justify-between p-8 sm:p-12 lg:order-1 lg:p-14">
            {/* Live pill */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9dbdc1] bg-[#dfeff0] px-4 py-1.5">
                <Zap size={13} className="text-[#234a52]" fill="currentColor" />
                <DeadlineRegistrationStatus
                  deadlineISO={IEEEXTREME_DEADLINE_ISO}
                  openLabel="Registration is Live"
                  closedLabel="Registration ended"
                  openClassName="text-xs font-bold uppercase tracking-widest text-[#234a52]"
                  closedClassName="text-xs font-bold uppercase tracking-widest text-slate-600"
                />
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
                IEEEXtreme 20.0{" "}
                <em className="not-italic italic text-[#2f5f68]">Team Registration</em>{" "}
                <DeadlineRegistrationStatus
                  deadlineISO={IEEEXTREME_DEADLINE_ISO}
                  openLabel="is Open."
                  closedLabel="has ended."
                  openClassName="text-ink"
                  closedClassName="text-slate-600"
                />
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Teams of IEEE Student Members take on a 24-hour global programming challenge,
                solving algorithmic problems collaboratively under real-time pressure.
              </p>

              {/* Fact pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {FACTS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#9dbdc1] bg-[#edf7f8] px-3.5 py-1.5 text-xs font-medium text-[#244b52]"
                  >
                    <Icon size={12} className="text-[#2f5f68]" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Deadline chip */}
              <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-[#9dbdc1] bg-[#edf7f8] px-5 py-3">
                <Clock size={17} className="text-[#2f5f68]" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#234a52]">Deadline</div>
                  <div className="text-sm font-semibold text-[#234a52]">17 October 2026 · 11:59 PM GMT</div>
                </div>
              </div>
            </div>

            {/* Countdown + CTA */}
            <div className="mt-10 border-t border-ink/[0.08] pt-8">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#234a52]">
                Time remaining to register
              </p>
              <Countdown targetISO={IEEEXTREME_DEADLINE_ISO} showSeconds={false} />

              <div className="mt-7 flex flex-wrap gap-3">
                <DeadlineRegistrationAction
                  deadlineISO={IEEEXTREME_DEADLINE_ISO}
                  href="https://xtreme.vtools.ieee.org"
                  closedLabel="Registration ended"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#2f5f68] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2f5f68]/25 transition hover:bg-[#234a52] hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register your team
                  <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </DeadlineRegistrationAction>
                <a
                  href="https://ieeextreme.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-ink/80 transition hover:border-white/30 hover:text-ink"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom tagline */}
        <p className="mt-6 text-center text-xs tracking-widest text-white/30 uppercase">
          IEEEXtreme 20.0: Official Global Student Hackathon
        </p>
      </div>
    </section>
  );
}
