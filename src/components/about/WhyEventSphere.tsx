"use client";

import { motion } from "framer-motion";

import {
  FaCalendarCheck,
  FaUserShield,
  FaBolt,
  FaUsers,
  FaMobileScreen,
  FaChartLine,
} from "react-icons/fa6";

const features = [
  {
    title: "Easy Event Management",
    description:
      "Create, edit and manage events with an intuitive interface designed for organizers.",
    icon: FaCalendarCheck,
  },
  {
    title: "Secure Authentication",
    description:
      "JWT authentication and role-based authorization keep your account and events secure.",
    icon: FaUserShield,
  },
  {
    title: "Fast Performance",
    description:
      "Built with Next.js and Express.js to deliver a smooth and responsive experience.",
    icon: FaBolt,
  },
  {
    title: "Community Focused",
    description:
      "Connect organizers and attendees in one place to build meaningful communities.",
    icon: FaUsers,
  },
  {
    title: "Responsive Design",
    description: "Works beautifully across desktop, tablet and mobile devices.",
    icon: FaMobileScreen,
  },
  {
    title: "Real-Time Insights",
    description:
      "Track events, registrations and platform growth with dynamic dashboard statistics.",
    icon: FaChartLine,
  },
];

const WhyEventSphere = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            WHY CHOOSE EVENTSPHERE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need
            <br />
            In One Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            EventSphere combines modern technology with simplicity to provide a
            complete event management solution for organizers and attendees.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-slate-800
                  to-slate-900
                  p-8
                  transition-all
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
                    text-3xl
                    text-white
                    transition-transform
                    duration-300
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                >
                  <Icon />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyEventSphere;
