import { requireRole } from "@/lib/core/requireRole";
import ManageEventsPage from "./manage-event";

export default async function Page() {
  await requireRole(["organizer"]);

  return <ManageEventsPage />;
}
