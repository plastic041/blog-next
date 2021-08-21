import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import PostTitle from './post-title';
import React from 'react';

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  modifiedDate: string;
};

const PostHeader = (post: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-16">
        <div className="mx-auto">
          <PostTitle>{post.title}</PostTitle>
        </div>
        <div className="text-sm text-right md:text-left">
          <div>
            {'작성: '}
            <DateFormatter dateString={post.date} />
          </div>
          <div>
            {'수정: '}
            <DateFormatter dateString={post.modifiedDate} />
          </div>
        </div>
      </div>
      <div className="mb-4 md:mb-8">
        {post.coverImage && (
          <CoverImage title={post.title} src={post.coverImage} />
        )}
      </div>
    </div>
  );
};

export default PostHeader;
