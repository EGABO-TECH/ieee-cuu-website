import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatNewsDate, getAllNews, getNewsBySlug, readingMinutes } from "@/lib/news";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/config/site";
import { NewsCard, NewsCover } from "@/components/news/NewsCard";
import { btn, container, nudge } from "@/lib/ui";

const SITE_HOST = SITE.canonicalUrl.replace(/^https?:\/\//, "");

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllNews().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getNewsBySlug(params.slug);
  if (!post) return { title: "Story not found" };
  return pageMetadata({ title: post.title, description: post.summary, path: `/news/${post.slug}` });
}

/** A paragraph ending in a site path ("... page: /volunteer") gets that path as a link. */
function Paragraph({ text }: { text: string }) {
  const m = text.match(/^([\s\S]*?)\s(\/[a-z0-9/-]+)\.?$/);
  if (!m) return <p>{text}</p>;
  return (
    <p>
      {m[1]}{" "}
      <Link href={m[2]}>
        {SITE_HOST}
        {m[2]}
      </Link>
    </p>
  );
}

function ShareLinks({ title, url }: { title: string; url: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "X", href: `https://x.com/intent/post?url=${u}&text=${t}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Share</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${l.label} (opens in a new tab)`}
          className="border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-[#00629B] hover:text-[#00629B]"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function NewsArticlePage({ params }: Props) {
  const post = getNewsBySlug(params.slug);
  if (!post) notFound();

  const url = `${SITE.canonicalUrl}/news/${post.slug}`;
  const related = getAllNews()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => b.tags.filter((t) => post.tags.includes(t)).length - a.tags.filter((t) => post.tags.includes(t)).length)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.canonicalUrl },
    mainEntityOfPage: url,
  };

  return (
    <main className="min-h-screen bg-bg text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative isolate overflow-hidden bg-[#002855] text-white [&_:focus-visible]:outline-white">
        <div aria-hidden="true" className="ph-grid sheet-grid m-fade absolute inset-0 -z-10" />
        <div className={`${container} pb-14 pt-32 sm:pt-40`}>
          <div className="mx-auto max-w-3xl">
            <Link href="/news" className="m-rise inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
              <ArrowLeft size={15} aria-hidden="true" /> All stories
            </Link>
            <ul className="m-rise mt-8 flex flex-wrap gap-2" style={{ "--d": "80ms" } as CSSProperties}>
              {post.tags.map((t) => (
                <li key={t} className="bg-white/10 px-2.5 py-1 text-xs font-medium text-[#CADCEA]">
                  {t}
                </li>
              ))}
            </ul>
            <h1
              className="m-rise mt-5 text-balance font-display text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em]"
              style={{ "--d": "140ms" } as CSSProperties}
            >
              {post.title}
            </h1>
            <p
              className="m-rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70"
              style={{ "--d": "220ms" } as CSSProperties}
            >
              <span className="font-semibold text-white">{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post)} min read</span>
            </p>
          </div>
        </div>
      </header>

      {post.coverImage && (
        <div className={`${container} -mt-px`}>
          <div className="mx-auto aspect-[16/9] max-w-4xl overflow-hidden">
            <NewsCover post={post} large />
          </div>
        </div>
      )}

      <article className={`${container} py-14 sm:py-20`}>
        <div className="mx-auto max-w-[42rem]">
          <p className="text-pretty border-l-2 border-[#FFC72C] pl-5 font-display text-xl font-semibold leading-relaxed text-ink">
            {post.summary}
          </p>
          <div className="article-body mt-10">
            {post.content.split("\n\n").map((para, i) => (
              <Paragraph key={i} text={para} />
            ))}
          </div>
          <div className="mt-12 border-t border-slate-200 pt-6">
            <ShareLinks title={post.title} url={url} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-slate-200 bg-white py-16">
          <div className={container}>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 id="related-title" className="font-display text-2xl font-bold text-ink">
                Keep reading
              </h2>
              <Link href="/news" className="text-sm font-semibold text-[#00629B] hover:text-[#002855]">
                All stories
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <NewsCard post={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-[#00629B] py-14 text-white">
        <div className={`${container} flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between`}>
          <div>
            <h2 className="font-display text-2xl font-bold">Be part of the next story</h2>
            <p className="mt-1 text-sm text-white/80">Workshops, competitions and IEEE membership, starting at Cavendish.</p>
          </div>
          <Link href="/join" className={btn.accent}>
            Join the branch
            <ArrowRight size={16} aria-hidden="true" className={nudge} />
          </Link>
        </div>
      </section>
    </main>
  );
}
