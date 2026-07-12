"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaLock,
} from "react-icons/fa";

import { signIn } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.error("Email is required.");
    }

    if (!password.trim()) {
      return toast.error("Password is required.");
    }

    try {
      setLoading(true);

      const { error } = await signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Invalid email or password.");
        return;
      }

      toast.success("Welcome back 🎉");

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch {
      toast.error("Google login failed.");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
    min-h-screen
    bg-gradient-to-br
    from-emerald-50
    via-white
    to-amber-50
  "
    >
      <div
        className="
      mx-auto
      grid
      min-h-screen
      max-w-7xl
      items-center
      gap-10
      px-6
      py-10
      lg:grid-cols-2
    "
      >
        {/* Left Side */}

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block"
        >
          <span
            className="
          rounded-full
          bg-emerald-100
          px-5
          py-2
          text-sm
          font-semibold
          text-emerald-700
        "
          >
            Welcome Back 👋
          </span>

          <h1
            className="
          mt-8
          text-6xl
          font-black
          leading-tight
          text-slate-900
        "
          >
            Sign In to
            <br />
            <span
              className="
            bg-gradient-to-r
            from-emerald-600
            via-amber-500
            to-rose-500
            bg-clip-text
            text-transparent
          "
            >
              EventSphere
            </span>
          </h1>

          <p
            className="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-slate-600
        "
          >
            Explore events, manage registrations, discover amazing experiences
            and stay connected with your community through one modern platform.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-emerald-500" />

              <p className="text-slate-700">Discover thousands of events</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-amber-500" />

              <p className="text-slate-700">
                Secure authentication with Better Auth
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-rose-500" />

              <p className="text-slate-700">
                Fast, responsive and modern experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Login Card */}

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="
        rounded-3xl
        border
        border-white/40
        bg-white/90
        p-8
        shadow-2xl
        backdrop-blur-xl
        md:p-10
      "
        >
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-black text-slate-900">Login</h2>

            <p className="mt-3 text-slate-500">
              Enter your account credentials to continue.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div
                className="
      flex
      h-14
      items-center
      rounded-2xl
      border
      border-slate-300
      bg-white
      px-4
      transition-all
      duration-300
      focus-within:border-emerald-500
      focus-within:ring-4
      focus-within:ring-emerald-500
    "
              >
                <FaEnvelope className="text-slate-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    ml-3
                    h-full
                    w-full
                    bg-transparent
                    text-slate-800
                    placeholder:text-slate-400
                    outline-none
                "
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div
                className="
                    flex
                    h-14
                    items-center
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    transition-all
                    duration-300
                    focus-within:border-emerald-500
                    focus-within:ring-4
                    focus-within:ring-emerald-100
                    "
              >
                <FaLock className="text-slate-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    ml-3
                    h-full
                    w-full
                    bg-transparent
                    text-slate-800
                    placeholder:text-slate-400
                    outline-none
                "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-500 transition hover:text-emerald-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Password must be at least 8 characters.
              </p>
            </div>

            {/* Remember + Forgot */}

            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="h-4 w-4 accent-emerald-500" />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="
      text-sm
      font-semibold
      text-emerald-600
      transition
      hover:text-rose-500
    "
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}

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
                hover:-translate-y-1
                hover:shadow-xl
                disabled:cursor-not-allowed
                disabled:opacity-70
            "
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {/* Divider */}

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>

              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-slate-500">OR</span>
              </div>
            </div>
            {/* Google Login */}

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-500
                    hover:shadow-lg
                "
            >
              <FaGoogle className="text-xl text-rose-500" />
              Continue with Google
            </button>

            {/* Footer */}

            <div className="pt-3 text-center text-sm text-slate-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="
              bg-gradient-to-r
              from-emerald-600
              via-amber-500
              to-rose-500
              bg-clip-text
              font-bold
              text-transparent
              transition
              hover:opacity-80
            "
              >
                Create Account
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
