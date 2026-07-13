"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { authClient, useSession } from "@/lib/auth-client";
import { createEvent, updateEvent } from "@/lib/api-actions/events";
import { uploadImage } from "@/services/uploadImage";
import {
  FaAlignLeft,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTag,
  FaUsers,
} from "react-icons/fa";

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

export interface Event {
  _id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  attendeeLimit: number;
  image: string;

  isPaid: boolean;
  ticketPrice: number;

  organizerName: string;
  organizerEmail: string;
}
interface EventFormProps {
  mode: "create" | "edit";
  event?: Event;
}

const EventForm = ({ mode, event }: EventFormProps) => {
  const router = useRouter();

  const { data: session } = useSession();

  const user = session?.user;

  const isEdit = mode === "edit";

  /* -------------------------- Form State -------------------------- */

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("");

  const [location, setLocation] = useState("");

  const [eventDate, setEventDate] = useState("");

  const [startTime, setStartTime] = useState("");

  const [endTime, setEndTime] = useState("");

  const [attendeeLimit, setAttendeeLimit] = useState("");

  const [image, setImage] = useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);

  const [isPaid, setIsPaid] = useState(
    isEdit ? (event?.isPaid ?? false) : false,
  );

  const [ticketPrice, setTicketPrice] = useState<number | "">(
    isEdit ? (event?.ticketPrice ?? "") : "",
  );

  /* -------------------------- Prefill Data -------------------------- */

  useEffect(() => {
    if (!isEdit || !event) return;

    setTitle(event.title);

    setDescription(event.description);

    setCategory(event.category);

    setLocation(event.location);

    setEventDate(event.eventDate);

    setStartTime(event.startTime);

    setEndTime(event.endTime);

    setAttendeeLimit(event.attendeeLimit.toString());

    setPreview(event.image);
  }, [event, isEdit]);

  /* -------------------------- Image -------------------------- */

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };
  /* -------------------------- Validation -------------------------- */

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
      toast.error("Event date is required.");
      return false;
    }

    if (!startTime) {
      toast.error("Start time is required.");
      return false;
    }

    if (!endTime) {
      toast.error("End time is required.");
      return false;
    }

    if (!attendeeLimit) {
      toast.error("Attendee limit is required.");
      return false;
    }

    if (Number(attendeeLimit) <= 0) {
      toast.error("Attendee limit must be greater than 0.");
      return false;
    }

    // Create mode
    if (!isEdit && !image) {
      toast.error("Event image is required.");
      return false;
    }

    return true;
  };

  /* -------------------------- Submit -------------------------- */

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const { data } = await authClient.token();

      if (!data?.token) {
        toast.error("Please login first.");
        return;
      }

      /* ---------------- Upload Image ---------------- */

      let imageUrl = preview;

      // Upload only if a new image is selected
      if (image) {
        imageUrl = await uploadImage(image);
      }

      /* ---------------- Event Data ---------------- */

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
        isPaid,
        ticketPrice: Number(ticketPrice),
      };

      /* ---------------- Create / Update ---------------- */

      let result;

      if (isEdit && event) {
        result = await updateEvent(event._id, eventData, data.token);
      } else {
        result = await createEvent(eventData, data.token);
      }
      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(
        isEdit ? "Event updated successfully." : "Event created successfully.",
      );

      router.push("/manage-events");

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="container mx-auto max-w-5xl px-4 py-10">
      {/* Header */}

      <div className="mb-10 text-center">
        <h1
          className="
        text-4xl
        font-black
        md:text-5xl
        bg-gradient-to-r
        from-emerald-500
        via-cyan-500
        to-blue-500
        bg-clip-text
        text-transparent"
        >
          {isEdit ? "Edit Event" : "Create New Event"}
        </h1>

        <p className="mt-4 text-base-content/70">
          {isEdit
            ? "Update your event information."
            : "Create an event and share it with everyone."}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
      rounded-3xl
      border
      border-base-300
      bg-base-100
      p-8
      shadow-xl"
      >
        <div className="grid gap-6 lg:grid-cols-2">
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

          {/* Date */}

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

          {/* Start Time */}

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

          {/* End Time */}

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

          {/* Attendee */}

          <div>
            <label className="mb-2 block font-semibold text-white">
              Attendee Limit
            </label>

            <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 focus-within:border-emerald-500">
              <FaUsers className="text-slate-400" />

              <input
                type="number"
                min="1"
                value={attendeeLimit}
                onChange={(e) => setAttendeeLimit(e.target.value)}
                className="ml-3 h-full w-full bg-transparent text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

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

          {/* Paid Event */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-xl font-bold text-white">Event Pricing</h3>

            <div className="flex gap-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={!isPaid}
                  onChange={() => {
                    setIsPaid(false);
                    setTicketPrice(0);
                  }}
                />

                <span className="text-white font-medium">Free Event</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={isPaid}
                  onChange={() => setIsPaid(true)}
                />

                <span className="text-white font-medium">Paid Event</span>
              </label>
            </div>

            {isPaid && (
              <div>
                <label className="mb-2 block text-white font-medium">
                  Ticket Price (BDT)
                </label>

                <input
                  type="number"
                  min="1"
                  value={ticketPrice}
                  onChange={(e) =>
                    setTicketPrice(
                      e.target.value === "" ? "" : Number(e.target.value),
                    )
                  }
                  placeholder="Enter ticket price"
                  className="input input-bordered w-full"
                />
              </div>
            )}
          </div>

          {/* Description */}

          <div className="lg:col-span-2">
            <label className="mb-2 block font-semibold text-white">
              Description
            </label>

            <div className="flex rounded-2xl border border-slate-700 bg-slate-900 px-4 py-4 transition-colors focus-within:border-emerald-500">
              <FaAlignLeft className="mt-1 shrink-0 text-slate-400" />

              <textarea
                rows={6}
                placeholder="Write event description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="ml-3 flex-1 resize-none bg-transparent text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Image Upload */}

          <div className="lg:col-span-2">
            <label className="mb-2 block font-semibold">Event Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="
                w-full
                rounded-xl
                border
                border-base-300
                bg-base-100
                px-4
                py-3
                text-sm
                file:mr-4
                file:rounded-lg
                file:border-0
                file:bg-emerald-500
                file:px-4
                file:py-2
                file:font-medium
                file:text-white
                hover:file:bg-emerald-600
                cursor-pointer
                "
            />

            <p className="mt-2 text-sm text-base-content/60">
              Upload a high-quality image for your event.
            </p>
          </div>

          {/* Image Preview */}

          {preview && (
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <Image
                  src={preview}
                  alt="Event Preview"
                  width={1200}
                  height={700}
                  className="mx-auto max-h-[380px] w-auto rounded-xl object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
          <button
            type="submit"
            disabled={loading}
            className="
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    bg-gradient-to-r
    from-emerald-500
    via-teal-500
    to-cyan-500
    px-8
    py-3.5
    text-base
    font-semibold
    text-white
    shadow-lg
    shadow-emerald-500/20
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-2xl
    hover:shadow-emerald-500/40
    active:scale-95
    disabled:cursor-not-allowed
    disabled:opacity-60
    disabled:hover:translate-y-0
    disabled:hover:scale-100
    disabled:hover:shadow-lg
  "
          >
            {loading ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-20"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>

                {isEdit ? "Updating Event..." : "Creating Event..."}
              </>
            ) : (
              <>
                {isEdit ? "Update Event" : "Create Event"}

                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EventForm;
