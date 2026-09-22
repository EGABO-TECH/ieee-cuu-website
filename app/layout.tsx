import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IEEE Student Branch — Cavendish University Uganda",
  description:
    "The IEEE Student Branch at Cavendish University Uganda: IEEE Day 2026, IEEEXtreme, ambassador programs and everything the Branch does.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${plex.variable} ${playfair.variable}`}>
      <body className="bg-bg bg-grain text-white">{children}</body>
    </html>
  );
}
