const TicketDivider = () => {
  return (
    <div className="relative mb-5 flex items-center">
      <div className="absolute -left-5 h-10 w-10 rounded-full bg-slate-950" />

      <div className="w-full border-t-2 border-dashed border-slate-700" />

      <div className="absolute -right-5 h-10 w-10 rounded-full bg-slate-950" />
    </div>
  );
};

export default TicketDivider;
