import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Section header used across the site: blue rule, kicker, title, optional link. */
export function SectionHead({
  kicker,
  title,
  body,
  href,
  linkLabel,
  id,
}: {
  kicker: string;
  title: string;
  body?: string;
  href?: string;
  linkLabel?: string;
  id?: string;
  /** @deprecated kept for older call sites; has no effect. */
  light?: boolean;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00629B]">
          <span aria-hidden="true" className="h-0.5 w-8 bg-[#00629B]" />
          {kicker}
        </p>
        <h2 id={id} className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {body && <p className="mt-4 text-pretty text-base leading-relaxed text-slate-500">{body}</p>}
      </div>
      {href && linkLabel && (
        <Link href={href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#00629B] hover:text-[#002855]">
          {linkLabel}
          <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
