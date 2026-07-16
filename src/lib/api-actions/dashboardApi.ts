import { Event } from "@/services/event";
import { serverFetch } from "../core/server";
/* ---------------- Types ---------------- */

// export interface HeroEvent {
//   _id: string;
//   title: string;
//   description: string;
//   category: string;
//   image: string;
//   location: string;
//   eventDate: string;
//   startTime: string;
//   endTime: string;
//   isPaid: boolean;
//   ticketPrice: number;
//   attendeeLimit: number;
//   organizerName: string;
//   organizerEmail: string;
//   createdAt: string;
// }

export interface DashboardStats {
  totalUsers: number;
  totalEvents: number;
  totalBookings: number;

  totalWishlist: number;
  totalOrganizers: number;
  totalAttendees: number;

  totalRevenue: number;
}

export interface DashboardResponse2 {
  success: boolean;
  stats: DashboardStats;

  latestEvents: Event[];

  categoryData: {
    _id: string;
    count: number;
  }[];

  latestUsers: {
    _id?: string;
    name: string;
    email: string;
    image: string;
    role: "admin" | "organizer" | "attendee";
  }[];
}

export const getDashboardData = async (): Promise<DashboardResponse2> => {
  return await serverFetch<DashboardResponse2>("/api/admin/dashboard");
};

// export const getDashboardData = async (): Promise<DashboardResponse> => {
//   return await serverFetch("/api/admin/dashboard");
// };

/* ---------------- API ---------------- */

// export const getDashboardStats = async (): Promise<DashboardResponse2> => {
//   return await clientFetch<DashboardResponse2>("/api/admin/dashboard");
// };
