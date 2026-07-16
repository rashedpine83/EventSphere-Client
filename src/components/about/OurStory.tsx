"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaRocket } from "react-icons/fa6";

const cards = [
  {
    icon: FaLightbulb,
    title: "The Beginning",
    description:
      "EventSphere was created to simplify event management by providing an intuitive platform where organizers and attendees can connect effortlessly.",
  },
  {
    icon: FaUsers,
    title: "Our Community",
    description:
      "We believe every successful event starts with a strong community. Our platform helps people discover opportunities, learn and build meaningful connections.",
  },
  {
    icon: FaRocket,
    title: "Our Future",
    description:
      "We're continuously improving EventSphere with modern technologies to make event discovery, booking and management faster, smarter and more enjoyable.",
  },
];

const OurStory = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <span
              className="
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
              OUR STORY
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Building Better
              <br />
              Event Experiences
            </h2>

            <p className="mt-8 leading-8 text-slate-400">
              We noticed that creating and managing events was often
              complicated, while attendees struggled to discover the right
              events. EventSphere was built to solve these challenges with a
              clean, secure and user-friendly platform.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              From conferences and workshops to cultural festivals and meetups,
              our goal is to empower organizers while helping attendees find
              experiences that inspire learning, networking and growth.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-gradient-to-r
                    from-slate-800
                    to-slate-900
                    p-8
                    transition-all
                  "
                >
                  <div className="flex items-start gap-6">
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
                        shrink-0
                      "
                    >
                      <Icon />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {card.title}
                      </h3>

                      <p className="mt-3 leading-8 text-slate-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
