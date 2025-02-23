import { ProductProps } from "../product/contants";
import { UserData } from "../user/constants";

export interface ICartData {
    id: number;
    product_details: ProductProps;
    product: number;
    user: number;
    user_details: UserData;
}


export interface ICartResponse {
    data: ICartData[] | null;
    message: string | null;
    error_list: string[];
}