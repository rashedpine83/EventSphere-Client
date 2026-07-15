import { DashboardEvent } from "@/services/dashboard";
import { format } from "date-fns";
import Link from "next/link";

interface Props {
  events: DashboardEvent[];
}

const LatestEventsTable = ({ events }: Props) => {
  return (
    <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-6 py-5">
        <h2 className="text-2xl font-bold text-white">Latest Events</h2>

        <p className="mt-1 text-slate-400">Recently created events</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-800 text-left">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Title
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Category
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Organizer
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Date
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr
                key={event._id}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="px-6 py-5 font-medium text-white">
                  {event.title}
                </td>

                <td className="px-6 py-5 text-slate-300">{event.category}</td>

                <td className="px-6 py-5 text-slate-300">
                  {event.organizerName}
                </td>

                <td className="px-6 py-5 text-slate-300">
                  {format(new Date(event.eventDate), "dd MMM yyyy")}
                </td>

                <td className="px-6 py-5">
                  <Link
                    href={`/events/${event._id}`}
                    className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestEventsTable;
