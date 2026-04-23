import Hero from "../components/sections/Hero";
import CaseStudyCards from "../components/sections/CaseStudyCards";
import MarqueeBar from "../components/MarqueeBar";
import AboutServices from "../components/sections/AboutServices";
import QuipBar from "../components/QuipBar";
import SocialProof from "../components/sections/SocialProof";
import StakeholderMoments from "../components/sections/StakeholderMoments";
import { MARQUEE_MAIN, MARQUEE_SERVICES, QUIP_1, QUIP_2 } from "../lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CaseStudyCards />
      <MarqueeBar
        items={MARQUEE_MAIN}
        prefix="DO YOU KNOW?"
        accent="lime"
        testId="marquee-facts"
      />
      <AboutServices />
      <MarqueeBar
        items={MARQUEE_SERVICES}
        prefix="WHAT WE COVER —"
        accent="ember"
        speed={60}
        testId="marquee-services"
      />
      <QuipBar tone="ember" testId="quip-bar-1">
        {QUIP_1}
      </QuipBar>
      <SocialProof />
      <QuipBar tone="red" testId="quip-bar-2">
        {QUIP_2}
      </QuipBar>
      <StakeholderMoments />
    </>
  );
}
