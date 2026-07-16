"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-10
          [background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div className="relative mx-auto max-w-6xl px-5">
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
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-r
            from-slate-900
            via-slate-800
            to-slate-900
            p-12
            md:p-20
          "
        >
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-5
                py-2
                text-sm
                font-semibold
                text-emerald-400
              "
            >
              JOIN EVENTSPHERE
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              Create Amazing Events
              <br />
              Build Meaningful Connections
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Whether you are organizing a conference, workshop, meetup or
              festival, EventSphere gives you everything you need to manage
              successful events from start to finish.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/events"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-emerald-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-emerald-600
                "
              >
                Explore Events
                <FaArrowRight />
              </Link>

              <Link
                href="/add-event"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:border-emerald-500
                  hover:bg-emerald-500/10
                "
              >
                Host an Event
              </Link>
            </div>

            {/* Bottom Stats */}

            <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold text-white">100%</h3>

                <p className="mt-2 text-slate-400">Secure Authentication</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>

                <p className="mt-2 text-slate-400">Platform Availability</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">Unlimited</h3>

                <p className="mt-2 text-slate-400">Event Possibilities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
