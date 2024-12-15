import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import useUserStore from '@/store/userStore';

interface customAvatartProps {
  firstLetter: string;
  secondLetter: string;
}

export default function CustomAvatart({
  firstLetter,
  secondLetter,
}: customAvatartProps) {
  const { clearUserData } = useUserStore();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    clearUserData();
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="w-7 h-7">
            <AvatarImage src="/" />
            <AvatarFallback>
              {firstLetter.toUpperCase()}
              {secondLetter.toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Wishlist</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleLogout()}>
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
