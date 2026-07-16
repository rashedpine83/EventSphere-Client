import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import HowItWorks from "@/components/about/HowItWorks";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";
import Team from "@/components/about/Team";
import WhyEventSphere from "@/components/about/WhyEventSphere";
import Statistics from "@/components/home/Statistics";
import { getDashboardData } from "@/lib/api-actions/dashboardApi";

export default async function AboutPage() {
  const { stats } = await getDashboardData();

  return (
    <>
      <AboutHero />

      <OurStory />

      <MissionVision />

      <WhyEventSphere />

      <HowItWorks />

      <Statistics stats={stats} />

      <Team />

      <AboutCTA />
    </>
  );
}
