import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => '/api/v1/user/',
    }),
  }),
});

export const { useFetchUserQuery } = userApi;
