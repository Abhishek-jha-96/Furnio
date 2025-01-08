import { ProductResponse } from './contants';
import axiosInstance from '@/lib/axios';

export const productFetch = async (page: number): Promise<ProductResponse> => {
  const response = await axiosInstance.get<ProductResponse>(
    '/api/v1/list_product',
    {
      params: { page },
      headers: {
        Authorization: undefined, // for public routes
      },
    },
  );
  return response.data;
};
