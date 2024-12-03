import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: 'loginAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/v1/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation({
      query: (credentials) => ({
        url: '/api/v1/register/',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = loginApi;
