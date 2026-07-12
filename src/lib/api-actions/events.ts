import { Event } from "@/services/event";
import { serverFetch, serverMutation } from "../core/server";

export interface EventData {
  title: string;
  description: string;
  category: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  attendeeLimit: number;
  image: string;
}

export interface CreateEventResponse {
  success: boolean;
  message: string;
  insertedId?: string;
}

export interface EventResponse extends CreateEventResponse {
  event: Event;
}

export interface EventsResponse extends CreateEventResponse {
  events: Event[];
}

export const createEvent = async (
  eventData: EventData,
  token: string,
): Promise<CreateEventResponse> => {
  return await serverMutation(
    "/api/events",
    eventData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    "POST",
  );
};

export const updateEvent = async (
  id: string,
  eventData: EventData,
  token: string,
): Promise<CreateEventResponse> => {
  return await serverMutation(
    `/api/events/${id}`,
    eventData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    "PATCH",
  );
};
export const deleteEvent = async (
  id: string,
  token: string,
): Promise<CreateEventResponse> => {
  return await serverMutation(
    `/api/events/${id}`,
    undefined,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    "DELETE",
  );
};

// get all events

export const getEvents = async (): Promise<EventsResponse> => {
  return await serverFetch<EventsResponse>("/api/events");
};

// get single event by id
export const getSingleEvent = async (id: string): Promise<EventResponse> => {
  return await serverFetch<EventResponse>(`/api/events/${id}`);
};

// get events created by the logged-in user
export const getMyEvents = async (token: string): Promise<EventsResponse> => {
  return await serverFetch<EventsResponse>("/api/my-events", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const createEvent = async (eventData: EventData, token: string) => {
//   return await serverMutation<CreateEventResponse>(
//     "/api/events",
//     eventData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     },
//     "POST",
//   );
// };
