import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { productFetch, productFetchById } from './api';
import { ProductResponse, ProductSingleResponse } from './contants';

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

export const useBatchProductQuery = (ids: number[]) =>
  useQuery<ProductSingleResponse[]>({
    queryKey: ['products', ids],
    queryFn: () => Promise.all(ids.map((id) => productFetchById(id))),
  });
