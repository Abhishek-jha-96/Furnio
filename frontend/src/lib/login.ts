export interface LoginProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface SignUpProps {
  isSignUp: boolean;
  toggleSignUp: () => void;
}

// Represents the user's state in the application
export interface UserProps {
  id: Number;
  name: string;
  email: string;
  email_verified: boolean;
  isActive: boolean;
}

interface Status {
  id: number;
  name: string;
  __entity: string;
}

export interface UserData {
  id: number;
  firstName: string;
  email: string;
  status: Status;
  createdAt?: string | null;
  updatedAt?: string | null;
}

// Represents the login input form
export interface UserLoginProps {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  accessToken: string;
}

// Represents the registration form input
export interface UserRegisterProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
