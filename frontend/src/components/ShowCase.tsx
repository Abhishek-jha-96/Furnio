import CustomSlider from './CustomSlider';

export default function ShowCase() {
  return (
    <div className="w-full bg-[#FCF8F3] py-5 my-5 flex items-center justify-between pl-16 relative">
      <div className="px-4 font-poppins">
        <h1 className="text-3xl font-bold text-left py-3">
          50+ Beautiful rooms inspiration
        </h1>
        <h3 className="text-left text-lg text-gray-500 py-3">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </h3>
        <button className="bg-wood text-white px-6 py-3">Explore More</button>
      </div>
      <div className="w-3/4 px-4">
        <CustomSlider />
      </div>
    </div>
  );
}
