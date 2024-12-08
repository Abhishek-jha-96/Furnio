import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';

const apiUrl = 'http://localhost:8000';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth(apiUrl),
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

export const { useLoginMutation, useSignUpMutation } = authApi;
