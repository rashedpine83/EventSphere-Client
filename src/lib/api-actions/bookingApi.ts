import { serverFetch } from "../core/server";

export interface Booking {
  _id: string;
  eventId: string;
  eventTitle: string;
  eventCategory: string;
  eventImage: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
  organizerName: string;
  organizerEmail: string;
  attendeeName: string;
  attendeeEmail: string;
  phone: string;
  address: string;
  paymentStatus: string;
  ticketPrice: number;
  joinedAt: string;
  paidAt?: string;
  transactionId?: string;
}

export interface BookingResponse {
  success: boolean;
  bookings: Booking[];
}
// bookingApi.ts

export const getMyBookings = async (
  email: string,
): Promise<BookingResponse> => {
  return await serverFetch(`/api/my-bookings/${email}`);
};
