import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-8 lg:px-12">
      {/* Background gradient — real photos will be added by the owner */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,#061821_0%,#0d3a52_50%,#061821_100%)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_25%),linear-gradient(90deg,rgba(7,18,28,0.88),rgba(7,18,28,0.25)_35%,rgba(7,18,28,0.55))]" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="flex min-h-[640px] items-center pb-4 pt-8 lg:min-h-[760px]">
          <div className="max-w-[720px] rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.28)] backdrop-blur-[6px] sm:p-8 lg:p-10 xl:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/80">
              IEEE Student Branch · Cavendish University Uganda
            </p>

            <h1 className="mt-5 max-w-[680px] font-serif text-[clamp(3.1rem,7vw,8.5rem)] leading-[0.8] tracking-[-0.075em] text-white">
              <span className="block">Engineering</span>
              <span className="block text-[#dfeef8]">ideas</span>
              <span className="block text-[#dfeef8]">into real-</span>
              <span className="block text-[#dfeef8]">world impact.</span>
            </h1>

            <p className="mt-6 max-w-[610px] text-base leading-7 text-slate-100/90 sm:text-[1.18rem] sm:leading-8">
              We bring together students, mentors, and technical communities to learn, build, and lead through hands-on engineering, collaboration, and IEEE opportunities.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                id="hero-join-btn"
                href="/join"
                className="inline-flex items-center gap-2 rounded-full bg-[#0d5b8f] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0a446f]"
              >
                Join the branch
                <ArrowRight size={16} />
              </a>
              <a
                id="hero-events-btn"
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/12"
              >
                See what&apos;s on
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["IEEE Day 2026", "IEEEXtreme 20.0", "Region 8", "Student Branch"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
