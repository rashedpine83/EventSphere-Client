"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaCheck, FaSpinner } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { registerEvent } from "@/lib/api-actions/registationApi";
import RegistrationModal from "../registation/RegistrationModal";

interface JoinButtonProps {
  eventId: string;
  organizerEmail: string;

  eventTitle: string;
  category: string;
  location: string;
  organizerName: string;

  eventDate: string;
  startTime: string;
  endTime: string;

  remainingSeats: number;
  alreadyRegistered: boolean;
}

const JoinButton = ({
  eventId,
  organizerEmail,

  eventTitle,
  category,
  location,
  organizerName,

  eventDate,
  startTime,
  endTime,

  remainingSeats,
  alreadyRegistered,
}: JoinButtonProps) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isOrganizer = session?.user?.email === organizerEmail;

  const isExpired = new Date(`${eventDate}T${endTime}`) < new Date();

  const disabled =
    loading ||
    isOrganizer ||
    alreadyRegistered ||
    remainingSeats <= 0 ||
    isExpired;

  const handleOpen = () => {
    if (!session?.user) {
      toast.error("Please login first.");
      router.push("/login");
      return;
    }

    if (isOrganizer) {
      toast.error("You cannot join your own event.");
      return;
    }

    if (alreadyRegistered) {
      toast.error("You have already registered.");
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

    setIsOpen(true);
  };

  const handleRegistration = async (formData: {
    attendeeName: string;
    phone: string;
    address: string;
  }) => {
    try {
      setLoading(true);

      const { data } = await authClient.token();

      if (!data?.token) {
        toast.error("Please login first.");
        return;
      }

      const res = await registerEvent(eventId, formData, data.token);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);

      setIsOpen(false);

      router.refresh();

      if (res.isPaid) {
        toast.success("Registration successful. Please complete payment.");

        router.push(`/payment/${res.insertedId}`);
      } else {
        toast.success("Registration successful.");

        router.push(`/ticket/${res.insertedId}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
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
          hover:shadow-2xl
          hover:shadow-cyan-500/30
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? (
          <>
            <FaSpinner className="animate-spin" />
            Registering...
          </>
        ) : isOrganizer ? (
          "Your Event"
        ) : alreadyRegistered ? (
          <>
            <FaCheck />
            Already Registered
          </>
        ) : isExpired ? (
          "Event Ended"
        ) : remainingSeats <= 0 ? (
          "Fully Booked"
        ) : (
          "Join Event"
        )}
      </button>

      <RegistrationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleRegistration}
        loading={loading}
      />
    </>
  );
};

export default JoinButton;
