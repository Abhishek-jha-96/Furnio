import { IblogProps } from "@/helpers/blogProps";

export interface blogFetchResponse {
    data: IblogProps[];
    message: string | null;
    error_list: string[];
}