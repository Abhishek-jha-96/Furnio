'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useUserStore from '@/store/userStore';
import { GitCompareArrows, Heart, Share2 } from 'lucide-react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in app directory

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  productCategory: string;
  currentPrice: number;
  originalPrice: number;
}

export default function ProductCard({
  imageUrl,
  productName,
  productCategory,
  currentPrice,
  originalPrice,
}: ProductCardProps) {
  const userData = useUserStore();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!userData.name) {
      router.push('/auth');
    } else {
      // Add product to cart logic goes here
      console.log('Product added to cart');
    }
  };

  return (
    <div className="relative group w-[285px] h-[446px]">
      <div className="hidden w-full group-hover:flex transition-opacity ease-in-out duration-300 absolute inset-0 bg-black/60 items-center justify-center z-10">
        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-white text-wood font-semibold px-10 py-2 rounded"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <div className="flex space-x-4 font-light text-sm">
            <div className="flex flex-col items-center text-white">
              <Share2 />
              <h3>Share</h3>
            </div>
            <div className="flex flex-col items-center text-white">
              <GitCompareArrows />
              <h3>Compare</h3>
            </div>
            <div className="flex flex-col items-center text-white">
              <Heart />
              <h3>Like</h3>
            </div>
          </div>
        </div>
      </div>
      <Card className="rounded-none bg-gray-100/50 w-[285px] h-[446px]">
        <CardHeader className="w-full p-0">
          <Image src={imageUrl} alt={productName} width={285} height={301} />
        </CardHeader>
        <CardContent className="w-full px-3 py-5">
          <CardTitle className="text-xl pb-2">{productName}</CardTitle>
          <CardTitle className="w-[90%] text-gray-300 text-sm">
            {productCategory}
          </CardTitle>
          <CardDescription>
            <span className="text-lg font-medium">${currentPrice.toFixed(2)}</span>
            <span className="line-through px-4 text-sm text-gray-400">
              ${originalPrice.toFixed(2)}
            </span>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
