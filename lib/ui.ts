/** Shared button styles, so every call to action on the site looks the same. */
const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-colors duration-200";

export const btn = {
  /** IEEE Yellow on navy. One per view. */
  accent: `${base} bg-[#FFC72C] text-[#002855] hover:bg-white`,
  /** IEEE Blue on light backgrounds. */
  primary: `${base} bg-[#00629B] text-white hover:bg-[#002855]`,
  /** Outline on light backgrounds. */
  secondary: `${base} border border-[#002855]/20 bg-white text-[#002855] hover:border-[#00629B] hover:text-[#00629B]`,
  /** Outline on navy or photos. */
  ghost: `${base} border border-white/40 text-white hover:border-white hover:bg-white/10`,
};

/** Arrow that nudges on hover; pair with `btn.*` (which sets `group`). */
export const nudge = "transition-transform duration-200 group-hover:translate-x-0.5";

export const container = "mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12";
