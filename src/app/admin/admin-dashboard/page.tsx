import DashboardCards from "@/components/dashboard/DashboardCards";
import DashboardCharts from "@/components/dashboard/DashboardChart";
import LatestEventsTable from "@/components/dashboard/DashboardTable";
import LatestUsersTable from "@/components/dashboard/LatestUserTable";
import { getDashboardData } from "@/lib/api-actions/dashboardApi";

const AdminDashboardPage = async () => {
  const dashboard = await getDashboardData();

  return (
    <section className="min-h-screen bg-slate-950 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            Admin Panel
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">Dashboard</h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            Monitor your platform statistics, events, users, bookings and
            revenue from one place.
          </p>
        </div>

        <DashboardCards stats={dashboard.stats} />
        <DashboardCharts categoryData={dashboard.categoryData} />
        <LatestEventsTable events={dashboard.latestEvents} />
        <LatestUsersTable users={dashboard.latestUsers} />
      </div>
    </section>
  );
};

export default AdminDashboardPage;
