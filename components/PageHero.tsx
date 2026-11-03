import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { PHOTOS, creditLine, type PhotoKey } from "@/content/media";
import { container } from "@/lib/ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

type Props = {
  eyebrow: string;
  /** Wrap the accent words in <em>; they render in IEEE Yellow. */
  title: ReactNode;
  lede?: ReactNode;
  /** Buttons under the lede. */
  actions?: ReactNode;
  /** Extra content under the actions, such as event facts. */
  children?: ReactNode;
  /** A credited photo from content/media.ts. */
  photo?: PhotoKey;
  /** Replaces the photo slot, e.g. with an emblem. */
  aside?: ReactNode;
};

/**
 * The header every inner page opens with. Navy, IEEE grid, a slow ambient
 * glow, and a staggered entrance. With a photo, the image wipes in on the
 * right and carries its credit line.
 */
export function PageHero({ eyebrow, title, lede, actions, children, photo, aside }: Props) {
  const p = photo ? PHOTOS[photo] : undefined;
  const hasSide = Boolean(p || aside);

  return (
    <section className="relative isolate overflow-hidden bg-[#002855] text-white [&_:focus-visible]:outline-white">
      <div aria-hidden="true" className="ph-grid sheet-grid m-fade absolute inset-0 -z-10" />
      <div aria-hidden="true" className="ph-glow absolute -right-1/4 -top-1/3 -z-10 h-[46rem] w-[46rem]" />

      <div className={`${container} grid items-end gap-10 pb-14 pt-32 sm:pt-40 lg:grid-cols-12 lg:gap-12 lg:pb-20`}>
        <div className={hasSide ? "lg:col-span-7" : "lg:col-span-10"}>
          <p className="m-rise flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#CADCEA]" style={d(0)}>
            <span aria-hidden="true" className="m-rule inline-block h-0.5 w-8 bg-[#FFC72C]" style={d(150)} />
            {eyebrow}
          </p>
          <h1
            className="ph-title m-rise mt-5 text-balance font-display text-[clamp(2.25rem,5.2vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.02em]"
            style={d(100)}
          >
            {title}
          </h1>
          {lede && (
            <p className="m-rise mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg" style={d(220)}>
              {lede}
            </p>
          )}
          {actions && (
            <div className="m-rise mt-8 flex flex-wrap gap-3" style={d(320)}>
              {actions}
            </div>
          )}
          {children && (
            <div className="m-rise mt-10" style={d(420)}>
              {children}
            </div>
          )}
        </div>

        {p && (
          <figure className="lg:col-span-5">
            <div className="ph-figure relative aspect-[16/10] overflow-hidden bg-[#00629B] lg:aspect-[5/4]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                style={{ objectPosition: p.focus ?? "center" }}
              />
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-[#FFC72C]" />
            </div>
            <figcaption className="m-fade mt-3 text-xs text-white/60" style={d(900)}>
              <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:text-white">
                {creditLine(p)}
              </a>
            </figcaption>
          </figure>
        )}
        {!p && aside && <div className="m-fade lg:col-span-5" style={d(300)}>{aside}</div>}
      </div>
    </section>
  );
}
