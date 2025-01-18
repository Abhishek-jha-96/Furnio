import { WishlistData } from "../wishlist/constants";

// Represents the structure of a single user
export type UserData = {
  id: number;
  name: string;
  email: string;
  email_verified?: boolean;
  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
  created_ts?: string;
  modified_ts?: string;
};

// Represents the structure of the API response
export type UserResponse = {
  data: UserData[]; // Array of users
  message: string | null;
  error_list: string[];
};

// Update Zustand state to match the structure expected
export type UserState = {
  name: string | null;
  email: string | null;
  email_verified: boolean | null;
  is_active: boolean | null;
  setUserData: (data: UserData) => void; // This should accept a single `UserData` object
  clearUserData: () => void;

  // Add the WishlistItem type to the state
  wishlist: WishlistData[];
  addToWishlist: (data: WishlistData[]) => void;
  removeFromWishlist: () => void;
};
