import { DashboardResponse } from "@/services/dashboard";
import { serverFetch } from "../core/server";

export const getDashboardData = async (): Promise<DashboardResponse> => {
  return await serverFetch("/api/admin/dashboard");
};
