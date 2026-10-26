/**
 * config/site.ts
 * ─────────────────────────────────────────────────────────────────
 * Single source of truth for all branch facts, URLs and social links.
 * To rotate a revoked invite link, change it here; it propagates everywhere.
 * ─────────────────────────────────────────────────────────────────
 */

export const SITE = {
  /** Full official name */
  name: "IEEE Student Branch, Cavendish University Uganda",
  /** Short name used in UI */
  shortName: "IEEE CUU Student Branch",
  tagline: "Engineering ideas into real-world impact.",
  description:
    "The official IEEE Student Branch at Cavendish University Uganda — a member of the IEEE Uganda Section and IEEE Region 8. Connecting students with global technical communities, competitions, and professional opportunities.",

  /** Campus address */
  address: "Plot 1469 Ggaba Road, Siyani Campus, Kampala, Uganda",
  mapUrl:
    "https://www.google.com/maps/search/Plot+1469+Ggaba+Road+Kampala+Cavendish+University+Uganda",

  /** University */
  universityName: "Cavendish University Uganda",
  universityUrl: "https://www.cavendish.ac.ug",
  universityPhone: "+256414531700",

  /**
   * Branch email, set with NEXT_PUBLIC_BRANCH_EMAIL.
   * TODO(owner): set it in Vercel once the official address exists.
   */
  email: process.env.NEXT_PUBLIC_BRANCH_EMAIL ?? "",

  /** Canonical domain — update when custom domain goes live */
  canonicalUrl:
    process.env.NEXT_PUBLIC_CANONICAL_URL ?? "https://ieee-cuu-website.vercel.app",

  /** Social media */
  social: {
    linkedin:
      process.env.NEXT_PUBLIC_IEEE_LINKEDIN_URL ??
      "https://www.linkedin.com/company/ieee-cavendish-university-student-branch",
    x: process.env.NEXT_PUBLIC_IEEE_X_URL ?? "https://x.com/IEEECavendish",
    tiktok:
      process.env.NEXT_PUBLIC_IEEE_TIKTOK_URL ?? "https://www.tiktok.com/@cavendishieee",
  },

  /** WhatsApp invite links — rotate here when links expire */
  whatsapp: {
    /**
     * IEEE CUU branch WhatsApp group, set with NEXT_PUBLIC_IEEE_WHATSAPP_URL.
     */
    ieee:
      process.env.NEXT_PUBLIC_IEEE_WHATSAPP_URL ??
      "https://chat.whatsapp.com/REPLACE-WITH-IEEE-CUU-INVITE-LINK",
    /**
     * CUUCSA WhatsApp community, set with NEXT_PUBLIC_CUUCSA_WHATSAPP_URL.
     */
    cuucsa:
      process.env.NEXT_PUBLIC_CUUCSA_WHATSAPP_URL ??
      "https://chat.whatsapp.com/REPLACE-WITH-CUUCSA-INVITE-LINK",
  },

  /** CUUCSA */
  cuucsa: {
    linkedinUrl:
      process.env.NEXT_PUBLIC_CUUCSA_LINKEDIN_URL ?? "https://www.linkedin.com/company/cavendish-university-uganda-computing-students-association",
  },

  /** Official IEEE links */
  ieee: {
    org: "https://www.ieee.org/",
    students: "https://students.ieee.org/",
    membership: "https://students.ieee.org/membership/",
    region8: "https://ieeer8.org/",
    xplore: "https://ieeexplore.ieee.org/",
    extreme: "https://ieeextreme.org/",
    extremeVtools: "https://xtreme.vtools.ieee.org",
    branches: "https://students.ieee.org/student-branches/",
  },

  /** IEEE Day 2026 registration link. The event has passed; kept for reference. */
  ieeeDayRegistrationUrl:
    process.env.NEXT_PUBLIC_IEEE_EVENT_REGISTRATION_URL ?? "#",
} as const;

export type SiteConfig = typeof SITE;
