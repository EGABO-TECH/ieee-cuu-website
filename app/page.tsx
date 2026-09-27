import { Hero } from "@/components/Hero";
import { EventSpotlight } from "@/components/EventSpotlight";
import { IEEExtreme } from "@/components/IEEExtreme";
import { VideoSpotlight } from "@/components/VideoSpotlight";
import { Partnerships } from "@/components/Partnerships";
import { Faq } from "@/components/Faq";
import { Resources } from "@/components/Resources";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <main className="home-page">
        <Hero />
        <VideoSpotlight />
        <EventSpotlight />
        <IEEExtreme />
        <Faq />
        <Resources />
        <Partnerships />
      </main>
      <SiteFooter />
    </>
  );
}
