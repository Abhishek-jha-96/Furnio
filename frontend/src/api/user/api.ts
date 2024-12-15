import axiosInstance from '@/lib/axios'; // Axios instance for API requests
import { UserResponse } from './constants'; // Import the correct response type

// Updated the fetch function to return `UserResponse` type
export const userFetch = async (): Promise<UserResponse> => {
  const { data } = await axiosInstance.get('/api/v1/user/');
  return data; // Return the API response directly
};
