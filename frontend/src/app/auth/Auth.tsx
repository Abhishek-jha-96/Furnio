'use client';

import React, { useState } from 'react';
import { SignUpProps } from '@/lib/props';
import { AlertDestructive } from '@/components/login/Alert';
import Spinner from '@/components/login/Spinner';
import { AuthForm } from './AuthForm';
import { useRouter } from 'next/navigation';
import { useLoginMutation, useSignupMutation } from '@/api/auth/mutations';
import { credentialsProps } from './constants';

export default function Auth({ isSignUp, toggleSignUp }: SignUpProps) {
  const [spinnerload, setSpinnerLoad] = useState<boolean>(false);
  const router = useRouter();

  const loginMutation = useLoginMutation(
    () => {
      setSpinnerLoad(false);
      router.push('/');
    },
    () => {
      setSpinnerLoad(false);
    }
  );

  const signupMutation = useSignupMutation(
    () => {
      setSpinnerLoad(false);
      router.push('/');
    },
    () => {
      setSpinnerLoad(false);
    }
  );

  const handleFormSubmit = (data: credentialsProps) => {
    setSpinnerLoad(true);

    if (isSignUp) {
      if (data.password !== data.confirmPassword) {
        setSpinnerLoad(false);
        return;
      }
      signupMutation.mutate({
        name: data.name!,
        email: data.email,
        password: data.password,
      });
    } else {
      loginMutation.mutate(
        { email: data.email, password: data.password },
        {
          onSuccess: (data) => {
            localStorage.setItem('accessToken', data.access);
          },
        }
      );
    }
  };

  return (
    <main className="w-full h-screen bg-[#fffefb] flex justify-center items-center overflow-hidden">
      {spinnerload && <Spinner />}
      {signupMutation.isError && <AlertDestructive error="Signup failed" />}
      {loginMutation.isError && <AlertDestructive error="Login failed" />}
      <AuthForm
        isSignUp={isSignUp}
        toggleSignUp={toggleSignUp}
        onSubmit={handleFormSubmit}
      />
    </main>
  );
}
