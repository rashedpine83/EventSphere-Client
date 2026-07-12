import { Event } from "@/services/event";
import EventCard from "./EventCard";

interface Props {
  events: Event[];
}

const EventGrid = ({ events }: Props) => {
  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 py-20 text-center">
        <h2 className="text-3xl font-bold text-white">No Events Found</h2>

        <p className="mt-3 text-slate-400">
          Try another search or choose a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
