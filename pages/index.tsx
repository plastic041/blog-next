import { BLOG_NAME } from '../lib/constants';
import Container from '../components/container';
import Head from 'next/head';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import Post from '../types/post';
import React from 'react';
import { getAllPosts } from '../lib/api';
import Header from '../components/header';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
