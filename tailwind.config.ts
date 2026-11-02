import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official IEEE palette (Brand Color Quick Reference Guide, 21-DCI-333).
        cream: "#F5F8FB",
        "cream-card": "#ffffff",
        "cream-alt": "#E6EFF6",
        bg: "#F5F8FB",
        surface: "#ffffff",
        surface2: "#E6EFF6",
        surface3: "#CADCEA",
        line: "rgba(0, 40, 85, 0.12)",
        paper: "#F5F8FB",
        ink: "#002855",
        navy: "#002855",
        muted: "#2D4D76",
        ieee: {
          DEFAULT: "#00629B",
          dark: "#002855",
          steel: "#007DAF",
          light: "#CADCEA",
          glow: "#E6EFF6",
          ice: "#E6EFF6",
          yellow: "#FFC72C",
        },
        cuu: {
          DEFAULT: "#00629B",
          deep: "#002855",
          steel: "#007DAF",
          ice: "#E6EFF6",
          silver: "#CADCEA",
          white: "#ffffff",
        },
        obsidian: {
          DEFAULT: "#002855",
          card: "#002855",
          border: "rgba(202, 220, 234, 0.25)",
        },
        violet: { DEFAULT: "#6d4aff", soft: "#e9e1ff", dim: "#3d2d8d" },
        cyan: { DEFAULT: "#0ea5e9", soft: "#dff5ff" },
        ember: { DEFAULT: "#f59e0b", soft: "#fff0d4" },
        mint: { DEFAULT: "#14b8a6", soft: "#dffaf5" },
      },
      borderRadius: {
        DEFAULT: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        "3xl": "2px",
      },
      fontFamily: {
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-plex)", "ui-sans-serif", "system-ui", "sans-serif"],
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
        signal: {
          "0%": { transform: "translateX(-40px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        float: "float 11s ease-in-out infinite",
        floatSlow: "floatSlow 14s ease-in-out infinite",
        spinSlow: "spinSlow 40s linear infinite",
        marquee: "marquee 28s linear infinite",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        signal: "signal 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
