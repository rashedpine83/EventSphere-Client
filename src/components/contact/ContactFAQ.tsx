// "use client";

// import { Accordion, AccordionItem } from "@heroui/react";
// import { motion } from "framer-motion";

// const faqs = [
//   {
//     key: "1",
//     title: "How long does it take to receive a response?",
//     content:
//       "Our support team usually replies within 24 hours. During weekends or holidays, responses may take slightly longer.",
//   },
//   {
//     key: "2",
//     title: "Can I organize my own event on EventSphere?",
//     content:
//       "Yes. Simply create an organizer account, submit your event details, and after approval your event will be published for attendees.",
//   },
//   {
//     key: "3",
//     title: "How can I report an issue with an event?",
//     content:
//       "You can contact us through the form above or email our support team with the event details. We'll investigate the issue promptly.",
//   },
//   {
//     key: "4",
//     title: "Do you provide refund support?",
//     content:
//       "Refund policies depend on the event organizer. If you experience payment issues, our support team will assist you in resolving them.",
//   },
//   {
//     key: "5",
//     title: "Can businesses collaborate with EventSphere?",
//     content:
//       "Absolutely. We welcome partnerships, sponsorships, and collaboration opportunities. Contact us with your proposal and our team will get in touch.",
//   },
// ];

// const ContactFAQ = () => {
//   return (
//     <section className="bg-[#050816] py-24">
//       <div className="container mx-auto max-w-5xl px-6">
//         {/* Heading */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="mb-16 text-center"
//         >
//           <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
//             FAQ
//           </span>

//           <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
//             Frequently Asked Questions
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
//             Find answers to the questions we receive most often. If you still
//             need assistance, don't hesitate to contact our support team.
//           </p>
//         </motion.div>

//         {/* FAQ Card */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 50,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="
//             rounded-3xl
//             border
//             border-white/10
//             bg-white/5
//             p-4
//             backdrop-blur-xl
//           "
//         >
//           <Accordion
//             variant="surface"
//             selectionMode="multiple"
//             itemClasses={{
//               base: "bg-slate-900/70 border border-slate-800 rounded-2xl mb-4 px-2",
//               title: "text-white font-semibold text-lg",
//               content: "text-slate-400 leading-8 pb-5",
//               trigger:
//                 "hover:bg-slate-800/40 rounded-xl transition duration-300",
//             }}
//           >
//             {faqs.map((faq) => (
//               <AccordionItem
//                 key={faq.key}
//                 aria-label={faq.title}
//                 title={faq.title}
//               >
//                 {faq.content}
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactFAQ;
