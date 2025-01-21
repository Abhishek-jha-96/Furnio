import axiosInstance from '@/lib/axios';
import { wishListPostProps, WishlistResponse } from './constants';

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

export const addToWishlist = async (data: wishListPostProps) : Promise<any> => {
  const response = await axiosInstance.post<any>('/api/v1/wishlist/', data);
  return response.data;
};
