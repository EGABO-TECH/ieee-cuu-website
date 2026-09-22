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
      <p className={`mb-3 text-sm font-semibold ${light ? "text-ink/60" : "text-cyan-soft"}`}>{kicker}</p>
      <h2
        className={`text-balance font-display text-3xl font-bold sm:text-4xl ${
          light ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-balance text-base ${light ? "text-ink/60" : "text-white/60"}`}>{body}</p>
      )}
    </div>
  );
}
