"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Props {
  ticketId: string;
}

const TicketActions = ({ ticketId }: Props) => {
  const handlePrint = () => {
    window.print();
  };

  // const handleDownload = async () => {
  //   const ticket = document.getElementById(ticketId);

  //   if (!ticket) {
  //     console.error("Ticket element not found");
  //     return;
  //   }

  //   try {
  //     if ("fonts" in document) {
  //       await document.fonts.ready;
  //     }

  //     const canvas = await html2canvas(ticket, {
  //       scale: 2,
  //       useCORS: true,
  //       allowTaint: true,
  //       logging: false,
  //       backgroundColor: "#ffffff",
  //       removeContainer: true,
  //       foreignObjectRendering: false,

  //       onclone: (doc) => {
  //         const root = doc.getElementById(ticketId);

  //         if (!root) return;

  //         root.style.background = "#ffffff";
  //         root.style.color = "#000000";
  //         root.style.boxShadow = "none";

  //         root.querySelectorAll("*").forEach((node) => {
  //           const el = node as HTMLElement;

  //           el.style.boxShadow = "none";
  //           el.style.filter = "none";
  //           el.style.backdropFilter = "none";

  //           const computed = window.getComputedStyle(el);

  //           if (
  //             computed.backgroundColor.includes("oklch") ||
  //             computed.backgroundColor.includes("lab")
  //           ) {
  //             el.style.backgroundColor = "#ffffff";
  //           }

  //           if (
  //             computed.color.includes("oklch") ||
  //             computed.color.includes("lab")
  //           ) {
  //             el.style.color = "#000000";
  //           }

  //           if (
  //             computed.borderColor.includes("oklch") ||
  //             computed.borderColor.includes("lab")
  //           ) {
  //             el.style.borderColor = "#d1d5db";
  //           }
  //         });
  //       },
  //     });

  //     const pdf = new jsPDF({
  //       orientation: "portrait",
  //       unit: "mm",
  //       format: "a4",
  //     });

  //     const pageWidth = pdf.internal.pageSize.getWidth();
  //     const pageHeight = pdf.internal.pageSize.getHeight();

  //     const margin = 10;

  //     const maxWidth = pageWidth - margin * 2;
  //     const maxHeight = pageHeight - margin * 2;

  //     const ratio = Math.min(
  //       maxWidth / canvas.width,
  //       maxHeight / canvas.height,
  //     );

  //     const imgWidth = canvas.width * ratio;
  //     const imgHeight = canvas.height * ratio;

  //     const x = (pageWidth - imgWidth) / 2;
  //     const y = (pageHeight - imgHeight) / 2;

  //     pdf.addImage(
  //       canvas.toDataURL("image/png"),
  //       "PNG",
  //       x,
  //       y,
  //       imgWidth,
  //       imgHeight,
  //     );

  //     pdf.save("eventsphere-ticket.pdf");
  //   } catch (error) {
  //     console.error("PDF Generation Error:", error);
  //   }
  // };

  return (
    <div className="mt-8 flex justify-center gap-4">
      {/* <button
        onClick={handleDownload}
        className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        Download PDF
      </button> */}

      <button
        onClick={handlePrint}
        className="rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
      >
        Print Ticket
      </button>
    </div>
  );
};

export default TicketActions;
