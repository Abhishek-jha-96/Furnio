import { IrecentBlogProps } from '@/helpers/blogProps';
import { formatDateTime } from '@/lib/utils';
import Image from 'next/image';

export default function RecentBlog({image, title, modified_ts}: IrecentBlogProps) {
  return (
    <div className='flex gap-5 items-center'>
      <Image
        src="/furniro_assets/scandinavian-interior-mockup-wall-decal-background 1.png"
        alt="recent blog"
        width={120}
        height={120}
        className='rounded-xl w-24 h-20'
      />
      <div>
        <h3 className='text-lg'>{title}</h3>
        <h4 className='text-sm text-gray-400'>{formatDateTime(modified_ts)}</h4>
      </div>
    </div>
  );
}
