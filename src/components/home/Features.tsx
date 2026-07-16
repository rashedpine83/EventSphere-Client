"use client";

import { motion } from "framer-motion";
import { FaCalendarCheck, FaShieldHeart, FaUsers } from "react-icons/fa6";

const features = [
  {
    icon: FaCalendarCheck,
    title: "Discover Amazing Events",
    description:
      "Browse conferences, workshops, concerts and community events with an intuitive experience.",
  },
  {
    icon: FaUsers,
    title: "Easy Registration",
    description:
      "Register for your favorite events in seconds and manage all your bookings from one dashboard.",
  },
  {
    icon: FaShieldHeart,
    title: "Trusted Platform",
    description:
      "Verified organizers, secure authentication and reliable event management for everyone.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            WHY EVENTSPHERE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need To Experience Great Events
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            EventSphere makes discovering, organizing and joining events
            effortless with a modern, secure and user-friendly platform.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
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
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                "
              >
                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
                </div>

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

                  <div className="mt-8">
                    <span className="font-semibold text-emerald-400 transition group-hover:text-white">
                      Learn More →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
