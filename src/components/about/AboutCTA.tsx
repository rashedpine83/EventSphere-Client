"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarPlus } from "react-icons/fa6";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

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
            rounded-[36px]
            border
            border-white/10
            bg-gradient-to-r
            from-slate-900
            via-slate-800
            to-slate-900
            px-10
            py-16
            text-center
            shadow-2xl
            shadow-emerald-500/10
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-emerald-400
            "
          >
            JOIN OUR COMMUNITY
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
            Ready To Create
            <br />
            Your Next Event?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Whether you're planning your first meetup or managing a large-scale
            conference, EventSphere provides everything you need to create,
            promote and manage unforgettable events.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
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
                transition
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
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:border-emerald-500
                hover:bg-white/5
              "
            >
              Become Organizer
              <FaCalendarPlus />
            </Link>
          </div>

          {/* Bottom Stats */}

          <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-emerald-400">24/7</h3>

              <p className="mt-2 text-slate-400">Platform Availability</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">Secure</h3>

              <p className="mt-2 text-slate-400">JWT Authentication</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">Modern</h3>

              <p className="mt-2 text-slate-400">Next.js Powered Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
