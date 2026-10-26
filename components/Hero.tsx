"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, Globe, GraduationCap, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/images/hero/robotics-lab.jpg",
    alt: "IEEE Student Branch Robotics and Embedded Systems Lab",
    title: "Robotics & Hardware Lab",
    subtitle: "Hands-on engineering, microcontrollers & automation prototypes",
  },
  {
    image: "/images/hero/hackathon.jpg",
    alt: "IEEE Student Branch Hackathon and Collaborative Coding Arena",
    title: "Hackathon & Code Arena",
    subtitle: "Algorithmic competitions, IEEEXtreme preparation & software builds",
  },
  {
    image: "/images/hero/conference.jpg",
    alt: "IEEE Region 8 Student and Young Professionals Conference",
    title: "Region 8 Leadership",
    subtitle: "Global technical symposiums, research summits & community leadership",
  },
  {
    image: "/images/The_Branch_Hero.png",
    alt: "Cavendish University Uganda IEEE Student Branch Community",
    title: "CUU Branch Community",
    subtitle: "Connecting multidisciplinary students with global IEEE opportunities",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHoveringControls, setIsHoveringControls] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying || isHoveringControls) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, isHoveringControls, nextSlide]);

  return (
    <section
      id="top"
      className="relative isolate min-h-[720px] overflow-hidden px-4 pb-20 pt-28 sm:px-8 lg:min-h-[820px] lg:px-12 lg:pb-24 lg:pt-32"
    >
      {/* ── BACKGROUND SLIDESHOW WITH KEN BURNS & CROSSFADE ── */}
      <div className="absolute inset-0 z-0 bg-[#040e17]" aria-hidden="true">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div
                className={`relative h-full w-full transform-gpu transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          );
        })}

        {/* ── MOTION GRAPHIC & TECH CIRCUIT OVERLAY ── */}
        <div className="pointer-events-none absolute inset-0 z-10 opacity-30 mix-blend-screen">
          <svg
            className="h-full w-full stroke-cyan-400/30"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
          >
            <defs>
              <pattern
                id="hero-tech-grid"
                width="64"
                height="64"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 64 0 L 0 0 0 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.75"
                  strokeDasharray="4 6"
                />
                <circle cx="0" cy="0" r="1.5" fill="rgba(56,189,248,0.4)" />
                <circle cx="64" cy="64" r="1" fill="rgba(56,189,248,0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-tech-grid)" />
          </svg>
        </div>

        {/* Dynamic ambient glowing light orbs */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[#0d5b8f]/40 blur-[120px] animate-pulse duration-1000" />
        <div className="pointer-events-none absolute right-10 top-1/3 h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px]" />

        {/* ── CINEMATIC CONTRAST GRADIENT OVERLAYS (UI/UX READABILITY) ── */}
        {/* Horizontal scrim: dark on the left for maximum card and text legibility */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#030c16]/95 via-[#030c16]/85 via-50% to-[#030c16]/45 lg:via-[#030c16]/80 lg:to-[#030c16]/30" />
        {/* Vertical scrim: top and bottom vignettes for seamless layout blending */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-[#030c16]/80 via-transparent via-30% to-[#030c16]/95" />
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-30 mx-auto max-w-[1440px]">
        <div className="flex min-h-[580px] items-center pb-4 pt-6 lg:min-h-[660px]">
          <div className="max-w-[740px] rounded-[2rem] border border-white/15 bg-slate-950/40 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8 lg:p-10 xl:p-12">
            
            {/* Super-title */}
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300/90 sm:text-xs">
              IEEE Student Branch · Cavendish University Uganda
            </p>

            {/* Main Headline */}
            <h1 className="mt-5 max-w-[680px] font-serif text-[clamp(2.9rem,6.8vw,8rem)] leading-[0.85] tracking-[-0.07em] text-white">
              <span className="block">Engineering</span>
              <span className="block text-[#e2f1fc]">ideas</span>
              <span className="block text-[#e2f1fc]">into real-</span>
              <span className="block text-[#e2f1fc]">world impact.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[610px] text-base leading-7 text-slate-200/90 sm:text-[1.18rem] sm:leading-8">
              We bring together students, mentors, and technical communities to learn, build, and lead through hands-on engineering, collaboration, and IEEE opportunities.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                id="hero-join-btn"
                href="/join"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0d5b8f] to-[#0284c7] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(13,91,143,0.4)] transition duration-200 hover:-translate-y-0.5 hover:from-[#0a446f] hover:to-[#0369a1] hover:shadow-[0_6px_25px_rgba(2,132,199,0.5)]"
              >
                Join the branch
                <ArrowRight size={16} />
              </a>
              <a
                id="hero-events-btn"
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/15"
              >
                See what&apos;s on
              </a>
            </div>

            {/* ── ELEVATED AFFILIATION BADGES: REGION 8 & STUDENT BRANCH ── */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Region 8 Badge */}
              <div
                title="IEEE Region 8 (Europe, Middle East & Africa)"
                className="group relative inline-flex items-center gap-2.5 rounded-full border border-sky-400/35 bg-sky-950/50 px-3.5 py-1.5 text-xs font-semibold text-sky-100 shadow-[0_4px_16px_rgba(2,132,199,0.2)] backdrop-blur-md transition-all duration-300 hover:border-sky-300/70 hover:bg-sky-900/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400"></span>
                </span>
                <Globe className="h-3.5 w-3.5 text-sky-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="uppercase tracking-[0.12em]">Region 8</span>
                <span className="h-3 w-px bg-sky-400/30" />
                <span className="text-[10px] font-medium tracking-normal text-sky-200/80">EMEA</span>
              </div>

              {/* Student Branch Badge */}
              <div
                title="Official IEEE Student Branch at Cavendish University Uganda"
                className="group relative inline-flex items-center gap-2.5 rounded-full border border-cyan-400/35 bg-cyan-950/50 px-3.5 py-1.5 text-xs font-semibold text-cyan-100 shadow-[0_4px_16px_rgba(6,182,212,0.2)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/70 hover:bg-cyan-900/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
                </span>
                <GraduationCap className="h-3.5 w-3.5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
                <span className="uppercase tracking-[0.12em]">Student Branch</span>
                <span className="h-3 w-px bg-cyan-400/30" />
                <span className="text-[10px] font-medium tracking-normal text-cyan-200/80">CUU Charter</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── INTERACTIVE SLIDESHOW CONTROLS & CAPTION (BOTTOM BAR) ── */}
        <div
          onMouseEnter={() => setIsHoveringControls(true)}
          onMouseLeave={() => setIsHoveringControls(false)}
          className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Active Slide Info Pill */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-xs text-white/90 shadow-lg backdrop-blur-md">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="font-semibold text-white">
                {HERO_SLIDES[currentSlide].title}
              </span>
              <span className="hidden text-white/50 sm:inline">·</span>
              <span className="hidden text-[11px] text-slate-300 md:inline">
                {HERO_SLIDES[currentSlide].subtitle}
              </span>
            </div>
          </div>

          {/* Navigation Controls: Slide Indicators, Play/Pause, Next/Prev */}
          <div className="flex items-center gap-2">
            {/* Slide Indicators */}
            <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/60 px-3 py-2 shadow-lg backdrop-blur-md">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-6 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Play / Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-white/80 shadow-lg backdrop-blur-md transition-colors hover:border-white/30 hover:bg-slate-900 hover:text-white"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
            </button>

            {/* Prev Slide Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-white/80 shadow-lg backdrop-blur-md transition-colors hover:border-white/30 hover:bg-slate-900 hover:text-white"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Next Slide Button */}
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-white/80 shadow-lg backdrop-blur-md transition-colors hover:border-white/30 hover:bg-slate-900 hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
