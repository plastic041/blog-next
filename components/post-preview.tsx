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
    <div className="lg:flex md:flex-row">
      <div>
        <CoverImage
          className="md:mr-8 lg:w-64"
          slug={slug}
          title={title}
          src={coverImage || '/assets/blog/preview/cover.jpg'}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl mb-1 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-sm mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-base">{excerpt}</p>
      </div>
    </div>
  );
};

export default PostPreview;
