export interface ProductCardProps {
    imageUrl: string;
    productName: string;
    productCategory: string;
    currentPrice: number;
    originalPrice: number;
  }

export interface IconWithLabelProps {
    Icon: React.ComponentType;
    label: string;
  }