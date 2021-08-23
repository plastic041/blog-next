import React from 'react';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className={`prose prose-blue ${markdownStyles['markdown']}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
