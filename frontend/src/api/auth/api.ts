import axiosInstance from '@/lib/axios';

// response type from the login API
export type LoginResponse = {
  access: string;
  refresh: string;
};

// input type for login credentials
export type LoginVariables = {
  email: string;
  password: string;
};

type SignupResponse = {
  id: number;
  password: string;
  last_login: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  name: string;
  email: string;
  email_verified: boolean;
  created_ts: string;
  modified_ts: string;
  groups: [number];
  user_permissions: [number];
};

type SignupVariables = {
  name: string;
  email: string;
  password: string;
};

// Login API call
export const login = async (
  credentials: LoginVariables,
): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post('/api/v1/login/', credentials);
  return data;
};

// Signup API call
export const signup = async (
  credentials: SignupVariables,
): Promise<SignupResponse> => {
  const { data } = await axiosInstance.post('/api/v1/user/', credentials);
  return data;
};
