"use client";

import { useEffect, useMemo, useState } from "react";
import EventGrid from "./EventGrid";
import { Event } from "@/services/event";
import { getEvents } from "@/lib/api-actions/events";

const EventContainer = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 12;

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);

        const data = await getEvents(currentPage, limit);

        setEvents(data.events);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [currentPage]);

  const categories = [
    "All",
    ...Array.from(new Set(events.map((event) => event.category))),
  ];

  const filteredEvents = useMemo(() => {
    const filtered = events.filter((event) => {
      const matchSearch =
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category === "All" || event.category === category;

      return matchSearch && matchCategory;
    });

    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }

      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

    return filtered;
  }, [events, search, category, sortBy]);
  return (
    <>
      {/* Search & Filter */}

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Showing {filteredEvents.length} event
            {filteredEvents.length !== 1 && "s"}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Total Events: {events.length}
          </p>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="mb-10 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-emerald-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Loading */}

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="py-20 text-center">
          <h3 className="text-2xl font-bold text-white">No Events Found</h3>

          <p className="mt-2 text-slate-400">Try another search or category.</p>
        </div>
      ) : (
        <EventGrid events={filteredEvents} />
      )}
      {/* Pagination */}

      {!loading && totalPages > 1 && (
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {/* Previous */}

          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2 text-white transition hover:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {/* Page Numbers */}

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`h-11 w-11 rounded-xl font-semibold transition ${
                currentPage === index + 1
                  ? "bg-emerald-500 text-white"
                  : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next */}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2 text-white transition hover:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default EventContainer;

// "use client";

// import { useMemo, useState } from "react";
// import EventGrid from "./EventGrid";
// import { Event } from "@/services/event";

// interface Props {
//   events: Event[];
// }

// const EventContainer = ({ events }: Props) => {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("newest");
//   const [currentPage, setCurrentPage] = useState(1);

// const limit = 12;

//   const categories = [
//     "All",
//     ...Array.from(new Set(events.map((event) => event.category))),
//   ];

//   const filteredEvents = useMemo(() => {
//     const filtered = events.filter((event) => {
//       const matchSearch =
//         event.title.toLowerCase().includes(search.toLowerCase()) ||
//         event.location.toLowerCase().includes(search.toLowerCase());

//       const matchCategory = category === "All" || event.category === category;

//       return matchSearch && matchCategory;
//     });

//     filtered.sort((a, b) => {
//       if (sortBy === "newest") {
//         return (
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );
//       }

//       return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
//     });

//     return filtered;
//   }, [events, search, category, sortBy]);

//   return (
//     <>
//       {/* Search & Filter */}
//       <div className="mb-8 flex items-center justify-between">
//         <p className="text-slate-400">
//           Showing{" "}
//           <span className="font-semibold text-emerald-400">
//             {filteredEvents.length}
//           </span>{" "}
//           event{filteredEvents.length !== 1 && "s"}
//         </p>

//         <p className="text-sm text-slate-500">Total Events: {events.length}</p>
//       </div>
//       <select
//         value={sortBy}
//         onChange={(e) => setSortBy(e.target.value)}
//         className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
//       >
//         <option value="newest">Newest First</option>
//         <option value="oldest">Oldest First</option>
//       </select>
//       <div className="mb-10 flex flex-col gap-4 md:flex-row">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
//         />

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
//         >
//           {categories.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>
//       </div>

//       <EventGrid events={filteredEvents} />
//     </>
//   );
// };

// export default EventContainer;
