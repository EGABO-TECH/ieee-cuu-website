import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { getNewsBySlug, getAllNews } from "@/lib/news";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllNews();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getNewsBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | IEEE Student Branch CUU News`,
    description: post.summary,
  };
}

export default function NewsArticlePage({ params }: Props) {
  const post = getNewsBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0D6E6E] mb-8"
          >
            <ArrowLeft size={14} /> Back to all stories
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-slate-200/70 px-3 py-1 text-xs font-semibold text-slate-700">
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 border-b border-slate-200 pb-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
          </div>

          <div className="mt-8 prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 font-medium mb-6">
              {post.summary}
            </p>

            <div className="space-y-4 text-base leading-relaxed text-slate-600">
              {post.content.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Join branch CTA at end of story */}
          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 text-center">
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Get involved with the Branch
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
              Participate in upcoming technical workshops, coding cohorts, and IEEE membership activities.
            </p>
            <div className="mt-6">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
              >
                Join the IEEE Branch
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
