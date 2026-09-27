import type { Metadata } from "next";
import Link from "next/link";
import { Users, ShieldCheck, HeartHandshake, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { Team } from "@/components/Team";
import { WHATSAPP_INVITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Branch Leadership Team | IEEE Student Branch Cavendish University Uganda",
  description:
    "Meet the executive committee, technical coordinators, and outreach mobilizers leading the IEEE Student Branch at Cavendish University Uganda.",
};

const PILLARS_OF_LEADERSHIP = [
  {
    icon: ShieldCheck,
    title: "Transparent Governance",
    desc: "All branch meetings, budgets, and operational decisions adhere to official IEEE Region 8 Student Branch reporting frameworks.",
  },
  {
    icon: Users,
    title: "Student-Led, Faculty-Advised",
    desc: "Empowering undergraduate and postgraduate students to take executive ownership of campus initiatives under seasoned academic guidance.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive Leadership Pathways",
    desc: "Every semester, active volunteers are mentored into subcommittee leads, project coordinators, and future executive candidates.",
  },
];

export default function TeamPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[550px] w-[1100px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 40%, transparent 75%)" }}
        />

        {/* ── PAGE HERO ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dfeff0] px-3 py-1 text-[12px] font-medium text-[#2f5f68]">
            <span className="h-1 w-1 rounded-full bg-[#2f5f68]/50" aria-hidden="true" />
            Executive committee &amp; coordinators
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Passionate Students Driving<br />
            <span className="text-[#1A9090] italic">Innovation on Campus</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted">
            Meet the student executives, technical leads, and outreach mobilizers dedicated to serving
            the Cavendish University Uganda student community.
          </p>
        </section>

        {/* ── CORE COMPONENT EMBED (TEAM) ── */}
        <Team />

        {/* ── LEADERSHIP PHILOSOPHY ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="rounded-3xl border border-ieee/10 bg-white p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                Branch Governance
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-ink">
                How Our Leadership Operates
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PILLARS_OF_LEADERSHIP.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D6E6E]/25 text-[#E8F5F5] mb-4">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-ink text-base mb-2">{p.title}</h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Want to volunteer for the Branch?</h4>
                <p className="text-xs text-slate-600 mt-0.5">We welcome students from all faculties to join our event and technical committees.</p>
              </div>
              <a
                href={WHATSAPP_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-2.5 text-xs font-bold text-ink transition hover:bg-[#1A9090]"
              >
                Volunteer on WhatsApp
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
