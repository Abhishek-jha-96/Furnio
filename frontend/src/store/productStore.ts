import { ProductProps, ProductStore } from '@/api/product/contants';
import { queryClient } from '@/context/QueryProvider';
import { create } from 'zustand';

const useproductStore = create<ProductStore>((set) => ({
  products: [], // Default to an empty array to avoid undefined issues

  setProductData: (data: ProductProps[]) => {
    set({ products: data });
  },

  clearProductData: () => {
    set({ products: [] }); // Reset to an empty array
  },
}));

export default useproductStore;
