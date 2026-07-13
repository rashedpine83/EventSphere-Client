import EventForm from "@/components/events/EventForm";
import { getSingleEvent } from "@/lib/api-actions/events";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EditEventPage = async ({ params }: Props) => {
  const { id } = await params;

  const { event } = await getSingleEvent(id);

  if (!event) {
    notFound();
  }

  return <EventForm mode="edit" event={event} />;
};

export default EditEventPage;
