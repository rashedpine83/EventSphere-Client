import { TicketResponse } from "@/services/ticket";
import { serverFetch } from "../core/server";

export const getTicket = async (id: string): Promise<TicketResponse> => {
  return await serverFetch(`/api/registrations/${id}`);
};
