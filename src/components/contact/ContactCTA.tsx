"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarPlus } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#070B18] py-28">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
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
            duration: 0.6,
          }}
          className="
            overflow-hidden
            rounded-[36px]
            border
            border-emerald-500/20
            bg-gradient-to-r
            from-emerald-500/10
            via-slate-900/90
            to-teal-500/10
            p-10
            backdrop-blur-xl
            md:p-16
          "
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-emerald-400">
              JOIN EVENTSPHERE TODAY
            </span>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
              Ready To Experience
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Amazing Events?
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Discover inspiring conferences, workshops, concerts, hackathons,
              and community gatherings across Bangladesh. Join thousands of
              people creating unforgettable experiences together.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/events"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-xl
                  shadow-emerald-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-emerald-500/40
                "
              >
                Explore Events
                <FaArrowRight />
              </Link>

              <Link
                href="/register"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-700
                  bg-white/5
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-500
                  hover:bg-emerald-500/10
                "
              >
                <FaCalendarPlus />
                Create Account
              </Link>
            </div>

            {/* Bottom Stats */}

            <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-4xl font-black text-emerald-400">100+</h3>

                <p className="mt-2 text-slate-400">Successful Events</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-emerald-400">10K+</h3>

                <p className="mt-2 text-slate-400">Happy Participants</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-emerald-400">24/7</h3>

                <p className="mt-2 text-slate-400">Dedicated Support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
