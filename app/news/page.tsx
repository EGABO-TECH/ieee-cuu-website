import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Calendar, Tag, ArrowRight, User } from "lucide-react";
import { getAllNews } from "@/lib/news";

export const metadata: Metadata = pageMetadata({
  title: "News",
  description:
    "Latest updates, announcements, event recaps, and stories from the IEEE Student Branch at Cavendish University Uganda.",
  path: "/news",
});

export default function NewsPage() {
  const posts = getAllNews();

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
              News &amp; Stories
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Announcements, workshop summaries, competition updates, and community milestones from our branch.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-slate-500">No news articles published yet.</p>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {post.tags.slice(0, 2).map((t) => (
                        <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h2 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#0D6E6E] transition">
                      <Link href={`/news/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/news/${post.slug}`}
                      className="inline-flex items-center gap-1 font-bold text-[#0D6E6E] hover:underline"
                    >
                      Read story <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
