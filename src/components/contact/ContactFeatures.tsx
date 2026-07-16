"use client";

import { motion } from "framer-motion";
import { FaHeadset, FaBolt, FaShieldAlt, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: FaBolt,
    title: "Fast Response",
    description:
      "Our team usually responds to all inquiries within 24 hours, ensuring you receive timely support whenever you need it.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    description:
      "Whether you're an attendee or organizer, our support specialists are ready to help with registrations, payments, and events.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Communication",
    description:
      "Every conversation is handled securely and confidentially, protecting your personal information at every step.",
  },
  {
    icon: FaHandshake,
    title: "Trusted Partnership",
    description:
      "We're committed to building long-term relationships by delivering reliable service and exceptional customer care.",
  },
];

const ContactFeatures = () => {
  return (
    <section className="bg-[#070B18] py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            WHY CONTACT EVENTSPHERE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            We're Here To Help You
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Our goal is to make your EventSphere experience smooth, reliable and
            enjoyable. Whenever you reach out, our team is committed to
            providing quick, professional and friendly support.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

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
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
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
                  transition-all
                  duration-300
                  hover:border-emerald-500/40
                "
              >
                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-emerald-500
                    to-teal-500
                    text-3xl
                    text-white
                    shadow-lg
                    shadow-emerald-500/20
                  "
                >
                  <Icon />
                </div>

                {/* Title */}

                <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="relative z-10 mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-20
            rounded-3xl
            border
            border-emerald-500/20
            bg-gradient-to-r
            from-emerald-500/10
            via-transparent
            to-teal-500/10
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-bold text-white">
            Your Success Is Our Priority
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            From discovering amazing events to organizing unforgettable
            experiences, EventSphere is committed to supporting you at every
            stage. We're only one message away.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFeatures;
