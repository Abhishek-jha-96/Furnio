import axiosInstance from '@/lib/axios';
import { ICartResponse } from './contants';

export const cartFetch = async (): Promise<ICartResponse> => {
  const response = await axiosInstance.get<ICartResponse>(
        "/api/v1/cart/",
  );
  return response.data;
};
