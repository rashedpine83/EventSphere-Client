"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section id="contact-form" className="bg-[#050816] py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
              SEND MESSAGE
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Have A Question?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              We'd love to hear from you. Whether you need help with event
              registration, organizing an event, or have general inquiries,
              simply send us a message and our team will get back to you as soon
              as possible.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />

                <p className="text-slate-300">
                  Friendly support from our dedicated team.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />

                <p className="text-slate-300">
                  Usually responds within 24 hours.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />

                <p className="text-slate-300">
                  Secure and confidential communication.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900/70
                      px-4
                      py-3
                      text-white
                      outline-none
                      transition
                      placeholder:text-slate-500
                      focus:border-emerald-500
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900/70
                      px-4
                      py-3
                      text-white
                      outline-none
                      transition
                      placeholder:text-slate-500
                      focus:border-emerald-500
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900/70
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-slate-500
                    focus:border-emerald-500
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900/70
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-slate-500
                    focus:border-emerald-500
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-[1.02]
                  hover:shadow-lg
                  hover:shadow-emerald-500/30
                "
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
