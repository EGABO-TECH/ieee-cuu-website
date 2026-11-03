import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { getAllNews } from "@/lib/news";
import { PageHero } from "@/components/PageHero";
import { FeaturedNewsCard, NewsCard } from "@/components/news/NewsCard";
import { container } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "News",
  description:
    "Announcements, event recaps and stories from the IEEE Student Branch at Cavendish University Uganda.",
  path: "/news",
});

export default function NewsPage() {
  const [featured, ...rest] = getAllNews();
  const topics = Array.from(new Set(getAllNews().flatMap((p) => p.tags))).slice(0, 8);

  return (
    <main className="min-h-screen bg-bg text-ink">
      <PageHero
        eyebrow="News & stories"
        title={
          <>
            What&apos;s happening <em>at the branch</em>
          </>
        }
        lede="Announcements, event recaps and practical guides from the IEEE Student Branch at Cavendish University Uganda."
      >
        {topics.length > 0 && (
          <ul aria-label="Topics covered" className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <li key={t} className="border border-white/25 px-3 py-1 text-xs text-white/80">
                {t}
              </li>
            ))}
          </ul>
        )}
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className={container}>
          {!featured ? (
            <p className="border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
              No stories published yet.
            </p>
          ) : (
            <>
              <FeaturedNewsCard post={featured} />
              {rest.length > 0 && (
                <>
                  <h2 className="mb-6 mt-16 font-display text-2xl font-bold text-ink">More stories</h2>
                  <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post) => (
                      <li key={post.slug}>
                        <NewsCard post={post} />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
