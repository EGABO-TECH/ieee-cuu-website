import type { Config } from "tailwindcss";

/**
 * Design tokens.
 * Colours follow the IEEE Brand Color Quick Reference Guide (21-DCI-333):
 * IEEE Blue #00629B as the primary, IEEE Navy #002855 for depth, and IEEE
 * Yellow #FFC72C reserved for a single accent per view.
 *
 * `slate` is redefined as a navy-tinted neutral scale so every grey on the
 * site sits in the same family as the brand blues. 400 and up pass WCAG AA
 * as text on white.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F5F8FB",
        surface: "#ffffff",
        surface2: "#E6EFF6",
        line: "rgba(0, 40, 85, 0.12)",
        ink: "#002855",
        navy: "#002855",
        muted: "#3A5372",
        ieee: {
          DEFAULT: "#00629B",
          dark: "#002855",
          steel: "#007DAF",
          light: "#CADCEA",
          ice: "#E6EFF6",
          yellow: "#FFC72C",
        },
        slate: {
          50: "#F5F8FB",
          100: "#EDF2F7",
          200: "#DCE5EE",
          300: "#C2D0DE",
          400: "#5B7391",
          500: "#4A6382",
          600: "#3A5372",
          700: "#2D4766",
          800: "#1B3A61",
          900: "#002855",
        },
      },
      borderRadius: {
        DEFAULT: "2px",
        md: "3px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
        "3xl": "6px",
      },
      fontFamily: {
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-plex)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
