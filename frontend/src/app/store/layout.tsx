import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import BaseBanner from '@/components/Store/Banner';
import CoverBanner from '@/components/Store/CoverBanner';

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <CoverBanner />
      <div>{children}</div>
      <BaseBanner />
      <Footer />
    </div>
  );
}
