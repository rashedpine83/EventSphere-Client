"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is EventSphere?",
    answer:
      "EventSphere is an event management platform where organizers can create events and attendees can discover, register and participate easily.",
  },
  {
    question: "Do I need an account to register for an event?",
    answer:
      "Yes. You need to create an EventSphere account before registering for any event. This helps us manage your bookings securely.",
  },
  {
    question: "Can I organize my own events?",
    answer:
      "Absolutely. Users with the Organizer role can create, update and manage their own events through the dashboard.",
  },
  {
    question: "Are all events free?",
    answer:
      "No. Event organizers can create both free and paid events. Ticket prices are shown on each event details page.",
  },
  {
    question: "Can I cancel my registration?",
    answer:
      "Depending on the organizer's policy, you may be able to cancel your registration before the event starts.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. Payments are processed securely and sensitive payment information is never stored directly by EventSphere.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-5xl px-5">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Everything you need to know before creating or joining an event.
          </p>
        </div>

        {/* Accordion */}

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <FaChevronDown className="text-emerald-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-white/10 px-6 pb-6 pt-5 text-slate-400 leading-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
