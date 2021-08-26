import Post from '../types/post';
import PostPreview from './post-preview';
import React from 'react';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid p-4 mx-auto mb-32 bg-white divide-y-2 md:max-w-2xl">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            modifiedDate={post.modifiedDate}
            slug={post.slug}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PostList;
