import axiosInstance from '@/lib/axios';
import { ProductResponse } from './contants';

export const productFetch = async (
  page: number,
  page_size: number,
): Promise<ProductResponse> => {
  const { data } = await axiosInstance.get('/api/v1/list_product/', {
    params: {
      page,
      page_size,
    },
  });
  return data;
};
