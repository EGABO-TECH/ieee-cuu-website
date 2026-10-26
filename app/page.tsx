import { Hero } from "@/components/Hero";
import { EventSpotlight } from "@/components/EventSpotlight";
import { VideoSpotlight } from "@/components/VideoSpotlight";
import { Partnerships } from "@/components/Partnerships";
import { Faq } from "@/components/Faq";
import { Resources } from "@/components/Resources";
import { SiteFooter } from "@/components/SiteFooter";
import { VOLUNTEER_CALL } from "@/lib/calls";
import { callStatus } from "@/lib/status";

// Re-render every 5 minutes so the volunteer card disappears once the call closes.
export const revalidate = 300;

export default function Home() {
  const volunteerOpen = callStatus(VOLUNTEER_CALL) !== "closed";

  return (
    <>
      <main className="home-page">
        <Hero />
        <VideoSpotlight />
        {volunteerOpen && <EventSpotlight />}
        <Faq />
        <Resources />
        <Partnerships />
      </main>
      <SiteFooter />
    </>
  );
}
