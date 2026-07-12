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
}
