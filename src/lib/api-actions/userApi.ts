import { clientFetch } from "../core/client";
import { UsersResponse } from "@/services/user";
import { serverFetch } from "../core/server";

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

export const getUsers = async (
  page = 1,
  limit = 10,
  search = "",
  role = "All",
): Promise<UsersResponse> => {
  return await serverFetch(
    `/api/users?page=${page}&limit=${limit}&search=${search}&role=${role}`,
  );
};

export const updateUserRole = async (id: string, role: string) => {
  return await clientFetch(`/api/users/${id}/role`, {
    method: "PATCH",
    body: JSON.stringify({ role }),
  });
};

export const updateUserStatus = async (id: string, status: string) => {
  return await clientFetch(`/api/users/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
};

export const deleteUser = async (id: string) => {
  return await clientFetch(`/api/users/${id}`, {
    method: "DELETE",
  });
};
