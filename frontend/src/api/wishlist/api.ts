import axiosInstance from '@/lib/axios';
import { WishlistResponse } from './constants';

export const wishlistFetch = async (
  page: number,
): Promise<WishlistResponse> => {
  const response = await axiosInstance.get<WishlistResponse>(
    '/api/v1/wishlist',
    {
      params: { page },
    },
  );
  return response.data;
};
