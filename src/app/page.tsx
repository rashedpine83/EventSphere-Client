import Hero from "@/components/hero/Hero";
// import Categories from "@/components/home/Categories";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import Features from "@/components/home/Features";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";
import { getDashboardData } from "@/lib/api-actions/dashboardApi";
import { getEvents } from "@/lib/api-actions/events";

export default async function HomePage() {
  const { stats } = await getDashboardData();

  const { events } = await getEvents(1, 5);

  return (
    <>
      <Hero stats={stats} events={events} />
      <Features />
      {/* <Categories /> */}
      <FeaturedEvents />
      <WhyChoose />
      <Statistics stats={stats} />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}
