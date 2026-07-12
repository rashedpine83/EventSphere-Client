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

  const categories = [
    "All",
    ...Array.from(new Set(events.map((event) => event.category))),
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchSearch =
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category === "All" || event.category === category;

      return matchSearch && matchCategory;
    });
  }, [events, search, category]);

  return (
    <>
      {/* Search & Filter */}
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
