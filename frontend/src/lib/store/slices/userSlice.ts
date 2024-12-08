import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  id: number;
  name: string;
  email: string;
  verified: boolean;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  created_ts: string;
  modified_ts: string;
}

interface UserTokenData {
  access: string | null;
  refresh: string | null;
}

interface UserState {
  token: UserTokenData;
  userData: UserData | null;
}

const initialState: UserState = {
  token: {
    access: null,
    refresh: null,
  },
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the token (access and refresh)
    login: (state, action: PayloadAction<{ token: UserTokenData }>) => {
      state.token = action.payload.token;
    },
    // Action to set the user data
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    // Action to clear the user data and token on logout
    logout: (state) => {
      state.token = { access: null, refresh: null };
      state.userData = null;
    },
  },
});

export const { login, logout, setUserData } = userSlice.actions;
export default userSlice.reducer;
