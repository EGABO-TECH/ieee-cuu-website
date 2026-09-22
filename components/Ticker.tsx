export function Ticker() {
  return (
    <div className="border-b border-white/10 bg-bg/95 py-2 text-sm text-white/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6">
        <span>
          <strong className="text-white">IEEE Day 2026</strong>
          <span className="mx-2 text-ember">·</span>
          Branch Launch — 6 October, Cavendish University Uganda
        </span>
        <a href="#event" className="border-b border-white/30 hover:border-white hover:text-white">
          See event details →
        </a>
      </div>
    </div>
  );
}
