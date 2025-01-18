import { useInfiniteQuery } from '@tanstack/react-query';
import { WishlistResponse } from './constants';
import { wishlistFetch } from './api';

export const useWishlistInfiniteQuery = () =>
  useInfiniteQuery<WishlistResponse>({
    queryKey: ['wishlist'],
    queryFn: ({ pageParam }) => wishlistFetch(pageParam as number),
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
