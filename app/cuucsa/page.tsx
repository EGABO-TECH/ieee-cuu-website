import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { CUUCSA } from "@/components/CUUCSA";

export const metadata: Metadata = {
  title: "CUUCSA | Cavendish University Uganda Computing Students Association",
  description:
    "Discover CUUCSA, the computing society at Cavendish University Uganda, focused on code, collaboration, and practical growth.",
};

export default function CUUCSAPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[550px] w-[1100px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 40%, transparent 75%)" }}
        />

        {/* ── PAGE HERO ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
          <h1 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            CUUCSA: Cavendish University Uganda<br />
            <span className="text-[#1A9090] italic">Computing Students</span> Association
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted">
            The vibrant technical engine uniting programmers, data enthusiasts, cybersecurity learners,
            and tech builders across Cavendish University Uganda in synergy with IEEE.
          </p>
        </section>

        {/* ── CORE COMPONENT EMBED (CUUCSA) ── */}
        <CUUCSA />

      </main>

      <SiteFooter />
    </>
  );
}
