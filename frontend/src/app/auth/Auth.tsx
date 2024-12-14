'use client';

import React, { useEffect, useState } from 'react';
import { SignUpProps } from '@/lib/login';
import { AlertDestructive } from '@/components/login/Alert';
import Spinner from '@/components/login/Spinner';
import { AuthForm } from './AuthForm';
import { useRouter } from 'next/navigation';
import { useLoginMutation, useSignupMutation } from '@/api/auth/mutations';

export default function Auth({ isSignUp, toggleSignUp }: SignUpProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [passwordMismatchError, setPasswordMismatchError] =
    useState<boolean>(false);
  const [spinnerload, setSpinnerLoad] = useState<boolean>(false);
  const router = useRouter();

  const loginMutation = useLoginMutation(
    () => {
      setSpinnerLoad(false);
      router.push('/');
    },
    () => {
      setSpinnerLoad(false);
    },
  );

  const signupMutation = useSignupMutation(
    () => {
      setSpinnerLoad(false);
      router.push('/');
    },
    () => {
      setSpinnerLoad(false);
    },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSpinnerLoad(true);

    if (isSignUp) {
      if (password !== confirmPassword) {
        setPasswordMismatchError(true);
        setSpinnerLoad(false);
        return;
      }
      signupMutation.mutate({ name, email, password });
    } else {
      loginMutation.mutate({ email, password });
    }
  };

  useEffect(() => {
    if (passwordMismatchError) {
      const timer = setTimeout(() => {
        setPasswordMismatchError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [passwordMismatchError]);

  return (
    <main className="w-full h-screen bg-[#fffefb] flex justify-center items-center overflow-hidden">
      {passwordMismatchError && (
        <AlertDestructive error="Passwords do not match" />
      )}
      {spinnerload && <Spinner />}
      {signupMutation.isError && <AlertDestructive error="Signup failed" />}
      {loginMutation.isError && <AlertDestructive error="Login failed" />}
      <AuthForm
        isSignUp={isSignUp}
        toggleSignUp={toggleSignUp}
        {...{
          name,
          email,
          password,
          confirmPassword,
          handleSubmit,
          setName,
          setEmail,
          setPassword,
          setConfirmPassword,
        }}
      />
    </main>
  );
}
