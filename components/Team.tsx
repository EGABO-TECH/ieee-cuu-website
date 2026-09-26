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
      className={`relative shrink-0 overflow-hidden border-2 border-[#1A9090]/40 bg-white shadow-lg ${dim}`}
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
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0D6E6E]/30 via-[#E0DDD5] to-[#1A9090]/20">
          <span className="font-serif text-xl font-black tracking-wider text-white drop-shadow-sm">
            {initials(name)}
          </span>
          <span className="mt-1 flex items-center gap-1 text-[9px] font-semibold uppercase tracking-widest text-muted/50">
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
          : "w-full justify-between border border-ink/[0.08] bg-ink/[0.04] px-3.5 py-2 text-xs font-semibold text-ink/80 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/15 hover:text-[#70B5F9] hover:shadow-[0_4px_16px_rgba(10,102,194,0.25)] hover:-translate-y-0.5"
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
        className="transition-transform duration-300 group-hover/li:translate-x-0.5 group-hover/li:-translate-y-0.5 text-muted group-hover/li:text-current"
      />
    </a>
  );
}

export function Team() {
  const [chair, ...rest] = team;

  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-ieee/10 bg-bg py-28 sm:py-36"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ── Section Header ── */}
        <div className="mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A9090]/40 bg-[#0D6E6E]/20 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#E8F5F5]">
            <Star size={11} className="text-[#1A9090]" />
            Who Runs the Branch
          </span>
          <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            Meet the CUU Student{" "}
            <em className="not-italic italic text-[#1A9090]">Branch team.</em>
          </h2>
          <div className="mt-6 h-[3px] w-14 rounded-full bg-[#0D6E6E]" />
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-muted">  
            The Branch runs on technical, administrative, financial, mobilisation and communication
            roles; every member plays a defining part.
          </p>
        </div>

        {/* ── Chair: Full-Width Hero Card ── */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-[#1A9090]/40 bg-gradient-to-r from-[#E0DDD5] via-[#E8F0F0] to-[#F7F4EF] shadow-2xl transition-all duration-500 hover:border-[#E8F5F5]/50 hover:shadow-[0_0_60px_rgba(26,144,144,0.25)]">
          {/* Decorative corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #1A9090 0%, transparent 70%)" }}
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
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0D6E6E]/25 via-[#E0DDD5] to-[#F7F4EF]">
                    {/* Decorative dot grid */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgba(26,144,144,0.5) 1px, transparent 0)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-[#1A9090]/60 bg-[#0D6E6E]/40 shadow-[0_0_40px_rgba(13,110,110,0.35)]">
                        <span className="font-serif text-3xl font-black tracking-wider text-[#FFFFFF]">
                          {initials(chair.name)}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5 rounded-full border border-ieee/15 bg-bg/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted/70">
                        <Camera size={10} />
                        Official Photo Slot
                      </span>
                    </div>
                    <div className="pointer-events-none absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-widest text-muted/20">
                      IEEE CUU Branch
                    </div>
                  </div>
                )}
                {/* Right-side gradient fade to card body */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#E0DDD5] hidden sm:block" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E0DDD5] via-transparent to-transparent sm:hidden" />
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-1 flex-col justify-center p-8 sm:p-10 lg:p-12">
              {/* Role kicker */}
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#E8F5F5]">
                {chair.department} · {chair.role}
              </p>

              {/* Name */}
              <h3 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {chair.name}
              </h3>

              {/* Accent divider */}
              <div className="mt-4 mb-5 h-[3px] w-12 rounded-full bg-[#1A9090]" />

              {/* Description */}
              <p className="mb-7 max-w-xl text-base leading-[1.8] text-muted">
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
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ieee/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1A9090]/50 hover:shadow-[0_8px_24px_rgba(13,110,110,0.12)] hover:bg-white"
            >
              {/* Subtle corner glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: "radial-gradient(circle, #1A9090 0%, transparent 70%)" }}
              />

              {/* Circular Avatar */}
              <div className="mb-4">
                <MemberAvatar name={member.name} image={member.image} size="md" />
              </div>

              {/* Name & Role */}
              <h4 className="font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-ieee">
                {member.name}
              </h4>
              <p className="mt-0.5 text-sm font-semibold text-muted">{member.role}</p>

              {/* Department tag */}
              <p className="mt-1.5 mb-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#E8F5F5]/70">
                {member.department}
              </p>

              {/* Description */}
              <p className="flex-1 text-xs leading-[1.7] text-muted/85">{member.description}</p>

              {/* LinkedIn */}
              <div className="mt-5 border-t border-ieee/10 pt-4">
                <LinkedInButton name={member.name} href={member.linkedin} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
