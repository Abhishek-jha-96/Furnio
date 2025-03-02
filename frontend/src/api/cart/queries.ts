import { useQuery } from '@tanstack/react-query';
import { ICartResponse } from './contants';
import { cartFetch } from './api';

export const useCartQuery = () =>
  useQuery<ICartResponse>({
    queryKey: ['carts'],
    queryFn: cartFetch,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // Retry only once if the query fails
  });

