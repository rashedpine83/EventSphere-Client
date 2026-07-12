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

export const createEvent = async (eventData: EventData, token: string) => {
  return await serverMutation<CreateEventResponse>(
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

export const getEvents = async (): Promise<Event[]> => {
  return await serverFetch<Event[]>("/api/events");
};
