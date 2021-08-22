import React from 'react';

type Props = {
  description: string;
};

const PostExcerpt = ({ description: excerpt }: Props) => {
  return (
    <h1 className="text-lg tracking-tighter text-center md:text-xl md:text-left">
      {excerpt}
    </h1>
  );
};

export default PostExcerpt;
