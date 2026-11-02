"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_INVITE_URL } from "@/lib/data";

const PERKS = [
  {
    title: "Instant Announcements",
    desc: "First access to hackathons, grants & project calls",
  },
  {
    title: "Active Tech Projects",
    desc: "Build squads for IEEEXtreme, robotics & web dev",
  },
  {
    title: "Peer Mentorship",
    desc: "Connect across IT, CS, Engineering & AI faculties",
  },
  {
    title: "Siyani Campus Hub",
    desc: "In-person meetups, workshops & collaborative labs",
  },
];

export function JoinBanner() {
  return (
    <section id="join" className="relative overflow-hidden px-4 pb-28 pt-8 sm:px-8 sm:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10] blur-3xl"
        style={{
          background: "radial-gradient(circle, #CADCEA 0%, #CADCEA 60%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#CADCEA] bg-white p-8 sm:p-14 lg:p-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#95BCD6]/60 to-transparent" />

          <h2 className="relative z-10 mx-auto max-w-3xl font-display text-3xl font-bold leading-[1.14] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Move from awareness <br className="hidden sm:inline" /> to <em className="not-italic text-[#2D4D76]">participation.</em>
          </h2>

          <p className="relative z-10 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Learn something. Build something. Connect with someone. The IEEE CUU community is where announcements, hackathons, mentorship, and breakthrough student opportunities land first.
          </p>

          <div className="relative z-10 mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="group rounded-2xl border border-[#CADCEA] bg-[#E6EFF6] p-4 transition-all duration-300 hover:border-[#95BCD6] hover:bg-[#CADCEA] hover:-translate-y-0.5"
              >
                <div className="mb-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#2D4D76]">01</div>
                <h3 className="text-sm font-bold text-[#2D4D76] group-hover:text-[#002855] transition-colors">
                  {perk.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#2D4D76]">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-[#2D4D76] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#002855] hover:-translate-y-0.5"
            >
              <span>Join the WhatsApp Group</span>
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#membership"
              className="group inline-flex items-center gap-1.5 border border-[#CADCEA] bg-white/80 px-5 py-3.5 text-xs font-semibold text-[#2D4D76] transition-all hover:border-[#95BCD6] hover:bg-[#E6EFF6]"
            >
              <span>Explore Membership Tiers</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
