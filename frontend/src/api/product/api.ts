import { ProductResponse } from './contants';
import axiosInstance from '@/lib/axios';

export const productFetch = async (page: number): Promise<ProductResponse> => {
  const page_size = 9;
  const response = await axiosInstance.get<ProductResponse>(
    '/api/v1/list_product',
    {
      params: { page, page_size },
      headers: {
        Authorization: undefined, // for public routes
      },
    },
  );
  return response.data;
};
