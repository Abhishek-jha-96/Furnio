import { create } from 'zustand';
import { queryClient } from '@/context/QueryProvider';
import { UserData, UserState } from '@/api/user/constants';
import { WishlistData } from '@/api/wishlist/constants';

const useUserStore = create<UserState>((set) => ({
  id: null,
  name: null,
  email: null,
  email_verified: null,
  is_active: null,
  wishlist: [],

  // set user data in the state
  setUserData: (data: UserData) => {
    set({
      id: data.id,
      name: data.name,
      email: data.email,
      email_verified: data.email_verified,
      is_active: data.is_active,
    });
  },

  // clear the user data (logout scenario, etc.)
  clearUserData: () => {
    set({
      id: null,
      name: null,
      email: null,
      email_verified: null,
      is_active: null,
    });

    // clear cached queries if user logs out
    queryClient.clear(); // Clears React Query cache
  },

  // Add a product to the wishlist
  addToWishlist: (wishlistData: WishlistData[]) => {
    set({
      wishlist: wishlistData,
    });
  },

  removeFromWishlist: () => {
    set({
      wishlist: [],
    });
  },
}));

export default useUserStore;
