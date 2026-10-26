import { Hero } from "@/components/Hero";
import { EventSpotlight } from "@/components/EventSpotlight";
import { VideoSpotlight } from "@/components/VideoSpotlight";
import { Partnerships } from "@/components/Partnerships";
import { Faq } from "@/components/Faq";
import { Resources } from "@/components/Resources";
import {
  CuucsaTieIn,
  LaunchBlock,
  LeadershipStrip,
  Recognition,
  StudentJourney,
  WaysIn,
  WhatYouGet,
} from "@/components/HomeSections";
import { VOLUNTEER_CALL } from "@/lib/calls";
import { callStatus } from "@/lib/status";

// Re-render every 5 minutes so date-driven sections switch on time.
export const revalidate = 300;

export default function Home() {
  const volunteerOpen = callStatus(VOLUNTEER_CALL) !== "closed";

  return (
    <main className="home-page">
      <Hero />
      <LaunchBlock />
      {volunteerOpen && <EventSpotlight />}
      <WaysIn />
      <WhatYouGet />
      <StudentJourney />
      <Recognition />
      <VideoSpotlight />
      <LeadershipStrip />
      <CuucsaTieIn />
      <Faq />
      <Resources />
      <Partnerships />
    </main>
  );
}
