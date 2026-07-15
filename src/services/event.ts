export interface JoinedUser {
  name: string;
  email: string;
  joinedAt: string;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  attendeeLimit: number;
  image: string;
  organizerName: string;
  organizerEmail: string;
  createdAt: string;
  isPaid: boolean;
  ticketPrice: number;
  registeredCount: number;
  remainingSeats: number;
  alreadyRegistered: boolean;
}

export interface AdminEvent {
  _id: string;
  title: string;
  image: string;
  category: string;
  location: string;
  organizerName: string;
  organizerEmail: string;
  eventDate: string;
  isPaid: boolean;
  ticketPrice: number;
  attendeeLimit: number;
  status: string;
  createdAt: string;
}

export interface AdminEventsResponse {
  success: boolean;
  events: AdminEvent[];
  totalEvents: number;
  totalPages: number;
  page: number;
}
