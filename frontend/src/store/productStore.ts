import { ProductProps, ProductStore } from '@/api/product/contants';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useproductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [], // Default

      setProductData: (data: ProductProps[]) => {
        set({ products: data });
      },

      clearProductData: () => {
        set({ products: [] });
      },
    }),
    {
      name: 'product-storage', // unique name for the storage
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      version: 1, // (optional) by default, version is 0
      // (optional) whitelist specific keys to persist
      // partialize: (state) => ({ products: state.products }),
    }
  )
);

export default useproductStore;