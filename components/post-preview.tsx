import DateFormatter from './date-formatter';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
      <a className="w-full h-36 post-item flex items-center mx-auto transition duration-100 shadow hover:shadow-lg rounded-md py-2 px-4 overflow-hidden">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl mb-1">{title}</h3>
          <div className="text-sm mb-2">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-base">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
