"use client";

import { joinEvent } from "@/lib/api-actions/events";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaSpinner } from "react-icons/fa6";

interface JoinButtonProps {
  eventId: string;
  organizerEmail: string;
  attendeeLimit: number;
  joinedUsers?: {
    name: string;
    email: string;
    joinedAt: string;
  }[];
  eventDate: string;
  endTime: string;
}

const JoinButton = ({
  eventId,
  organizerEmail,
  attendeeLimit,
  joinedUsers = [],
  eventDate,
  endTime,
}: JoinButtonProps) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const [loading, setLoading] = useState(false);

  // Current joined users
  const joinedCount = joinedUsers.length;

  // Remaining seats
  const remainingSeats = attendeeLimit - joinedCount;

  // Is organizer?
  const isOrganizer = session?.user?.email === organizerEmail;

  // Already joined?
  const alreadyJoined = joinedUsers.some(
    (user) => user.email === session?.user?.email,
  );

  // Event expired?
  const isExpired = new Date(`${eventDate}T${endTime}`) < new Date();

  // Button disabled?
  const disabled =
    loading || isOrganizer || alreadyJoined || remainingSeats <= 0 || isExpired;

  const handleJoin = async () => {
    if (!session?.user) {
      toast.error("Please login first.");
      router.push("/login");
      return;
    }

    if (isOrganizer) {
      toast.error("You cannot join your own event.");
      return;
    }

    if (alreadyJoined) {
      toast.error("You have already joined this event.");
      return;
    }

    if (remainingSeats <= 0) {
      toast.error("No seats available.");
      return;
    }

    if (isExpired) {
      toast.error("This event has already ended.");
      return;
    }

    const { data } = await authClient.token();

    if (!data?.token) {
      toast.error("Please login first.");
      return;
    }

    try {
      setLoading(true);

      const res = await joinEvent(eventId, data.token);

      if (res.success) {
        toast.success(res.message);

        // Refresh server component
        router.refresh();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleJoin}
      disabled={disabled}
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-gradient-to-r
        from-emerald-500
        via-teal-500
        to-cyan-500
        px-10
        py-4
        font-bold
        text-white
        shadow-xl
        shadow-emerald-500/30
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:from-emerald-400
        hover:to-cyan-400
        hover:shadow-2xl
        hover:shadow-cyan-500/30
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" />
          Joining...
        </>
      ) : isOrganizer ? (
        "Your Event"
      ) : alreadyJoined ? (
        "Already Joined"
      ) : isExpired ? (
        "Event Ended"
      ) : remainingSeats <= 0 ? (
        "Fully Booked"
      ) : (
        <>
          <FaCheck />
          Join Event
        </>
      )}
    </button>
  );
};

export default JoinButton;
