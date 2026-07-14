import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

const PaymentSuccessPage = async ({ searchParams }: Props) => {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/payment/success?session_id=${session_id}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();

  if (!data.success) {
    redirect("/");
  }

  redirect(`/ticket/${data.ticketId}`);
};

export default PaymentSuccessPage;
