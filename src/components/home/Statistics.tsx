"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { FaCalendarCheck, FaUsers } from "react-icons/fa";

import { FaTicket, FaBangladeshiTakaSign } from "react-icons/fa6";

interface Props {
  stats: {
    totalEvents: number;
    totalUsers: number;
    totalBookings: number;
    totalRevenue: number;
  };
}

const items = [
  {
    title: "Total Events",
    valueKey: "totalEvents",
    icon: FaCalendarCheck,
    suffix: "+",
  },
  {
    title: "Community Members",
    valueKey: "totalUsers",
    icon: FaUsers,
    suffix: "+",
  },
  {
    title: "Registrations",
    valueKey: "totalBookings",
    icon: FaTicket,
    suffix: "+",
  },
  {
    title: "Revenue",
    valueKey: "totalRevenue",
    icon: FaBangladeshiTakaSign,
    prefix: "৳ ",
  },
];

const Statistics = ({ stats }: Props) => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            OUR IMPACT
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            EventSphere In Numbers
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Thousands of users trust EventSphere to discover, organize and
            participate in memorable events.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            const value = stats[item.valueKey as keyof typeof stats] ?? 0;

            return (
              <motion.div
                key={item.title}
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
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-slate-900
                  to-slate-800
                  p-8
                "
              >
                {/* Glow */}

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

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

                  <h3 className="mt-8 text-4xl font-bold text-white">
                    {item.prefix}

                    <CountUp end={Number(value)} duration={2.5} />

                    {item.suffix}
                  </h3>

                  <p className="mt-4 text-lg text-slate-400">{item.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
