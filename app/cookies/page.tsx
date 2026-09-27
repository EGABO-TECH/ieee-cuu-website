import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy | IEEE CUU Student Branch",
  description:
    "Cookie and similar technology information for the IEEE Student Branch at Cavendish University Uganda website.",
};

const sections = [
  {
    id: "what-cookies-are",
    title: "What cookies are",
    paragraphs: [
      "Cookies are small files stored by a website in your browser. Similar technologies can store or access information on your device. This policy explains the technologies associated with this website, separately from the Privacy Policy.",
    ],
  },
  {
    id: "this-websites-use",
    title: "This website's use",
    paragraphs: [
      "The Branch has not added first-party analytics, advertising pixels, sign-in cookies, or a cookie-based preference system to this site. The site does not intentionally set first-party cookies for tracking or advertising.",
      "The provider that hosts or delivers the website may use technical mechanisms and server logs to operate or protect the service. Those systems are not managed through a cookie preference control on this site; their operation and retention depend on the hosting configuration.",
    ],
  },
  {
    id: "google-maps",
    title: "Google Maps in the footer",
    paragraphs: [
      "Every page footer contains an embedded Google Map. Loading a page with that footer automatically requests map content from Google. Google may receive your IP address, browser and device details, and request information, and may use cookies or similar technologies under Google's own policies. The Branch does not control what Google stores or how long it keeps it.",
      "If you do not want the embedded map, use the address or the separate map link provided in the footer. Blocking third-party content or cookies in your browser may limit the map or related Google features; blocking cookies does not necessarily prevent the initial map request.",
    ],
  },
  {
    id: "links-to-other-sites",
    title: "Links to other sites",
    paragraphs: [
      "Links to IEEE, Google Forms, WhatsApp, and social networks take you to services operated by others. Those services may use cookies when you visit them. Their practices are governed by their own cookie and privacy notices; a link does not mean their cookies are set by this website.",
    ],
  },
  {
    id: "your-controls",
    title: "Your browser controls",
    paragraphs: [
      "Most browsers let you view, clear, or block cookies and restrict third-party content. The controls differ by browser and device. If you block cookies, parts of an external service may not work as expected.",
      "This website currently does not provide an on-site cookie banner or preference centre. If your use or audience requires prior consent for third-party technologies, the map embed and any future non-essential tools should be configured accordingly before they load.",
    ],
  },
  {
    id: "changes-and-contact",
    title: "Changes and contact",
    paragraphs: [
      "If the Branch adds analytics, advertising, preference storage, or other third-party embeds, this policy should be updated to identify them and explain their controls. The effective date above shows when this version was published.",
      "For questions, contact IEEE Student Branch, Cavendish University Uganda, Plot 1469 Ggaba Road, Kampala, Uganda. Call +256 41 4531700 and ask for the IEEE Student Branch.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PolicyPage
        title="Cookie Policy"
        summary="What this site and its embedded map do with cookies and similar browser technologies, and what controls are currently available to you."
        effectiveDate="September 27, 2026"
        sections={sections}
      />
      <SiteFooter />
    </>
  );
}