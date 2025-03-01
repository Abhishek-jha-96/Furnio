import axiosInstance from '@/lib/axios';
import { ICartPostData, ICartResponse } from './contants';

export const cartFetch = async (): Promise<ICartResponse> => {
  const response = await axiosInstance.get<ICartResponse>(
        "/api/v1/cart/",
  );
  return response.data;
};


export const addToCart = async (data: ICartPostData): Promise<any> => {
  const response = await axiosInstance.post<any>('/api/v1/cart/', data);
  return response.data;
};