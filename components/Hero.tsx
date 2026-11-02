"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/images/hero/robotics-lab.jpg",
    position: "object-center",
    title: "Robotics & Hardware Lab",
    subtitle: "Hands-on engineering, microcontrollers & automation prototypes",
  },
  {
    image: "/images/hero/hackathon.jpg",
    position: "object-center",
    title: "Hackathon & Code Arena",
    subtitle: "Algorithmic competitions, IEEEXtreme preparation & software builds",
  },
  {
    image: "/images/hero/conference.jpg",
    position: "object-center",
    title: "Region 8 Leadership",
    subtitle: "Global technical symposiums, research summits & community leadership",
  },
  {
    image: "/images/The_Branch_Hero.png",
    position: "object-[65%_50%]",
    title: "CUU Branch Community",
    subtitle: "Connecting multidisciplinary students with global IEEE opportunities",
  },
];

const TITLE_BLOCK = [
  { label: "Branch", value: "IEEE Student Branch", sub: "Cavendish University Uganda" },
  { label: "Region", value: "Region 8", sub: "Europe, Middle East & Africa" },
  { label: "Section", value: "IEEE Uganda Section", sub: "Kampala, Uganda" },
];

// One period of the signal; must match the `signal` keyframe in tailwind.config.ts.
const SIGNAL_PERIOD = 40;

function sineWave(x0: number, x1: number, cy: number, amplitude: number) {
  const points: string[] = [];
  for (let x = x0; x <= x1; x += 2) {
    const y = cy - amplitude * Math.sin(((x - x0) / SIGNAL_PERIOD) * 2 * Math.PI);
    points.push(`${x} ${y.toFixed(2)}`);
  }
  return `M${points.join(" L")}`;
}

const INPUT_WAVE = sineWave(60, 200 + SIGNAL_PERIOD, 56, 7);
const OUTPUT_WAVE = sineWave(372, 640 + SIGNAL_PERIOD, 70, 44);

const controlClass =
  "flex min-h-11 w-11 items-center justify-center border-l border-white/40 text-white transition-colors hover:bg-white/15";

