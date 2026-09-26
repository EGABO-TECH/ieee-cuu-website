import { ArrowRight } from "lucide-react";
import { WHATSAPP_INVITE_URL } from "@/lib/data";

const SLIDES = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="hero-slideshow absolute inset-0" aria-label="Decorative background slideshow">
        {SLIDES.map((slide, index) => (
          <div
            key={`${slide}-${index}`}
            className="hero-slide"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(10,16,25,0.55), rgba(10,16,25,0.18) 42%, rgba(10,16,25,0.38)), url(${slide})`,
              animationDelay: `${index * 5.5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_25%),linear-gradient(90deg,rgba(7,18,28,0.8),rgba(7,18,28,0.2)_35%,rgba(7,18,28,0.5))]" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="flex min-h-[640px] items-center pb-4 pt-8 lg:min-h-[760px]">
          <div className="max-w-[720px] rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.28)] backdrop-blur-[6px] sm:p-8 lg:p-10 xl:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/80">
              IEEE Cavendish University Uganda Student Branch
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
                href="/branch"
                className="inline-flex items-center gap-2 rounded-full bg-[#0d5b8f] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0a446f]"
              >
                Explore the branch
                <ArrowRight size={16} />
              </a>
              <a
                href={WHATSAPP_INVITE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/12"
              >
                Become a member
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "IEEE Day 2026",
                "IEEEXtreme",
                "Region 8",
                "Student Branch",
              ].map((badge) => (
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
