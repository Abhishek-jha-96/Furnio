
export default function CoverBanner() {
  return (
    <div className="relative w-full h-80">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-BannerCover bg-cover bg-center opacity-50"
      />
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Current Page</h1>
      </div>
    </div>
  );
}
