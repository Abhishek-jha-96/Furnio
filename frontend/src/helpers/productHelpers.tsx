import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { ButtonVariantProps, buttonVariants } from './productConstants';

interface CustomLikeButtonProps extends ButtonVariantProps {
  label?: string;
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
}

export const CustomLikeButton: React.FC<CustomLikeButtonProps> = ({
  label = 'Like',
  icon: Icon,
  variant,
  size,
  className,
  disabled,
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled}
      aria-label={label}
    >
      {Icon && <Icon className="h-5 w-5 shrink-0" />}
      <span>{label}</span>
    </button>
  );
};
