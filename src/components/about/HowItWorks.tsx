"use client";

import { motion } from "framer-motion";
import {
  FaMagnifyingGlass,
  FaUserCheck,
  FaCalendarDays,
  FaPeopleGroup,
} from "react-icons/fa6";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Browse upcoming events across different categories and find experiences that match your interests.",
    icon: FaMagnifyingGlass,
  },
  {
    number: "02",
    title: "Register",
    description:
      "Create an account and reserve your seat in just a few clicks using our secure registration system.",
    icon: FaUserCheck,
  },
  {
    number: "03",
    title: "Attend",
    description:
      "Participate in workshops, conferences, meetups and festivals while managing your bookings effortlessly.",
    icon: FaCalendarDays,
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Build relationships with organizers and attendees to grow your professional and personal network.",
    icon: FaPeopleGroup,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Join An Event
            <br />
            In Four Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Whether you are an attendee or organizer, EventSphere makes every
            step simple, fast and enjoyable.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-slate-700 lg:block">
            <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
          </div>

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  {/* Circle */}

                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-emerald-500
                      to-teal-500
                      text-4xl
                      text-white
                      shadow-xl
                      shadow-emerald-500/20
                    "
                  >
                    <Icon />
                  </div>

                  {/* Number */}

                  <p className="mt-8 text-sm font-bold tracking-[0.25em] text-emerald-400">
                    STEP {step.number}
                  </p>

                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-8 text-slate-400">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-24
            max-w-5xl
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-r
            from-slate-900
            via-slate-800
            to-slate-900
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-bold text-white">
            One Platform For Every Event
          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            From discovering exciting events to organizing your own community,
            EventSphere provides a seamless experience powered by modern
            technology, intuitive design and secure authentication.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
