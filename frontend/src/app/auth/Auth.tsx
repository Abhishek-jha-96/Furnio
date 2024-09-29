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
import { createApi } from '@reduxjs/toolkit/query/react';

import SignUpButton from '@/components/login/SignUpButton';
import main_logo from '../../../public/furniro_assets/Meubel House_Logos-05.png';
import loginArt from '../../../public/vecteezyretro-interiorillustrativebackground2ep0822-rev2.png';
import signUp from '../../../public/vecteezyretro-interiors-backgrounden0822_generated.jpg';

export default function Auth({ isSignUp, toggleSignUp }: SignUpProps) {
  const [isImageLeft, setIsImageLeft] = useState(true);

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

  return (
    <main className="w-full h-screen bg-[#fff4e3] flex justify-center items-center overflow-hidden">
      <Card className="w-[65%] h-[80%] flex rounded-none justify-between relative overflow-hidden">
        <AnimatePresence initial={false}>
          {isImageLeft ? (
            <motion.div
              key="image-left"
              className="absolute left-0 top-0 w-[62%] h-full"
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={loginArt}
                alt="login"
                layout="fill"
                objectFit="cover"
                className="opacity-90"
              />
            </motion.div>
          ) : (
            <motion.div
              key="image-right"
              className="absolute right-0 top-0 w-[62%] h-full"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={signUp}
                alt="signup"
                layout="fill"
                objectFit="cover"
                className="opacity-90"
              />
            </motion.div>
          )}
        </AnimatePresence>

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
          <CardContent>
            <form>
              <div>
                <div className="mb-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="email" type="email" required />
                </div>
                <div className="mb-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
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
                      required
                    />
                  </div>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col justify-center gap-5">
            <Button className="w-full">{isSignUp ? 'Sign Up' : 'Login'}</Button>
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
        </motion.div>
      </Card>
    </main>
  );
}
