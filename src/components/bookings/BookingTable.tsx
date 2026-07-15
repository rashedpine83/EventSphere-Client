"use client";

import { format } from "date-fns";

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

const BookingTable = ({ bookings }: Props) => {
  if (bookings.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 py-20 text-center">
        <h2 className="text-3xl font-bold text-white">No Bookings Found</h2>

        <p className="mt-4 text-slate-400">
          You haven not booked any events yet.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
      <table className="min-w-full">
        <thead className="border-b border-slate-800 bg-slate-950">
          <tr className="text-left">
            <th className="px-6 py-4 text-sm font-bold text-slate-300">SL</th>

            <th className="px-6 py-4 text-sm font-bold text-slate-300">
              Event
            </th>

            <th className="px-6 py-4 text-sm font-bold text-slate-300">
              Category
            </th>

            <th className="px-6 py-4 text-sm font-bold text-slate-300">
              Location
            </th>

            <th className="px-6 py-4 text-sm font-bold text-slate-300">
              Event Date
            </th>

            <th className="px-6 py-4 text-sm font-bold text-slate-300">Time</th>

            <th className="px-6 py-4 text-sm font-bold text-slate-300">
              Ticket
            </th>

            <th className="px-6 py-4 text-sm font-bold text-slate-300">
              Price
            </th>

            <th className="px-6 py-4 text-sm font-bold text-slate-300">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={booking._id}
              className="border-b border-slate-800 transition hover:bg-slate-800/60"
            >
              <td className="px-6 py-5 text-slate-400">{index + 1}</td>

              <td className="px-6 py-5 font-semibold text-white">
                {booking.eventTitle}
              </td>

              <td className="px-6 py-5 text-slate-300">
                {booking.eventCategory}
              </td>

              <td className="px-6 py-5 text-slate-300">{booking.location}</td>

              <td className="px-6 py-5 text-slate-300">
                {format(new Date(booking.eventDate), "dd MMM yyyy")}
              </td>

              <td className="px-6 py-5 text-slate-300">
                {booking.startTime} - {booking.endTime}
              </td>

              <td className="px-6 py-5">
                {booking.ticketPrice > 0 ? (
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-400">
                    Paid
                  </span>
                ) : (
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">
                    Free
                  </span>
                )}
              </td>

              <td className="px-6 py-5 font-semibold text-white">
                {booking.ticketPrice > 0 ? `৳${booking.ticketPrice}` : "Free"}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    booking.paymentStatus === "Confirmed"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : booking.paymentStatus === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {booking.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
