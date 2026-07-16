// import { DashboardUser } from "@/services/dashboard";

import { DbUser } from "@/lib/api-actions/userApi";

interface Props {
  users: DbUser[];
}

const LatestUsersTable = ({ users }: Props) => {
  return (
    <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      {/* Header */}

      <div className="border-b border-slate-800 px-6 py-5">
        <h2 className="text-2xl font-bold text-white">Latest Users</h2>

        <p className="mt-1 text-slate-400">Recently joined users</p>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-800 text-left">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Name
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Email
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Role
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="px-6 py-5 font-medium text-white">
                  {user.name}
                </td>

                <td className="px-6 py-5 text-slate-300">{user.email}</td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.role === "admin"
                        ? "bg-red-500/20 text-red-400"
                        : user.role === "organizer"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestUsersTable;
