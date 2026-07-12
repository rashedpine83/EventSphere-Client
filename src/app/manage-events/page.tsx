"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { getMyEvents, deleteEvent } from "@/lib/api-actions/events";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaPenToSquare, FaTrash, FaEye } from "react-icons/fa6";
import DeleteConfirmationModal from "@/components/shared/DeleteConfirmationModal";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

interface Event {
  _id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  attendeeLimit: number;
  image: string;
  organizerName: string;
  organizerEmail: string;
}

const ManageEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);

      const { data } = await authClient.token();

      if (!data?.token) {
        toast.error("Please login first.");
        return;
      }

      const result = await getMyEvents(data.token);

      setEvents(result.events || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load events.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const { data } = await authClient.token();

      if (!data?.token) {
        toast.error("Please login first.");
        return;
      }

      const result = await deleteEvent(deleteId, data.token);

      if (result.success) {
        toast.success("Event deleted successfully.");

        setEvents((prev) => prev.filter((event) => event._id !== deleteId));

        setDeleteId(null);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  if (loading) {
    return (
      <section className="container mx-auto min-h-screen px-4 py-20">
        <div className="mb-10">
          <div className="h-10 w-72 animate-pulse rounded bg-base-300" />

          <div className="mt-4 h-5 w-96 animate-pulse rounded bg-base-300" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-base-300"
            >
              <div className="h-56 animate-pulse bg-base-300" />

              <div className="space-y-4 p-6">
                <div className="h-7 w-2/3 animate-pulse rounded bg-base-300" />

                <div className="h-5 w-full animate-pulse rounded bg-base-300" />

                <div className="h-5 w-3/4 animate-pulse rounded bg-base-300" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto min-h-screen px-4 py-20">
      <div className="mb-12">
        <h1 className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-5xl font-black text-transparent">
          Manage Events
        </h1>

        <p className="mt-3 text-base-content/70">
          View, edit and delete the events you have created.
        </p>
      </div>

      {events.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-base-300 py-24 text-center">
          <h2 className="text-3xl font-bold">No Events Found</h2>

          <p className="mt-3 text-base-content/70">
            You haven't created any event yet.
          </p>

          <Link href="/add-event" className="btn btn-primary mt-8">
            Create Event
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <div
              key={event._id}
              className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-base-300
      bg-base-100
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-60 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span
                  className="
        absolute
        left-4
        top-4
        rounded-full
        bg-emerald-500
        px-4
        py-2
        text-xs
        font-semibold
        text-white"
                >
                  {event.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-6">
                <h2 className="line-clamp-1 text-2xl font-bold">
                  {event.title}
                </h2>

                <p className="mt-3 line-clamp-2 text-base-content/70">
                  {event.description}
                </p>

                {/* Date */}

                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-emerald-100
          text-emerald-600"
                  >
                    <FaCalendarAlt />
                  </div>

                  <span className="font-medium">
                    {new Date(event.eventDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Location */}

                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-rose-100
          text-rose-600"
                  >
                    <FaLocationDot />
                  </div>

                  <span className="line-clamp-1">{event.location}</span>
                </div>

                {/* Action Buttons */}

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {/* View Details */}

                  <Link
                    href={`/events/${event._id}`}
                    className="
    flex
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-cyan-500
    px-4
    py-3
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:bg-cyan-600"
                  >
                    <FaEye />
                    <span className="hidden sm:inline">View</span>
                  </Link>

                  {/* Edit */}

                  <Link
                    href={`/manage-events/edit/${event._id}`}
                    className="
    flex
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-amber-500
    px-4
    py-3
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:bg-amber-600"
                  >
                    <FaPenToSquare />
                    <span className="hidden sm:inline">Edit</span>
                  </Link>

                  {/* Delete */}

                  <Button
                    onPress={() => setDeleteId(event._id)}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-red-500
                        px-8
                        py-6
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-red-600"
                  >
                    <FaTrash />
                    <span className="hidden sm:inline">Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <DeleteConfirmationModal
        isOpen={!!deleteId}
        title="Delete Event"
        message="Are you sure you want to delete this event? This action cannot be undone."
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
      />
    </section>
  );
};

export default ManageEventsPage;
