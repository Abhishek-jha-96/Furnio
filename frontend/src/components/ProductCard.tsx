'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GitCompareArrows, Heart, Share2 } from 'lucide-react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';
import useUserStore from '@/store/userStore';
import { ProductCardProps } from '@/helpers/productConstants';
import { CustomLikeButton } from '@/helpers/productHelpers';
import { useAddToWishlistMutation } from '@/api/wishlist/mutations';
import { AlertDestructive } from './login/Alert';
import { useAddToCartMutation } from '@/api/cart/mutations';

export default function ProductCard({
  productId,
  imageUrl,
  productName,
  productCategory,
  currentPrice,
  originalPrice,
  variants,
}: ProductCardProps): JSX.Element {
  const { name: userName, id: userId } = useUserStore();
  const router = useRouter();
  const wishlistMutation = useAddToWishlistMutation(
    () => {},
    () => {},
  );
  const cartMutation = useAddToCartMutation(
    () => {},
    () => {},
  );

  const checkUserAuth = (): boolean => {
    if (!userName) {
      router.push('/auth');
      return false;
    }

    return true;
  };

  const handleAddToCart = (): void => {
    if (!checkUserAuth() || userId === null) return;

    cartMutation.mutate({
      user: userId,
      product: productId,
    })
  };

  const handleAddLiked = () => {
    if (!checkUserAuth() || userId === null) return;

    wishlistMutation.mutate({
      user: userId,
      product: productId,
    });
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
            <span>
              <CustomLikeButton label="Share" icon={Share2} />
            </span>
            <span>
              <CustomLikeButton icon={GitCompareArrows} label="Compare" />
            </span>
            <span onClick={handleAddLiked}>
              <CustomLikeButton icon={Heart} label="Like" variant={variants} />
            </span>
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
            <span className="text-lg font-medium">
              ${currentPrice.toFixed(2)}
            </span>
            <span className="line-through px-4 text-sm text-gray-400">
              ${originalPrice.toFixed(2)}
            </span>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
