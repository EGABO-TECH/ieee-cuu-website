import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070A16",
        surface: "#0E1328",
        surface2: "#151B38",
        surface3: "#1C2447",
        line: "#252C4E",
        paper: "#F6F5FB",
        ink: "#0D1023",
        muted: "#9AA1C4",
        violet: {
          DEFAULT: "#7C5CFF",
          soft: "#A996FF",
          dim: "#3E2E8A",
        },
        cyan: {
          DEFAULT: "#2FD8E5",
          soft: "#8FEEF4",
        },
        ember: {
          DEFAULT: "#FF7A45",
          soft: "#FFB088",
        },
        mint: {
          DEFAULT: "#7CFFC4",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-plex)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        "mesh-violet": "radial-gradient(50% 50% at 50% 50%, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0) 100%)",
        "mesh-cyan": "radial-gradient(50% 50% at 50% 50%, rgba(47,216,229,0.30) 0%, rgba(47,216,229,0) 100%)",
        "mesh-ember": "radial-gradient(50% 50% at 50% 50%, rgba(255,122,69,0.28) 0%, rgba(255,122,69,0) 100%)",
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
