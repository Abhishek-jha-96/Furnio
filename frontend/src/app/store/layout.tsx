import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';
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
