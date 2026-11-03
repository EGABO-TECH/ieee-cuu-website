import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatNewsDate, readingMinutes, type NewsPost } from "@/lib/news";

/** Three cover treatments in IEEE colours, picked from the slug so each post keeps its own. */
const TONES = [
  "bg-[#00629B] text-white",
  "bg-[#002855] text-white",
  "bg-[#E6EFF6] text-[#002855]",
];

function tone(slug: string) {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return TONES[h % TONES.length];
}

/** Photo cover when the post has one, otherwise a typographic cover. */
export function NewsCover({ post, large = false }: { post: NewsPost; large?: boolean }) {
  if (post.coverImage) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#002855]">
        <Image
          src={post.coverImage}
          alt={post.coverAlt ?? ""}
          fill
          sizes={large ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  const t = tone(post.slug);
  const dark = !t.includes("E6EFF6");
  const topic = post.tags[0] ?? "News";

  return (
    <div aria-hidden="true" className={`relative flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-8 ${t}`}>
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 ${
          dark
            ? "bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(0,98,155,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,98,155,0.08)_1px,transparent_1px)]"
        } bg-[size:32px_32px]`}
      />
      <span className="relative flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] opacity-75">
        <span>IEEE CUU SB</span>
        <span>{formatNewsDate(post.date, "short")}</span>
      </span>
      <span className="relative">
        <span className={`mb-4 block h-1 w-10 ${dark ? "bg-[#FFC72C]" : "bg-[#00629B]"}`} />
        <span className={`block text-balance font-display font-bold leading-[0.95] tracking-[-0.03em] ${large ? "text-5xl sm:text-7xl" : "text-4xl"}`}>
          {topic}
        </span>
      </span>
    </div>
  );
}

function Meta({ post }: { post: NewsPost }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-xs text-slate-500">
      <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingMinutes(post)} min read</span>
    </p>
  );
}

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="group relative flex h-full flex-col border border-slate-200 bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#00629B]/40 hover:shadow-[0_18px_40px_-24px_rgba(0,40,85,0.45)]">
      <div className="aspect-[16/10] overflow-hidden">
        <NewsCover post={post} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Meta post={post} />
        <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink">
          <Link href={`/news/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-[#00629B]">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.summary}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#00629B]">
          Read story
          <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

export function FeaturedNewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="group relative grid overflow-hidden border border-slate-200 bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#00629B]/40 hover:shadow-[0_24px_60px_-30px_rgba(0,40,85,0.5)] lg:grid-cols-12">
      <div className="aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[24rem]">
        <NewsCover post={post} large />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00629B]">Latest story</p>
        <h2 className="mt-4 text-balance font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
          <Link href={`/news/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-[#00629B]">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{post.summary}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <Meta post={post} />
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00629B]">
            Read story
            <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
