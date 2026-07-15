"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

import { FaArrowDown, FaLocationDot, FaUsers } from "react-icons/fa6";

import HeroSlider from "./HeroSlider";

import { DashboardStats } from "@/lib/api-actions/dashboardApi";

import { Event } from "@/services/event";

interface Props {
  stats: DashboardStats;
  events: Event[];
}
const Hero = ({ stats, events }: Props) => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Blur */}

      <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="container mx-auto grid min-h-[70vh] items-center gap-14 px-6 py-20 lg:grid-cols-2">
        {/* Left Side */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-500/40
              bg-emerald-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-emerald-400
            "
          >
            <FaCalendarAlt />
            Discover Amazing Events
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Discover
            <span className="block text-emerald-400">Amazing Events</span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Find conferences, hackathons, workshops, concerts, festivals and
            community events happening across Bangladesh. Join thousands of
            attendees and never miss your next great experience.
          </p>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-emerald-500
                px-7
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
              href="/register"
              className="
                rounded-xl
                border
                border-slate-700
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:border-emerald-500
                hover:bg-slate-900
              "
            >
              Join Now
            </Link>
          </div>

          {/* Dynamic Statistics */}

          <div className="mt-14 grid  gap-5 grid-cols-3">
            {/* Total Events */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/80
                p-6
                backdrop-blur
              "
            >
              <h3 className="text-4xl font-black text-emerald-400">
                {stats.totalEvents}+
              </h3>

              <p className="mt-2 text-slate-400">Total Events</p>
            </motion.div>

            {/* Total Users */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/80
                p-6
                backdrop-blur
              "
            >
              <h3 className="text-4xl font-black text-cyan-400">
                {stats.totalUsers}+
              </h3>

              <p className="mt-2 text-slate-400">Community Members</p>
            </motion.div>

            {/* Total Registrations */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/80
                p-6
                backdrop-blur
              "
            >
              <h3 className="text-4xl font-black text-yellow-400">
                {stats.totalBookings}+
              </h3>

              <p className="mt-2 text-slate-400">Successful Registrations</p>
            </motion.div>
          </div>

          {/* Features */}

          <div className="mt-12 flex flex-wrap gap-8 text-slate-300">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/10 p-2">
                <FaUsers className="text-emerald-400" />
              </div>

              <span>Trusted Community</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/10 p-2">
                <FaLocationDot className="text-emerald-400" />
              </div>

              <span>Events Across Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <HeroSlider events={events} />
        </motion.div>
      </div>

      {/* Scroll Down */}

      <motion.a
        href="#featured-events"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          flex
          -translate-x-1/2
          flex-col
          items-center
          text-slate-400
          transition
          hover:text-emerald-400
        "
      >
        <span className="text-sm font-medium">Scroll Down</span>

        <FaArrowDown className="mt-2 text-xl" />
      </motion.a>
    </section>
  );
};

export default Hero;
