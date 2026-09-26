import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, Playfair_Display } from "next/font/google";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_INVITE_URL } from "@/lib/data";
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
  title: "IEEE Student Branch | Cavendish University Uganda",
  description:
    "The IEEE Student Branch at Cavendish University Uganda: IEEE Day 2026, IEEEXtreme, ambassador programs and everything the Branch does.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${plex.variable} ${playfair.variable}`}>
      <body className="bg-bg bg-grain text-ink">
        {children}

        <a
          href={WHATSAPP_INVITE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join the official IEEE WhatsApp group"
          title="Join the official IEEE WhatsApp group"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition duration-200 hover:scale-105 hover:shadow-[0_16px_32px_rgba(37,211,102,0.45)]"
        >
          <MessageCircle className="h-7 w-7" strokeWidth={2.3} />
        </a>
      </body>
    </html>
  );
}
