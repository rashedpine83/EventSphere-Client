"use client";

import { motion } from "framer-motion";
import {
  FaShieldHeart,
  FaUsers,
  FaBolt,
  FaCalendarCheck,
} from "react-icons/fa6";

const features = [
  {
    icon: FaShieldHeart,
    title: "Secure Authentication",
    description:
      "Your account and event registrations are protected with modern authentication and secure access.",
  },
  {
    icon: FaCalendarCheck,
    title: "Easy Event Management",
    description:
      "Create, update and manage events effortlessly with a simple and intuitive dashboard.",
  },
  {
    icon: FaBolt,
    title: "Fast Registration",
    description:
      "Join your favorite events in just a few clicks without unnecessary steps or delays.",
  },
  {
    icon: FaUsers,
    title: "Growing Community",
    description:
      "Connect with organizers, professionals and participants through engaging events.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const WhyChoose = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Built For Modern Event Experiences
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            EventSphere provides everything you need to discover, organize,
            manage and attend events with confidence.
          </p>
        </div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-slate-800
                  to-slate-900
                  p-8
                  transition-all
                  duration-300
                "
              >
                {/* Hover Glow */}

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
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
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
