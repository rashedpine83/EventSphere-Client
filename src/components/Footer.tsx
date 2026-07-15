import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="container mx-auto grid gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500 p-3 text-white">
              <FaCalendarAlt className="text-xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">EventSphere</h2>

              <p className="text-sm text-slate-400">
                Discover • Join • Organize
              </p>
            </div>
          </Link>

          <p className="leading-7 text-slate-400">
            EventSphere is a modern event management platform where users can
            discover, organize, and join conferences, workshops, hackathons,
            sports, cultural programs, and many more exciting events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="transition hover:text-emerald-400">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className="transition hover:text-emerald-400"
              >
                Explore Events
              </Link>
            </li>

            <li>
              <Link href="/about" className="transition hover:text-emerald-400">
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition hover:text-emerald-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">Contact</h3>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaLocationDot className="text-emerald-400" />
              <span>Dhaka, Bangladesh</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-emerald-400" />
              <span>+880 1712-345678</span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-emerald-400" />
              <span>support@eventsphere.com</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">Follow Us</h3>

          <p className="mb-5 text-slate-400">
            Stay connected for the latest events and updates.
          </p>

          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="rounded-xl bg-slate-800 p-3 text-xl transition hover:bg-emerald-500 hover:text-white"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="rounded-xl bg-slate-800 p-3 text-xl transition hover:bg-emerald-500 hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="rounded-xl bg-slate-800 p-3 text-xl transition hover:bg-emerald-500 hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="rounded-xl bg-slate-800 p-3 text-xl transition hover:bg-emerald-500 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} EventSphere. All Rights Reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-emerald-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-emerald-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
