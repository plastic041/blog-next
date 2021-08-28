import DateFormatter from './date-formatter';
import Link from 'next/link';
import React from 'react';

type Props = {
  slug: string;
  title: string;
  date: string;
  modifiedDate?: string;
  description?: string;
};

const PostPreview = (post: Props) => {
  return (
    <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
      <a className="flex flex-col justify-center w-full h-32 px-4 py-2 keep-all post-item group">
        <h3 className="text-xl md:text-2xl group-hover:text-blue-500">
          {post.title}
        </h3>
        <p className="mb-2 text-sm md:text-base group-hover:text-blue-500">
          {post.description}
        </p>
        <div className="text-xs text-gray-600 md:text-sm group-hover:text-blue-500">
          <span className="mr-4">
            <DateFormatter dateString={post.date} />
          </span>
          {post.modifiedDate && (
            <span>
              {'수정: '}
              <DateFormatter dateString={post.modifiedDate} />
            </span>
          )}
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
