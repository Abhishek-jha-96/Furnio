export interface WishlistData {
  id: number;
  created_ts: string;
  modified_ts: string;
  user: number;
  product: number;
}

export interface PaginatedWishlistResponse {
  count: number;
  next: string;
  previous: string;
  results: WishlistData[];
}

export interface WishlistResponse {
  data: PaginatedWishlistResponse;
  message: string;
  error_list: [];
}
