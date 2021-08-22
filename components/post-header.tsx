import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import PostDescription from './post-description';
import PostTitle from './post-title';
import React from 'react';
import Separator from './section-separator';

type Props = {
  title: string;
  description: string;
  coverImage?: string;
  date: string;
  modifiedDate?: string;
};

const PostHeader = (post: Props) => {
  return (
    <>
      <div className="w-full mb-4 keep-all">
        <div className="mb-2">
          <PostTitle title={post.title} />
        </div>
        <div className="mb-4">
          <PostDescription description={post.description} />
        </div>
        <div className="text-sm text-right md:text-left">
          <div>
            {'작성: '}
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
          <CoverImage title={post.title} src={post.coverImage} />
        )}
      </div>
    </>
  );
};

export default PostHeader;
