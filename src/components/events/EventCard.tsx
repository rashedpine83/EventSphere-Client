import { Event } from "@/services/event";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { FaCalendarAlt, FaRegHeart } from "react-icons/fa";
import { FaClock, FaLocationDot, FaUser, FaUsers } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "@/lib/auth-client";
import { addWishlist } from "@/lib/api-actions/wishlistApi";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  const router = useRouter();

  const { data: session } = useSession();

  const [saved, setSaved] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleWishlist = async () => {
    if (!session?.user?.email) {
      toast.error("Please login first.");

      router.push("/login");

      return;
    }

    try {
      setLoading(true);

      await addWishlist({
        eventId: event._id,
        eventTitle: event.title,
        eventCategory: event.category,
        eventImage: event.image,
        eventDate: event.eventDate,
        location: event.location,
        isPaid: event.isPaid,
        ticketPrice: event.ticketPrice,
        organizerName: event.organizerName,
        organizerEmail: event.organizerEmail,
        userEmail: session.user.email,
      });

      setSaved(true);

      toast.success("Added to Wishlist ❤️");
    } catch (error) {
      console.error(error);

      toast.error("Failed to add wishlist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
group
overflow-hidden
rounded-3xl
border
border-slate-800
bg-slate-900
transition-all
duration-500
hover:-translate-y-2
hover:border-emerald-500
hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]
"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
          {event.category}
        </span>

        {/* Date */}
        <div className="absolute right-4 top-4 rounded-xl bg-black/70 px-3 py-2 text-center backdrop-blur">
          <p className="text-lg uppercase text-slate-300">
            {format(new Date(event.eventDate), "dd MMM yyyy")}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <h2 className="line-clamp-1 text-2xl font-bold text-white">
          {event.title}
        </h2>

        <p className="line-clamp-2 text-slate-400">{event.description}</p>

        {/* Information */}
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <FaLocationDot className="text-emerald-400" />
            <span>{event.location}</span>
          </div>
          <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-400 font-semibold">
            {event.isPaid ? `৳ ${event.ticketPrice}` : "FREE"}
          </div>

          <div className="flex items-center gap-3">
            <FaClock className="text-emerald-400" />
            <span>
              {event.startTime} - {event.endTime}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-emerald-400" />
            <span>
              {format(new Date(event.eventDate), "EEEE, dd MMM yyyy")}
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <FaUser className="text-emerald-400" />
              <span>{event.organizerName}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUsers className="text-emerald-400" />
              <span>{event.attendeeLimit}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-6 flex gap-3">
          <Link
            href={`/events/${event._id}`}
            className="
      flex-1
      rounded-xl
      bg-emerald-500
      py-3
      text-center
      font-semibold
      text-white
      transition
      hover:bg-emerald-600
    "
          >
            View Details →
          </Link>

          <button
            type="button"
            onClick={handleWishlist}
            disabled={loading || saved}
            className="
    flex
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    border-slate-700
    bg-slate-900
    px-5
    py-3
    font-semibold
    text-white
    transition-all
    duration-300
    hover:border-rose-500
    hover:bg-rose-500/10
    hover:text-rose-400
    disabled:cursor-not-allowed
    disabled:opacity-70
  "
          >
            <FaRegHeart className="text-lg" />

            {loading ? "Saving..." : saved ? "❤️ Saved" : "Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
