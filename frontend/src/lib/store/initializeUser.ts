import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { UserData, UserProps } from '../login';

// Initial state for the user
const initialState: UserProps = {
  id: 0,
  first_name: '',
  last_name: '',
  email: '',
  isActive: false,
  createdAt: null,
  updatedAt: null,
};

// Create the user slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Log in a user (sets their data)
    login: (state, action: PayloadAction<UserData>) => {
      const {
        id,
        firstName,
        lastName,
        email,
        status,
        createdAt,
        updatedAt,
      } = action.payload;
      state.id = id;
      state.first_name = firstName;
      state.last_name = lastName;
      state.email = email;
      state.isActive = status.name == 'Active' ? true : false;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
    // Log out a user (reset to initial state)
    logout: (state) => {
      state.id = initialState.id;
      state.first_name = initialState.first_name;
      state.last_name = initialState.last_name;
      state.email = initialState.email;
      state.isActive = initialState.isActive;
      state.createdAt = initialState.createdAt;
      state.updatedAt = initialState.updatedAt;
    },
    // Update user profile information
    updateProfile: (state, action: PayloadAction<Partial<UserProps>>) => {
      const { first_name, last_name, email } = action.payload;
      if (first_name) state.first_name = first_name;
      if (last_name) state.last_name = last_name;
      if (email) state.email = email;
      state.updatedAt = new Date().toISOString();
    },
    // Activate the user account by email
    activateUser: (state) => {
      state.isActive = true;
    },
    // Deactivate the user account
    deactivateUser: (state) => {
      state.isActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  updateProfile,
  activateUser,
  deactivateUser,
} = userSlice.actions;

export default userSlice.reducer;
