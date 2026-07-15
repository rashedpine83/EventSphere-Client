import BookingContainer from "@/components/bookings/BookingContainer";
import { getMyBookings } from "@/lib/api-actions/bookingApi";
import { requireRole } from "@/lib/core/requireRole";
import { getUserSession } from "@/lib/core/session";

const MyBookingsPage = async () => {
  await requireRole(["attendee"]);
  const user = await getUserSession();

  if (!user?.email) {
    return <div>Please login first.</div>;
  }

  const { bookings } = await getMyBookings(user.email);

  return (
    <section className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Hero */}

        <div className="mb-12 text-center">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400">
            My Dashboard
          </span>

          <h1 className="mt-6 text-5xl font-black text-white">
            My
            <span className="text-emerald-400"> Bookings</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            View all your booked events, ticket details and booking status in
            one place.
          </p>
        </div>

        {/* Booking Table */}

        <BookingContainer bookings={bookings} />
      </div>
    </section>
  );
};

export default MyBookingsPage;
