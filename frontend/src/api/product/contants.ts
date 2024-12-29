export interface ProductProps {
  id: number;
  name: string;
  description: string | null;
  price: number;
  category: string;
}

export interface ProductStore {
  products: ProductProps[]; // Array to hold multiple products
  setProductData: (data: ProductProps[]) => void; // Update with an array of products
  clearProductData: () => void; // Clear the product list
}

export interface ProductResponseProps extends ProductProps {
  created_ts: string;
  modified_ts: string;
}

export interface paginatedResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductResponseProps[];
}
export interface ProductResponse {
  data: paginatedResponse;
  message: string | null;
  error_list: string[];
}
