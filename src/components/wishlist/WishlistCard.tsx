"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaTrash } from "react-icons/fa6";

import { Wishlist, removeWishlist } from "@/lib/api-actions/wishlistApi";

interface Props {
  wishlist: Wishlist;
  onRemove: (id: string) => void;
}

const WishlistCard = ({ wishlist, onRemove }: Props) => {
  const handleRemove = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this event from your wishlist?",
    );

    if (!confirmDelete) return;

    try {
      await removeWishlist(wishlist._id);

      toast.success("Removed from Wishlist ❤️");

      onRemove(wishlist._id);
    } catch (error) {
      console.error(error);

      toast.error("Failed to remove wishlist.");
    }
  };

  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
      shadow-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-emerald-500
    "
    >
      {/* Image */}

      <div className="relative h-56">
        <Image
          src={wishlist.eventImage}
          alt={wishlist.eventTitle}
          fill
          className="object-cover"
        />

        <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
          {wishlist.eventCategory}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-black/70 px-4 py-2 text-sm text-white backdrop-blur">
          {wishlist.isPaid ? `৳ ${wishlist.ticketPrice}` : "FREE"}
        </span>
      </div>

      {/* Content */}

      <div className="space-y-4 p-6">
        <h2 className="line-clamp-1 text-2xl font-bold text-white">
          {wishlist.eventTitle}
        </h2>

        <div className="space-y-3 text-slate-300">
          <div className="flex items-center gap-3">
            <FaLocationDot className="text-emerald-400" />
            <span>{wishlist.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-emerald-400" />
            <span>
              {format(new Date(wishlist.eventDate), "EEEE, dd MMM yyyy")}
            </span>
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-6 flex gap-3">
          <Link
            href={`/events/${wishlist.eventId}`}
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
            onClick={handleRemove}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-red-500
              px-5
              py-3
              font-semibold
              text-red-400
              transition
              hover:bg-red-500
              hover:text-white
            "
          >
            <FaTrash />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
