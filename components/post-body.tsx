import React from 'react';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="w-full prose prose-blue">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
