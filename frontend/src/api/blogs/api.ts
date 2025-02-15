import axiosInstance from '@/lib/axios';
import { blogFetchResponse } from './constants';

export const blogFetch = async (): Promise<blogFetchResponse> => {
  const response = await axiosInstance.get<blogFetchResponse>(
    '/api/v1/blogs/',
    {
      headers: {
        Authorization: undefined, // for public routes
      },
    },
  );
  return response.data;
};
