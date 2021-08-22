import React from 'react';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="prose prose-blue"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
