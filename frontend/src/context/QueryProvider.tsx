'use client';

import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query';

let browserQueryClient: QueryClient | undefined = undefined;

// Factory to create a new QueryClient instance
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 6 * 1000, // 6 seconds
        retry: 2, // Retry failed requests up to 2 times
      },
    },
  });
}

// Function to get the QueryClient instance
function getQueryClient() {
  if (isServer) {
    // Always create a new QueryClient for the server
    return makeQueryClient();
  } else {
    // Create a QueryClient only once for the browser
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }
    return browserQueryClient;
  }
}

// Export a shared queryClient instance for browser use
export const queryClient = getQueryClient();

// QueryProvider Component
export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
