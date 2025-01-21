import { useMutation } from "@tanstack/react-query";
import { wishListPostProps } from "./constants";
import { addToWishlist } from "./api";

export const useAddToWishlistMutation = (
    onSuccess: () => void,
    onError: (error: unknown) => void,
    ) =>
    useMutation<
        any, // Replace `any` with the actual data type returned by the API
        Error,
        wishListPostProps 
    >({
        mutationFn: addToWishlist,
        onSuccess,
        onError,
    });