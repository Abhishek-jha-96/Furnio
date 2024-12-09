import React, { useEffect, useState } from 'react';
import { SignUpProps } from '@/lib/login';
import { AlertDestructive } from '@/components/login/Alert';
import Spinner from '@/components/login/Spinner';
import { AuthForm } from './AuthForm';
import { useRouter } from 'next/navigation';

export default function Auth({ isSignUp, toggleSignUp }: SignUpProps) {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [showLoginError, setShowLoginError] = useState<boolean>(false);
  const [passwordMismatchError, setPasswordMismatchError] =
    useState<boolean>(false);
  const [spinnerload, setSpinnerLoad] = useState<boolean>(false);
  const [showSignupError, setShowSignupError] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Mutations for login and sign-up
  const [
    loginMutation,
    { isLoading: isLoginLoading, isError: isLoginError, error: loginError },
  ] = useLoginMutation();
  const [
    signUpMutation,
    { isLoading: isSignupLoading, isError: isSignupError, error: signupError },
  ] = useSignUpMutation();

  // Fetch user data if authenticated
  const {
    data: userData,
    error: userFetchError,
    isLoading: userLoading,
  } = useFetchUserQuery(undefined, {
    skip: !isAuthenticated,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          setPasswordMismatchError(true);
          return;
        }
        const credentials = { name, email, password };
        await signUpMutation(credentials).unwrap();
        setIsAuthenticated(true);
      } else {
        const credentials = { email, password };
        const result = await loginMutation(credentials).unwrap();

        // Save tokens in localStorage
        localStorage.setItem('token', result.access);
        localStorage.setItem('refresh_token', result.refresh);

        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error('Failed to authenticate:', err);
    }
  };

  useEffect(() => {
    // When user data is fetched successfully, update the Redux store
    if (userData) {
      dispatch(
        login({
          token: {
            access: localStorage.getItem('token'),
            refresh: localStorage.getItem('refresh_token'),
          },
        }),
      );
      dispatch(setUserData(userData)); // Dispatch to set user data
      setIsAuthenticated(true);
    }
  }, [userData, dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/'); // Redirect to the dashboard or home page
    }
  }, [isAuthenticated, router]);

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

  useEffect(() => {
    if (passwordMismatchError) {
      const timer = setTimeout(() => {
        setPasswordMismatchError(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [passwordMismatchError]);

  return (
    <main className="w-full h-screen bg-[#fffefb] flex justify-center items-center overflow-hidden">
      {showLoginError && (
        <AlertDestructive error={getErrorMessage(loginError)} />
      )}
      {showSignupError && (
        <AlertDestructive error={getErrorMessage(signupError)} />
      )}
      {passwordMismatchError && (
        <AlertDestructive error="Passwords do not match" />
      )}
      {spinnerload && <Spinner />}
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
