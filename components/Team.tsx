"use client";

import { useState } from "react";
import Image from "next/image";
import { team } from "@/lib/data";
import { ArrowUpRight, Camera, Linkedin, Star } from "lucide-react";

/** Generate initials from a full name */
function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Avatar: shows photo if available, otherwise styled initials placeholder */
function MemberAvatar({
  name,
  image,
  size = "md",
}: {
  name: string;
  image: string;
  size?: "lg" | "md";
}) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image && image.length > 0 && !imgError);

  const dim =
    size === "lg"
      ? "h-48 w-48 sm:h-56 sm:w-56 rounded-2xl"
      : "h-20 w-20 rounded-full";

  return (
    <div
      className={`relative shrink-0 overflow-hidden border-2 border-[#C8A96E]/30 bg-[#0d0e17] shadow-lg ${dim}`}
    >
      {hasImage ? (
        <Image
          src={image}
          alt={name}
          fill
          sizes={size === "lg" ? "224px" : "80px"}
          className="object-cover object-top"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#C8A96E]/20 via-[#0c0d14] to-[#7C5CFF]/10">
          <span className="font-serif text-xl font-black tracking-wider text-white drop-shadow-sm">
            {initials(name)}
          </span>
          <span className="mt-1 flex items-center gap-1 text-[9px] font-semibold uppercase tracking-widest text-white/30">
            <Camera size={8} />
            Photo
          </span>
        </div>
      )}
    </div>
  );
}

/** LinkedIn connect button */
function LinkedInButton({
  name,
  href,
  isChair = false,
}: {
  name: string;
  href?: string;
  isChair?: boolean;
}) {
  // If direct URL is provided, use it; otherwise search for that specific person at Cavendish University Uganda
  const effectiveHref =
    href && href !== "#" && (href.startsWith("http://") || href.startsWith("https://"))
      ? href
      : `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(
          name + " Cavendish University Uganda"
        )}`;

  return (
    <a
      href={effectiveHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Connect with ${name} on LinkedIn`}
      className={`group/li inline-flex items-center gap-2 rounded-xl transition-all duration-300 ${
        isChair
          ? "border border-[#0A66C2]/40 bg-[#0A66C2]/15 px-5 py-2.5 text-xs font-bold text-[#70B5F9] shadow-[0_0_20px_rgba(10,102,194,0.2)] hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_0_30px_rgba(10,102,194,0.45)] hover:-translate-y-0.5"
          : "w-full justify-between border border-white/[0.08] bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-white/80 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/15 hover:text-[#70B5F9] hover:shadow-[0_4px_16px_rgba(10,102,194,0.25)] hover:-translate-y-0.5"
      }`}
    >
      <span className="flex items-center gap-2">
        {/* LinkedIn Official SVG Icon */}
        <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#0A66C2] text-white shadow-sm transition-transform duration-300 group-hover/li:scale-110">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
          </svg>
        </span>
        <span className="tracking-wide">
          {isChair ? "Connect on LinkedIn" : "LinkedIn Profile"}
        </span>
      </span>

      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover/li:translate-x-0.5 group-hover/li:-translate-y-0.5 text-white/50 group-hover/li:text-current"
      />
    </a>
  );
}

export function Team() {
  const [chair, ...rest] = team;

  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#09090B] py-28 sm:py-36"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(ellipse at center, #C8A96E 0%, #7C5CFF 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Section Header ── */}
        <div className="mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#C8A96E]">
            <Star size={11} />
            Who Runs the Branch
          </span>
          <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
            Meet the CUU Student{" "}
            <em className="not-italic italic text-[#C8A96E]">Branch team.</em>
          </h2>
          <div className="mt-6 h-[3px] w-14 rounded-full bg-[#C56C47]" />
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-[#A8A8B3]">
            The Branch runs on technical, administrative, financial, mobilisation and communication
            roles — every member plays a defining part.
          </p>
        </div>

        {/* ── Chair: Full-Width Hero Card ── */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-[#C8A96E]/25 bg-gradient-to-r from-[#13131c] via-[#0d0e14] to-[#09090b] shadow-2xl transition-all duration-500 hover:border-[#C8A96E]/50 hover:shadow-[0_0_60px_rgba(200,169,110,0.12)]">
          {/* Decorative corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #C8A96E 0%, transparent 70%)" }}
          />

          <div className="flex flex-col sm:flex-row">
            {/* Left: Photo */}
            <div className="relative flex-none sm:w-72 lg:w-80">
              <div className="relative h-64 w-full overflow-hidden sm:h-full sm:min-h-[340px]">
                {chair.image && chair.image.length > 0 ? (
                  <Image
                    src={chair.image}
                    alt={chair.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#C8A96E]/15 via-[#0c0d14] to-[#09090B]">
                    {/* Decorative dot grid */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgba(200,169,110,0.4) 1px, transparent 0)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-[#C8A96E]/40 bg-[#C8A96E]/20 shadow-[0_0_40px_rgba(200,169,110,0.25)]">
                        <span className="font-serif text-3xl font-black tracking-wider text-[#E6CA85]">
                          {initials(chair.name)}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                        <Camera size={10} />
                        Official Photo Slot
                      </span>
                    </div>
                    <div className="pointer-events-none absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-widest text-white/10">
                      IEEE CUU Branch
                    </div>
                  </div>
                )}
                {/* Right-side gradient fade to card body */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#13131c] hidden sm:block" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#13131c] via-transparent to-transparent sm:hidden" />
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-1 flex-col justify-center p-8 sm:p-10 lg:p-12">
              {/* Role kicker */}
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C8A96E]">
                {chair.department} · {chair.role}
              </p>

              {/* Name */}
              <h3 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {chair.name}
              </h3>

              {/* Accent divider */}
              <div className="mt-4 mb-5 h-[3px] w-12 rounded-full bg-[#C56C47]" />

              {/* Description */}
              <p className="mb-7 max-w-xl text-base leading-[1.8] text-[#C8C8D5]">
                {chair.description}
              </p>

              {/* LinkedIn */}
              <div>
                <LinkedInButton name={chair.name} href={chair.linkedin} isChair={true} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Rest of Team: Compact Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96E]/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:bg-[#0e0f18]"
            >
              {/* Subtle corner glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: "radial-gradient(circle, #C8A96E 0%, transparent 70%)" }}
              />

              {/* Circular Avatar */}
              <div className="mb-4">
                <MemberAvatar name={member.name} image={member.image} size="md" />
              </div>

              {/* Name & Role */}
              <h4 className="font-serif text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#E6CA85]">
                {member.name}
              </h4>
              <p className="mt-0.5 text-sm font-semibold text-white/80">{member.role}</p>

              {/* Department tag */}
              <p className="mt-1.5 mb-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C8A96E]/70">
                {member.department}
              </p>

              {/* Description */}
              <p className="flex-1 text-xs leading-[1.7] text-[#A8A8B3]">{member.description}</p>

              {/* LinkedIn */}
              <div className="mt-5 border-t border-white/[0.06] pt-4">
                <LinkedInButton name={member.name} href={member.linkedin} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
