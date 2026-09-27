import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { Programs } from "@/components/Programs";
import { Communities } from "@/components/Communities";

export const metadata: Metadata = {
  title: "Programs & Societies | IEEE Student Branch Cavendish University Uganda",
  description:
    "Explore campus ambassador programs and specialized technical societies at Cavendish University Uganda.",
};

export default function ProgramsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[550px] w-[1100px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 50%, transparent 75%)" }}
        />

        {/* ── PAGE HERO ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dfeff0] px-3 py-1 text-[12px] font-medium text-[#2f5f68]">
            <span className="h-1 w-1 rounded-full bg-[#2f5f68]/50" aria-hidden="true" />
            Global ecosystems · campus leadership
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Ambassador Programs &amp;<br />
            <span className="text-[#1A9090] italic">Specialized Technical</span> Societies
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted">
            Accelerate your engineering journey. From official cloud ambassadorships with AWS to open-source Python initiatives and niche IEEE technical societies.
          </p>
        </section>

        {/* ── CORE COMPONENT EMBED (PROGRAMS) ── */}
        <Programs />

        {/* ── CORE COMPONENT EMBED (COMMUNITIES) ── */}
        <Communities />

      </main>

      <SiteFooter />
    </>
  );
}
