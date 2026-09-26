import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f6f3ee",
        "cream-card": "#ffffff",
        "cream-alt": "#f1efe9",
        bg: "#f6f3ee",
        surface: "#ffffff",
        surface2: "#f2efe9",
        surface3: "#e9e4dc",
        line: "rgba(17, 24, 39, 0.08)",
        paper: "#f6f3ee",
        ink: "#0f172a",
        navy: "#0f172a",
        muted: "#475569",
        ieee: {
          DEFAULT: "#0d5b8f",
          dark: "#0a446f",
          steel: "#1a6ca3",
          light: "#dfeef8",
          glow: "#e5f1fa",
          ice: "#edf6fb",
        },
        cuu: {
          DEFAULT: "#0d5b8f",
          deep: "#0a446f",
          steel: "#1a6ca3",
          ice: "#edf6fb",
          silver: "#cbd5e1",
          white: "#ffffff",
        },
        obsidian: {
          DEFAULT: "#0f172a",
          card: "#0f172a",
          border: "rgba(148, 163, 184, 0.18)",
        },
        violet: { DEFAULT: "#6d4aff", soft: "#e9e1ff", dim: "#3d2d8d" },
        cyan: { DEFAULT: "#0ea5e9", soft: "#dff5ff" },
        ember: { DEFAULT: "#f59e0b", soft: "#fff0d4" },
        mint: { DEFAULT: "#14b8a6", soft: "#dffaf5" },
      },
      fontFamily: {
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-plex)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
        "mesh-teal":   "radial-gradient(50% 50% at 50% 50%, rgba(13,110,110,0.18) 0%, rgba(13,110,110,0) 100%)",
        "mesh-violet": "radial-gradient(50% 50% at 50% 50%, rgba(124,92,255,0.15) 0%, rgba(124,92,255,0) 100%)",
        "mesh-cyan":   "radial-gradient(50% 50% at 50% 50%, rgba(13,155,155,0.20) 0%, rgba(13,155,155,0) 100%)",
        "mesh-ember":  "radial-gradient(50% 50% at 50% 50%, rgba(232,104,42,0.18) 0%, rgba(232,104,42,0) 100%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(24px,-28px)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-20px,24px)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 11s ease-in-out infinite",
        floatSlow: "floatSlow 14s ease-in-out infinite",
        spinSlow: "spinSlow 40s linear infinite",
        marquee: "marquee 28s linear infinite",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
