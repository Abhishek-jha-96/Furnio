import { IblogProps } from '@/helpers/blogProps';
import { formatDateTime } from '@/lib/utils';
import { Calendar, User } from 'lucide-react';
import Image from 'next/image';

export default function BlogImage({
  image,
  author,
  modified_ts,
  title,
  content,
}: IblogProps) {
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
          <h3>{author}</h3>
        </div>
        <div className="flex gap-3 items-center">
          <Calendar size={25} />
          <h3>{formatDateTime(modified_ts)}</h3>
        </div>
      </div>
      <h3 className="font-medium text-3xl pt-3">
        {title}
      </h3>
      <h5 className="text-justify text-sm text-gray-400 py-3">
        {content}
      </h5>
    </div>
  );
}
