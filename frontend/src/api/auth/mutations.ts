import { useMutation } from '@tanstack/react-query';
import { login, LoginVariables, signup } from './api';

// Mutation for login
export const useLoginMutation = (
  onSuccess: () => void,
  onError: (error: unknown) => void,
) =>
  useMutation<
    any, // Replace `any` with the actual data type returned by the API (e.g., AuthResponse)
    Error,
    LoginVariables
  >({
    mutationFn: login,
    onSuccess,
    onError,
  });

// Mutation for signup
export const useSignupMutation = (
  onSuccess: () => void,
  onError: (error: unknown) => void,
) =>
  useMutation<
    any, // Replace `any` with the actual data type returned by the API
    Error,
    { name: string; email: string; password: string } // Type of input variables
  >({
    mutationFn: signup,
    onSuccess,
    onError,
  });
