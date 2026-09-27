import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, Playfair_Display } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
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
        <SiteHeader />
        {children}

        <a
          href={WHATSAPP_INVITE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join the official IEEE WhatsApp group"
          title="Join the official IEEE WhatsApp group"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition duration-200 hover:scale-105 hover:shadow-[0_16px_32px_rgba(37,211,102,0.45)]"
        >
          <svg aria-hidden="true" className="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.1-2.96-.19-.31a8.214 8.214 0 0 1-1.25-4.49c0-4.54 3.7-8.24 8.24-8.24m-4.04 3.96c-.22 0-.48.08-.73.35-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.19 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.55-.34-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.08-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.08-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.56-.01" />
          </svg>
        </a>
      </body>
    </html>
  );
}
