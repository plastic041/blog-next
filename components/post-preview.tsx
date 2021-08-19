import DateFormatter from './date-formatter';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
      <a className="flex items-center w-full px-4 py-2 mx-auto overflow-hidden transition duration-100 rounded-md shadow h-36 post-item hover:shadow-lg">
        <div className="flex flex-col justify-center">
          <h3 className="mb-1 text-2xl">{title}</h3>
          <div className="mb-2 text-sm">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-base">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
