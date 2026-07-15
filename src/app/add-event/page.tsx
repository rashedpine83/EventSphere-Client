import EventForm from "@/components/events/EventForm";
import { requireRole } from "@/lib/core/requireRole";

const AddEventPage = async () => {
  await requireRole(["organizer"]);
  return <EventForm mode="create" />;
};

export default AddEventPage;
