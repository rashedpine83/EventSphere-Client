"use client";

import { useMemo, useState } from "react";
import WishlistGrid from "./WishlistGrid";
import { Wishlist } from "@/lib/api-actions/wishlistApi";

interface Props {
  wishlists: Wishlist[];
}

const WishlistContainer = ({ wishlists }: Props) => {
  const [wishlistData, setWishlistData] = useState(wishlists);

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("newest");

  const [currentPage, setCurrentPage] = useState(1);

  const limit = 12;

  const filteredWishlists = useMemo(() => {
    const filtered = wishlistData.filter((item) => {
      return (
        item.eventTitle.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase()) ||
        item.eventCategory.toLowerCase().includes(search.toLowerCase())
      );
    });

    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
      }

      return new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime();
    });

    return filtered;
  }, [wishlistData, search, sortBy]);

  const totalPages = Math.ceil(filteredWishlists.length / limit);

  const paginatedWishlists = filteredWishlists.slice(
    (currentPage - 1) * limit,
    currentPage * limit,
  );

  const handleRemove = (id: string) => {
    setWishlistData((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <>
      {/* Search */}

      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Saved Events</h2>

          <p className="mt-2 text-slate-400">
            Total Saved :
            <span className="ml-2 font-semibold text-emerald-400">
              {filteredWishlists.length}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search wishlist..."
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

      <WishlistGrid wishlists={paginatedWishlists} onRemove={handleRemove} />

      {/* Pagination */}

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="
              rounded-xl
              border
              border-slate-700
              px-5
              py-2.5
              text-white
              transition
              hover:border-emerald-500
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`rounded-xl px-4 py-2.5 font-semibold transition ${
                currentPage === index + 1
                  ? "bg-emerald-500 text-white"
                  : "border border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="
              rounded-xl
              border
              border-slate-700
              px-5
              py-2.5
              text-white
              transition
              hover:border-emerald-500
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default WishlistContainer;
