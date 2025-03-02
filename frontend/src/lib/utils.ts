import { ICartData } from '@/api/cart/contants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateTime = (timestamp: string) => {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(timestamp));
};

export const getSubTotal = (data: ICartData[]) => {
  let sub_total = 0;
  data.forEach(element => {
    sub_total += (element.product_details.price * element.product_details.price);
  });

  return (sub_total).toFixed(2);
}

export const getTotal = (data: ICartData[]) => {
  let total = 0;
  data.forEach(element => {
    total += (element.product_details.price * element.product_details.price);
  });

  let discount = total / 10; 

  return (total - discount).toFixed(2);
}