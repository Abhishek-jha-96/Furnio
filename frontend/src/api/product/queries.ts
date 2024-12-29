import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { productFetch } from './api'; // Fetch function
import { ProductResponse } from './contants';

// Using the correct types for `useQuery`
export const useProductQuery = (page = 1, page_size = 6) =>
  useQuery<ProductResponse, Error>({
    queryKey: ['list_product', page, page_size],
    queryFn: () => productFetch(page, page_size), // Calling the API fetch function
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // Retry only once if the query fails
  });
