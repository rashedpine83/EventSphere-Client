"use client";

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaRocket,
  FaShieldHeart,
  FaPeopleGroup,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa6";

const values = [
  {
    title: "Innovation",
    icon: FaLightbulb,
  },
  {
    title: "Community",
    icon: FaPeopleGroup,
  },
  {
    title: "Trust",
    icon: FaShieldHeart,
  },
  {
    title: "Collaboration",
    icon: FaHandshake,
  },
];

const MissionVision = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            MISSION & VISION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Driven By Purpose,
            <br />
            Inspired By Innovation
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Everything we build is designed to make event management easier,
            smarter and more enjoyable for everyone.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-gradient-to-br
              from-slate-900
              to-slate-800
              p-10
            "
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-4xl text-white">
              <FaBullseye />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">Our Mission</h3>

            <p className="mt-6 leading-8 text-slate-400">
              To empower organizers with modern tools while helping attendees
              discover meaningful events effortlessly. We strive to make event
              planning simple, efficient and accessible for everyone.
            </p>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-gradient-to-br
              from-slate-900
              to-slate-800
              p-10
            "
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-4xl text-white">
              <FaRocket />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">Our Vision</h3>

            <p className="mt-6 leading-8 text-slate-400">
              To become the most trusted event management platform where people
              can connect, learn, collaborate and create unforgettable
              experiences through technology.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-white"
          >
            Our Core Values
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-slate-900
                    p-8
                    text-center
                  "
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-3xl text-white">
                    <Icon />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-white">
                    {value.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
