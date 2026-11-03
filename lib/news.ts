import fs from "fs";
import path from "path";

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
  /** Optional photo; without one the card uses a typographic cover. */
  coverImage?: string;
  coverAlt?: string;
  /** Optional photo set shown after the story. */
  gallery?: { src: string; alt: string; caption?: string; width: number; height: number }[];
  galleryTitle?: string;
  /** Pin to the top of /news and the home page. */
  featured?: boolean;
  content: string;
}

/** About 220 words a minute, never less than one. */
export function readingMinutes(post: Pick<NewsPost, "content" | "summary">) {
  const words = `${post.summary} ${post.content}`.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatNewsDate(iso: string, month: "long" | "short" = "long") {
  // Dates are calendar days; format in UTC so the day never shifts.
  return new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month,
    year: "numeric",
    timeZone: "UTC",
  });
}

const NEWS_DIR = path.join(process.cwd(), "content", "news");

export function getAllNews(): NewsPost[] {
  try {
    if (!fs.existsSync(NEWS_DIR)) {
      return [];
    }
    const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".json"));
    const posts: NewsPost[] = files.map((file) => {
      const fullPath = path.join(NEWS_DIR, file);
      const raw = fs.readFileSync(fullPath, "utf-8");
      return JSON.parse(raw) as NewsPost;
    });

    // Sort descending by date
    return posts.sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug)
    );
  } catch (err) {
    console.error("Error reading news posts:", err);
    return [];
  }
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const posts = getAllNews();
  return posts.find((p) => p.slug === slug) || null;
}
