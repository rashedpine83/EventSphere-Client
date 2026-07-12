// import EventGrid from "@/components/events/EventGrid";
import { getEvents } from "@/lib/api-actions/events";
import EventContainer from "@/components/events/EventContainer";

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <section className="min-h-screen bg-[#0B1120] py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Hero */}
        <div className="mb-16 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-center">
          <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400">
            Explore Amazing Events
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Find Your
            <span className="text-emerald-400"> Next Event</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Browse conferences, workshops, sports, music festivals, hackathons
            and many more events happening around you.
          </p>
        </div>

        <EventContainer events={events} />
      </div>
    </section>
  );
};

export default EventsPage;
