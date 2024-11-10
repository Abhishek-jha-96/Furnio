import CustomerSupport from './icons/CustomerSupport';
import Guarantee from './icons/Guarantee';
import Shipping from './icons/Shipping';
import Trophy from './icons/Trophy';

const BannerData = [
  {
    icon: <Trophy />,
    title: 'High Quality',
    subtitle: 'crafted from high quality material',
  },
  {
    icon: <Guarantee />,
    title: 'Warranty Protection',
    subtitle: 'Over 2 years warranty',
  },
  {
    icon: <Shipping />,
    title: 'Free Shipping',
    subtitle: 'Free shipping on all orders over $100',
  },
  {
    icon: <CustomerSupport />,
    title: '24/7 Support',
    subtitle: 'Dedicated customer support',
  },
];

export default function BaseBanner() {
  return (
    <div className="w-full max-h-52 bg-[#FAF3EA] flex justify-around items-center p-4">
      {BannerData.map((data, index) => (
        <section key={index} className="flex p-4 gap-2">
          {data.icon}
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-xl">{data.title}</h3>
            <h4 className="text-gray-500 font-medium">{data.subtitle}</h4>
          </div>
        </section>
      ))}
    </div>
  );
}
