import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight, ImageIcon } from "lucide-react";
import { getEventBySlug } from "@/lib/events";



const FAQS = [
  {
    q: "Can I still join the IEEE Student Branch?",
    a: "Yes. Register your interest on the Join page, then follow the steps to become an IEEE Student Member when you are ready.",
  },
  {
    q: "Do I have to be a Computer Science or Engineering student?",
    a: "No. IEEE is interdisciplinary. Students from every faculty are welcome at branch activities.",
  },
];

export function IEEEDayRecap() {
  const event = getEventBySlug("ieee-day-2026");
  const recap = event?.recap?.summary;
  const photos = event?.recap?.photos ?? [];

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-28 sm:pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-10 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Recap
            </span>
            <Link href="/events" className="text-xs text-[#0D6E6E] transition hover:text-[#1A9090]">
              ← All events
            </Link>
          </div>
        </div>

        <section className="mx-auto max-w-4xl px-4 sm:px-10 py-10">
          <h1 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl">
            IEEE Day 2026 at the American Center, Kabalagala
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5">
              <Calendar size={16} className="text-[#0D6E6E]" aria-hidden="true" />
              Tuesday 6 October 2026
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5">
              <MapPin size={16} className="text-[#0D6E6E]" aria-hidden="true" />
              American Center, Kabalagala, Kampala
            </span>
          </div>

          {recap && (
            <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg">{recap}</p>
          )}

          <div className="mt-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Photos</h2>
            {photos.length > 0 ? (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {photos.map((photo) => (
                  <figure key={photo.src}>
                    <div className="relative aspect-square overflow-hidden rounded-xl border border-slate-100">
                      <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 280px" />
                    </div>
                    {photo.caption && <figcaption className="mt-1.5 text-xs text-slate-500">{photo.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
                <ImageIcon size={28} className="mb-3 text-slate-300" aria-hidden="true" />
                <p className="text-sm text-slate-500">
                  Photos and the certificate of approval will be added here soon.
                </p>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/events/branch-launch-2026"
              className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
            >
              Next: Official Branch Launch, 4 November
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Join the branch
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 sm:px-10 pb-24 pt-6">
          <h2 className="font-serif text-2xl font-bold text-slate-900">Questions</h2>
          <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-slate-900">
                  {faq.q}
                  <span aria-hidden="true" className="shrink-0 text-xl leading-none text-[#1A9090] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
