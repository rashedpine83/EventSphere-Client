"use client";

import { useMemo, useState } from "react";
import BookingTable from "./BookingTable";

interface Booking {
  _id: string;
  eventId: string;
  eventTitle: string;
  eventCategory: string;
  eventImage: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
  organizerName: string;
  organizerEmail: string;
  attendeeName: string;
  attendeeEmail: string;
  phone: string;
  address: string;
  paymentStatus: string;
  ticketPrice: number;
  joinedAt: string;
  paidAt?: string;
  transactionId?: string;
}
interface Props {
  bookings: Booking[];
}

const BookingContainer = ({ bookings }: Props) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 10;

  const filteredBookings = useMemo(() => {
    const filtered = bookings.filter((booking) => {
      return (
        booking.eventTitle.toLowerCase().includes(search.toLowerCase()) ||
        booking.location.toLowerCase().includes(search.toLowerCase()) ||
        booking.eventCategory.toLowerCase().includes(search.toLowerCase())
      );
    });

    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime();
      }

      return new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime();
    });

    return filtered;
  }, [bookings, search, sortBy]);

  const totalPages = Math.ceil(filteredBookings.length / limit);

  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * limit,
    currentPage * limit,
  );

  return (
    <>
      {/* Top */}

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">My Bookings</h2>

          <p className="mt-2 text-slate-400">
            Total Bookings:
            <span className="ml-2 font-semibold text-emerald-400">
              {filteredBookings.length}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search booking..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />

          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
          >
            <option value="newest">Newest First</option>

            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Table */}

      <BookingTable bookings={paginatedBookings} />

      {/* Pagination */}

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-3">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="rounded-lg border border-slate-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`rounded-lg px-4 py-2 transition ${
                currentPage === index + 1
                  ? "bg-emerald-500 text-white"
                  : "border border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="rounded-lg border border-slate-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default BookingContainer;
