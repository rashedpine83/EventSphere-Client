export interface Ticket {
  _id: string;

  eventId: string;

  eventTitle: string;
  eventCategory: string;
  eventImage: string;

  location: string;

  eventDate: string;
  startTime: string;
  endTime: string;

  organizerName: string;
  organizerEmail: string;

  attendeeName: string;
  attendeeEmail: string;

  phone: string;
  address: string;

  paymentStatus: string;
  ticketPrice: number;

  joinedAt: string;
}

export interface TicketResponse {
  success: boolean;
  ticket: Ticket;
}
