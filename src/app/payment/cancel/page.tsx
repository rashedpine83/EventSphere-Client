import Link from "next/link";

const PaymentCancelPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="rounded-2xl bg-slate-900 p-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-red-500">
          Payment Cancelled
        </h1>

        <p className="mb-8 text-slate-300">Your payment was cancelled.</p>

        <Link
          href="/events"
          className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white"
        >
          Back to Events
        </Link>
      </div>
    </main>
  );
};

export default PaymentCancelPage;
