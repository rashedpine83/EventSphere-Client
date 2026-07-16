"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "EventSphere made registering for tech conferences incredibly easy. The interface is modern, smooth and very reliable.",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    role: "Event Organizer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Managing events has never been this simple. Creating, editing and tracking registrations takes only a few minutes.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=48",
    review:
      "I love the clean design and responsive experience. EventSphere is one of the best event platforms I've used.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            What Our Community Says
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Thousands of organizers and attendees trust EventSphere to create
            memorable event experiences.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-b
                from-slate-800
                to-slate-900
                p-8
              "
            >
              {/* Rating */}

              <div className="mb-6 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}

              <p className="leading-8 text-slate-300">"{testimonial.review}"</p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>

                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
