export interface DashboardEvent {
  _id: string;
  title: string;
  category: string;
  organizerName: string;
  eventDate: string;
  createdAt: string;
}

export interface DashboardUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface DashboardResponse {
  success: boolean;

  stats: {
    totalUsers: number;
    totalEvents: number;
    totalBookings: number;
    totalWishlist: number;
    totalOrganizers: number;
    totalAttendees: number;
    revenue: number;
  };

  categoryData: {
    _id: string;
    count: number;
  }[];

  latestEvents: DashboardEvent[];

  latestUsers: DashboardUser[];
}
