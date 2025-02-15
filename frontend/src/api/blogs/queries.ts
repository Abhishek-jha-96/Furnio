import { useQuery } from "@tanstack/react-query";
import { blogFetchResponse } from "./constants";
import { blogFetch } from "./api";

export const useBlogQuery = () => useQuery<blogFetchResponse>({
    queryKey: ['blogs'],
    queryFn: blogFetch,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // Retry only once if the query fails
})