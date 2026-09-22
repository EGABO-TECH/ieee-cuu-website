import { journey } from "@/lib/data";
import { Cpu, Users2, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: Cpu,
    title: "Technology & Innovation",
    body: "Hands-on projects, workshops, and technical hackathons that take your computing and engineering skills far beyond the classroom.",
    linkText: "Explore Projects →",
    href: "#programs",
    hasLink: true,
  },
  {
    icon: Users2,
    title: "Safety, Community & Growth",
    body: "A supportive, inclusive student environment with peer mentorship, technical talks, and leadership roles tailored for your peace of mind.",
    hasLink: false,
  },
  {
    icon: BookOpen,
    title: "Seamless Orientation",
    body: "Comprehensive onboarding, literature-search skills on IEEE Xplore, and guides to help you settle into Branch activities instantly.",
    linkText: "Orientation Guide →",
    href: "/orientation-guide.pdf",
    hasLink: true,
  },
  {
    icon: GraduationCap,
    title: "Academic & Career Success",
    body: "Direct access to international IEEE certifications, research opportunities, and professional networks leading to higher grades and careers.",
    hasLink: false,
  },
];

export function Journey() {
  return (
    <section id="branch" className="bg-[#FAF8F5] py-24 sm:py-32 text-[#1C372A]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Split Layout: Left Headline + Right 2x2 Cards Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: WHAT WE DO + Title + Subtitle */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <span className="block text-xs font-semibold tracking-[0.22em] text-[#637067] uppercase">
              WHAT WE DO
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#1C372A] sm:text-5xl lg:text-6xl leading-[1.1]">
              Our Core Pillars
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-[#57645B] sm:text-lg">
              Four pillars designed to help you thrive in your academic and professional journey at Cavendish University.
            </p>
          </div>

          {/* Right Column: 2x2 Grid of Rounded White Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="group relative flex flex-col justify-between rounded-3xl border border-[#EBE7DF]/80 bg-white p-7 sm:p-8 shadow-[0_4px_24px_rgba(28,55,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(28,55,42,0.08)]"
                  >
                    <div>
                      {/* Squircle Icon Container */}
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2ED] text-[#1C372A] transition duration-300 group-hover:scale-105">
                        <Icon size={22} strokeWidth={2.2} />
                      </div>

                      {/* Card Title */}
                      <h3 className="font-serif text-xl font-bold tracking-tight text-[#1C372A]">
                        {p.title}
                      </h3>

                      {/* Card Body */}
                      <p className="mt-3 text-sm leading-relaxed text-[#57645B]">
                        {p.body}
                      </p>
                    </div>

                    {/* Optional Link with Arrow */}
                    {p.hasLink && (
                      <div className="mt-6 pt-2">
                        <a
                          href={p.href}
                          target={p.href?.startsWith("http") || p.href?.endsWith(".pdf") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C56C47] transition hover:translate-x-1 hover:text-[#B05B37]"
                        >
                          {p.linkText}
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Supporting Pathway: The 6 Journey Milestones */}
        <div className="mt-24 border-t border-[#E8E4DA] pt-16">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#637067]">
                YOUR PATHWAY
              </span>
              <h3 className="mt-1 font-serif text-2xl font-bold text-[#1C372A] sm:text-3xl">
                The Student Branch Journey
              </h3>
            </div>
            <p className="text-sm text-[#57645B] max-w-md">
              From curious newcomer to global IEEE contributor — step by step.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {journey.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-[#EBE7DF]/80 bg-white/70 p-5 backdrop-blur-sm transition duration-200 hover:bg-white hover:shadow-sm"
              >
                <div className="font-mono text-xs font-bold text-[#C56C47]">{s.step}</div>
                <div className="mt-1 font-serif text-base font-bold text-[#1C372A]">{s.title}</div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#57645B]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
