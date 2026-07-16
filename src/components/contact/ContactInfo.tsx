"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    title: "Email Address",
    value: "support@eventsphere.com",
    description:
      "Reach us anytime via email. We typically reply within 24 hours.",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone Number",
    value: "+880 1712-345678",
    description: "Speak directly with our support team during office hours.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Office Location",
    value: "Dhaka, Bangladesh",
    description: "Visit our office for meetings and collaboration sessions.",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    value: "Sun - Thu | 9:00 AM - 6:00 PM",
    description: "We're available throughout the business week to assist you.",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-[#070B18] py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            CONTACT INFORMATION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            We'd Love To Hear From You
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Choose the most convenient way to connect with our team. Whether you
            have questions, suggestions, or need assistance, we're always happy
            to help.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-emerald-500/40
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-emerald-500
                    to-teal-500
                    text-2xl
                    text-white
                    shadow-lg
                    shadow-emerald-500/20
                  "
                >
                  <Icon />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Value */}

                <p className="mt-4 break-words font-semibold text-emerald-400">
                  {item.value}
                </p>

                {/* Description */}

                <p className="mt-5 leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
