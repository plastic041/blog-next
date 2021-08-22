import { getAllPosts, getPostBySlug } from '../../lib/api';

import { BLOG_NAME } from '../../lib/constants';
import Container from '../../components/container';
import ErrorPage from 'next/error';
import GoPostList from '../../components/go-post-list';
import Head from 'next/head';
import Header from '../../components/header';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import PostType from '../../types/post';
import React from 'react';
import markdownToHtml from '../../lib/markdownToHtml';
import { useRouter } from 'next/router';

type Props = {
  post: PostType;
  morePosts: PostType[];
};

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={post.title} description={post.description}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle title="Loading…" />
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | {BLOG_NAME}
                </title>
                {post.ogImage && (
                  <meta property="og:image" content={post.ogImage.url} />
                )}
              </Head>
              <div className="mx-auto md:max-w-2xl">
                <div className="p-4 mb-2 bg-white">
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
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps(context: Params) {
  const post = getPostBySlug(context.params.slug, [
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
  const content = await markdownToHtml(post.content || '');

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
