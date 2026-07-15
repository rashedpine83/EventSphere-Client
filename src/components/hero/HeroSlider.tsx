"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { FaAngleLeft, FaAngleRight, FaCalendarAlt } from "react-icons/fa";

import { FaClock, FaLocationDot, FaUsers } from "react-icons/fa6";

import { format } from "date-fns";

import { Event } from "@/services/event";

interface Props {
  events: Event[];
}

const HeroSlider = ({ events }: Props) => {
  const [current, setCurrent] = useState(0);

  /* Prevent crash if there are no events */

  if (!events || events.length === 0) {
    return (
      <div
        className="
          flex
          h-[520px]
          items-center
          justify-center
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
        "
      >
        <p className="text-slate-400">No featured events available.</p>
      </div>
    );
  }

  /* Current Slide */

  const slide = events[current];

  /* Next Slide */

  const nextSlide = () => {
    setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  /* Previous Slide */

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  /* Auto Slider */

  useEffect(() => {
    if (events.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide._id}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 0.7,
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}

          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Content */}

          <div className="absolute bottom-0 left-0 right-0 p-8">
            {/* Category */}

            <span className="inline-flex rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
              {slide.category}
            </span>

            {/* Title */}

            <h2 className="mt-5 line-clamp-2 text-4xl font-bold text-white">
              {slide.title}
            </h2>

            {/* Description */}

            <p className="mt-4 line-clamp-3 max-w-2xl leading-7 text-slate-300">
              {slide.description}
            </p>

            {/* Information */}

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-emerald-400" />
                {slide.location}
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-400" />
                {format(new Date(slide.eventDate), "dd MMM yyyy")}
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-emerald-400" />
                {slide.startTime} - {slide.endTime}
              </div>

              <div className="flex items-center gap-2">
                <FaUsers className="text-emerald-400" />
                {slide.attendeeLimit} Seats
              </div>
            </div>

            {/* Bottom */}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Organized By</p>

                <h3 className="font-semibold text-white">
                  {slide.organizerName}
                </h3>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-400">Ticket</p>

                <h3 className="text-xl font-bold text-emerald-400">
                  {slide.isPaid ? `৳ ${slide.ticketPrice}` : "FREE"}
                </h3>
              </div>
            </div>

            {/* Button */}

            <div className="mt-8">
              <Link
                href={`/events/${slide._id}`}
                className="
                  inline-flex
                  rounded-xl
                  bg-emerald-500
                  px-7
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-emerald-600
                "
              >
                View Details →
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Previous Button */}

      {events.length > 1 && (
        <button
          onClick={prevSlide}
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-black/40
            p-3
            text-white
            backdrop-blur
            transition
            hover:bg-emerald-500
          "
        >
          <FaAngleLeft size={22} />
        </button>
      )}

      {/* Next Button */}

      {events.length > 1 && (
        <button
          onClick={nextSlide}
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-black/40
            p-3
            text-white
            backdrop-blur
            transition
            hover:bg-emerald-500
          "
        >
          <FaAngleRight size={22} />
        </button>
      )}

      {/* Indicator Dots */}

      {events.length > 1 && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-emerald-500"
                  : "bg-white/40 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
