import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photos from IEEE CUU Student Branch events, workshops, and community activities.",
  path: "/gallery",
});

// TODO(owner): Add photos to /public/images/gallery/ and populate the GALLERY array below.
// Each album maps to an event. Photos should have attendee consent before being published.
const GALLERY: {
  event: string;
  slug: string;
  date: string;
  photos: { src: string; alt: string; caption?: string }[];
}[] = [
  // Example (uncomment and fill in when photos are available):
  // {
  //   event: "IEEE Day 2026",
  //   slug: "ieee-day-2026",
  //   date: "6 October 2026",
  //   photos: [
  //     { src: "/images/gallery/ieee-day-2026/001.jpg", alt: "Opening ceremony", caption: "Branch Chair Mulondo Andrew at the podium" },
  //   ],
  // },
];

export default function GalleryPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <h1 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">Gallery</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Photos from branch events, workshops, and community activities.
            All photos are published with the consent of the people pictured.
          </p>

          {GALLERY.length === 0 ? (
            <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white py-24 px-6 text-center">
              <ImageIcon size={48} className="text-slate-200 mb-5" />
              <h2 className="font-serif text-2xl font-bold text-slate-700">Photos coming soon</h2>
              <p className="mt-3 max-w-md text-sm text-slate-400">
                Photos from IEEE Day 2026 and other branch activities will be published here once
                the branch team supplies them with attendee consent.
              </p>
              {/* TODO(owner): Upload event photos and populate the GALLERY array above */}
            </div>
          ) : (
            <div className="mt-12 space-y-16">
              {GALLERY.map((album) => (
                <section key={album.slug}>
                  <div className="mb-6">
                    <h2 className="font-serif text-2xl font-bold text-slate-900">{album.event}</h2>
                    <p className="text-sm text-slate-500 mt-1">{album.date}</p>
                  </div>
                  {album.photos.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center">
                      <p className="text-sm text-slate-400">
                        Photos from {album.event} are coming soon.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {album.photos.map((photo, i) => (
                        <div key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-slate-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {photo.caption && (
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <p className="text-xs text-white">{photo.caption}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
