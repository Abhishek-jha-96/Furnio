export interface LoginProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface SignUpProps {
  isSignUp: boolean;
  toggleSignUp: () => void;
}

interface Status {
  id: number;
  name: string;
  __entity: string;
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
