import { clientFetch } from "../core/client";

export interface CreateWishlist {
  eventId: string;
  eventTitle: string;
  eventCategory: string;
  eventImage: string;
  eventDate: string;
  location: string;
  isPaid: boolean;
  ticketPrice: number;
  organizerName: string;
  organizerEmail: string;
  userEmail: string;
}

/* Database থেকে যে data আসে */
export interface Wishlist extends CreateWishlist {
  _id: string;
  addedAt: string;
}

export interface WishlistResponse {
  success: boolean;
  wishlists: Wishlist[];
}

export const addWishlist = async (wishlist: CreateWishlist) => {
  return await clientFetch("/api/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wishlist),
  });
};

export const getMyWishlist = async (
  email: string,
): Promise<WishlistResponse> => {
  return await clientFetch(`/api/wishlist/${email}`);
};

export const removeWishlist = async (id: string) => {
  return await clientFetch(`/api/wishlist/${id}`, {
    method: "DELETE",
  });
};
