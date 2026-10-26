import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, Playfair_Display } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/config/site";
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
  metadataBase: new URL(SITE.canonicalUrl),
  title: {
    default: `${SITE.name}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.canonicalUrl,
    siteName: SITE.shortName,
    locale: "en_UG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    site: "@IEEECavendish",
    creator: "@IEEECavendish",
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.name,
  alternateName: "IEEE CUU Student Branch",
  url: SITE.canonicalUrl,
  logo: `${SITE.canonicalUrl}/images/ieee-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 1469 Ggaba Road, Siyani Campus",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: SITE.universityName,
    url: SITE.universityUrl,
  },
  sameAs: [
    SITE.social.linkedin,
    SITE.social.x,
    SITE.social.tiktok,
    SITE.ieee.org,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-UG" className={`${sora.variable} ${plex.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="bg-bg bg-grain text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0D6E6E] focus:shadow-lg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
