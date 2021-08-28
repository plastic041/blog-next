import { getAllPosts, getPostBySlug } from '../../lib/api';

import Container from '../../components/container';
import ErrorPage from 'next/error';
import GoPostList from '../../components/go-post-list';
import Header from '../../components/header';
import Meta from '../../components/meta';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import PostType from '../../types/post';
import React from 'react';
import { getPlaiceholder } from 'plaiceholder';
import markdownToHtml from '../../lib/markdownToHtml';
import { useRouter } from 'next/router';

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta
        title={post.title}
        description={post.description}
        ogImage={post.ogImage}
      />
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle title="Loading…" />
        ) : (
          <main>
            <article className="mx-auto mb-32 md:max-w-2xl">
              <div className="p-4 mb-2 bg-white ">
                <PostHeader
                  title={post.title}
                  description={post.description}
                  coverImage={post.coverImage}
                  date={post.date}
                  modifiedDate={post.modifiedDate}
                />
                <PostBody content={post.content} />
              </div>
              <GoPostList />
            </article>
          </main>
        )}
      </Container>
    </>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

type PostUpdate = {
  [p in keyof PostType]?: PostType[p];
};

export async function getStaticProps(context: Params) {
  const post: PostUpdate = getPostBySlug(context.params.slug, [
    'title',
    'description',
    'date',
    'modifiedDate',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const content = await markdownToHtml(post.content || 'No content');

  if (post.coverImage) {
    const placeholder = await getPlaiceholder(post.coverImage.src);
    post.coverImage = { ...post.coverImage, blurDataURL: placeholder.base64 };
  }

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
