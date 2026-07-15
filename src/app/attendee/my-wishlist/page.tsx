import { getUserSession } from "@/lib/core/session";
import { getMyWishlist } from "@/lib/api-actions/wishlistApi";
import WishlistContainer from "@/components/wishlist/WishlistContainer";

const MyWishlistPage = async () => {
  const user = await getUserSession();

  if (!user?.email) {
    return (
      <section className="min-h-screen bg-slate-950 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Please Login First</h2>

          <p className="mt-4 text-slate-400">
            You need to login to view your wishlist.
          </p>
        </div>
      </section>
    );
  }

  const { wishlists } = await getMyWishlist(user.email);

  return (
    <section className="min-h-screen bg-slate-950 py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}

        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            My Wishlist
          </p>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Saved
            <span className="text-emerald-400"> Events</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            All events you have saved for later. Browse them anytime and
            register when you are ready.
          </p>
        </div>

        <WishlistContainer wishlists={wishlists} />
      </div>
    </section>
  );
};

export default MyWishlistPage;
