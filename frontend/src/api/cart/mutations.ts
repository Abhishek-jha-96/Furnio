import { useMutation } from '@tanstack/react-query';
import { addToCart } from './api';
import { ICartPostData } from './contants';

export const useAddToCartMutation = (
  onSuccess: () => void,
  onError: (error: unknown) => void,
) =>
  useMutation<
    any, // Replace `any` with the actual data type returned by the API
    Error,
    ICartPostData  >({
    mutationFn: addToCart,
    onSuccess,
    onError,
  });
