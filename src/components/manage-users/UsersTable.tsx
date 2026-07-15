"use client";

import { useState } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";

import {
  deleteUser,
  updateUserRole,
  updateUserStatus,
} from "@/lib/api-actions/userApi";

import { User } from "@/services/user";

interface Props {
  users: User[];
}

const UsersTable = ({ users }: Props) => {
  const [userList, setUserList] = useState(users);

  const [loadingId, setLoadingId] = useState("");

  const handleRoleChange = async (id: string, role: string) => {
    setLoadingId(id);

    try {
      await updateUserRole(id, role);

      setUserList((prev) =>
        prev.map((user) => (user._id === id ? { ...user, role } : user)),
      );

      toast.success("Role updated successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to update role.");
    } finally {
      setLoadingId("");
    }
  };

  const handleStatus = async (id: string, currentStatus: string) => {
    const status = currentStatus === "Blocked" ? "Active" : "Blocked";

    setLoadingId(id);

    try {
      await updateUserStatus(id, status);

      setUserList((prev) =>
        prev.map((user) =>
          user._id === id
            ? {
                ...user,
                status,
              }
            : user,
        ),
      );

      toast.success("Status updated.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to update status.");
    } finally {
      setLoadingId("");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this user?")) return;

    setLoadingId(id);

    try {
      await deleteUser(id);

      setUserList((prev) => prev.filter((user) => user._id !== id));

      toast.success("User deleted.");
    } catch (error) {
      console.error(error);

      toast.error("Delete failed.");
    } finally {
      setLoadingId("");
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Role
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Joined
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {userList.map((user) => (
              <tr
                key={user._id}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="px-6 py-5 font-medium text-white">
                  {user.name}
                </td>

                <td className="px-6 py-5 text-slate-300">{user.email}</td>

                <td className="px-6 py-5">
                  <select
                    disabled={loadingId === user._id}
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white disabled:opacity-50"
                  >
                    <option value="admin">Admin</option>

                    <option value="organizer">Organizer</option>

                    <option value="attendee">Attendee</option>
                  </select>
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.status === "Blocked"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-slate-300">
                  {format(new Date(user.createdAt), "dd MMM yyyy")}
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <button
                      disabled={loadingId === user._id}
                      onClick={() => handleStatus(user._id, user.status)}
                      className={`rounded-lg px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 ${
                        user.status === "Blocked"
                          ? "bg-emerald-500 hover:bg-emerald-600"
                          : "bg-yellow-500 hover:bg-yellow-600"
                      }`}
                    >
                      {loadingId === user._id
                        ? "..."
                        : user.status === "Blocked"
                          ? "Unblock"
                          : "Block"}
                    </button>

                    <button
                      disabled={loadingId === user._id}
                      onClick={() => handleDelete(user._id)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-50"
                    >
                      {loadingId === user._id ? "..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
