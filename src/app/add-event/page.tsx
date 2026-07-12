"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useSession, authClient } from "@/lib/auth-client";

import {
  FaCalendarAlt,
  FaImage,
  FaMapMarkerAlt,
  FaTag,
  FaUsers,
  FaClock,
  FaAlignLeft,
} from "react-icons/fa";
import Image from "next/image";
import { createEvent } from "@/lib/api-actions/events";
import toast from "react-hot-toast";
import { uploadImage } from "@/services/uploadImage";

const categories = [
  "Technology",
  "Business",
  "Workshop",
  "Conference",
  "Meetup",
  "Music",
  "Sports",
  "Education",
  "Art",
  "Others",
];

const AddEventPage = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const user = session?.user;

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("");

  const [location, setLocation] = useState("");

  const [eventDate, setEventDate] = useState("");

  const [startTime, setStartTime] = useState("");

  const [endTime, setEndTime] = useState("");

  const [attendeeLimit, setAttendeeLimit] = useState("");

  const [image, setImage] = useState<File | null>(null);

  const validateForm = () => {
    if (!title.trim()) {
      toast.error("Event title is required.");
      return false;
    }

    if (!description.trim()) {
      toast.error("Description is required.");
      return false;
    }

    if (!category) {
      toast.error("Please select a category.");
      return false;
    }

    if (!location.trim()) {
      toast.error("Location is required.");
      return false;
    }

    if (!eventDate) {
      toast.error("Please select event date.");
      return false;
    }

    if (!startTime) {
      toast.error("Please select start time.");
      return false;
    }

    if (!endTime) {
      toast.error("Please select end time.");
      return false;
    }

    if (!attendeeLimit) {
      toast.error("Attendee limit is required.");
      return false;
    }

    if (!image) {
      toast.error("Event image is required.");
      return false;
    }

    return true;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first.");
      return;
    }

    if (!validateForm()) return;

    try {
      setLoading(true);

      const { data: tokenData, error } = await authClient.token();

      if (error || !tokenData?.token) {
        toast.error("Authentication failed. Please login again.");
        return;
      }

      if (!image) {
        toast.error("Please select an image.");
        return;
      }

      const imageUrl = await uploadImage(image);

      const eventData = {
        title,
        description,
        category,
        location,
        eventDate,
        startTime,
        endTime,
        attendeeLimit: Number(attendeeLimit),

        image: imageUrl,
      };

      const result = await createEvent(eventData, tokenData.token);

      if (result?.success) {
        toast.success("Event created successfully 🎉");

        setTitle("");
        setDescription("");
        setCategory("");
        setLocation("");
        setEventDate("");
        setStartTime("");
        setEndTime("");
        setAttendeeLimit("");
        setImage(null);

        router.push("/events");
      } else {
        toast.error(result?.message || "Failed to create event.");
      }
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black py-16">
      <div className="mx-auto max-w-6xl px-5">
        {" "}
        <div className="mb-10 text-center">
          <h1 className="bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Create New Event
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Fill in the information below to publish your event. Once created,
            it will instantly appear on the Explore page.
          </p>
        </div>
        <div
          className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          shadow-2xl
          backdrop-blur-xl
        "
        >
          <form
            onSubmit={handleSubmit}
            className="grid gap-8 p-8 lg:grid-cols-2"
          >
            {/* Left Side */}

            <div className="space-y-6">
              {/* Event Title */}

              <div>
                <label className="mb-2 block font-semibold text-white">
                  Event Title
                </label>

                <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 focus-within:border-emerald-500">
                  <FaTag className="text-slate-400" />

                  <input
                    type="text"
                    placeholder="Enter event title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="ml-3 h-full w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Description */}

              <div>
                <label className="mb-2 block font-semibold text-white">
                  Description
                </label>

                <div className="flex rounded-2xl border border-slate-700 bg-slate-900 px-4 py-4 focus-within:border-emerald-500">
                  <FaAlignLeft className="mt-1 text-slate-400" />

                  <textarea
                    rows={6}
                    placeholder="Write event description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="ml-3 w-full resize-none bg-transparent text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Category */}

              <div>
                <label className="mb-2 block font-semibold text-white">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-4
                  text-white
                  outline-none
                  focus:border-emerald-500
                "
                >
                  <option value="">Select Category</option>

                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}

              <div>
                <label className="mb-2 block font-semibold text-white">
                  Location
                </label>

                <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 focus-within:border-emerald-500">
                  <FaMapMarkerAlt className="text-slate-400" />

                  <input
                    type="text"
                    placeholder="Dhaka, Bangladesh"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="ml-3 h-full w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="space-y-6">
              {/* Event Date */}
              <div>
                <label className="mb-2 block font-semibold text-white">
                  Event Date
                </label>

                <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 focus-within:border-emerald-500">
                  <FaCalendarAlt className="text-slate-400" />

                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="ml-3 h-full w-full bg-transparent text-white outline-none"
                  />
                </div>
              </div>
              {/* Time */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-white">
                    Start Time
                  </label>

                  <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 focus-within:border-emerald-500">
                    <FaClock className="text-slate-400" />

                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="ml-3 h-full w-full bg-transparent text-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-white">
                    End Time
                  </label>

                  <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 focus-within:border-emerald-500">
                    <FaClock className="text-slate-400" />

                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="ml-3 h-full w-full bg-transparent text-white outline-none"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* Attendee Limit */}
              <div>
                <label className="mb-2 block font-semibold text-white">
                  Attendee Limit
                </label>

                <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 focus-within:border-emerald-500">
                  <FaUsers className="text-slate-400" />

                  <input
                    type="number"
                    min="1"
                    placeholder="100"
                    value={attendeeLimit}
                    onChange={(e) => setAttendeeLimit(e.target.value)}
                    className="ml-3 h-full w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>
              {/* Event Image */}
              <div>
                <label className="mb-2 block font-semibold text-white">
                  Event Image URL
                </label>

                <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 focus-within:border-emerald-500">
                  <FaImage className="text-slate-400" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setImage(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                    id="event-image"
                  />

                  <label htmlFor="event-image">Upload Event Image</label>
                </div>
              </div>
              {/* Image Preview */}
              {image && (
                <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 max-w-50">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="Event Preview"
                    width={200}
                    height={150}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/600x400?text=Invalid+Image";
                    }}
                  />
                </div>
              )}
              {/* Organizer */}
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
                <h3 className="mb-4 text-lg font-bold text-emerald-400">
                  Organizer
                </h3>

                <div className="space-y-2">
                  <p className="text-white">
                    <span className="font-semibold">Name:</span>{" "}
                    {user?.name || "Unknown"}
                  </p>

                  <p className="text-slate-300">
                    <span className="font-semibold">Email:</span>{" "}
                    {user?.email || "Unknown"}
                  </p>
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                h-14
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-emerald-500
                via-amber-500
                to-rose-500
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-2xl
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
              >
                {loading ? "Creating Event..." : "Create Event"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEventPage;
