import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Globe2, Cpu, BookOpenText, Users2, ShieldCheck, Award, ArrowUpRight } from "lucide-react";
import { WhatIsIEEE } from "@/components/WhatIsIEEE";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = pageMetadata({
  title: "About IEEE",
  description:
    "Learn about IEEE, the world's largest technical professional organization, and the IEEE Student Branch at Cavendish University Uganda.",
  path: "/about",
});

const STATS = [
  { value: "400,000+", label: "Global IEEE Members", sub: "Engineers, scientists & students" },
  { value: "160+", label: "Countries Worldwide", sub: "Global technical presence" },
  { value: "Region 8", label: "Europe, Middle East & Africa", sub: "Our regional affiliation" },
  { value: "Uganda Section", label: "National Section", sub: "Connecting local professionals" },
];

const VALUES = [
  {
    icon: Cpu,
    title: "Technological Excellence",
    desc: "Fostering engineering rigor, scientific curiosity, and high standards across all student projects and research.",
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    desc: "Connecting students in Kampala directly with peers, mentors, and industry pioneers worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Practice",
    desc: "Committed to the IEEE Code of Ethics, ensuring technology is developed responsibly for the benefit of humanity.",
  },
  {
    icon: Award,
    title: "Student Empowerment",
    desc: "Cultivating leadership, public speaking, and project management skills to prepare graduates for global careers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-bg text-ink">
        <PageHero
          eyebrow="About IEEE"
          title={
            <>
              Advancing technology <em>for humanity</em>
            </>
          }
          lede="IEEE is the world's largest technical professional organisation. Our branch brings its programmes, publications and people to students at Cavendish University Uganda."
          photo="epicsKenya"
        >
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs text-white/60">{s.label}</dt>
                <dd className="font-display text-xl font-bold text-white sm:text-2xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </PageHero>

        {/* ── CORE COMPONENT EMBED (WHAT IS IEEE) ── */}
        <WhatIsIEEE />

        {/* ── GUIDING VALUES SECTION ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
              Our Foundation
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Principles Guiding Our Branch
            </h2>
            <p className="mt-3 text-sm text-muted">
              Rooted in the century-old global IEEE heritage and tailored for student innovation at Cavendish University Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-ieee/10 bg-white/80 p-6 transition duration-300 hover:border-[#007DAF]/40 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[#00629B]/10 bg-[#E6EFF6] text-[#00629B]">
                    <Icon size={20} strokeWidth={2.25} />
                  </div>
                  <h3 className="font-bold text-ink text-base mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CALL TO ACTION STRIP ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pb-24 pt-8">
          <div className="rounded-3xl border border-white/[0.08] sheet-grid bg-[#002855] p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Get Involved with IEEE at Cavendish
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">
              Join the student branch, apply to become an IEEE Student Ambassador, or compete in international events like IEEEXtreme.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/branch"
                className="inline-flex items-center gap-2 bg-[#FFC72C] px-7 py-3 text-xs sm:text-sm font-bold text-[#002855] transition hover:bg-white"
              >
                Explore the Student Branch
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 border border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                View Membership Options
              </Link>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
