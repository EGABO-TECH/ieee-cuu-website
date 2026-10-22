import fs from "fs";
import path from "path";

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
  coverImage?: string;
  content: string;
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
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (err) {
    console.error("Error reading news posts:", err);
    return [];
  }
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const posts = getAllNews();
  return posts.find((p) => p.slug === slug) || null;
}
