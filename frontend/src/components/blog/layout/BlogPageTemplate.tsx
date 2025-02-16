'use client';
import { useBlogQuery } from '@/api/blogs/queries';
import BlogElement from '../module/BlogElement';
import { useEffect, useState } from 'react';
import { IblogProps } from '@/helpers/blogProps';
import RecentBlog from '../module/RecentBlog';

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
      <section className="w-[75%]">
        {blog?.map((data, index) => (
          <div key={index} className="flex flex-col gap-y-10">
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
      <section className="w-[25%]">
        <h2 className='text-xl font-semibold py-4'>Recent Posts</h2>
        {blog?.map((data, index) => (
          <div key={index} className='flex flex-col gap-y-4'>
            <RecentBlog
            image={data.image}
            title={data.title}
            modified_ts={data.modified_ts}
             />
          </div>
        ))}
      </section>
    </main>
  );
}
