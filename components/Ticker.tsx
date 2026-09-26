export function Ticker() {
  return (
    <div className="border-b border-ieee/10 bg-bg/95 py-2 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6">
        <span>
          <strong className="text-ink">IEEE Day 2026</strong>
          <span className="mx-2 text-[#1A9090]">·</span>
          Branch Launch: 6 October, Cavendish University Uganda
        </span>
        <a
          href="/events/ieee-day"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-ink/20 hover:border-ieee hover:text-ink"
        >
          See event details →
        </a>
      </div>
    </div>
  );
}
