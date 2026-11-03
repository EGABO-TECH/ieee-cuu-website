import Image from "next/image";

export type Person = {
  name: string;
  role: string;
  /** Second line under the name: a team, programme or note. */
  meta?: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
};

export function initials(name: string) {
  return name
    .replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, "")
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Accept only real LinkedIn profile or company URLs. */
export function linkedinUrl(url?: string) {
  if (!url) return undefined;
  return /^https:\/\/([a-z]{2,3}\.)?(www\.)?linkedin\.com\/(in|company|pub)\/[^\s]+$/i.test(url.trim()) ? url.trim() : undefined;
}

function LinkedInMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} fill-current`}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function LinkedInButton({ name, url, compact = false }: { name: string; url?: string; compact?: boolean }) {
  const href = linkedinUrl(url);
  const size = compact ? "h-9 w-9" : "h-10 px-3.5";

  if (!href) {
    return (
      <span
        aria-label={`${name}'s LinkedIn profile is not listed yet`}
        title="LinkedIn profile coming soon"
        className={`inline-flex ${size} cursor-not-allowed items-center justify-center gap-2 border border-dashed border-slate-300 text-xs font-medium text-slate-400`}
      >
        <LinkedInMark />
        {!compact && "Soon"}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn (opens in a new tab)`}
      className={`inline-flex ${size} items-center justify-center gap-2 bg-[#0A66C2] text-xs font-semibold text-white transition-colors hover:bg-[#004182]`}
    >
      <LinkedInMark />
      {!compact && "LinkedIn"}
    </a>
  );
}

function Portrait({ person }: { person: Person }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[#E6EFF6]">
      {person.photo ? (
        <Image
          src={person.photo}
          alt={`Portrait of ${person.name}`}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full items-center justify-center bg-[linear-gradient(rgba(0,98,155,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,98,155,0.07)_1px,transparent_1px)] bg-[size:24px_24px]"
        >
          <span className="font-display text-5xl font-bold tracking-tight text-[#00629B]/80 transition-transform duration-500 ease-out group-hover:scale-105">
            {initials(person.name)}
          </span>
        </div>
      )}
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#FFC72C] transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </div>
  );
}

/** Portrait card for executive and core-team members. */
export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#00629B]/40 hover:shadow-[0_18px_40px_-24px_rgba(0,40,85,0.45)]">
      <Portrait person={person} />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00629B]">{person.role}</p>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink">{person.name}</h3>
        {person.meta && <p className="mt-0.5 text-sm text-slate-500">{person.meta}</p>}
        {person.bio && <p className="mt-3 text-sm leading-relaxed text-slate-600">{person.bio}</p>}
        <div className="mt-auto pt-5">
          <LinkedInButton name={person.name} url={person.linkedin} />
        </div>
      </div>
    </article>
  );
}

/** One-line card for larger groups such as batch representatives. */
export function PersonRow({ person }: { person: Person }) {
  return (
    <div className="flex items-center gap-3 border border-slate-200 bg-white p-3 transition-colors hover:border-[#00629B]/40">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#E6EFF6] font-display text-sm font-bold text-[#00629B]"
      >
        {initials(person.name)}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{person.name}</p>
        <p className="truncate text-xs text-slate-500">{person.role}</p>
      </div>
      <LinkedInButton name={person.name} url={person.linkedin} compact />
    </div>
  );
}
