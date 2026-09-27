import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  ArrowUpRight,
  Zap,
  Sparkles,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ArrowRight
} from "lucide-react";
import { IEEE_DAY_REGISTRATION_DEADLINE_ISO, IEEE_DAY_TARGET_ISO, IEEEXTREME_DEADLINE_ISO, WHATSAPP_INVITE_URL } from "@/lib/data";
import { Countdown } from "@/components/ui/Countdown";
import { DeadlineRegistrationStatus } from "@/components/DeadlineRegistration";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Events | IEEE Student Branch Cavendish University Uganda",
  description:
    "Explore upcoming events, hackathons, and celebrations hosted by the IEEE Student Branch at Cavendish University Uganda.",
};

const UPCOMING_WORKSHOPS = [
  {
    category: "Cloud & AI",
    title: "AWS Cloud Foundations & AI Builder Workshop",
    lead: "Niwasiima Ashelycole (AWS Student Builder)",
    date: "November 2026",
    desc: "Hands-on cloud architecture workshop introducing AWS services, generous student credits, and AI workflow deployment.",
    tag: "Workshop",
  },
  {
    category: "Python & Open Source",
    title: "Python for Data & Open-Source Sprints",
    lead: "Egabo Aaron & Twikirize Achilles (Black Python Devs)",
    date: "November 2026",
    desc: "Collaborative open-source coding session focusing on Git workflows, package contribution, and modern Python.",
    tag: "Code Sprint",
  },
  {
    category: "Career & Leadership",
    title: "IEEE CS Micro-Mentoring & Portfolio Review",
    lead: "Executive Committee & Guest Mentors",
    date: "December 2026",
    desc: "1-on-1 resume reviews, engineering portfolio audits, and career guidance sessions with industry practitioners.",
    tag: "Mentorship",
  },
];

export default function EventsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[1100px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 50%, transparent 75%)" }}
        />

        {/* ── HERO BANNER ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
          <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Branch Events & Hackathons
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted">
            Explore upcoming celebrations, global programming contests, and hands-on technical workshops
            hosted by the IEEE Student Branch at Cavendish University Uganda.
          </p>
        </section>

        {/* ── FLAGSHIP EVENTS SECTION (TWO BIG CARDS) ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Flagship Events
            </h2>
            <span className="text-xs text-muted">
              Click card or button to open details in a new tab
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* ── CARD 1: IEEE DAY 2026 ── */}
            <div className="group flex flex-col justify-between rounded-3xl border border-ieee/10 bg-white overflow-hidden transition-all duration-300 hover:border-[#1A9090]/50 hover:shadow-2xl">
              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <DeadlineRegistrationStatus
                    deadlineISO={IEEE_DAY_REGISTRATION_DEADLINE_ISO}
                    openLabel="Upcoming · Launch"
                    closedLabel="Registration closed"
                    openClassName="inline-block rounded-full border border-[#1A9090]/40 bg-[#0D6E6E]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700"
                    closedClassName="inline-block rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600"
                  />
                  <span className="text-xs text-muted">6th October 2026</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative h-44 w-32 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-lg">
                    <Image
                      src="/images/IEEE-Flyer.png"
                      alt="IEEE Day Flyer Preview"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-ieee transition-colors">
                      IEEE Day 2026: Branch Launch
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Official inaugural celebration of the IEEE CUU Student Branch. Keynotes, workshops, cake cutting, and community onboarding.
                    </p>
                    <div className="mt-4 flex flex-col gap-1 text-xs leading-5 text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="shrink-0 text-[#0D6E6E]" />
                        <span>Siyani Campus, Kampala</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="shrink-0 text-[#0D6E6E]" />
                        <span>Free entry for all CUU students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="shrink-0 text-[#0D6E6E]" />
                        <span>12:00 PM to 06:00 PM EAT</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Countdown to IEEE Day
                  </p>
                  <Countdown targetISO={IEEE_DAY_TARGET_ISO} />
                </div>
              </div>

              <div className="border-t border-white/[0.08] bg-[#0c101a] p-6 flex items-center justify-between">
                <a
                  href="/events/ieee-day"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-2.5 text-xs font-bold text-ink transition hover:bg-[#1A9090]"
                >
                  View Event Page
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-[11px] text-slate-400">Opens in new window ↗</span>
              </div>
            </div>

            {/* ── CARD 2: IEEEXTREME 20.0 ── */}
            <div className="group flex flex-col justify-between rounded-3xl border border-ieee/10 bg-white overflow-hidden transition-all duration-300 hover:border-[#1A9090]/50 hover:shadow-2xl">
              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <DeadlineRegistrationStatus
                    deadlineISO={IEEEXTREME_DEADLINE_ISO}
                    openLabel="Live Registration"
                    closedLabel="Registration ended"
                    openClassName="inline-block rounded-full border border-[#1A9090]/40 bg-[#0D6E6E]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700"
                    closedClassName="inline-block rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600"
                  />
                  <span className="text-xs text-muted">17th October 2026</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative h-44 w-32 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-lg">
                    <Image
                      src="/images/IEEEXtreme-Flyer.jpeg"
                      alt="IEEEXtreme Flyer Preview"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-ieee transition-colors">
                      IEEEXtreme 20.0 Hackathon
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      A global 24-hour virtual programming challenge for teams of 2 to 3 IEEE Student Members solving algorithms under real-time pressure.
                    </p>
                    <div className="mt-4 flex flex-col gap-1 text-xs leading-5 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="shrink-0 text-[#0D6E6E]" />
                        <span>Deadline: 17 Oct 2026 · 11:59 PM GMT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy size={14} className="shrink-0 text-[#0D6E6E]" />
                        <span>Global and Regional Leaderboards</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Registration Deadline Countdown
                  </p>
                  <Countdown targetISO={IEEEXTREME_DEADLINE_ISO} showSeconds={false} />
                </div>
              </div>

              <div className="border-t border-white/[0.08] bg-[#0c101a] p-6 flex items-center justify-between">
                <a
                  href="/events/ieeextreme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-2.5 text-xs font-bold text-ink transition hover:bg-[#1A9090]"
                >
                  View Event Page
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-[11px] text-slate-400">Opens in new window ↗</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
