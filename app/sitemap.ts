import { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { getAllEvents } from "@/lib/events";
import { getAllNews } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.canonicalUrl;
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/branch",
    "/join",
    "/volunteer",
    "/events",
    "/gallery",
    "/news",
    "/projects",
    "/resources",
    "/programs",
    "/cuucsa",
    "/team",
    "/partners",
    "/governance",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: (route === "" || route === "/events" || route === "/news"
      ? "weekly"
      : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route === "" ? 1.0 : route === "/join" || route === "/events" ? 0.9 : 0.7,
  }));

  const events = getAllEvents().map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event.startsAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const news = getAllNews().map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...events, ...news];
}
