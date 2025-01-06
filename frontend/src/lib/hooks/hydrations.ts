import { useEffect, useState } from 'react';

// Hydration check hook
export const useHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Wait for next tick after mount
    const timeout = setTimeout(() => {
      setHydrated(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return hydrated;
};
