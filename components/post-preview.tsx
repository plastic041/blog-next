import DateFormatter from './date-formatter';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  date: string;
  modifiedDate: string;
  excerpt: string;
  slug: string;
};

const PostPreview = (post: Props) => {
  return (
    <Link as={`/posts/${post.slug}`} href="/posts/[slug]" passHref>
      <a className="flex items-center w-full px-4 py-2 mx-auto overflow-hidden transition duration-100 rounded-md shadow h-36 post-item hover:shadow-lg">
        <div className="flex flex-col justify-center">
          <h3 className="mb-1 text-2xl">{post.title}</h3>
          <div className="mb-2 text-sm">
            <span className="mr-4">
              {'작성: '}
              <DateFormatter dateString={post.date} />
            </span>
            <span>
              {'수정: '}
              <DateFormatter dateString={post.modifiedDate} />
            </span>
          </div>
          <p className="text-base">{post.excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
