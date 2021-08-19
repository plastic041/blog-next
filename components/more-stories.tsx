import Post from '../types/post';
import PostPreview from './post-preview';
import React from 'react';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid px-0 mb-32 gap-y-8 md:gap-y-16 md:px-8 lg:px-32 xl:px-64 2xl:px-96">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
