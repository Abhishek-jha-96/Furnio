import { useInfiniteQuery } from '@tanstack/react-query';
import { productFetch } from './api';
import { ProductResponse } from './contants';

export const useProductInfiniteQuery = () =>
  useInfiniteQuery<ProductResponse>({
    queryKey: ['list_product'],
    queryFn: ({ pageParam }) => productFetch(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.next) {
        const nextPageUrl = new URL(lastPage.data.next);
        return Number(nextPageUrl.searchParams.get('page'));
      }
      return undefined;
    },
    getPreviousPageParam: (firstPage) => {
      if (firstPage.data.previous) {
        const prevPageUrl = new URL(firstPage.data.previous);
        return Number(prevPageUrl.searchParams.get('page'));
      }
      return undefined;
    },
  });
