"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050816]">
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-[140px]" />

      <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400"
          >
            <FaEnvelope />

            <span>We're Always Ready To Help</span>
          </motion.div>

          {/* Title */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Let's Start A
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"
          >
            Whether you're organizing your next event, need technical
            assistance, or simply have a question, our team is ready to help you
            every step of the way.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
          >
            <Link
              href="#contact-form"
              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
            >
              Send Message
              <FaArrowRight />
            </Link>

            <Link
              href="/events"
              className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-emerald-500 hover:bg-white/5"
            >
              Explore Events
            </Link>
          </motion.div>

          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-14 flex items-center justify-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition hover:text-emerald-400">
              Home
            </Link>

            <MdKeyboardDoubleArrowRight />

            <span className="font-semibold text-emerald-400">Contact</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
