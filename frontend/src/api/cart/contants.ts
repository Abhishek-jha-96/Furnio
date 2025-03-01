import { ProductProps } from "../product/contants";
import { UserData } from "../user/constants";

export interface ICartData {
    id: number;
    product_details: ProductProps;
    product: number;
    user: number;
    user_details: UserData;
}

export interface ICartPostData {
    product: number;
    user: number;
}

export interface ICartResponse {
    data: ICartData[];
    message: string | null;
    error_list: string[];
}