"use client";

import { useState } from "react";
import Image from "next/image";
import { team } from "@/lib/data";
import { ArrowUpRight, Linkedin } from "lucide-react";

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function MemberPortrait({
  name,
  image,
  className = "",
}: {
  name: string;
  image: string;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image && image.length > 0 && !imgError);

  return (
    <div className={`relative shrink-0 overflow-hidden bg-[#e8efed] ${className}`}>
      {hasImage ? (
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-top"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-serif text-3xl font-semibold text-[#0D6E6E]">
            {initials(name)}
          </span>
        </div>
      )}
    </div>
  );
}

function LinkedInButton({
  name,
  href,
  fullWidth = false,
}: {
  name: string;
  href?: string;
  fullWidth?: boolean;
}) {
  const hasProfile = Boolean(href && /^https?:\/\//.test(href) && href !== "#");
  const targetHref = hasProfile
    ? href!
    : `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(`${name} Cavendish University Uganda`)}`;

  return (
    <a
      href={targetHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Connect with ${name} on LinkedIn`}
      className={`inline-flex items-center justify-between gap-3 rounded-sm border border-[#0A66C2]/25 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-[#0A66C2] hover:bg-[#f4f8fc] hover:text-[#0A66C2] ${fullWidth ? "w-full" : ""}`}
    >
      <span className="flex items-center gap-2">
        <Linkedin size={15} className="text-[#0A66C2]" aria-hidden="true" />
        {hasProfile ? "View LinkedIn profile" : "Search on LinkedIn"}
      </span>
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export function Team() {
  const [chair, ...rest] = team;

  return (
    <section id="team" className="border-t border-ink/10 bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10">
          <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            Meet the IEEE CUU Student{" "}
            <em className="not-italic italic text-[#1A9090]">Branch Team</em>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Executive leadership, technical coordination, administration, finance, and student outreach.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-md border border-ink/10 bg-white lg:grid-cols-[280px_minmax(0,1fr)]">
          <MemberPortrait
            name={chair.name}
            image={chair.image}
            className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[320px]"
          />
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0D6E6E]">
              {chair.department} <span className="px-1 text-slate-400">/</span> {chair.role}
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-ink sm:text-3xl">
              {chair.name}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {chair.description}
            </p>
            <div className="mt-5 max-w-56">
              <LinkedInButton name={chair.name} href={chair.linkedin} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {rest.map((member) => (
            <article key={member.name} className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-4">
              <div className="flex items-start gap-4">
                <MemberPortrait name={member.name} image={member.image} className="h-28 w-24 rounded-sm" />
                <div className="min-w-0 pt-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0D6E6E]">
                    {member.department}
                  </p>
                  <h4 className="mt-2 break-words font-serif text-lg font-bold leading-snug text-ink">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-slate-600">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                {member.description}
              </p>
              <div className="mt-4 border-t border-ink/10 pt-3">
                <LinkedInButton name={member.name} href={member.linkedin} fullWidth />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
