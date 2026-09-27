import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | IEEE CUU Student Branch",
  description:
    "Terms for using the IEEE Student Branch at Cavendish University Uganda website and its links to external services.",
};

const sections = [
  {
    id: "who-we-are-and-scope",
    title: "Who we are and scope",
    paragraphs: [
      "This website is maintained by the IEEE Student Branch at Cavendish University Uganda (the Branch) to share information about its activities, events, and community. These terms apply when you access or use this website.",
      "The Branch is a student community associated with IEEE and Cavendish University Uganda. This website is not the IEEE membership portal, and these terms do not replace IEEE's terms, university rules, or the terms of any event or service provider.",
    ],
  },
  {
    id: "using-the-website",
    title: "Using the website",
    paragraphs: [
      "Use the site lawfully and respectfully. Do not attempt to disrupt, damage, gain unauthorized access to, or interfere with the site or its underlying services. Do not use the site to distribute malware, infringe another person's rights, or misrepresent your affiliation with the Branch, IEEE, or the University.",
      "You may link to publicly accessible pages in a fair and accurate way. Do not suggest that the Branch endorses you or your organization without written permission.",
    ],
  },
  {
    id: "information-and-events",
    title: "Information and events",
    paragraphs: [
      "We aim to keep Branch information useful and current, but event details, eligibility, schedules, availability, and program descriptions can change. Confirm important details with the event organizer before making plans.",
      "Registration, membership applications, payments, and participation may take place on third-party websites and are governed by the terms and notices shown by those providers. A link on this website does not itself register you, create IEEE membership, or guarantee a place at an event or program.",
    ],
  },
  {
    id: "external-services",
    title: "External services",
    paragraphs: [
      "The site links to or embeds services including IEEE properties, Google Maps, Google Forms, WhatsApp, and social networks. Those services are operated independently. The Branch does not control their content, availability, security, or data practices, and your use of them is subject to their own terms and privacy policies.",
      "The embedded map is supplied by Google. You can use the address in the footer or its map link instead of relying on the embedded panel.",
    ],
  },
  {
    id: "content-and-trademarks",
    title: "Content and trademarks",
    paragraphs: [
      "Unless otherwise indicated, original text and materials published for the Branch are provided for personal, non-commercial reference. Ask the relevant rights holder before reproducing or adapting them beyond what applicable law permits.",
      "IEEE names, marks, and logos belong to IEEE or their respective owners. Their appearance on this site identifies the Branch and its affiliations; it does not transfer ownership or grant a general license. Third-party names and marks remain with their owners.",
    ],
  },
  {
    id: "availability-and-disclaimers",
    title: "Availability and disclaimers",
    paragraphs: [
      "The website is provided for general information on an \"as available\" basis. We may change, suspend, or remove site content or features, and do not promise uninterrupted availability or that every item will always be error-free.",
      "To the extent permitted by applicable law, the Branch disclaims warranties not expressly stated in these terms. Nothing here excludes a right or remedy that cannot lawfully be excluded.",
    ],
  },
  {
    id: "responsibility",
    title: "Responsibility",
    paragraphs: [
      "To the extent permitted by applicable law, the Branch is not responsible for indirect or consequential loss arising from use of this informational website or a service operated by a third party. This does not limit liability that cannot legally be limited, including liability for fraud or willful misconduct where applicable.",
    ],
  },
  {
    id: "law-and-updates",
    title: "Law and updates",
    paragraphs: [
      "These terms are governed by the laws of Uganda, without limiting any mandatory consumer or other protections that apply to you. Disputes are subject to the competent courts of Uganda.",
      "We may revise these terms as the site or Branch activities change. The effective date at the top identifies the version currently published. Continued use after an update means the updated terms apply to future use, subject to applicable law.",
    ],
  },
  {
    id: "contact",
    title: "Contact the Branch",
    paragraphs: [
      "Questions about these terms can be directed to IEEE Student Branch, Cavendish University Uganda, Plot 1469 Ggaba Road, Kampala, Uganda. Call +256 41 4531700 and ask for the IEEE Student Branch.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PolicyPage
        title="Terms and Conditions"
        summary="The ground rules for using this Branch website, understanding the information here, and following links to event, membership, and community services."
        effectiveDate="September 27, 2026"
        sections={sections}
      />
      <SiteFooter />
    </>
  );
}