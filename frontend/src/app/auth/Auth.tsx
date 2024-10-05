import React, { useState } from 'react';
import { SignUpProps } from '@/lib/login';
import {
  useLoginMutation,
  useSignUpMutation,
} from '@/lib/store/service/loginQuery';
import { AlertDestructive } from '@/components/login/Alert';
import Spinner from '@/components/login/Spinner';
import { AuthForm } from './AuthForm';

export default function Auth({ isSignUp, toggleSignUp }: SignUpProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [
    login,
    { isLoading: isLoginLoading, isError: isLoginError, error: loginError },
  ] = useLoginMutation();
  const [
    signUp,
    { isLoading: isSignupLoading, isError: isSignupError, error: signupError },
  ] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Call the sign-up mutation
        const credentials = {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        };
        const result = await signUp(credentials).unwrap();
        console.log('Sign-up successful:', result);
      } else {
        // Call the login mutation
        const credentials = {
          email: email,
          password: password,
        };
        const result = await login(credentials).unwrap();
        console.log('Login successful:', result);
      }
    } catch (err) {
      console.error('Failed to authenticate:', err);
    }
  };

  const getErrorMessage = (error: any) => {
    console.log('Error object:', error); // Check the error structure
    if (error && 'data' in error) {
      if (error.data.message) {
        return error.data.message;
      }
      return typeof error.data === 'string' ? error.data : 'An error occurred';
    }
    return 'An error occurred';
  };

  return (
    <main className="w-full h-screen bg-[#fffefb] flex justify-center items-center overflow-hidden">
      {isLoginError && <AlertDestructive error={getErrorMessage(loginError)} />}
      {isSignupError && (
        <AlertDestructive error={getErrorMessage(signupError)} />
      )}
      {(isLoginLoading || isSignupLoading) && <Spinner />}
      <AuthForm
        isSignUp={isSignUp}
        toggleSignUp={toggleSignUp}
        {...{
          email,
          password,
          confirmPassword,
          handleSubmit,
          setEmail,
          setPassword,
          setConfirmPassword,
        }}
      />
    </main>
  );
}
