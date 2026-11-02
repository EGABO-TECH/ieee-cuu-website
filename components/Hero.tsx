"use client";

import { useState, useEffect, useCallback, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

/** How long each slide stays up while the slideshow plays. */
const SLIDE_MS = 7000;

const HERO_SLIDES = [
  {
    image: "/images/The_Branch_Hero.png",
    position: "object-[65%_50%]",
    origin: "70% 50%",
    title: "Built by students at Cavendish",
    subtitle: "A local community of students learning, building, and leading together.",
    source: "IEEE Student Branch, Cavendish University Uganda",
    sourceUrl: "/branch",
  },
  {
    image: "/images/hero/epics-kenya-drone-project.jpg",
    position: "object-[center_45%]",
    origin: "35% 65%",
    title: "Medical drone delivery in Kenya",
    subtitle: "IEEE EPICS student teams are developing technology to improve access to medical supplies.",
    source: "IEEE EPICS in IEEE · Kenya project",
    sourceUrl: "https://epics.ieee.org/blogs/epics-in-ieee-healthcare-access-flies-high-in-kenya/",
  },
  {
    image: "/images/hero/ieee-r8-robotics-challenge.jpg",
    position: "object-center",
    origin: "60% 60%",
    title: "Robotics across Region 8",
    subtitle: "Student teams across Europe, the Middle East and Africa build, test, and compete together.",
    source: "IEEE Region 8",
    sourceUrl: "https://ieeer8.org/",
  },
  {
    image: "/images/hero/ieee-r8-conference-2026-02.jpg",
    position: "object-center",
    origin: "50% 35%",
    title: "One region, one community",
    subtitle: "Region 8 gatherings bring members together to share research, ideas, and leadership.",
    source: "IEEE Region 8",
    sourceUrl: "https://ieeer8.org/",
  },
  {
    image: "/images/hero/ieee-r8-workshop-05.jpg",
    position: "object-[center_40%]",
    origin: "45% 55%",
    title: "Workshops that build skills",
    subtitle: "Hands-on sessions where students meet mentors, industry, and each other.",
    source: "IEEE Region 8",
    sourceUrl: "https://ieeer8.org/",
  },
];

const TITLE_BLOCK = [
  { label: "Branch", value: "IEEE Student Branch", sub: "Cavendish University Uganda" },
  { label: "Region", value: "Region 8", sub: "Europe, Middle East & Africa" },
  { label: "Section", value: "IEEE Uganda Section", sub: "Kampala, Uganda" },
];

const HEADLINE = ["Engineering", "ideas", "into", "real-world"];

/** Staggered entrance delay for the hero's content, in ms. */
const rise = (delay: number): CSSProperties => ({ animationDelay: `${delay}ms` });

// ── Circuit traces ──────────────────────────────────────────────────
// PCB-style traces that route in from the right edge. Each one draws in
// once, then carries a travelling signal packet on a loop.
const TRACES = [
  { d: "M1200 110 H1020 L980 150 H840", dur: 5.2, delay: 1.6 },
  { d: "M1200 205 H1070 L1030 245 V320 L990 360 H880", dur: 6.4, delay: 2.4 },
  { d: "M1200 300 H1110 L1070 340 H960 L920 380 V450", dur: 4.6, delay: 3.1 },
  { d: "M1200 420 H1090 L1050 460 H930", dur: 5.8, delay: 1.9 },
  { d: "M1200 515 H1130 L1090 555 V600 L1060 630 H900", dur: 7.0, delay: 2.8 },
];

/** Last point of an absolute M/H/V/L path, for the via at its end. */
function traceEnd(d: string): [number, number] {
  let x = 0;
  let y = 0;
  for (const [, cmd, args] of d.matchAll(/([MHVL])\s*([\d.\s]+)/g)) {
    const n = args.trim().split(/\s+/).map(Number);
    if (cmd === "H") x = n[0];
    else if (cmd === "V") y = n[0];
    else [x, y] = n;
  }
  return [x, y];
}

function CircuitTraces() {
  return (
    <svg
      className="hero-traces"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      fill="none"
    >
      {TRACES.map((t, i) => {
        const [x, y] = traceEnd(t.d);
        const style = { "--draw-delay": `${0.5 + i * 0.15}s`, "--dur": `${t.dur}s`, "--delay": `${t.delay}s` } as CSSProperties;
        return (
          <g key={t.d} style={style}>
            <path d={t.d} pathLength={1} className="hero-trace" />
            <path d={t.d} pathLength={1} className="hero-packet" />
            <circle cx={x} cy={y} r="5" className="hero-via" />
            <circle cx={x} cy={y} r="2" className="hero-via-core" />
          </g>
        );
      })}
    </svg>
  );
}

// ── Amplifier diagram ───────────────────────────────────────────────
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

/** "Engineering ideas into impact", drawn as what it is: a non-inverting amplifier. */
function AmplifierDiagram({ running }: { running: boolean }) {
  const signalClass = running ? "animate-signal" : undefined;

  return (
    <svg
      viewBox="0 0 640 140"
      role="img"
      aria-label="Amplifier diagram: a small input signal labelled ideas becomes a large output signal labelled impact."
      className="mt-10 w-full max-w-xl overflow-visible"
      fill="none"
    >
      <defs>
        <clipPath id="hero-input-clip">
          <rect x="60" y="30" width="140" height="52" />
        </clipPath>
        <clipPath id="hero-output-clip">
          <rect x="372" y="0" width="268" height="140" />
        </clipPath>
        <filter id="hero-glow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text x="0" y="62" fill="#FFFFFF" fontSize="16" fontWeight="600" letterSpacing="1.5" className="hero-fade" style={rise(900)}>
        IDEAS
      </text>
      <text
        x="640"
        y="18"
        textAnchor="end"
        fill="#FFC72C"
        fontSize="16"
        fontWeight="600"
        letterSpacing="1.5"
        className="hero-fade"
        style={rise(2100)}
      >
        IMPACT
      </text>

      <g stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round">
        {/* Op-amp */}
        <path d="M250 28 L250 112 L332 70 Z" pathLength={1} className="hero-draw" style={rise(1100)} />
        <path d="M258 56 H270 M264 50 V62 M258 84 H270" className="hero-fade" style={rise(1600)} />
        {/* Input, output and feedback wiring through a resistor */}
        <path
          d="M200 56 H250 M332 70 H372 M352 70 V126 H316 l-4 -7 l-8 14 l-8 -14 l-8 14 l-8 -14 l-8 14 l-4 -7 H226 V84 H250"
          pathLength={1}
          className="hero-draw"
          style={rise(1300)}
        />
      </g>
      <circle cx="352" cy="70" r="3.5" fill="#FFFFFF" className="hero-fade" style={rise(1800)} />

      <g clipPath="url(#hero-input-clip)" className="hero-fade" style={rise(1000)}>
        <path d={INPUT_WAVE} stroke="#FFFFFF" strokeWidth="2" className={signalClass} />
      </g>
      <g clipPath="url(#hero-output-clip)" className="hero-fade" style={rise(1900)}>
        <path d={OUTPUT_WAVE} stroke="#FFC72C" strokeWidth="3" filter="url(#hero-glow)" className={signalClass} />
      </g>
    </svg>
  );
}

const controlClass =
  "flex min-h-11 w-11 items-center justify-center border-l border-white/40 text-white transition-colors hover:bg-white/15";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [slides, setSlides] = useState({ current: 0, previous: -1 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const currentSlide = slides.current;
  const running = isPlaying && !isPaused && inView;

  const goTo = useCallback((next: number | ((current: number) => number)) => {
    setSlides(({ current }) => {
      const target = typeof next === "function" ? next(current) : next;
      return target === current ? { current, previous: -1 } : { current: target, previous: current };
    });
  }, []);

  const nextSlide = useCallback(() => goTo((c) => (c + 1) % HERO_SLIDES.length), [goTo]);
  const prevSlide = useCallback(() => goTo((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), [goTo]);

  // Reduced motion: no auto-rotation, no parallax.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      setIsPlaying(false);
    }
  }, []);

  // Stop the slideshow and ambient motion while the hero is scrolled away.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Pointer parallax and spotlight, desktop pointers only.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  // With reduced motion the progress bar isn't shown, so a timer advances slides
  // if the visitor presses play. Otherwise the progress bar's end drives it.
  useEffect(() => {
    if (!reducedMotion || !running) return;
    const timer = setInterval(nextSlide, SLIDE_MS);
    return () => clearInterval(timer);
  }, [reducedMotion, running, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];
  const playState = { animationPlayState: running ? "running" : "paused" } as const;

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-title"
      data-motion={isPlaying && inView ? "on" : "off"}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsPaused(false);
      }}
      className="hero-home relative isolate overflow-hidden bg-[#002855] text-white [&_:focus-visible]:outline-white"
    >
      {/* Backdrop: photo slides wipe in over each other with a slow push-in */}
      <div className="hero-home-backdrop" aria-hidden="true">
        {HERO_SLIDES.map((s, idx) => {
          const state = idx === currentSlide ? "is-active" : idx === slides.previous ? "is-leaving" : "";
          return (
            <div key={s.image} className={`hero-home-slide ${state}`}>
              <Image
                src={s.image}
                alt=""
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`hero-home-image ${s.position}`}
                style={{
                  ...playState,
                  transformOrigin: s.origin,
                  animationDuration: `${SLIDE_MS + 1500}ms`,
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="hero-home-shade" aria-hidden="true" />
      <div className="hero-home-grid sheet-grid" aria-hidden="true" />
      <div className="hero-home-spotlight" aria-hidden="true" />
      <CircuitTraces />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-12">
        <p className="hero-rise text-xs font-semibold uppercase tracking-[0.2em] text-white/85" style={rise(0)}>
          <span className="hero-eyebrow-dot" aria-hidden="true" />
          IEEE Student Branch · Cavendish University Uganda
        </p>

        <h1
          id="hero-title"
          className="mt-5 text-balance font-display text-[clamp(2.4rem,6.2vw,5.25rem)] font-extrabold leading-[1.02] tracking-tight"
        >
          {HEADLINE.map((word, i) => (
            <span key={word}>
              <span className="hero-word">
                <span style={rise(150 + i * 90)}>{word}</span>
              </span>{" "}
            </span>
          ))}
          <span className="hero-word hero-word-accent">
            <span className="relative text-[#FFC72C]" style={rise(150 + HEADLINE.length * 90)}>
              impact.
              <svg className="hero-underline" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
                <path d="M3 10 C 55 3, 140 2, 197 8" pathLength={1} />
              </svg>
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="hero-rise max-w-xl text-base leading-relaxed text-white/90 sm:text-lg" style={rise(650)}>
              We bring together students, mentors, and technical communities to learn, build, and lead through hands-on
              engineering, collaboration, and IEEE opportunities.
            </p>

            <div className="hero-rise mt-8 flex flex-wrap gap-3" style={rise(800)}>
              <Link
                id="hero-join-btn"
                href="/join"
                className="hero-cta group inline-flex min-h-11 items-center gap-2 bg-[#FFC72C] px-6 py-3 text-sm font-bold text-[#002855] shadow-[4px_4px_0_#002855] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#002855]"
              >
                Join the branch
                <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                id="hero-events-btn"
                href="/events/branch-launch-2026"
                className="inline-flex min-h-11 items-center gap-2 border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#00629B]"
              >
                Launch details
              </Link>
            </div>

            <AmplifierDiagram running={running} />
          </div>

          <aside
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="hero-rise flex items-end lg:col-span-5 lg:justify-end" style={rise(1000)}>
            <div className="hero-card relative max-w-md overflow-hidden border-l-2 border-[#FFC72C] bg-[#002855]/60 px-5 py-4 backdrop-blur-md">
              <div key={currentSlide} className="hero-card-swap">
                <p className="flex items-baseline gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFC72C]">
                  Field notes
                  <span className="font-display text-sm tabular-nums text-white">
                    {String(currentSlide + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/50">/ {String(HERO_SLIDES.length).padStart(2, "0")}</span>
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">{slide.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{slide.subtitle}</p>
                <a
                  href={slide.sourceUrl}
                  target={slide.sourceUrl.startsWith("https://") ? "_blank" : undefined}
                  rel={slide.sourceUrl.startsWith("https://") ? "noreferrer" : undefined}
                  className="mt-3 inline-flex text-xs font-semibold text-white/75 underline decoration-white/40 underline-offset-4 transition hover:text-white"
                >
                  Photo source: {slide.source}
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Drawing title block, with the sheet (slide) controls in its last cell */}
        <div
          className="hero-rise mt-10 grid border border-white bg-[#002855]/40 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto]"
          style={rise(1150)}
        >
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
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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
                  onClick={() => goTo(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                  aria-current={idx === currentSlide ? "true" : undefined}
                  className={`relative min-h-11 w-9 overflow-hidden border-l border-white/40 text-sm font-bold transition-colors ${
                    idx === currentSlide ? "bg-[#FFC72C] text-[#002855]" : "text-white hover:bg-white/15"
                  }`}
                >
                  {idx + 1}
                  {idx === currentSlide && isPlaying && !reducedMotion && (
                    <span
                      key={currentSlide}
                      aria-hidden="true"
                      className="hero-progress"
                      style={{ ...playState, animationDuration: `${SLIDE_MS}ms` }}
                      onAnimationEnd={nextSlide}
                    />
                  )}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? "Pause slideshow and animations" : "Play slideshow and animations"}
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
