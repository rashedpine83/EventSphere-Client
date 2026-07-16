"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
              ABOUT EVENTSPHERE
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
              Connecting People
              <br />
              Through Great Events
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              EventSphere is a modern event management platform that helps
              organizers create memorable experiences and attendees discover
              amazing events with ease.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/events"
                className="inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-600"
              >
                Explore Events
                <FaArrowRight />
              </Link>

              <Link
                href="/register"
                className="rounded-xl border border-white/10 px-7 py-4 font-semibold text-white transition hover:border-emerald-500"
              >
                Join Community
              </Link>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              rounded-[40px]
              border
              border-white/10
              bg-gradient-to-br
              from-slate-800
              to-slate-900
              p-12
            "
          >
            <div className="grid gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white">Simple</h3>

                <p className="mt-3 text-slate-400">
                  Easy event creation and registration.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">Secure</h3>

                <p className="mt-3 text-slate-400">
                  Protected authentication and safe event management.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">Community</h3>

                <p className="mt-3 text-slate-400">
                  Bringing organizers and attendees together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
