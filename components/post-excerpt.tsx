import React from 'react';

type Props = {
  excerpt: string;
};

const PostExcerpt = ({ excerpt }: Props) => {
  return (
    <h1 className="text-lg tracking-tighter text-center md:text-xl md:text-left">
      {excerpt}
    </h1>
  );
};

export default PostExcerpt;
