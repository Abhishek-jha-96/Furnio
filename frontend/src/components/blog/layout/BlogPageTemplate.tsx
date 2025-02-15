'use client';
import { useBlogQuery } from '@/api/blogs/queries';
import BlogElement from '../module/BlogElement';
import { useEffect, useState } from 'react';
import { IblogProps } from '@/helpers/blogProps';

export default function BlogPageTemplate() {
  const { data: blogData, isError, isLoading } = useBlogQuery();
  const [blog, setblog] = useState<IblogProps[]>();

  useEffect(() => {
    if (!isError) {
      console.log(blogData?.data);
      setblog(blogData?.data);
    }
  }, [blogData, isError]);

  return (
    <main className="container mx-auto py-12 flex">
      <section className="w-[70%]">
        {blog?.map((data, index) => (
          <div key={index} className='flex flex-col gap-y-10'>
            <BlogElement
              image={data.image}
              author={data.author}
              modified_ts={data.modified_ts}
              title={data.title}
              content={data.content}
            />
          </div>
        ))}
      </section>
      <section className="w-[30%]">blog section</section>
    </main>
  );
}
