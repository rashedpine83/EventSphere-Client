"use client";

interface Props {
  // image: string;
  title: string;
  category: string;
}

const TicketHeader = ({ title, category }: Props) => {
  return (
    <>
      {/* <img src={image} alt={title} className="h-64 w-full object-cover" /> */}

      <div className="space-y-2 p-8">
        <span className="rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
          {category}
        </span>

        <h1 className="text-3xl font-bold text-white">{title}</h1>
      </div>
    </>
  );
};

export default TicketHeader;
