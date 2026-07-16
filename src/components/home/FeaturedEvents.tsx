import Link from "next/link";

import { getEvents } from "@/lib/api-actions/events";

import EventCard from "./EventCard";

const FeaturedEvents = async () => {
  const { events } = await getEvents(1, 6);

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            FEATURED EVENTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Discover Upcoming Events
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Join inspiring conferences, workshops, festivals and community
            gatherings happening around you.
          </p>
        </div>

        {/* Empty State */}

        {events.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-700 py-24 text-center">
            <h3 className="text-2xl font-semibold text-white">
              No Events Found
            </h3>

            <p className="mt-4 text-slate-400">
              New events will appear here soon.
            </p>
          </div>
        ) : (
          <>
            {/* Grid */}

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>

            {/* Button */}

            <div className="mt-16 flex justify-center">
              <Link
                href="/events"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:scale-105
                "
              >
                Explore All Events
                <span>→</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedEvents;
