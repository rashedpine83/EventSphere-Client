import JoinButton from "@/components/events/JoinButton";
import { getSingleEvent } from "@/lib/api-actions/events";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import {
  FaArrowLeft,
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaUser,
  FaUsers,
} from "react-icons/fa6";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EventDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const { event } = await getSingleEvent(id);

  const joinedCount = event.joinedUsers?.length ?? 0;

  const remainingSeats = event.attendeeLimit - joinedCount;

  const isEventExpired =
    new Date(`${event.eventDate}T${event.endTime}`) < new Date();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-14">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900 shadow-[0_20px_80px_rgba(0,0,0,.45)]">
          <div className="grid lg:grid-cols-2 min-h-[88vh]">
            {/* ================= IMAGE ================= */}

            <div className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-l-[32px] bg-slate-950 p-6">
              <Image
                src={event.image}
                alt={event.title}
                width={900}
                height={600}
                priority
                className="max-h-full w-auto rounded-2xl object-contain transition duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

              {/* Category */}

              <div className="absolute left-8 top-8">
                <span className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30">
                  {event.category}
                </span>
              </div>

              {/* Date Box */}

              <div className="absolute right-8 top-8">
                <div className="rounded-2xl border border-white/10 bg-black/60 px-6 py-4 text-center backdrop-blur-md">
                  <h2 className="text-4xl font-black text-white">
                    {new Date(event.eventDate).getDate()}
                  </h2>

                  <p className="mt-1 text-xs uppercase tracking-[4px] text-slate-300">
                    {new Date(event.eventDate).toLocaleString("en-US", {
                      month: "short",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* ================= CONTENT ================= */}

            <div className="flex flex-col justify-between p-8 lg:p-12">
              <div>
                <p className="font-semibold uppercase tracking-[6px] text-emerald-400">
                  Upcoming Event
                </p>

                <h1 className="mt-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-5xl font-black leading-tight text-transparent lg:text-6xl">
                  {event.title}
                </h1>

                <p className="mt-8 text-lg leading-9 text-slate-300">
                  {event.description}
                </p>

                {/* ================= INFO ================= */}

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                  <InfoCard
                    icon={<FaCalendarAlt />}
                    title="Event Date"
                    value={new Date(event.eventDate).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                    iconBg="bg-emerald-500/10"
                    iconColor="text-emerald-400"
                  />

                  <InfoCard
                    icon={<FaClock />}
                    title="Time"
                    value={`${event.startTime} - ${event.endTime}`}
                    iconBg="bg-cyan-500/10"
                    iconColor="text-cyan-400"
                  />

                  <InfoCard
                    icon={<FaLocationDot />}
                    title="Location"
                    value={event.location}
                    iconBg="bg-rose-500/10"
                    iconColor="text-rose-400"
                  />

                  <InfoCard
                    icon={<FaUsers />}
                    title="Available Seats"
                    value={`${remainingSeats} / ${event.attendeeLimit}`}
                    iconBg="bg-yellow-500/10"
                    iconColor="text-yellow-400"
                  />
                </div>

                {/* ================= ORGANIZER ================= */}

                <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-950/80 p-7 backdrop-blur-xl">
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    Organizer
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div
                        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-violet-500/10
        text-2xl
        text-violet-400"
                      >
                        <FaUser />
                      </div>

                      <div>
                        <p className="text-sm text-slate-400">Organizer Name</p>

                        <h3 className="text-xl font-semibold text-white">
                          {event.organizerName}
                        </h3>
                      </div>
                    </div>

                    <div className="border-t border-slate-800" />

                    <div className="flex items-center gap-5">
                      <div
                        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-sky-500/10
        text-2xl
        text-sky-400"
                      >
                        <FaEnvelope />
                      </div>

                      <div>
                        <p className="text-sm text-slate-400">Email Address</p>

                        <h3 className="break-all text-lg font-medium text-white">
                          {event.organizerEmail}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <p className="text-slate-400">Ticket</p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {event.isPaid ? `৳ ${event.ticketPrice}` : "FREE"}
                  </h2>
                </div>

                {/* ================= ABOUT EVENT ================= */}

                <div className="mt-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 p-7">
                  <h2 className="mb-5 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                    About This Event
                  </h2>

                  <p className="leading-9 text-slate-300">
                    {event.description}
                  </p>
                </div>
                {/* ================= ACTION BUTTONS ================= */}

                <div className="mt-12 flex flex-wrap gap-5">
                  <Link
                    href="/events"
                    className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-emerald-500
                  px-8
                  py-4
                  font-semibold
                  text-emerald-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-500
                  hover:text-white
                  hover:shadow-xl
                  hover:shadow-emerald-500/30"
                  >
                    <FaArrowLeft />
                    Back to Events
                  </Link>

                  <JoinButton
                    eventId={event._id}
                    organizerEmail={event.organizerEmail}
                    eventTitle={event.title}
                    category={event.category}
                    location={event.location}
                    organizerName={event.organizerName}
                    eventDate={event.eventDate}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    remainingSeats={event.remainingSeats}
                    alreadyRegistered={event.alreadyRegistered}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;

/* ===========================================================
   INFO CARD COMPONENT
=========================================================== */

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  iconBg: string;
  iconColor: string;
}

const InfoCard = ({ icon, title, value, iconBg, iconColor }: InfoCardProps) => {
  return (
    <div
      className="
      rounded-2xl
      border
      border-slate-800
      bg-slate-950
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-emerald-500/50
      hover:shadow-xl
      hover:shadow-emerald-500/10"
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg}`}
        >
          <span className={`text-2xl ${iconColor}`}>{icon}</span>
        </div>

        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h3 className="mt-1 text-lg font-semibold text-white">{value}</h3>
        </div>
      </div>
    </div>
  );
};
