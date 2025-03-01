'use client';
import { usePathname } from 'next/navigation';

export default function CoverBanner() {
  const pathname = usePathname();

  const processPathname = (pathname: string) => {
    const lastSegment = pathname.split('/').filter(Boolean).pop() || 'HOME';
    return lastSegment.toUpperCase();
  };

  return (
    <div className="relative w-full h-80">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-BannerCover bg-cover bg-center opacity-50" />
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold">{processPathname(pathname)}</h1>
      </div>
    </div>
  );
}
