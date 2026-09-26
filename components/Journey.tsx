import { journey } from "@/lib/data";
import { Cpu, Users2, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: Cpu,
    title: "Technology & Innovation",
    body: "Hands-on projects, workshops, and technical hackathons that take your computing and engineering skills far beyond the classroom.",
    linkText: "Explore Projects →",
    href: "/programs",
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
    <section id="branch" className="relative overflow-hidden bg-bg py-28 sm:py-36 border-t border-ieee/10">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[700px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Split Layout: Left Headline + Right 2x2 Cards Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: WHAT WE DO + Title + Subtitle */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#1A9090]">
              WHAT WE DO
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.12]">
              Our Core <em className="not-italic italic text-[#1A9090]">Pillars.</em>
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Four disciplined operational pillars designed to empower your transition from
              classroom theory to globally competitive engineering and technology leadership.
            </p>
          </div>

          {/* Right Column: 2x2 Grid of Minimalist Dark Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="group relative flex flex-col justify-between rounded-2xl border border-ieee/10 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1A9090]/60 hover:shadow-[0_8px_32px_rgba(13,110,110,0.15)]"
                  >
                    <div>
                      {/* Squircle Icon Container */}
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#1A9090]/30 bg-ieee/10 text-ieee transition duration-300 group-hover:scale-105">
                        <Icon size={22} strokeWidth={2} />
                      </div>

                      {/* Card Title */}
                      <h3 className="font-serif text-xl font-bold tracking-tight text-ink group-hover:text-ieee transition-colors">
                        {p.title}
                      </h3>

                      {/* Card Body */}
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {p.body}
                      </p>
                    </div>

                    {/* Optional Link with Arrow */}
                    {p.hasLink && (
                      <div className="mt-6 pt-4 border-t border-ieee/10">
                        <a
                          href={p.href}
                          target={p.href?.startsWith("http") || p.href?.endsWith(".pdf") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ieee transition hover:translate-x-1 hover:text-ieee-dark"
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
        <div className="mt-24 border-t border-ieee/10 pt-16">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1A9090]">
                YOUR PATHWAY
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-ink sm:text-3xl">
                The Student Branch Journey
              </h3>
            </div>
            <p className="text-sm text-muted max-w-md">
              From curious newcomer to recognized IEEE contributor, step by step.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {journey.map((s) => (
              <div
                key={s.step}
                className="group rounded-xl border border-ieee/10 bg-white p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#1A9090]/50 hover:bg-white hover:-translate-y-0.5"
              >
                <div className="font-mono text-xs font-bold text-[#1A9090]">{s.step}</div>
                <div className="mt-1.5 font-serif text-base font-bold text-ink group-hover:text-ieee transition-colors">{s.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
