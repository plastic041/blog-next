import Post from '../types/post';
import PostPreview from './post-preview';
import React from 'react';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid gap-y-20 md:gap-y-16 mb-32 px-0 md:px-8 lg:px-32 xl:px-64 2xl:px-96">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
