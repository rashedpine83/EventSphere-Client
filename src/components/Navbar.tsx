"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useSession, signOut } from "@/lib/auth-client";

import {
  FaBars,
  FaCalendarAlt,
  FaPlusCircle,
  FaTimes,
  FaUserCog,
} from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending } = useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <header className="sticky top-0 z-50 h-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl" />
    );
  }

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "Explore",
      href: "/events",
    },

    {
      name: "About",
      href: "/about",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const privateLinks = [
    {
      name: "Add Event",
      href: "/add-event",
      icon: <FaPlusCircle />,
    },

    {
      name: "Manage Events",
      href: "/manage-events",
      icon: <FaUserCog />,
    },
  ];

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-slate-200
      bg-white/80
      backdrop-blur-xl
      shadow-sm
    "
    >
      <div
        className="
        mx-auto
        flex
        h-20
        container
        items-center
        justify-between
        px-5
        lg:px-8
      "
      >
        {/* Logo */}

        <Link href="/" className="group flex items-center gap-3">
          <div
            className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-2xl
      bg-gradient-to-br
      from-emerald-500
      via-amber-500
      to-rose-500
      text-white
      shadow-lg
      transition-all
      duration-300
      group-hover:rotate-6
      group-hover:scale-110
    "
          >
            <FaCalendarAlt className="text-xl" />
          </div>

          <div>
            <h2
              className="
        bg-gradient-to-r
        from-emerald-600
        via-amber-500
        to-rose-500
        bg-clip-text
        text-2xl
        font-black
        tracking-tight
        text-transparent
      "
            >
              EventSphere
            </h2>

            <p className="text-xs text-slate-500">
              Discover • Create • Celebrate
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
group
relative
font-semibold
transition-all
duration-300

${
  pathname === item.href
    ? "text-emerald-600"
    : "text-slate-700 hover:text-emerald-600"
}
`}
            >
              {item.name}

              <span
                className={`
          absolute
          -bottom-2
          left-0
          h-[3px]
          rounded-full
          bg-gradient-to-r
          from-emerald-500
          via-amber-500
          to-rose-500
          transition-all
          duration-300

          ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}
        `}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}

        <div className="hidden items-center gap-3 lg:flex">
          {!user ? (
            <>
              <Link href="/login">
                <button
                  className="
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-5
            py-2.5
            font-semibold
            text-slate-700
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-emerald-500
            hover:text-emerald-600
            hover:shadow-md
          "
                >
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button
                  className="
            rounded-2xl
            bg-gradient-to-r
            from-emerald-500
            via-amber-500
            to-rose-500
            px-6
            py-2.5
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
                >
                  Get Started
                </button>
              </Link>
            </>
          ) : (
            <>
              {privateLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    className={`
              flex
              items-center
              gap-2
              rounded-2xl
              px-5
              py-2.5
              font-semibold
              transition-all
              duration-300

              ${
                pathname === link.href
                  ? "bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 text-white shadow-lg"
                  : "border border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-500 hover:bg-emerald-100"
              }
            `}
                  >
                    {link.icon}
                    {link.name}
                  </button>
                </Link>
              ))}

              {/* User */}

              <Link href="/profile">
                <div>
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "User"}
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-emerald-500 object-cover"
                    />
                  ) : (
                    <div>{user.name?.charAt(0).toUpperCase()}</div>
                  )}

                  <div className="max-w-[140px]">
                    {/* <p className="truncate text-sm font-bold text-slate-800">
                      {user.name}
                    </p>

                    <p className="truncate text-xs text-slate-500">
                      {user.email}
                    </p> */}
                  </div>
                </div>
              </Link>

              {/* Logout */}

              <button
                onClick={handleLogout}
                className="
          rounded-2xl
          bg-rose-500
          px-5
          py-2.5
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-rose-600
          hover:shadow-lg
        "
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
    rounded-2xl
    border
    border-slate-300
    bg-white
    p-3
    text-slate-700
    shadow-sm
    transition-all
    duration-300
    hover:border-emerald-500
    hover:text-emerald-600
    lg:hidden
  "
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-3 px-5 py-5">
            {/* User Info */}

            {user && (
              <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name ?? "User"}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-emerald-500 object-cover"
                  />
                ) : (
                  <div
                    className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-emerald-500
                via-amber-500
                to-rose-500
                font-bold
                text-white
              "
                  >
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-slate-800">{user.name}</h3>

                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>
              </div>
            )}

            {/* Public Links */}

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
            block
            rounded-xl
            px-4
            py-3
            font-medium
            transition-all
            duration-300

            ${
              pathname === item.href
                ? "bg-emerald-50 text-emerald-600"
                : "text-slate-700 hover:bg-slate-100"
            }
          `}
              >
                {item.name}
              </Link>
            ))}

            {!user ? (
              <div className="space-y-3 pt-4">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button
                    className="
                w-full
                rounded-xl
                border
                border-slate-300
                py-3
                font-semibold
                text-slate-700
              "
                  >
                    Login
                  </button>
                </Link>

                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <button
                    className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-emerald-500
                via-amber-500
                to-rose-500
                py-3
                font-semibold
                text-white
              "
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3 pt-4">
                {privateLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <button
                      className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-emerald-500
                  py-3
                  my-3
                  font-semibold
                  text-white
                "
                    >
                      {item.icon}
                      {item.name}
                    </button>
                  </Link>
                ))}

                <button
                  onClick={handleLogout}
                  className="
              w-full
              rounded-xl
              bg-rose-500
              py-3
              font-semibold
              text-white
              
            "
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
