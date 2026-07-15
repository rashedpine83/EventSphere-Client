import { redirect } from "next/navigation";
import { getUserSession } from "./session";
import { getUserByEmail } from "@/lib/api-actions/userApi";

export const requireRole = async (
  roles: ("admin" | "organizer" | "attendee")[],
) => {
  const sessionUser = await getUserSession();

  if (!sessionUser) {
    redirect("/login");
  }

  const { user } = await getUserByEmail(sessionUser.email);

  if (!roles.includes(user.role)) {
    redirect("/unauthorized");
  }

  return user;
};
