import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import PostTitle from './post-title';
import React from 'react';

type Props = {
  title: string;
  coverImage?: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-16">
        <div className="mx-auto">
          <PostTitle>{title}</PostTitle>
        </div>
        <div className="text-sm text-right md:text-left">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-4 md:mb-8">
        {coverImage && <CoverImage title={title} src={coverImage} />}
      </div>
    </div>
  );
};

export default PostHeader;
