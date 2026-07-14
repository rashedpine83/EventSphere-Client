"use client";
import { Ticket } from "@/services/ticket";
import TicketActions from "./TicketActions";
import TicketHeader from "./TicketHeader";
import { QRCodeCanvas } from "qrcode.react";
import TicketDivider from "./TicketDivider";

interface Props {
  ticket: Ticket;
}

const TicketCard = ({ ticket }: Props) => {
  return (
    <div
      id={`ticket-${ticket._id}`}
      className="
overflow-hidden
rounded-[32px]
border
border-slate-700
bg-gradient-to-br
from-slate-900
via-slate-900
to-slate-950
shadow-[0_20px_60px_rgba(0,0,0,.45)]
"
    >
      {/* Header */}
      <div
        className="
            flex
            items-center
            justify-between
            bg-gradient-to-r
            from-emerald-500
            via-teal-500
            to-cyan-500
            px-4
            py-4
            "
      >
        <div>
          <h2 className="text-3xl font-black tracking-wide text-white">
            EventSphere
          </h2>

          <p className="text-sm text-white/80">Professional Event Ticket</p>
        </div>

        <span
          className={`rounded-full px-3 py-2 text-sm font-bold text-white backdrop-blur-md ${
            ticket.paymentStatus === "paid"
              ? "bg-blue-500/80"
              : "bg-emerald-500/80"
          }`}
        >
          {ticket.paymentStatus === "paid" ? "PAID TICKET" : "FREE PASS"}
        </span>
      </div>

      {/* Banner */}
      <TicketHeader
        // image={ticket.eventImage}
        title={ticket.eventTitle}
        category={ticket.eventCategory}
      />
      <TicketDivider />

      {/* Body */}
      <div className="px-10 grid grid-cols-2 gap-6">
        {/* Left */}
        <div className="space-y-3">
          <div>
            <p className="text-sm text-slate-400">Attendee</p>

            <h3 className="text-xl font-semibold text-white">
              {ticket.attendeeName}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">Email</p>

            <h3 className="text-white">{ticket.attendeeEmail}</h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">Phone</p>

            <h3 className="text-white">{ticket.phone}</h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">Address</p>

            <h3 className="text-white">{ticket.address}</h3>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-3">
          <div>
            <p className="text-sm text-slate-400">Location</p>

            <h3 className="text-white">{ticket.location}</h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">Date</p>

            <h3 className="text-white">{ticket.eventDate}</h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">Time</p>

            <h3 className="text-white">
              {ticket.startTime} - {ticket.endTime}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">Organizer</p>

            <h3 className="text-white">{ticket.organizerName}</h3>
          </div>

          <div className="pt-3">
            <p className="mb-3 text-sm text-slate-400">QR Code</p>

            <div
              className="
                    inline-flex
                    rounded-2xl
                    bg-white
                    p-4
                    shadow-lg
                    "
            >
              <QRCodeCanvas value={ticket._id} size={120} includeMargin />
            </div>

            <p className="mt-3 text-sm text-slate-400">Ticket ID</p>

            <h3
              className="
              font-mono
              text-xs
              tracking-widest
              text-emerald-400
              break-all
              "
            >
              {ticket._id}
            </h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
        border-t
        border-slate-700
        bg-slate-950/40
        p-4
        backdrop-blur
        "
      >
        <p className="mb-5 text-center text-sm text-slate-400">
          Please bring this ticket with a valid ID. This ticket contains a
          unique QR code.
        </p>
        <TicketActions ticketId={`ticket-${ticket._id}`} />
      </div>
    </div>
  );
};

export default TicketCard;
