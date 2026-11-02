"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { communities, WHATSAPP_INVITE_URL } from "@/lib/data";
import type { Community } from "@/lib/data";

const CARD_EDGE: Record<string, string> = {
  sky: "border-t-[#007DAF]",
  amber: "border-t-[#b87800]",
  violet: "border-t-[#772583]",
  rose: "border-t-[#862041]",
  fuchsia: "border-t-[#772583]",
  emerald: "border-t-[#006341]",
  cyan: "border-t-[#007377]",
  indigo: "border-t-[#00629B]",
  teal: "border-t-[#007377]",
  orange: "border-t-[#b95422]",
};

function SocietyVisual({ society, featured }: { society: Community; featured: boolean }) {
  return (
    <div className={`relative overflow-hidden ${featured ? "min-h-[220px] sm:min-h-[280px]" : "aspect-[16/9]"}`}>
      <Image
        src={society.image}
        alt={`Photograph representing ${society.focus.toLowerCase()}`}
        fill
        sizes={featured ? "(max-width: 640px) 100vw, (max-width: 1279px) 45vw, 25vw" : "(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 33vw"}
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />
      <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
        <span className="max-w-[60%] rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-ink">
          {society.category}
        </span>
        <span className={`rounded-sm px-2.5 py-1 text-[10px] font-semibold ${featured ? "bg-[#00629B] text-white" : "bg-slate-900/80 text-white"}`}>
          {featured ? "Pioneering at CUU" : "Future rollout"}
        </span>
      </div>
      <p className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-white sm:text-sm">
        {society.impact}
      </p>
    </div>
  );
}

function SocietyCard({ society, featured }: { society: Community; featured: boolean }) {
  return (
    <article
      className={`overflow-hidden rounded-md border border-ink/10 border-t-4 bg-white ${CARD_EDGE[society.color]} ${featured ? "grid grid-cols-1 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" : "flex flex-col"}`}
    >
      <SocietyVisual society={society} featured={featured} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#00629B]">
          {society.focus}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink">
          {society.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          {society.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/10 pt-4 mt-5">
          <span className="text-xs text-muted">IEEE Global Society</span>
          <a
            href={society.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#00629B] hover:text-[#002855]"
          >
            Visit society
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

const CATEGORIES = [
  "All Disciplines",
  "Computing & AI",
  "Robotics & Energy",
  "Health & Life Sciences",
  "Equity & Leadership",
  "Connectivity & Systems",
] as const;

export function Communities() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Disciplines");

  const filteredCommunities =
    selectedCategory === "All Disciplines"
      ? communities
      : communities.filter((c) => c.category === selectedCategory);
  const pioneeringCommunities = filteredCommunities.filter((community) => community.status === "pioneering");
  const futureCommunities = filteredCommunities.filter((community) => community.status === "future");

  return (
    <section id="communities" className="border-t border-ink/10 bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00629B]">
              IEEE technical communities
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Specialized IEEE societies
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base lg:col-span-6">
            The Computer Society and Women in Engineering are the first societies being pioneered at
            Cavendish University Uganda. Additional IEEE societies will be introduced individually.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter societies by discipline">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className={`rounded-md border px-3.5 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? "border-[#00629B] bg-[#00629B] text-white"
                    : "border-ink/15 bg-white text-slate-700 hover:border-[#00629B]/50 hover:text-[#00629B]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {pioneeringCommunities.length > 0 && (
          <div>
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">Pioneering at CUU</h3>
              <p className="text-sm text-muted">Computer Society and Women in Engineering</p>
            </div>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              {pioneeringCommunities.map((society) => (
                <SocietyCard key={society.id} society={society} featured />
              ))}
            </div>
          </div>
        )}

        {futureCommunities.length > 0 && (
          <div className="mt-12">
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">Future rollouts</h3>
              <p className="text-sm text-muted">Additional societies will be introduced one at a time.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {futureCommunities.map((society) => (
                <SocietyCard key={society.id} society={society} featured={false} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 overflow-hidden rounded-md border border-ink/15 bg-white">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-12 lg:items-stretch">
            <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#00629B]">
                No tech background required
              </p>
              <h3 className="mt-3 max-w-2xl font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                You don’t need to be a coder to shape the future.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                Solving the world&apos;s toughest challenges requires multidisciplinary vision. Whether you study
                Business, Public Health, Law, Design, Education, or Engineering: modern innovation
                demands diverse minds. In IEEE Cavendish University Uganda, your perspective is needed
                to ensure technology truly serves humanity.
              </p>

              <ul className="mt-6 grid gap-3 border-t border-ink/10 pt-5 text-sm font-medium text-slate-700 sm:grid-cols-3 sm:gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#00629B]" aria-hidden="true" />
                  Cross-Faculty Teams
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#00629B]" aria-hidden="true" />
                  Mentorship &amp; Workshops
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#00629B]" aria-hidden="true" />
                  Global IEEE Network
                </li>
              </ul>
            </div>

            <aside className="flex flex-col justify-center border-t border-ink/10 bg-[#F5F8FB] p-6 sm:p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10">
              <div className="mb-6 flex items-center justify-center gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-black text-ink">39</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">IEEE Societies</div>
                </div>
                <div className="h-8 w-px bg-ink/15" />
                <div className="text-center">
                  <div className="font-display text-3xl font-black text-ink">160+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Countries</div>
                </div>
                <div className="h-8 w-px bg-ink/15" />
                <div className="text-center">
                  <div className="font-display text-3xl font-black text-ink">All</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Faculties welcome</div>
                </div>
              </div>

              <a
                href={WHATSAPP_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00629B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#002855]"
              >
                <span>Find Your Community at CUU</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
