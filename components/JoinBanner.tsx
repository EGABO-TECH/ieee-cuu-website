"use client";

import { 
  ArrowUpRight, 
  Calendar, 
  CheckCircle2, 
  Compass, 
  Flame, 
  Sparkles, 
  Users2, 
  Zap 
} from "lucide-react";
import { WHATSAPP_INVITE_URL } from "@/lib/data";

const PERKS = [
  {
    icon: Zap,
    title: "Instant Announcements",
    desc: "First access to hackathons, grants & project calls",
  },
  {
    icon: Flame,
    title: "Active Tech Projects",
    desc: "Build squads for IEEEXtreme, robotics & web dev",
  },
  {
    icon: Users2,
    title: "Peer Mentorship",
    desc: "Connect across IT, CS, Engineering & AI faculties",
  },
  {
    icon: Compass,
    title: "Siyani Campus Hub",
    desc: "In-person meetups, workshops & collaborative labs",
  },
];

export function JoinBanner() {
  return (
    <section id="join" className="relative overflow-hidden px-4 pb-28 pt-8 sm:px-8 sm:pb-36">
      {/* ── Subtle Ambient Background Lighting ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-3xl"
        style={{
          background: "radial-gradient(circle, #00629B 0%, #C8A96E 60%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Main High-Impact Card ── */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111827] p-8 sm:p-14 lg:p-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
          
          {/* Subtle top border accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A96E]/50 to-transparent" />

          {/* ── Live Community Status Badge ── */}
          <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase text-[#C8A96E]">
            Official Community Hub · Cavendish University Uganda
          </div>

          {/* ── Headline ── */}
          <h2 className="relative z-10 mx-auto mt-6 max-w-3xl font-serif text-3xl font-bold leading-[1.14] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Move from awareness{" "}
            <br className="hidden sm:inline" />
            to{" "}
            <em className="not-italic italic text-[#C8A96E]">participation.</em>
          </h2>

          {/* ── Subtitle ── */}
          <p className="relative z-10 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Learn something. Build something. Connect with someone. The IEEE CUU community 
            is where announcements, hackathons, mentorship, and breakthrough student opportunities 
            land first.
          </p>

          {/* ── 4-Point Value Grid ── */}
          <div className="relative z-10 mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#00629B]/40 hover:bg-[#00629B]/[0.04] hover:-translate-y-0.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#00629B]/30 bg-[#00629B]/10 text-[#38BDF8]">
                    <Icon size={16} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#94A3B8]">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ── CTAs Section ── */}
          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Primary: WhatsApp Join Button */}
            <a
              href={WHATSAPP_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:bg-[#20ba5a] hover:-translate-y-0.5"
            >
              {/* WhatsApp Official SVG Icon */}
              <svg
                className="h-4 w-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.21 8.21 0 0 1-1.26-4.48c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28z" />
              </svg>
              <span>Join the WhatsApp Group</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Secondary: Register for IEEE Day */}
            <a
              href="#event"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C8A96E]/50 hover:bg-[#C8A96E]/10 hover:text-[#C8A96E] hover:-translate-y-0.5"
            >
              <Calendar size={15} className="text-[#C8A96E]" />
              <span>Register for IEEE Day</span>
            </a>

            {/* Tertiary: Membership */}
            <a
              href="#membership"
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3.5 text-xs font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white hover:bg-white/[0.06]"
            >
              <Sparkles size={14} className="text-[#38BDF8]" />
              <span>Explore Membership Tiers</span>
            </a>
          </div>

          {/* ── Social Proof & Assurance Strip ── */}
          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#C8A96E] shrink-0" />
              <span>Open to all Cavendish Faculties & Year Groups</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#C8A96E] shrink-0" />
              <span>Free Community Access · No Prerequisite Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#C8A96E] shrink-0" />
              <span>Official Student Branch Channel</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
