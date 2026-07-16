import Link from "next/link";
import {
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaMusic,
  FaPalette,
  FaFutbol,
  FaUsers,
} from "react-icons/fa";
import { getCategories } from "@/lib/api-actions/categoryApi";

const iconMap: Record<string, React.ElementType> = {
  Technology: FaLaptopCode,
  Business: FaBriefcase,
  Education: FaGraduationCap,
  Music: FaMusic,
  Art: FaPalette,
  Sports: FaFutbol,
};

const Categories = async () => {
  const { categories } = await getCategories();

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            EVENT CATEGORIES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Browse By Category
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Discover events based on your interests and find your next amazing
            experience.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = iconMap[category._id] || FaUsers;

            return (
              <Link
                key={category._id}
                href={`/events?category=${encodeURIComponent(category._id)}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-emerald-500/40
                "
              >
                {/* Glow */}

                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-emerald-500
                      to-teal-500
                      text-3xl
                      text-white
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {category._id}
                  </h3>

                  <p className="mt-3 text-slate-400">
                    {category.totalEvents} Events Available
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400">
                      Explore
                    </span>

                    <span className="text-xl text-emerald-400 transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
