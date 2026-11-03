import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { PHOTOS } from "@/content/media";
import { container } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "Photo credits",
  description: "Sources and licences for the photographs used on the IEEE CUU Student Branch website.",
  path: "/credits",
});

export default function CreditsPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <PageHero
        eyebrow="Credits"
        title={
          <>
            Photo <em>credits</em>
          </>
        }
        lede="Every photograph on this site is the branch's own, published by IEEE, or openly licensed. Here is where each one comes from."
      />
      <section className="py-14 sm:py-20">
        <ul className={`${container} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {Object.entries(PHOTOS).map(([key, p]) => (
            <li key={key} className="flex flex-col border border-slate-200 bg-white">
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" style={{ objectPosition: p.focus }} />
              </div>
              <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2 p-5 text-sm">
                <dt className="text-slate-500">Author</dt>
                <dd className="font-medium text-ink">{p.author}</dd>
                <dt className="text-slate-500">Source</dt>
                <dd>
                  <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#00629B] underline underline-offset-2 hover:text-[#002855]">
                    {p.sourceName}
                  </a>
                </dd>
                <dt className="text-slate-500">Licence</dt>
                <dd>
                  {p.licenseUrl ? (
                    <a href={p.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-[#00629B] underline underline-offset-2 hover:text-[#002855]">
                      {p.license}
                    </a>
                  ) : (
                    p.license
                  )}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
        <p className={`${container} mt-10 text-sm text-slate-500`}>
          Openly licensed photos are shown cropped and colour-graded under the same licence. Team portraits are published with each
          person&apos;s consent.
        </p>
      </section>
    </main>
  );
}
