import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { UserProps } from '../login';

// Initial state for the user
const initialState: UserProps = {
  id: 0,
  name: '',
  email: '',
  email_verified: false,
  isActive: false,
};

// Create the user slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Log in a user (sets their data)
    login: (state, action: PayloadAction<UserProps>) => {
      const { id, name, email, email_verified, isActive } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.email_verified = email_verified;
      state.isActive = isActive;
    },
    // Log out a user (reset to initial state)
    logout: (state) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.email = initialState.email;
      state.email_verified = initialState.email_verified;
      state.isActive = initialState.isActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
