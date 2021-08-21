import React from 'react';

type Props = {
  title: string;
};

const PostTitle = ({ title }: Props) => {
  return (
    <h1 className="text-4xl font-bold tracking-tighter text-center md:text-4xl lg:text-4xl md:text-left">
      {title}
    </h1>
  );
};

export default PostTitle;
