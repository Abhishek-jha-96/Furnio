import { fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryError, FetchArgs } from '@reduxjs/toolkit/query';
import { RootState } from '../store/store';
import { logout, login } from '../store/slices/userSlice';

interface RefreshTokenResponse {
  access: string;
}

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token.access || localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Token might have expired, attempt a refresh
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: '/api/v1/token-refresh/',
          method: 'POST',
          body: { refresh: refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        // Save the new access token
        const { access } = refreshResult.data as RefreshTokenResponse;
        localStorage.setItem('token', access);

        // Dispatch login to update the state with the new access token
        api.dispatch(login({ token: { access, refresh: refreshToken } }));

        // Retry the original request with the new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        // If refresh fails, log out the user
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        api.dispatch(logout());
      }
    } else {
      // No refresh token available, log out the user
      api.dispatch(logout());
    }
  }

  return result; // Result will now conform to the expected format
};
