// export interface Event {
//   _id: string;
//   title: string;
//   description: string;
//   category: string;
//   location: string;
//   eventDate: string;
//   startTime: string;
//   endTime: string;
//   attendeeLimit: number;
//   image: string;
//   organizerName: string;
//   organizerEmail: string;
//   createdAt: string;
// }

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

  // NEW
  isPaid: boolean;
  ticketPrice: number;

  organizerName: string;
  organizerEmail: string;
  createdAt: string;

  joinedUsers?: JoinedUser[];
}
