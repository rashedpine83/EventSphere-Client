import { notFound } from "next/navigation";
import TicketCard from "@/components/ticket/TicketCard";
import { getTicket } from "@/lib/api-actions/ticketsApi";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const TicketPage = async ({ params }: Props) => {
  const { id } = await params;

  const res = await getTicket(id);

  if (!res.success) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 py-10">
      <div className="mx-auto max-w-4xl px-5">
        <TicketCard ticket={res.ticket} />
      </div>
    </main>
  );
};

export default TicketPage;
