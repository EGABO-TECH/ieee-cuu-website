import { Play, ArrowRight } from "lucide-react";

export function VideoSpotlight() {
  return (
    <section className="bg-[#f5f5f1] py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative mx-auto max-w-[960px] overflow-hidden rounded-[1.5rem] border border-[#d4e7ea] bg-[#0f172a] shadow-[0_20px_45px_rgba(15,23,42,0.16)]">
          <div className="relative aspect-video w-full overflow-hidden bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.18),transparent_18%),linear-gradient(120deg,#1f2f3c_0%,#0f172a_48%,#1a2731_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05),transparent_40%,rgba(255,255,255,0.04))]" />
            <div className="absolute left-10 top-10 h-16 w-16 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-[#1a9090]/20 blur-3xl" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Play IEEE video"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:scale-105 hover:bg-white/15 sm:h-20 sm:w-20"
              >
                <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
