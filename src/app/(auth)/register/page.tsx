"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaUser,
  FaImage,
  FaCalendarAlt,
} from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createUser } from "@/lib/api-actions/userApi";

const RegisterPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [imageError, setImageError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"attendee" | "organizer">("attendee");

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      return toast.error("Name is required");
    }

    if (!email.trim()) {
      return toast.error("Email is required");
    }

    if (!photo.trim()) {
      return toast.error("Photo URL is required");
    }

    if (!validatePassword(password)) {
      return toast.error(
        "Password must contain uppercase, lowercase, number and minimum 8 characters.",
      );
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    try {
      setLoading(true);

      const { error } = await signUp.email({
        name,
        email,
        password,
        image: photo,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Registration failed.");
        return;
      }

      // Save user in MongoDB
      await createUser({
        name,
        email,
        image: photo,
        role,
      });

      toast.success("Registration Successful 🎉");

      router.push("/");
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-rose-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-10">
        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden w-1/2 lg:block"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg">
              <div className="rounded-xl bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 p-3 text-white">
                <FaCalendarAlt size={24} />
              </div>

              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                EventSphere
              </span>
            </div>

            <h1 className="mt-10 text-6xl font-black leading-tight text-slate-800">
              Discover Amazing
              <span className="block bg-gradient-to-r from-emerald-600 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                Events Near You
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Join thousands of people discovering concerts, conferences,
              workshops, festivals and unforgettable experiences.
            </p>

            <div className="mt-12 flex gap-5">
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <h2 className="text-3xl font-bold text-emerald-600">10K+</h2>

                <p className="mt-2 text-slate-500">Events Published</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <h2 className="text-3xl font-bold text-amber-500">25K+</h2>

                <p className="mt-2 text-slate-500">Happy Users</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-lg"
        >
          <div
            className="rounded-[32px]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_70px_rgba(0,0,0,.12)] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="text-center">
              <h2 className="text-4xl font-black text-slate-800">
                Create Account
              </h2>

              <p className="mt-3 text-slate-500 pb-4">
                Welcome! Let's create your EventSphere account.
              </p>
            </div>

            {/* Google */}

            <button
              type="button"
              className="
    group
    flex
    h-14
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    border
    border-gray-200
    bg-white
    text-slate-700
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-emerald-500
    hover:bg-emerald-50
    hover:text-emerald-700
    hover:shadow-lg
  "
            >
              <FaGoogle className="text-xl text-red-500 transition group-hover:scale-110" />
              Continue with Google
            </button>
            {/* Divider */}

            <div className="my-8 flex items-center">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="px-4 text-sm text-gray-500">OR</span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}

            <form onSubmit={handleRegister} className="space-y-5">
              {/* Name */}

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="flex h-14 items-center rounded-2xl border bg-white px-4 transition focus-within:border-emerald-500">
                  <FaUser className="text-slate-400" />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="ml-3 h-full w-full bg-transparent text-slate-800 placeholder:text-slate-400 caret-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Email Address
                </label>

                <div className="flex h-14 items-center rounded-2xl border bg-white px-4 transition focus-within:border-amber-500">
                  <FaEnvelope className="text-slate-400" />

                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ml-3 h-full w-full bg-transparent text-slate-800 placeholder:text-slate-400 caret-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Photo */}

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Photo URL
                </label>

                <div className="flex h-14 items-center rounded-2xl border bg-white px-4 transition focus-within:border-rose-500">
                  <FaImage className="text-slate-400" />

                  <input
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    value={photo}
                    onChange={(e) => {
                      setPhoto(e.target.value);
                      setImageError(false);
                    }}
                    className="ml-3 h-full w-full bg-transparent text-slate-800 placeholder:text-slate-400 caret-emerald-500 outline-none"
                  />
                  {photo && (
                    <div className="mt-4 flex justify-center">
                      <Image
                        src={imageError ? "/avatar.png" : photo}
                        alt="Preview"
                        width={96}
                        height={96}
                        onError={() => setImageError(true)}
                        className="h-24 w-24 rounded-full border-4 border-emerald-500 object-cover shadow-lg"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Password */}

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Password
                </label>

                <div className="flex h-14 items-center rounded-2xl border bg-white px-4 transition focus-within:border-emerald-500">
                  <FaLock className="text-slate-400" />

                  <input
                    // type="password"
                    placeholder="********"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="ml-3 h-full w-full bg-transparent text-slate-800 placeholder:text-slate-400 caret-emerald-500 outline-none"
                  />
                  <div className="mt-3">
                    <div className="flex justify-between text-xs">
                      <span>Password Strength</span>

                      <span>
                        {password.length < 8
                          ? "Weak"
                          : password.length < 12
                            ? "Medium"
                            : "Strong"}
                      </span>
                    </div>

                    <div className="mt-2 h-2 rounded-full bg-gray-200">
                      <div
                        className={`h-2 rounded-full transition-all duration-500

                        ${
                          password.length < 8
                            ? "w-1/3 bg-red-500"
                            : password.length < 12
                              ? "w-2/3 bg-amber-500"
                              : "w-full bg-emerald-500"
                        }

                        `}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 flex">
                  Password must contain ✔ 8 Characters ✔ Uppercase ✔ Lowercase ✔
                  Number
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

              {/* Confirm */}

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Confirm Password
                </label>

                <div className="flex h-14 items-center rounded-2xl border bg-white px-4 transition focus-within:border-amber-500">
                  <FaLock className="text-slate-400" />

                  <input
                    // type="password"
                    placeholder="********"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="ml-3 h-full w-full bg-transparent text-slate-800 placeholder:text-slate-400 caret-emerald-500 outline-none"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

              {/* Role */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-slate-500">
                  Select Account Type
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setRole("attendee")}
                    className={`rounded-2xl border p-5 transition-all duration-300 ${
                      role === "attendee"
                        ? "border-emerald-500 bg-slate-900 "
                        : "border-slate-700 bg-emerald-500/10 hover:border-slate-500"
                    }`}
                  >
                    <FaUser
                      className={`mx-auto mb-3 text-3xl ${
                        role === "attendee"
                          ? "text-emerald-400"
                          : "text-slate-400"
                      }`}
                    />

                    <h3 className="text-lg font-semibold text-green-500">
                      Attendee
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Join events and download tickets.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("organizer")}
                    className={`rounded-2xl border p-5 transition-all duration-300 ${
                      role === "organizer"
                        ? "border-emerald-500 bg-slate-900 "
                        : "border-slate-700 bg-emerald-500/10 hover:border-slate-500"
                    }`}
                  >
                    <FaCalendarAlt
                      className={`mx-auto mb-3 text-3xl ${
                        role === "organizer"
                          ? "text-blue-400"
                          : "text-slate-400"
                      }`}
                    />

                    <h3 className="text-lg font-semibold text-green-500">
                      Organizer
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Create and manage your own events.
                    </p>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                mt-3
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
                hover:-translate-y-1
                hover:shadow-2xl
                hover:scale-[1.02]
                disabled:cursor-not-allowed
                disabled:opacity-70"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <p className="mt-8 text-center text-slate-600">
              Already have an account?
              <Link
                href="/login"
                className="
                      ml-2
                      font-bold
                      bg-gradient-to-r
                      from-emerald-500
                      via-amber-500
                      to-rose-500
                      bg-clip-text
                      text-transparent
                      transition
                      duration-300
                      hover:opacity-70"
              >
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterPage;
