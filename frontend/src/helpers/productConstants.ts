import { variants } from '@/app/auth/constants';
import { cva, VariantProps } from 'class-variance-authority';

export interface ProductCardProps {
  productId: number;
  imageUrl: string;
  productName: string;
  productCategory: string;
  currentPrice: number;
  originalPrice: number;
  variants?: 'default' | 'destructive';
}

export const buttonVariants = cva(
  'flex flex-col items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      },
      size: {
        default: 'px-2 py-2',
        sm: 'rounded-md px-3 text-xs',
        lg: 'rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
