"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import toast from "react-hot-toast";

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import { adminDeleteEvent } from "@/lib/api-actions/events";
import { AdminEvent } from "@/services/event";

interface Props {
  events: AdminEvent[];
}

const EventsTable = ({ events }: Props) => {
  const [eventList, setEventList] = useState<AdminEvent[]>(events);

  const [loadingId, setLoadingId] = useState("");

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?",
    );

    if (!confirmDelete) return;

    setLoadingId(id);

    try {
      await adminDeleteEvent(id);

      setEventList((prev) => prev.filter((event) => event._id !== id));

      toast.success("Event deleted successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete event.");
    } finally {
      setLoadingId("");
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-300">
                Event
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-300">
                Category
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-300">
                Organizer
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-300">
                Location
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-300">
                Date
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-300">
                Price
              </th>

              <th className="px-5 py-4 text-center text-sm font-semibold text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {eventList.map((event) => (
              <tr
                key={event._id}
                className="border-b border-slate-800 transition hover:bg-slate-800/40"
              >
                {/* Event */}
                <td className="px-5 py-5">
                  <div className="flex items-center gap-4">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={70}
                      height={70}
                      className="rounded-xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-white">
                        {event.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {event.attendeeLimit} Seats
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-5 py-5">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                    {event.category}
                  </span>
                </td>

                {/* Organizer */}
                <td className="px-5 py-5">
                  <p className="font-medium text-white">
                    {event.organizerName}
                  </p>

                  <p className="text-sm text-slate-400">
                    {event.organizerEmail}
                  </p>
                </td>

                {/* Location */}
                <td className="px-5 py-5 text-slate-300">{event.location}</td>

                {/* Date */}
                <td className="px-5 py-5 text-slate-300">
                  {format(new Date(event.eventDate), "dd MMM yyyy")}
                </td>

                {/* Price */}
                <td className="px-5 py-5">
                  {event.isPaid ? (
                    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
                      ৳ {event.ticketPrice}
                    </span>
                  ) : (
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                      FREE
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-5 py-5">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/events/${event._id}`}
                      className="rounded-lg bg-sky-500 p-3 text-white transition hover:bg-sky-600"
                    >
                      <FaEye />
                    </Link>

                    <Link
                      href={`/edit-event/${event._id}`}
                      className="rounded-lg bg-emerald-500 p-3 text-white transition hover:bg-emerald-600"
                    >
                      <FaEdit />
                    </Link>

                    <button
                      disabled={loadingId === event._id}
                      onClick={() => handleDelete(event._id)}
                      className="rounded-lg bg-red-500 p-3 text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loadingId === event._id ? (
                        <span className="text-sm">...</span>
                      ) : (
                        <FaTrash />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {eventList.length === 0 && (
              <tr>
                <td colSpan={7} className="py-12 text-center text-slate-400">
                  No events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsTable;
