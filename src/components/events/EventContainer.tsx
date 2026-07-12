"use client";

import { useMemo, useState } from "react";
import EventGrid from "./EventGrid";
import { Event } from "@/services/event";

interface Props {
  events: Event[];
}

const EventContainer = ({ events }: Props) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

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
      <div className="mb-8 flex items-center justify-between">
        <p className="text-slate-400">
          Showing{" "}
          <span className="font-semibold text-emerald-400">
            {filteredEvents.length}
          </span>{" "}
          event{filteredEvents.length !== 1 && "s"}
        </p>

        <p className="text-sm text-slate-500">Total Events: {events.length}</p>
      </div>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
      <div className="mb-10 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <EventGrid events={filteredEvents} />
    </>
  );
};

export default EventContainer;
