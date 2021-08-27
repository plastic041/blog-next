import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import GoPostList from './go-post-list';
import PostDescription from './post-description';
import PostTitle from './post-title';
import React from 'react';
import Separator from './section-separator';

type Props = {
  title: string;
  description: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  date: string;
  modifiedDate?: string;
};

const PostHeader = (post: Props) => {
  return (
    <div className="relative">
      <div className="absolute -top-12">
        <GoPostList />
      </div>
      <div className="w-full mb-4 keep-all">
        <div className="mb-2">
          <PostTitle title={post.title} />
        </div>
        <div className="mb-4">
          <PostDescription description={post.description} />
        </div>
        <div className="text-sm text-right md:text-left text-gray-600">
          <div>
            <DateFormatter dateString={post.date} />
          </div>
          {post.modifiedDate && (
            <div>
              {'수정: '}
              <DateFormatter dateString={post.modifiedDate} />
            </div>
          )}
        </div>
      </div>
      <Separator />
      <div className="mb-4 md:mb-8">
        {post.coverImage && (
          <CoverImage src={post.coverImage.src} alt={post.coverImage.alt} />
        )}
      </div>
    </div>
  );
};

export default PostHeader;
