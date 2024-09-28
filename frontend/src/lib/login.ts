export interface LoginProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface SignUpProps {
  isSignUp: boolean;
  toggleSignUp: () => void;
}
