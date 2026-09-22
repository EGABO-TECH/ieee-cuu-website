import Image from "next/image";
import { WHATSAPP_INVITE_URL } from "@/lib/data";

const BADGES = [
  "IEEE DAY 2026",
  "IEEEXTREME",
  "REGION 8",
  "INNOVATION",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-6 pt-28 pb-10 sm:px-10 md:px-14 lg:px-16"
    >
      {/* Background Hero Image populating the entire hero section */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden bg-[#070A16]">
        {/* Full cover background image */}
        <Image
          src="/images/Hero1.png"
          alt="Cavendish University Uganda Campus"
          fill
          priority
          className="object-cover object-center scale-[1.01]"
        />

        {/* Top gradient to ensure floating navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />

        {/* Ambient overlay to ensure contrast for central & bottom typography */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(7,10,22,0.75)_100%)] pointer-events-none" />

        {/* Bottom smooth dark gradient blend seamlessly into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070A16] via-[#070A16]/75 to-transparent pointer-events-none" />
      </div>

      {/* Top spacing to accommodate floating header */}
      <div className="h-6 sm:h-10" />

      {/* Center Hero Heading overlaying the hand */}
      <div className="relative z-10 mx-auto my-auto flex flex-col items-center justify-center text-center">
        <h1 className="font-serif italic text-4xl font-normal tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] sm:text-5xl md:text-6xl lg:text-7xl">
          IEEE Student Branch
        </h1>
        <p className="mt-3 text-[11px] font-semibold tracking-[0.25em] text-white/80 drop-shadow-md sm:text-xs md:text-sm uppercase flex items-center justify-center gap-1.5">
          <span>Cavendish University Uganda</span>
          <span className="text-base leading-none">🇺🇬</span>
        </p>
      </div>

      {/* Bottom Hero Content: Left Details + Right Badges */}
      <div className="relative z-10 mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        {/* Bottom Left: Tag, Large Headline, Action Buttons */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase sm:text-xs">
            <span>IEEE UGANDA SECTION · REGION 8</span>
            <span className="text-sm leading-none">🇺🇬</span>
          </span>

          <h2 className="mt-2 font-serif italic text-3xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] sm:text-4xl md:text-5xl lg:text-6xl">
            Learn, Build,
            <br />
            & Connect Globally.
          </h2>

          {/* Action Buttons matching reference styling */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <a
              href="#event"
              className="rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-black shadow-[0_4px_20px_rgba(255,255,255,0.25)] transition duration-200 hover:bg-neutral-200 hover:scale-[1.02]"
            >
              Register for IEEE Day
            </a>
            <a
              href={WHATSAPP_INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm backdrop-blur-md transition duration-200 hover:border-white/35 hover:bg-white/10 hover:scale-[1.02]"
            >
              Join our WhatsApp group
            </a>
          </div>
        </div>

        {/* Bottom Right: Pill Badges */}
        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white/70 shadow-sm backdrop-blur-md transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
