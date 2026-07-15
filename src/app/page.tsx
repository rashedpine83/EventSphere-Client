import Hero from "@/components/hero/Hero";
import { getDashboardStats } from "@/lib/api-actions/dashboardApi";
import { getEvents } from "@/lib/api-actions/events";
export default async function HomePage() {
  const { stats } = await getDashboardStats();

  const { events } = await getEvents(1, 5);

  return (
    <>
      <Hero stats={stats} events={events} />

      {/* Other Sections */}
    </>
  );
}
