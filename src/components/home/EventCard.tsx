import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { FaLocationDot, FaUsers } from "react-icons/fa6";

import { Event } from "@/services/event";
import { FaCalendarAlt } from "react-icons/fa";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-emerald-500/40
      "
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
          {event.category}
        </span>

        <span className="absolute bottom-5 right-5 rounded-full bg-black/70 px-4 py-1 text-sm font-semibold text-white backdrop-blur">
          {event.isPaid ? `৳ ${event.ticketPrice}` : "FREE"}
        </span>
      </div>

      {/* Body */}

      <div className="p-6">
        <h3 className="line-clamp-2 text-2xl font-bold text-white">
          {event.title}
        </h3>

        <p className="mt-4 line-clamp-2 text-slate-400">{event.description}</p>

        <div className="mt-6 space-y-3 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-emerald-400" />
            {format(new Date(event.eventDate), "dd MMM yyyy")}
          </div>

          <div className="flex items-center gap-3">
            <FaLocationDot className="text-emerald-400" />
            {event.location}
          </div>

          <div className="flex items-center gap-3">
            <FaUsers className="text-emerald-400" />
            {event.attendeeLimit} Seats
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">Organized By</p>

            <h4 className="font-semibold text-white">{event.organizerName}</h4>
          </div>

          <Link
            href={`/events/${event._id}`}
            className="
              rounded-xl
              bg-emerald-500
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-emerald-600
            "
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
