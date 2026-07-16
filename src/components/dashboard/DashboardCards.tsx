import {
  FaCalendarAlt,
  FaHeart,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

import { FaClipboardList, FaUserTie } from "react-icons/fa6";

interface Props {
  stats: {
    totalUsers: number;
    totalEvents: number;
    totalBookings: number;
    totalWishlist: number;
    totalOrganizers: number;
    totalAttendees: number;
    totalRevenue: number;
  };
}

const DashboardCards = ({ stats }: Props) => {
  const cards = [
    {
      title: "Users",
      value: stats.totalUsers,
      icon: FaUsers,
      color: "from-cyan-500 to-blue-600",
    },

    {
      title: "Events",
      value: stats.totalEvents,
      icon: FaCalendarAlt,
      color: "from-emerald-500 to-green-600",
    },

    {
      title: "Bookings",
      value: stats.totalBookings,
      icon: FaClipboardList,
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Wishlist",
      value: stats.totalWishlist,
      icon: FaHeart,
      color: "from-pink-500 to-rose-600",
    },

    {
      title: "Organizers",
      value: stats.totalOrganizers,
      icon: FaUserTie,
      color: "from-violet-500 to-purple-600",
    },

    {
      title: "Revenue",
      value: `৳${stats.totalRevenue.toLocaleString()}`,
      icon: FaMoneyBillWave,
      color: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`
              relative
              overflow-hidden
              rounded-3xl
              bg-gradient-to-br
              ${card.color}
              p-7
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            `}
          >
            <div className="absolute -right-6 -top-6 text-white/10">
              <Icon size={110} />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-white/80">{card.title}</p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {card.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
                <Icon size={30} className="text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;
