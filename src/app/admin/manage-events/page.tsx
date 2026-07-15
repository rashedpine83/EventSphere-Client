import ManageEventsContainer from "@/components/manage-events/ManageEventsContainer";
import { getAdminEvents } from "@/lib/api-actions/events";
import { requireRole } from "@/lib/core/requireRole";

interface Props {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
}

const ManageAllEventsPage = async ({ searchParams }: Props) => {
  await requireRole(["admin"]);
  const params = await searchParams;

  const page = Number(params.page || 1);

  const search = params.search || "";

  const category = params.category || "All";

  const data = await getAdminEvents(page, 10, search, category);

  return (
    <section className="min-h-screen bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">Manage Events</h1>

          <p className="mt-3 text-slate-400">
            Manage all events created by organizers.
          </p>
        </div>

        <ManageEventsContainer
          events={data.events}
          totalEvents={data.totalEvents}
          totalPages={data.totalPages}
          currentPage={data.page}
          search={search}
          category={category}
        />
      </div>
    </section>
  );
};

export default ManageAllEventsPage;
