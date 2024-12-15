'use client';

import Image from 'next/legacy/image';
import main_logo from '../../public/furniro_assets/Meubel House_Logos-05.png';
import { Heart, Search, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import useUserStore from '@/store/userStore';
import { useEffect } from 'react';
import { useUserQuery } from '@/api/user/queries';
import CustomAvatart from '@/components/navbar/customAvatart';

const MenuProps = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/store/shop' },
  { name: 'Blog', href: '/store/blog' },
  { name: 'Contact', href: '/store/contact' },
];

export default function NavBar() {
  const { setUserData } = useUserStore();
  const { data: userData, isLoading, isError } = useUserQuery();

  // Set user data to Zustand store after successful fetch
  useEffect(() => {
    if (userData) {
      try {
        setUserData(userData.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(userData);
  }, [userData, setUserData]);

  return (
    <div className="w-full flex items-center justify-between py-4 px-2 md:px-16">
      {/* logo */}
      <div className="flex gap-1">
        <Image src={main_logo} alt="main_logo" className="w-12 h-8" />
        <h1 className="font-mono font-bold text-3xl">Furniro</h1>
      </div>
      {/* menu */}
      <div className="hidden md:flex gap-4 gap-x-16 font-medium">
        {MenuProps.map((item) => (
          <a href={item.href} className="relative group" key={item.name}>
            <span className="relative">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B88E2F] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        ))}
      </div>
      {/* icons */}
      <div className="flex items-center justify-center gap-[3vw]">
        {isLoading ? (
          <span>Loading...</span>
        ) : isError || !userData ? (
          <Link href="/auth">
            <Button variant={'default'} className="bg-wood hover:bg-yellow-700">
              Login
            </Button>
          </Link>
        ) : (
          <CustomAvatart
            firstLetter={userData.data[0].name[0]}
            secondLetter={userData.data[0].name[1]}
          />
        )}
        <Search />
        <Heart />
        <Link href="/store/cart">
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
}
