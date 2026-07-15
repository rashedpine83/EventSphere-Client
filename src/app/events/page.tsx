import EventContainer from "@/components/events/EventContainer";

const EventsPage = () => {
  return (
    <section className="min-h-screen bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mt-6 text-5xl font-bold text-white">
            Find Your
            <span className="text-emerald-400"> Next Event</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Browse conferences, workshops, sports, music festivals, hackathons
            and many more events happening around you.
          </p>
        </div>

        <EventContainer />
      </div>
    </section>
  );
};

export default EventsPage;
