import { Calendar, User } from 'lucide-react';
import Image from 'next/image';

export default function BlogImage() {
  return (
    <div className="flex flex-col w-[800px]">
      <Image
        src="/furniro_assets/scandinavian-interior-mockup-wall-decal-background 1.png"
        alt="Scandinavian Interior Mockup"
        width={800} // Set appropriate width
        height={500} // Set appropriate height
      />
      <div className="flex gap-12 py-2 items-center text-gray-400">
        <div className="flex gap-3 items-center">
          <User size={28} />
          <h3>Admin</h3>
        </div>
        <div className="flex gap-3 items-center">
          <Calendar size={25} />
          <h3>14 Oct 2022</h3>
        </div>
      </div>
      <h3 className='font-medium text-3xl pt-3'>Going all-in with millennial design</h3>
      <h5 className='text-justify text-sm text-gray-400 py-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a
        iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
        Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et
        ultrices neque ornare aenean euismod elementum.
      </h5>
    </div>
  );
}
