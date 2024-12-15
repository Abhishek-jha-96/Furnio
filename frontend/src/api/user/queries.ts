import { useQuery } from '@tanstack/react-query';
import { userFetch } from './api'; // Fetch function
import { UserResponse } from './constants'; // Correct type for response

// Using the correct types for `useQuery`
export const useUserQuery = () =>
  useQuery<UserResponse, Error>({
    queryKey: ['user'],
    queryFn: userFetch, // Calling the API fetch function
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // Retry only once if the query fails
  });
