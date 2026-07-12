// import EventGrid from "@/components/events/EventGrid";
import { getEvents } from "@/lib/api-actions/events";
import EventContainer from "@/components/events/EventContainer";

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <section className="min-h-screen bg-[#0B1120] py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Hero */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Explore Events
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Discover conferences, workshops, concerts and more.
          </p>
        </div>

        <EventContainer events={events} />
      </div>
    </section>
  );
};

export default EventsPage;
