import Post from '../types/post';
import PostPreview from './post-preview';
import React from 'react';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid mb-32 mx-auto md:max-w-2xl bg-white p-4 divide-y-2">
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
