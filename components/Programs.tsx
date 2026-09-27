"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { programs } from "@/lib/data";

const ACCENT = {
  cyan: {
    stage: "bg-[#f3eee4]",
    edge: "border-t-[#d88900]",
    label: "text-[#8a570b]",
    logoBg: "bg-[#111827]",
    logoBorder: "border-[#d88900]/25",
    avatarBg: "bg-[#f3eee4]",
    avatarText: "text-[#8a570b]",
    cta: "bg-[#182433] text-white hover:bg-[#26394c]",
    check: "text-[#a96c00]",
  },
  violet: {
    stage: "bg-[#f1eef6]",
    edge: "border-t-[#7654a5]",
    label: "text-[#5f437f]",
    logoBg: "bg-[#111318]",
    logoBorder: "border-[#7654a5]/20",
    avatarBg: "bg-[#f1eef6]",
    avatarText: "text-[#5f437f]",
    cta: "bg-[#493967] text-white hover:bg-[#382b50]",
    check: "text-[#6b4d91]",
  },
  ember: {
    stage: "bg-[#eaf2f0]",
    edge: "border-t-[#0d6e6e]",
    label: "text-[#0d6e6e]",
    logoBg: "bg-white",
    logoBorder: "border-[#0d6e6e]/15",
    avatarBg: "bg-[#eaf2f0]",
    avatarText: "text-[#0d6e6e]",
    cta: "bg-[#0d6e6e] text-white hover:bg-[#095757]",
    check: "text-[#0d6e6e]",
  },
} as const;

/** Generate initials from a full name */
function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/** Fixed portrait frame that accepts an uploaded ambassador photo. */
function AmbassadorAvatar({
  name,
  image,
  accent,
}: {
  name: string;
  image?: string;
  accent: { avatarBg: string; avatarText: string };
}) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image && image.length > 0 && !imgError);

  return (
    <div className={`relative h-24 w-20 shrink-0 overflow-hidden rounded-sm border border-ink/10 ${accent.avatarBg}`}>
      {hasImage ? (
        <Image
          src={image!}
          alt={name}
          fill
          sizes="80px"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={`flex h-full items-center justify-center font-serif text-xl font-semibold ${accent.avatarText}`}>
          {initials(name)}
        </div>
      )}
    </div>
  );
}

export function Programs() {
  return (
    <section id="programs" className="border-t border-ink/10 bg-bg py-16 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="max-w-xl font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Student programs and opportunities
            </h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Explore global initiatives represented at Cavendish University Uganda. Each program
              includes its focus areas, benefits, and local campus contacts.
            </p>
          </div>
        </div>

        {/* ── Program cards ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {programs.map((p) => {
            const s = ACCENT[p.accent];
            return (
              <div
                key={p.title}
                className={`flex h-full flex-col overflow-hidden rounded-md border border-ink/10 border-t-4 bg-white ${s.edge}`}
              >
                <div className={`flex min-h-[176px] items-center justify-between gap-5 px-5 py-6 sm:px-6 ${s.stage}`}>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${s.label}`}>
                      {p.tag}
                    </p>
                    <h3 className="mt-3 max-w-[15rem] font-serif text-xl font-bold leading-tight text-ink sm:text-2xl">
                      {p.title}
                    </h3>
                  </div>
                  <div className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-sm border p-3 sm:h-24 sm:w-24 ${s.logoBg} ${s.logoBorder}`}>
                    <Image
                      src={p.image}
                      alt={`${p.title} official logo`}
                      fill
                      className="object-contain p-3"
                      sizes="96px"
                    />
                  </div>
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-sm leading-relaxed text-muted">{p.body}</p>

                  <div className="mt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Program benefits</p>
                    <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-2 border-y border-ink/10 py-3">
                      {p.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2 text-xs leading-snug text-ink/80">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${s.check}`} aria-hidden="true" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                        Campus representatives
                      </h4>
                      <span className="text-[10px] text-muted">
                        {p.ambassadors.length} {p.ambassadors.length === 1 ? "contact" : "contacts"}
                      </span>
                    </div>
                    <div className="mt-2 divide-y divide-ink/10 border-t border-ink/10">
                      {p.ambassadors.map((amb) => (
                        <div key={amb.name} className="flex items-center gap-4 py-3 last:pb-0">
                          <AmbassadorAvatar name={amb.name} image={amb.image} accent={s} />
                          <div className="min-w-0">
                            <h5 className="break-words text-sm font-semibold text-ink">{amb.name}</h5>
                            <p className="mt-1 text-xs leading-relaxed text-muted">{amb.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition-colors ${s.cta}`}
                    >
                      Explore program
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

