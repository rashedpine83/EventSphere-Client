import ManageUsersContainer from "@/components/manage-users/ManageUsersContainer";
import { getUsers } from "@/lib/api-actions/userApi";
import { requireRole } from "@/lib/core/requireRole";

interface Props {
  searchParams: Promise<{
    page?: string;
    search?: string;
    role?: string;
  }>;
}

const ManageUsersPage = async ({ searchParams }: Props) => {
  await requireRole(["admin"]);
  const params = await searchParams;

  const page = Number(params.page || 1);

  const search = params.search || "";

  const role = params.role || "All";

  const data = await getUsers(page, 10, search, role);

  return (
    <section className="min-h-screen bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">Manage Users</h1>

          <p className="mt-3 text-slate-400">
            Manage organizers, attendees and admins.
          </p>
        </div>

        <ManageUsersContainer
          users={data.users}
          totalUsers={data.totalUsers}
          totalPages={data.totalPages}
          currentPage={data.page}
          search={search}
          role={role}
        />
      </div>
    </section>
  );
};

export default ManageUsersPage;
