import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/lib/api/authApi';
import { userApi } from '@/lib/api/userApi';
import userReducer from '@/lib/store/slices/userSlice';

// Create the Redux store
export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

// Create a function to make a store instance (for SSR or single instance usage)
export const makeStore = () => store;

// Define types for the store's state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export types for server-side usage or custom setup
export type AppStore = ReturnType<typeof makeStore>;
