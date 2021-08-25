import React from 'react';

type Props = {
  title: string;
};

const PostTitle = ({ title }: Props) => {
  return (
    <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h1>
  );
};

export default PostTitle;
