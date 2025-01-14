import { create } from 'zustand';
import { queryClient } from '@/context/QueryProvider';
import { UserData, UserState } from '@/api/user/constants';

const useUserStore = create<UserState>((set) => ({
  name: null,
  email: null,
  email_verified: null,
  is_active: null,

  // set user data in the state
  setUserData: (data: UserData) => {
    set({
      name: data.name,
      email: data.email,
      email_verified: data.email_verified,
      is_active: data.is_active,
    });
  },

  // clear the user data (logout scenario, etc.)
  clearUserData: () => {
    set({
      name: null,
      email: null,
      email_verified: null,
      is_active: null,
    });

    // clear cached queries if user logs out
    queryClient.clear(); // Clears React Query cache
  },
}));

export default useUserStore;
