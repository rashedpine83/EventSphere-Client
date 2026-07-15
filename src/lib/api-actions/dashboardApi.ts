import { DashboardResponse } from "@/services/dashboard";
import { serverFetch } from "../core/server";
import { clientFetch } from "../core/client";

/* ---------------- Types ---------------- */

export interface HeroEvent {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  isPaid: boolean;
  ticketPrice: number;
  attendeeLimit: number;
  organizerName: string;
  organizerEmail: string;
}

export interface DashboardStats {
  totalUsers: number;
  totalEvents: number;
  totalBookings: number;
  totalRevenue: number;

  latestEvents: HeroEvent[];
}

export interface DashboardResponse2 {
  success: boolean;
  stats: DashboardStats;
}

/* ---------------- API ---------------- */

export const getDashboardStats = async (): Promise<DashboardResponse2> => {
  return await clientFetch<DashboardResponse2>("/api/admin/dashboard");
};

export const getDashboardData = async (): Promise<DashboardResponse> => {
  return await serverFetch("/api/admin/dashboard");
};
