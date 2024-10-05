import React, { useEffect, useState } from 'react';
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
  const [showLoginError, setShowLoginError] = useState<boolean>(false);
  const [showSignupError, setShowSignupError] = useState<boolean>(false);
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
      } else {
        // Call the login mutation
        const credentials = {
          email: email,
          password: password,
        };
        const result = await login(credentials).unwrap();
      }
    } catch (err) {
      console.error('Failed to authenticate:', err);
    }
  };

  const getErrorMessage = (error: any) => {
    if (error && 'data' in error) {
      if (error.data.message) {
        return error.data.message;
      }
      return typeof error.data === 'string' ? error.data : 'An error occurred';
    }
    return 'An error occurred';
  };

  useEffect(() => {
    if (isLoginError) {
      setShowLoginError(true);
      const timer = setTimeout(() => {
        setShowLoginError(false);
      }, 1500); // 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [isLoginError]);

  useEffect(() => {
    if (isSignupError) {
      setShowSignupError(true);
      const timer = setTimeout(() => {
        setShowSignupError(false);
      }, 1500); // 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [isSignupError]);

  return (
    <main className="w-full h-screen bg-[#fffefb] flex justify-center items-center overflow-hidden">
      {showLoginError && (
        <AlertDestructive error={getErrorMessage(loginError)} />
      )}
      {showSignupError && (
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
