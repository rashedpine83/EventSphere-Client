import { clientFetch } from "../core/client";

export const createUser = async (user: {
  name: string;
  email: string;
  image: string;
  role: "attendee" | "organizer";
}) => {
  return await clientFetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};
