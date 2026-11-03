"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pause, Play } from "lucide-react";
import { PHOTOS, creditLine, type PhotoKey } from "@/content/media";
import { btn, container, nudge } from "@/lib/ui";

const SLIDE_MS = 7000;

const SLIDES: { photo: PhotoKey; caption: string }[] = [
  { photo: "ieeeDayCertificate", caption: "Cavendish University Uganda receives its certificate of recognition at IEEE Day 2026" },
  { photo: "ieeeDayGuests", caption: "Senior IEEE members and guests of honour in the front row at IEEE Day 2026" },
  { photo: "ieeeDayStage", caption: "Student leaders, IEEE Uganda Section officials and guests on stage" },
  { photo: "ieeeDayGroupPhoto", caption: "Branches from across Uganda together at the American Center, Kampala" },
  { photo: "ieeeDayWelcome", caption: "Volunteers welcome delegates to IEEE Day 2026" },
];

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const [reduced, setReduced] = useState(false);
  const running = playing && !hovered && inView;

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setPlaying(false);
    }
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // With reduced motion the progress bar doesn't animate, so a timer advances
  // the photos if the visitor presses play. Otherwise the bar's end does.
  useEffect(() => {
    if (!reduced || !running) return;
    const t = setInterval(next, SLIDE_MS);
    return () => clearInterval(t);
  }, [reduced, running, next]);

  const slide = SLIDES[current];
  const photo = PHOTOS[slide.photo];

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className={`relative isolate flex min-h-[min(100svh,58rem)] flex-col overflow-hidden bg-[#002855] text-white [&_:focus-visible]:outline-white hh-running-${running}`}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {SLIDES.map((s, i) => {
          const p = PHOTOS[s.photo];
          return (
            <div key={s.photo} data-active={i === current} className="hh-slide absolute inset-0">
              <Image
                src={p.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: p.focus ?? "center" }}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,40,85,0.94)_0%,rgba(0,40,85,0.78)_42%,rgba(0,40,85,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,40,85,0.9)_0%,transparent_45%)]" />
      </div>

      <div className={`${container} flex flex-1 flex-col justify-center pb-10 pt-36 sm:pt-40`}>
        <div className="max-w-3xl">
          <p className="m-rise flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#CADCEA]" style={d(0)}>
            <span aria-hidden="true" className="m-rule inline-block h-0.5 w-8 bg-[#FFC72C]" style={d(200)} />
            IEEE Student Branch · Cavendish University Uganda
          </p>
          <h1
            id="hero-title"
            className="m-rise mt-6 text-balance font-display text-[clamp(2.6rem,6.4vw,5.5rem)] font-bold leading-[1] tracking-[-0.03em]"
            style={d(120)}
          >
            Engineering ideas into <span className="text-[#FFC72C]"><span className="whitespace-nowrap">real-world</span> impact.</span>
          </h1>
          <p className="m-rise mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg" style={d(260)}>
            Students, mentors and IEEE technical communities learning, building and leading together, in Kampala and
            across Region 8.
          </p>
          <div className="m-rise mt-9 flex flex-wrap gap-3" style={d(380)}>
            <Link href="/join" className={btn.accent}>
              Join the branch
              <ArrowRight size={16} aria-hidden="true" className={nudge} />
            </Link>
            <Link href="/events" className={btn.ghost}>
              See upcoming events
            </Link>
          </div>
        </div>
      </div>

      {/* Caption and slideshow controls */}
      <div className="m-fade border-t border-white/15 bg-[#002855]/50 backdrop-blur-sm" style={d(600)}>
        <div className={`${container} flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between`}>
          <div className="min-w-0" aria-live={playing ? "off" : "polite"}>
            <p className="truncate text-sm font-medium text-white">{slide.caption}</p>
            <a
              href={photo.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/60 underline decoration-white/25 underline-offset-4 hover:text-white"
            >
              {creditLine(photo)}
            </a>
          </div>

          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Hero photos"
            className="flex shrink-0 items-center gap-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.photo}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Photo ${i + 1} of ${SLIDES.length}: ${s.caption}`}
                aria-current={i === current ? "true" : undefined}
                className="group flex h-11 w-10 items-center sm:w-14"
              >
                <span className="hh-bar relative block h-0.5 w-full overflow-hidden bg-white/25 group-hover:bg-white/50">
                  {i < current && <span className="absolute inset-0 bg-white/70" />}
                  {i === current && (
                    <span
                      key={current}
                      className="absolute inset-0 bg-[#FFC72C]"
                      style={reduced ? { animation: "none" } : { animationDuration: `${SLIDE_MS}ms` }}
                      onAnimationEnd={reduced ? undefined : next}
                    />
                  )}
                </span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause slideshow" : "Play slideshow"}
              className="ml-1 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
