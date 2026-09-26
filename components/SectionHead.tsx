export function SectionHead({
  kicker,
  title,
  body,
  light,
}: {
  kicker: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p
        className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
          light ? "text-[#2f5f68]" : "text-[#1A9090]"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`text-balance font-display text-3xl font-bold sm:text-4xl ${
          light ? "text-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-balance text-base ${light ? "text-muted" : "text-muted"}`}>{body}</p>
      )}
    </div>
  );
}