/** "Engineering ideas into impact", drawn as what it is: a non-inverting amplifier. */
function AmplifierDiagram({ running }: { running: boolean }) {
  const signalClass = running ? "animate-signal" : undefined;

  return (
    <svg
      viewBox="0 0 640 140"
      role="img"
      aria-label="Amplifier diagram: a small input signal labelled ideas becomes a large output signal labelled impact."
      className="mt-10 w-full max-w-xl"
      fill="none"
    >
      <defs>
        <clipPath id="hero-input-clip">
          <rect x="60" y="30" width="140" height="52" />
        </clipPath>
        <clipPath id="hero-output-clip">
          <rect x="372" y="0" width="268" height="140" />
        </clipPath>
      </defs>

      <text x="0" y="62" fill="#FFFFFF" fontSize="16" fontWeight="600" letterSpacing="1.5">
        IDEAS
      </text>
      <text x="640" y="18" textAnchor="end" fill="#FFC72C" fontSize="16" fontWeight="600" letterSpacing="1.5">
        IMPACT
      </text>

      <g stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round">
        {/* Op-amp */}
        <path d="M250 28 L250 112 L332 70 Z" />
        <path d="M258 56 H270 M264 50 V62 M258 84 H270" />
        {/* Input, output and feedback wiring through a resistor */}
        <path d="M200 56 H250 M332 70 H372 M352 70 V126 H316 l-4 -7 l-8 14 l-8 -14 l-8 14 l-8 -14 l-8 14 l-4 -7 H226 V84 H250" />
      </g>
      <circle cx="352" cy="70" r="3.5" fill="#FFFFFF" />

      <g clipPath="url(#hero-input-clip)">
        <path d={INPUT_WAVE} stroke="#FFFFFF" strokeWidth="2" className={signalClass} />
      </g>
      <g clipPath="url(#hero-output-clip)">
        <path d={OUTPUT_WAVE} stroke="#FFC72C" strokeWidth="3" className={signalClass} />
      </g>
    </svg>
  );
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Don't auto-rotate for visitors who prefer reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (!isPlaying || isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, isPaused, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsPaused(false);
      }}
      className="sheet-grid overflow-hidden bg-[#00629B] text-white [&_:focus-visible]:outline-white"
    >
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em]">
          IEEE Student Branch · Cavendish University Uganda
        </p>

        <h1
          id="hero-title"
          className="mt-5 text-balance font-display text-[clamp(2.4rem,6.2vw,5.25rem)] font-extrabold leading-[1.02] tracking-tight"
        >
          Engineering ideas into real-world <span className="text-[#FFC72C]">impact.</span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="max-w-xl text-base leading-relaxed sm:text-lg">
              We bring together students, mentors, and technical communities to learn, build, and lead through hands-on
              engineering, collaboration, and IEEE opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                id="hero-join-btn"
                href="/join"
                className="inline-flex min-h-11 items-center gap-2 bg-[#FFC72C] px-6 py-3 text-sm font-bold text-[#002855] shadow-[4px_4px_0_#002855] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#002855]"
              >
                Join the branch
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                id="hero-events-btn"
                href="/events/branch-launch-2026"
                className="inline-flex min-h-11 items-center gap-2 border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#00629B]"
              >
                Launch details
              </Link>
            </div>

            <AmplifierDiagram running={isPlaying && !isPaused} />
          </div>

          {/* Current sheet's figure, printed as a cyanotype */}
          <figure className="lg:col-span-6">
            <div className="relative aspect-[3/2] border border-white">
              {HERO_SLIDES.map((s, idx) => (
                <div
                  key={s.image}
                  className={`absolute inset-0 bg-[#00629B] transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    priority={idx === 0}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className={`object-cover mix-blend-luminosity contrast-125 ${s.position}`}
                  />
                </div>
              ))}
            </div>
            <figcaption className="mt-3 min-h-10 text-sm" aria-live={isPlaying ? "off" : "polite"}>
              <span className="font-semibold">
                Fig. {currentSlide + 1}. {slide.title}
              </span>
              <span className="block text-[#CADCEA] sm:inline"> {slide.subtitle}</span>
            </figcaption>
          </figure>
        </div>

        {/* Drawing title block, with the sheet (slide) controls in its last cell */}
        <div className="mt-10 grid border border-white sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <dl className="contents">
            {TITLE_BLOCK.map((item) => (
              <div key={item.label} className="border-b border-white/40 px-4 py-3 sm:border-b-0 sm:border-r">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CADCEA]">{item.label}</dt>
                <dd className="mt-1 font-display text-sm font-bold">{item.value}</dd>
                <dd className="text-xs text-[#CADCEA]">{item.sub}</dd>
              </div>
            ))}
          </dl>

          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Branch highlights"
            className="flex items-stretch justify-end border-white/40 min-[400px]:justify-between sm:col-span-3 sm:border-t lg:col-span-1 lg:border-t-0"
          >
            <span className="sr-only" aria-live={isPlaying ? "off" : "polite"}>
              Slide {currentSlide + 1} of {HERO_SLIDES.length}: {slide.title}
            </span>
            <span className="hidden items-center whitespace-nowrap px-3 min-[400px]:flex text-xs font-semibold uppercase tracking-[0.16em] text-[#CADCEA]">
              Sheet
            </span>
            <div className="flex">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                  aria-current={idx === currentSlide ? "true" : undefined}
                  className={`min-h-11 w-9 border-l border-white/40 text-sm font-bold transition-colors ${
                    idx === currentSlide ? "bg-[#FFC72C] text-[#002855]" : "text-white hover:bg-white/15"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                className={controlClass}
              >
                {isPlaying ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
              </button>
              <button type="button" onClick={prevSlide} aria-label="Previous slide" className={controlClass}>
                <ChevronLeft size={17} aria-hidden="true" />
              </button>
              <button type="button" onClick={nextSlide} aria-label="Next slide" className={controlClass}>
                <ChevronRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
