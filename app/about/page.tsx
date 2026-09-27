import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, Cpu, BookOpenText, Users2, ShieldCheck, Award, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatIsIEEE } from "@/components/WhatIsIEEE";

export const metadata: Metadata = {
  title: "About IEEE | Cavendish University Uganda Student Branch",
  description:
    "Learn about IEEE, the world's largest technical professional organization, and the IEEE Student Branch at Cavendish University Uganda.",
};

const ABOUT_SLIDES = [
  "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1745571479662-54a2ad1c747f?auto=format&fit=crop&w=1600&q=80",
];

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
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
        {/* ── PAGE HERO ── */}
        <section className="relative isolate overflow-hidden">
          <div className="hero-slideshow absolute inset-0" aria-hidden="true">
            {ABOUT_SLIDES.map((slide, index) => (
              <div
                key={slide}
                className="hero-slide"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(5,16,25,0.88), rgba(5,16,25,0.54) 52%, rgba(5,16,25,0.22)), url(${slide})`,
                  animationDelay: `${index * 5.5}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col justify-center px-6 pb-12 pt-32 sm:px-10 sm:pb-16 sm:pt-36 lg:px-12 lg:pt-40">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Advancing Technology
                <span className="block text-[#72d5cc] italic">for Humanity</span>
                at CUU
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                The Institute of Electrical and Electronics Engineers (IEEE) is the world&apos;s largest technical
                professional organization dedicated to advancing technology for the benefit of humanity.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4 lg:gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="border-l border-white/25 pl-4 sm:pl-5">
                  <div className="font-serif text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs font-semibold text-white/90">{s.label}</div>
                  <div className="mt-0.5 text-[11px] text-white/65">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE COMPONENT EMBED (WHAT IS IEEE) ── */}
        <WhatIsIEEE />

        {/* ── GUIDING VALUES SECTION ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
              Our Foundation
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl">
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
                  className="rounded-2xl border border-ieee/10 bg-white/80 p-6 transition duration-300 hover:border-[#1A9090]/40 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[#0D5B8F]/10 bg-[#eaf2f4] text-[#0D5B8F]">
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
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-r from-[#0d1424] to-[#12141f] p-8 sm:p-12 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Get Involved with IEEE at Cavendish
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">
              Join the student branch, apply to become an IEEE Student Ambassador, or compete in international events like IEEEXtreme.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/branch"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-7 py-3 text-xs sm:text-sm font-bold text-ink transition hover:bg-[#1A9090]"
              >
                Explore the Student Branch
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                View Membership Options
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
