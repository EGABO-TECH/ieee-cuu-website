import { IEEE_DAY_REGISTRATION_URL } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* gradient mesh backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-mesh-violet blur-3xl animate-float" />
        <div className="absolute top-10 right-[4%] h-[380px] w-[380px] rounded-full bg-mesh-cyan blur-3xl animate-floatSlow" />
        <div className="absolute bottom-[-140px] left-[35%] h-[300px] w-[300px] rounded-full bg-mesh-ember blur-3xl animate-float" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-20 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-28">
        <div className="animate-fadeUp">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulseDot" />
            IEEE Uganda Section · Region 8
          </span>

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Where Cavendish students{" "}
            <span className="gradient-text">learn, build and connect</span> with technology, globally.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg text-white/60">
            The IEEE Student Branch at Cavendish University Uganda is a home for students who want to go
            beyond the classroom — through technical talks, hands-on projects, competitions and a worldwide
            network of engineers, researchers and computing professionals.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#event"
              className="rounded-xl bg-gradient-to-r from-ember to-[#ff9a63] px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_0_30px_-6px_rgba(255,122,69,0.6)] transition hover:-translate-y-0.5"
            >
              Register for IEEE Day
            </a>
            <a
              href="#join"
              className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              Join our WhatsApp group
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: "6 Oct 2026", label: "Branch launch & IEEE Day" },
              { value: "Region 8", label: "Europe, Middle East & Africa" },
              { value: "24 hrs", label: "IEEEXtreme global challenge" },
            ].map((s) => (
              <div key={s.label}>
                <b className="block font-display text-xl text-white">{s.value}</b>
                <span className="text-xs text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <OrbitGraphic />
      </div>
    </section>
  );
}

function OrbitGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]" aria-hidden="true">
      <div className="absolute inset-0 rounded-full glass" />
      <div className="absolute inset-6 animate-spinSlow rounded-full border border-dashed border-white/15" />
      <div className="absolute inset-16 rounded-full border border-white/10" />

      {[
        { top: "6%", left: "48%", color: "bg-ember" },
        { top: "50%", left: "94%", color: "bg-cyan" },
        { top: "88%", left: "58%", color: "bg-violet-soft" },
        { top: "70%", left: "10%", color: "bg-mint" },
        { top: "22%", left: "14%", color: "bg-cyan" },
      ].map((n, i) => (
        <span
          key={i}
          className={`absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${n.color} shadow-[0_0_16px_2px_rgba(255,255,255,0.25)] animate-pulseDot`}
          style={{ top: n.top, left: n.left, animationDelay: `${i * 0.4}s` }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-cyan text-center shadow-[0_0_40px_-4px_rgba(124,92,255,0.6)]">
          <span className="font-display text-2xl font-extrabold text-white">IEEE</span>
          <span className="text-[10px] font-medium text-white/80">CUU BRANCH</span>
        </div>
      </div>

      <a
        href={IEEE_DAY_REGISTRATION_URL}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-surface/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur"
      >
        IEEE Day · 6 Oct 2026
      </a>
    </div>
  );
}
