import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/legacy/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignUpProps } from '@/lib/login';
import { motion, AnimatePresence } from 'framer-motion';

import SignUpButton from '@/components/login/SignUpButton';
import main_logo from '../../../public/furniro_assets/Meubel House_Logos-05.png';
import { useLoginMutation, useSignUpMutation } from '@/lib/store/service/loginQuery';
import { AlertDestructive } from '@/components/login/Alert';
import Spinner from '@/components/login/Spinner';
import ImageSec from './ImageSec';

export default function Auth({ isSignUp, toggleSignUp }: SignUpProps) {
  const [isImageLeft, setIsImageLeft] = useState(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [login, { isLoading: isLoginLoading, isError: isLoginError, error: loginError }] = useLoginMutation();
  const [signUp, { isLoading: isSignupLoading, isError: isSignupError, error: signupError }] = useSignUpMutation();

  const handleToggle = () => {
    setIsImageLeft(!isImageLeft);
    toggleSignUp();
  };

  const variants = {
    left: { x: 0 },
    right: { x: '160%' },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Call the sign-up mutation
        const credentials = {
          'email': email,
          'password': password,
          'confirmPassword': confirmPassword
        }
        const result = await signUp(credentials).unwrap();
        console.log('Sign-up successful:', result);
      } else {
        // Call the login mutation
        const credentials = {
          'email': email,
          'password': password
        }
        const result = await login(credentials).unwrap();
        console.log('Login successful:', result);
      }
    } catch (err) {
      console.error('Failed to authenticate:', err);
    }
  };

  const getErrorMessage = (error: any) => {
    if (error && 'data' in error) {
      console.log(error.data);
      return error.data;
    }
    return 'An error occurred';
  };
  console.log(isLoginError);

  return (
    <main className="w-full h-screen bg-[#fff4e3] flex justify-center items-center overflow-hidden">
      {isLoginError && <AlertDestructive error={getErrorMessage(loginError)} />}
      {isSignupError && <AlertDestructive error={getErrorMessage(signupError)} />}
      {(isLoginLoading || isSignupLoading) && <Spinner />}
      <Card className="w-[65%] h-[80%] flex rounded-none justify-between relative overflow-hidden">
      <ImageSec isImageLeft={isImageLeft}/>
        <motion.div
          className="bg-white p-8 w-[38%] z-10"
          initial={{ x: '160%' }}
          animate={isImageLeft ? 'right' : 'left'}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <CardHeader>
            <CardTitle className="flex gap-4 items-center">
              <Image src={main_logo} alt="main_logo" width={64} height={48} />
              <div className="font-bold text-4xl text-wood">FURNIO</div>
            </CardTitle>
            <CardTitle className="text-sm font-light">
              Crafted for Comfort, Designed for You!
            </CardTitle>
            <CardTitle className="w-full py-2 font-medium text-2xl text-gray-700">
              {isSignUp ? 'Sign Up' : 'Login'}
            </CardTitle>
          </CardHeader>
          <form onSubmit={(e) => handleSubmit(e)}>
            <CardContent>
              <div>
                <div className="mb-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </div>
                {isSignUp && (
                  <div className="mb-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-center gap-5">
              <Button type={'submit'} className="w-full">
                {isSignUp ? 'Sign Up' : 'Login'}
              </Button>
              <div className="text-gray-600 h-[50px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isSignUp ? 'signup' : 'login'}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={textVariants}
                    transition={{ duration: 0.3 }}
                    className=""
                  >
                    {isSignUp
                      ? 'Already have an account? '
                      : "Don't have an account? "}
                    <SignUpButton onClick={handleToggle}>
                      {isSignUp ? 'Sign In' : 'Sign Up'}
                    </SignUpButton>
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardFooter>
          </form>
        </motion.div>
      </Card>
    </main>
  );
}
