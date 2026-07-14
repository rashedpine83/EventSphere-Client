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

export type DbUser = {
  _id?: string;
  name: string;
  email: string;
  image: string;
  role: "admin" | "organizer" | "attendee";
};

type UserResponse = {
  success: boolean;
  user: DbUser;
};

export const getUserByEmail = async (email: string): Promise<UserResponse> => {
  return await clientFetch(`/api/users/${email}`);
};
