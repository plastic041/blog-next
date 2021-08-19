import CoverImage from './cover-image';
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
      <a className="w-full lg:h-40 post-item lg:flex md:flex-row items-center mx-auto transition duration-100 shadow hover:shadow-lg rounded p-2 overflow-hidden">
        <CoverImage
          className="hidden md:block w-full lg:w-2/5 lg:block lg:mr-2"
          title={title}
          src={coverImage || '/assets/blog/preview/cover.jpg'}
        />
        <div className="lg:w-3/5 flex flex-col justify-center overflow-hidden">
          <h3 className="text-2xl mb-1 ">{title}</h3>
          <div className="text-sm mb-2">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-base truncate">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
