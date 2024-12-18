import { SubmitHandler } from 'react-hook-form';

export const variants = {
  left: { x: 0 },
  right: { x: '160%' },
};

export const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export interface AuthFormProps {
  isSignUp: boolean;
  toggleSignUp: () => void;
  onSubmit: SubmitHandler<{
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }>;
}

export interface credentialsProps {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
