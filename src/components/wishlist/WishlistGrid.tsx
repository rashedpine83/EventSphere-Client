import WishlistCard from "./WishlistCard";
import { Wishlist } from "@/lib/api-actions/wishlistApi";

interface Props {
  wishlists: Wishlist[];
  onRemove: (id: string) => void;
}

const WishlistGrid = ({ wishlists, onRemove }: Props) => {
  if (wishlists.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 py-24 text-center">
        <h2 className="text-3xl font-bold text-white">No Saved Events</h2>

        <p className="mt-4 text-slate-400">
          You have not added any events to your wishlist yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {wishlists.map((wishlist) => (
        <WishlistCard
          key={wishlist._id}
          wishlist={wishlist}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default WishlistGrid;
