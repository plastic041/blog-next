import { BLOG_NAME } from '../lib/constants';
import Container from '../components/container';
import Head from 'next/head';
import Header from '../components/header';
import Meta from '../components/meta';
import Post from '../types/post';
import PostList from '../components/post-list';
import React from 'react';
import { getAllPosts } from '../lib/api';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Meta />
      <Container>
        <Header />
        <main>
          <PostList posts={allPosts} />
        </main>
      </Container>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'modifiedDate',
    'slug',
    'author',
    'coverImage',
    'description',
  ]);

  return {
    props: { allPosts },
  };
};
