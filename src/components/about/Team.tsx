"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & Product Lead",
    image: "https://i.pravatar.cc/400?img=11",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sophia Williams",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/400?img=32",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Daniel Brown",
    role: "Backend Engineer",
    image: "https://i.pravatar.cc/400?img=15",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Davis",
    role: "Frontend Engineer",
    image: "https://i.pravatar.cc/400?img=49",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
];

const Team = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            OUR TEAM
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Meet The People
            <br />
            Behind EventSphere
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Our passionate team is committed to creating the best event
            management experience for organizers and attendees.
          </p>
        </motion.div>

        {/* Team */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-gradient-to-b
                from-slate-800
                to-slate-900
              "
            >
              {/* Image */}

              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              {/* Content */}

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>

                <p className="mt-2 text-emerald-400">{member.role}</p>

                {/* Social */}

                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href={member.github}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-700
                      text-white
                      transition
                      hover:bg-emerald-500
                    "
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={member.linkedin}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-700
                      text-white
                      transition
                      hover:bg-emerald-500
                    "
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href={member.twitter}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-700
                      text-white
                      transition
                      hover:bg-emerald-500
                    "
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
