"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#030712]
      text-white
    "
    >
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div
          className="
          absolute
          left-0
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-emerald-500/10
          blur-[140px]
        "
        />

        <div
          className="
          absolute
          right-0
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-amber-500/10
          blur-[130px]
        "
        />

        <div
          className="
          absolute
          bottom-0
          left-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-rose-500/10
          blur-[120px]
        "
        />
      </div>

      {/* Grid */}

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        min-h-[70vh]
        max-w-7xl
        items-center
        px-6
        py-20
        lg:px-8
      "
      >
        <div
          className="
          grid
          w-full
          items-center
          gap-16
          lg:grid-cols-2
        "
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div
              className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-emerald-500/30
      bg-emerald-500/10
      px-5
      py-2
      text-sm
      font-semibold
      text-emerald-400
      backdrop-blur-md
    "
            >
              <FaCalendarAlt />
              Discover Amazing Events
            </div>
            {/* Heading */}
            <h1
              className="
      mt-8
      text-5xl
      font-black
      leading-tight
      text-white
      md:text-6xl
      xl:text-7xl
    "
            >
              Find, Create &
              <br />
              <span
                className="
        bg-gradient-to-r
        from-emerald-400
        via-amber-400
        to-rose-400
        bg-clip-text
        text-transparent
      "
              >
                Experience
              </span>
              <br />
              Incredible Events
            </h1>
            {/* Description */}
            <p
              className="
      mt-8
      max-w-2xl
      text-lg
      leading-8
      text-slate-300
    "
            >
              EventSphere helps you discover concerts, workshops, conferences,
              hackathons and community meetups. Create your own events, manage
              registrations and connect with thousands of attendees
              effortlessly.
            </p>
            {/* CTA */}
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Link href="/events">
                <button
                  className="
          group
          flex
          h-14
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-emerald-500
          via-amber-500
          to-rose-500
          px-8
          font-semibold
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-2xl
        "
                >
                  Explore Events
                  <FaArrowRight
                    className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
                  />
                </button>
              </Link>

              <Link href="/events/add">
                <button
                  className="
          h-14
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/70
          px-8
          font-semibold
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-emerald-500
          hover:bg-slate-800
        "
                >
                  Host an Event
                </button>
              </Link>
            </div>{" "}
            {/* Search */}
            <div className="mt-12 max-w-2xl">
              <div
                className="
          flex
          h-16
          items-center
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/70
          px-5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-emerald-500
          "
              >
                <FaSearch className="text-lg text-emerald-400" />

                <input
                  type="text"
                  placeholder="Search events, workshops, conferences..."
                  className="
            ml-4
            h-full
            w-full
            bg-transparent
            text-white
            placeholder:text-slate-500
            outline-none
            "
                />

                <button
                  className="
            rounded-xl
            bg-gradient-to-r
            from-emerald-500
            via-amber-500
            to-rose-500
            px-5
            py-2.5
            font-semibold
            text-white
            transition
            hover:scale-105
            "
                >
                  Search
                </button>
              </div>
            </div>
            {/* Statistics */}
            <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
              <motion.div
                whileHover={{ y: -6 }}
                className="
          rounded-3xl
          border
          border-emerald-500/20
          bg-slate-900/60
          p-6
          backdrop-blur-xl
          "
              >
                <h2 className="text-3xl font-black text-emerald-400">10K+</h2>

                <p className="mt-2 text-sm text-slate-400">Active Users</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="
          rounded-3xl
          border
          border-amber-500/20
          bg-slate-900/60
          p-6
          backdrop-blur-xl
          "
              >
                <h2 className="text-3xl font-black text-amber-400">1.5K+</h2>

                <p className="mt-2 text-sm text-slate-400">Events Hosted</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="
          rounded-3xl
          border
          border-rose-500/20
          bg-slate-900/60
          p-6
          backdrop-blur-xl
          "
              >
                <h2 className="text-3xl font-black text-rose-400">50+</h2>

                <p className="mt-2 text-sm text-slate-400">Categories</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-slate-900/60
          p-6
          backdrop-blur-xl
          "
              >
                <h2 className="text-3xl font-black text-cyan-400">99%</h2>

                <p className="mt-2 text-sm text-slate-400">Satisfaction</p>
              </motion.div>
            </div>
            {/* Trending */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-slate-400">
                Trending :
              </span>

              {[
                "Conference",
                "Hackathon",
                "Workshop",
                "Music",
                "Sports",
                "Technology",
              ].map((item) => (
                <button
                  key={item}
                  className="
            rounded-full
            border
            border-slate-700
            bg-slate-900/70
            px-5
            py-2
            text-sm
            text-slate-300
            transition-all
            duration-300
            hover:border-emerald-500
            hover:text-emerald-400
            "
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}

            <div
              className="
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-slate-800
      bg-slate-900/70
      p-8
      shadow-2xl
      backdrop-blur-xl
    "
            >
              {/* Image */}

              <div
                className="
        h-72
        overflow-hidden
        rounded-3xl
      "
              >
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
                  alt="Event"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}

              <div className="mt-7">
                <span
                  className="
          rounded-full
          bg-emerald-500/20
          px-4
          py-2
          text-xs
          font-bold
          uppercase
          tracking-widest
          text-emerald-400
        "
                >
                  Featured Event
                </span>

                <h2
                  className="
          mt-5
          text-3xl
          font-black
          text-white
        "
                >
                  Global Tech Conference 2026
                </h2>

                <p
                  className="
          mt-4
          leading-7
          text-slate-400
        "
                >
                  Meet industry leaders, explore AI, Web Development, Cloud
                  Computing, Cyber Security and Networking in one inspiring
                  conference.
                </p>

                {/* Info */}

                <div className="mt-7 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Date</span>

                    <span className="font-semibold text-white">
                      15 Aug 2026
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Location</span>

                    <span className="font-semibold text-white">
                      Dhaka, Bangladesh
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Tickets</span>

                    <span className="font-semibold text-amber-400">$49</span>
                  </div>
                </div>

                {/* Button */}

                <button
                  className="
          mt-8
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-emerald-500
          via-amber-500
          to-rose-500
          py-4
          text-lg
          font-bold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-2xl
        "
                >
                  Reserve Your Seat
                </button>
              </div>
            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
      absolute
      -left-10
      top-16
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/90
      p-5
      shadow-xl
      backdrop-blur-xl
    "
            >
              <p className="text-sm text-slate-400">Registered</p>

              <h3 className="mt-2 text-3xl font-black text-emerald-400">
                8,250+
              </h3>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
      absolute
      -right-8
      bottom-16
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/90
      p-5
      shadow-xl
      backdrop-blur-xl
    "
            >
              <p className="text-sm text-slate-400">Rating</p>

              <h3 className="mt-2 text-3xl font-black text-amber-400">★ 4.9</h3>
            </motion.div>
          </motion.div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Hero;

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// import {
//   FaArrowRight,
//   FaCalendarAlt,
//   FaFire,
//   FaSearch,
//   FaStar,
//   FaUsers,
// } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#020617]">
//       {/* ================= Background ================= */}

//       <div className="absolute inset-0">
//         <div
//           className="
//           absolute
//           -left-40
//           -top-40
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-emerald-500/10
//           blur-[170px]
//         "
//         />

//         <div
//           className="
//           absolute
//           right-0
//           top-0
//           h-[450px]
//           w-[450px]
//           rounded-full
//           bg-amber-500/10
//           blur-[170px]
//         "
//         />

//         <div
//           className="
//           absolute
//           bottom-0
//           left-1/2
//           h-[400px]
//           w-[400px]
//           -translate-x-1/2
//           rounded-full
//           bg-rose-500/10
//           blur-[150px]
//         "
//         />
//       </div>

//       {/* Grid */}

//       <div
//         className="
//         relative
//         z-10
//         mx-auto
//         flex
//         min-h-[70vh]
//         max-w-7xl
//         items-center
//         px-6
//         py-24
//         lg:px-8
//       "
//       >
//         <div
//           className="
//           grid
//           w-full
//           items-center
//           gap-20
//           lg:grid-cols-2
//         "
//         >
//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -60,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//           >
//             <div
//               className="
//   inline-flex
//   items-center
//   gap-3
//   rounded-full
//   border
//   border-emerald-500/20
//   bg-emerald-500/10
//   px-5
//   py-2.5
//   text-sm
//   font-semibold
//   text-emerald-400
//   backdrop-blur-xl
// "
//             >
//               <FaFire />
//               Bangladesh's Modern Event Platform
//             </div>
//             <h1
//               className="
//   mt-8
//   text-5xl
//   font-black
//   leading-tight
//   text-white
//   md:text-6xl
//   xl:text-7xl
// "
//             >
//               Find Amazing
//               <br />
//               <span
//                 className="
//     bg-gradient-to-r
//     from-emerald-400
//     via-amber-400
//     to-rose-400
//     bg-clip-text
//     text-transparent
//   "
//               >
//                 Events
//               </span>
//               Near You
//             </h1>
//             <p
//               className="
//   mt-8
//   max-w-xl
//   text-lg
//   leading-8
//   text-slate-300
// "
//             >
//               Explore conferences, hackathons, workshops, concerts and community
//               meetups. Create your own events, manage registrations and discover
//               unforgettable experiences.
//             </p>
//             <div className="mt-10 flex flex-wrap gap-5">
//               <Link href="/events">
//                 <button
//                   className="
//       group
//       flex
//       h-14
//       items-center
//       gap-3
//       rounded-2xl
//       bg-gradient-to-r
//       from-emerald-500
//       via-amber-500
//       to-rose-500
//       px-8
//       font-semibold
//       text-white
//       shadow-xl
//       transition-all
//       duration-300
//       hover:-translate-y-1
//       hover:shadow-2xl
//     "
//                 >
//                   Explore Events
//                   <FaArrowRight
//                     className="
//         transition
//         group-hover:translate-x-1
//       "
//                   />
//                 </button>
//               </Link>

//               <Link href="/events/add">
//                 <button
//                   className="
//       h-14
//       rounded-2xl
//       border
//       border-slate-700
//       bg-slate-900/60
//       px-8
//       font-semibold
//       text-white
//       transition
//       hover:border-emerald-500
//     "
//                 >
//                   Create Event
//                 </button>
//               </Link>
//             </div>{" "}
//             {/* Search Box */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mt-12"
//             >
//               <div
//                 className="
//             flex
//             h-16
//             items-center
//             rounded-2xl
//             border
//             border-slate-700
//             bg-slate-900/70
//             px-5
//             shadow-xl
//             backdrop-blur-xl
//             transition-all
//             duration-300
//             hover:border-emerald-500
//             focus-within:border-emerald-500
//           "
//               >
//                 <FaSearch className="text-xl text-emerald-400" />

//                 <input
//                   type="text"
//                   placeholder="Search conferences, workshops, concerts..."
//                   className="
//               ml-4
//               h-full
//               w-full
//               bg-transparent
//               text-white
//               placeholder:text-slate-500
//               outline-none
//             "
//                 />

//                 <button
//                   className="
//               rounded-xl
//               bg-gradient-to-r
//               from-emerald-500
//               via-amber-500
//               to-rose-500
//               px-6
//               py-2.5
//               font-semibold
//               text-white
//               transition-all
//               duration-300
//               hover:scale-105
//             "
//                 >
//                   Search
//                 </button>
//               </div>
//             </motion.div>
//             {/* Statistics */}
//             <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
//               <motion.div
//                 whileHover={{ y: -6 }}
//                 className="
//             rounded-3xl
//             border
//             border-emerald-500/20
//             bg-slate-900/60
//             p-5
//             backdrop-blur-xl
//           "
//               >
//                 <div className="flex items-center gap-3">
//                   <FaCalendarAlt className="text-emerald-400" />
//                   <span className="text-sm text-slate-400">Events</span>
//                 </div>

//                 <h2 className="mt-4 text-3xl font-black text-white">2,500+</h2>
//               </motion.div>

//               <motion.div
//                 whileHover={{ y: -6 }}
//                 className="
//             rounded-3xl
//             border
//             border-amber-500/20
//             bg-slate-900/60
//             p-5
//             backdrop-blur-xl
//           "
//               >
//                 <div className="flex items-center gap-3">
//                   <FaUsers className="text-amber-400" />
//                   <span className="text-sm text-slate-400">Members</span>
//                 </div>

//                 <h2 className="mt-4 text-3xl font-black text-white">15K+</h2>
//               </motion.div>

//               <motion.div
//                 whileHover={{ y: -6 }}
//                 className="
//             rounded-3xl
//             border
//             border-rose-500/20
//             bg-slate-900/60
//             p-5
//             backdrop-blur-xl
//           "
//               >
//                 <div className="flex items-center gap-3">
//                   <FaStar className="text-rose-400" />
//                   <span className="text-sm text-slate-400">Reviews</span>
//                 </div>

//                 <h2 className="mt-4 text-3xl font-black text-white">4.9</h2>
//               </motion.div>

//               <motion.div
//                 whileHover={{ y: -6 }}
//                 className="
//             rounded-3xl
//             border
//             border-cyan-500/20
//             bg-slate-900/60
//             p-5
//             backdrop-blur-xl
//           "
//               >
//                 <div className="flex items-center gap-3">
//                   <FaFire className="text-cyan-400" />
//                   <span className="text-sm text-slate-400">Cities</span>
//                 </div>

//                 <h2 className="mt-4 text-3xl font-black text-white">35+</h2>
//               </motion.div>
//             </div>
//             {/* Trending Categories */}
//             <div className="mt-10">
//               <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
//                 Trending Categories
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 {[
//                   "Technology",
//                   "Hackathon",
//                   "Workshop",
//                   "Conference",
//                   "Music",
//                   "Sports",
//                   "Business",
//                 ].map((category) => (
//                   <button
//                     key={category}
//                     className="
//                 rounded-full
//                 border
//                 border-slate-700
//                 bg-slate-900/60
//                 px-5
//                 py-2.5
//                 text-sm
//                 font-medium
//                 text-slate-300
//                 transition-all
//                 duration-300
//                 hover:border-emerald-500
//                 hover:text-emerald-400
//               "
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//           {/* ================= Right Side ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 70 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             className="relative hidden lg:block"
//           >
//             {/* Main Dashboard */}

//             <div
//               className="
//       relative
//       overflow-hidden
//       rounded-[32px]
//       border
//       border-slate-800
//       bg-slate-900/70
//       p-6
//       shadow-2xl
//       backdrop-blur-xl
//     "
//             >
//               {/* Header */}

//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-slate-400">Featured Event</p>

//                   <h3 className="mt-2 text-2xl font-black text-white">
//                     React Summit 2026
//                   </h3>
//                 </div>

//                 <span
//                   className="
//         rounded-full
//         bg-emerald-500/20
//         px-4
//         py-2
//         text-xs
//         font-bold
//         text-emerald-400
//         "
//                 >
//                   LIVE
//                 </span>
//               </div>

//               {/* Image */}

//               <div className="mt-6 overflow-hidden rounded-3xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
//                   alt="Conference"
//                   className="
//           h-72
//           w-full
//           object-cover
//           transition
//           duration-700
//           hover:scale-110
//         "
//                 />
//               </div>

//               {/* Details */}

//               <div className="mt-6 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-slate-400">Date</span>

//                   <span className="font-semibold text-white">24 July 2026</span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <span className="text-slate-400">Location</span>

//                   <span className="font-semibold text-white">
//                     Dhaka, Bangladesh
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <span className="text-slate-400">Price</span>

//                   <span className="font-bold text-amber-400">$49</span>
//                 </div>
//               </div>

//               {/* CTA */}

//               <button
//                 className="
//         mt-8
//         h-14
//         w-full
//         rounded-2xl
//         bg-gradient-to-r
//         from-emerald-500
//         via-amber-500
//         to-rose-500
//         font-bold
//         text-white
//         shadow-xl
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:shadow-2xl
//       "
//               >
//                 Book Ticket
//               </button>
//             </div>

//             {/* Floating Card 1 */}

//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//               }}
//               className="
//       absolute
//       -left-10
//       top-16
//       rounded-3xl
//       border
//       border-slate-800
//       bg-slate-900/90
//       p-5
//       shadow-xl
//       backdrop-blur-xl
//     "
//             >
//               <p className="text-sm text-slate-400">Registered</p>

//               <h3 className="mt-2 text-3xl font-black text-emerald-400">
//                 8,520+
//               </h3>
//             </motion.div>

//             {/* Floating Card 2 */}

//             <motion.div
//               animate={{
//                 y: [0, 12, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//               }}
//               className="
//       absolute
//       -right-8
//       bottom-16
//       rounded-3xl
//       border
//       border-slate-800
//       bg-slate-900/90
//       p-5
//       shadow-xl
//       backdrop-blur-xl
//     "
//             >
//               <p className="text-sm text-slate-400">Rating</p>

//               <h3 className="mt-2 text-3xl font-black text-amber-400">★ 4.9</h3>
//             </motion.div>

//             {/* Floating Card 3 */}

//             <motion.div
//               animate={{
//                 x: [0, 8, 0],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//               }}
//               className="
//       absolute
//       right-8
//       top-36
//       rounded-2xl
//       border
//       border-slate-800
//       bg-slate-900
//       px-5
//       py-4
//       shadow-xl
//     "
//             >
//               <p className="text-xs text-slate-400">Available Seats</p>

//               <h3 className="mt-2 text-2xl font-black text-rose-400">120</h3>
//             </motion.div>
//           </motion.div>{" "}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
