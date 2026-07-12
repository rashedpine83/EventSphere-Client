import { Event } from "@/services/event";
import EventCard from "./EventCard";

interface Props {
  events: Event[];
}

const EventGrid = ({ events }: Props) => {
  if (events.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-700 py-24 text-center">
        <h2 className="text-4xl font-bold text-white">No Events Found</h2>

        <p className="mt-4 text-slate-400">
          Try searching with another keyword or change the category.
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
