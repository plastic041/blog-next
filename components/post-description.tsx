import React from 'react';

type Props = {
  description: string;
};

const PostExcerpt = ({ description}: Props) => {
  return <h1 className="text-lg">{description}</h1>;
};

export default PostExcerpt;
