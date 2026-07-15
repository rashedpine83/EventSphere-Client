"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { User } from "@/services/user";
import UsersTable from "./UsersTable";

interface Props {
  users: User[];

  totalUsers: number;

  totalPages: number;

  currentPage: number;

  search: string;

  role: string;
}

const ManageUsersContainer = ({
  users,
  totalUsers,
  totalPages,
  currentPage,
  search,
  role,
}: Props) => {
  const router = useRouter();

  const [searchText, setSearchText] = useState(search);

  const [selectedRole, setSelectedRole] = useState(role);

  const handleFilter = () => {
    router.push(
      `/manage-users?page=1&search=${searchText}&role=${selectedRole}`,
    );
  };

  return (
    <>
      {/* Top */}

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Users</h2>

          <p className="mt-2 text-slate-400">
            Total Users :
            <span className="ml-2 font-semibold text-emerald-400">
              {totalUsers}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search name or email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />

          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500"
          >
            <option>All</option>

            <option>admin</option>

            <option>organizer</option>

            <option>attendee</option>
          </select>

          <button
            onClick={handleFilter}
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table */}

      <UsersTable users={users} />

      {/* <div className="rounded-3xl border border-slate-800 bg-slate-900 p-20 text-center text-slate-400">
        Users Table Coming in Part-2
      </div> */}

      {/* Pagination */}

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-3">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              router.push(
                `/manage-users?page=${currentPage - 1}&search=${searchText}&role=${selectedRole}`,
              )
            }
            className="rounded-lg border border-slate-700 px-4 py-2 text-white disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() =>
                router.push(
                  `/manage-users?page=${index + 1}&search=${searchText}&role=${selectedRole}`,
                )
              }
              className={`rounded-lg px-4 py-2 ${
                currentPage === index + 1
                  ? "bg-emerald-500 text-white"
                  : "border border-slate-700 text-slate-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              router.push(
                `/manage-users?page=${currentPage + 1}&search=${searchText}&role=${selectedRole}`,
              )
            }
            className="rounded-lg border border-slate-700 px-4 py-2 text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ManageUsersContainer;
