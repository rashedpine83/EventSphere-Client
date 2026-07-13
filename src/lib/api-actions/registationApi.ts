import {
  RegisterEventResponse,
  RegistrationData,
} from "@/services/registation";
import { serverMutation } from "../core/server";

export const registerEvent = async (
  eventId: string,
  registrationData: RegistrationData,
  token: string,
): Promise<RegisterEventResponse> => {
  return await serverMutation(
    `/api/events/${eventId}/register`,
    registrationData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    "POST",
  );
};
