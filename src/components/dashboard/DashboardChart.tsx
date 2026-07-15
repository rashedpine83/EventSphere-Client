"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

interface Props {
  categoryData: {
    _id: string;
    count: number;
  }[];
}

const COLORS = [
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#ec4899",
  "#84cc16",
  "#14b8a6",
  "#f97316",
];

const DashboardCharts = ({ categoryData }: Props) => {
  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-2">
      {/* Pie Chart */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-8 text-2xl font-bold text-white">
          Events By Category
        </h2>

        <div className="h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="count"
                nameKey="_id"
                outerRadius={130}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-8 text-2xl font-bold text-white">
          Category Statistics
        </h2>

        <div className="h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

              <XAxis dataKey="_id" stroke="#cbd5e1" />

              <YAxis stroke="#cbd5e1" />

              <Tooltip />

              <Bar dataKey="count" radius={[8, 8, 0, 0]} fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
