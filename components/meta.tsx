import { BLOG_NAME, HOME_OG_IMAGE } from '../lib/constants';

import Head from 'next/head';
import React from 'react';

type Props = {
  title?: string;
  description?: string;
};

const Meta = (prop: Props) => {
  const title = prop.title ? `${prop.title} | ${BLOG_NAME}` : BLOG_NAME;
  const description = prop.description || '스넙 블로그';

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={HOME_OG_IMAGE} />
      <meta property="og:url" content="https://snubi.netlify.app" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@plastik041" />
      <meta name="twitter:creator:id" content="@plastik041" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={HOME_OG_IMAGE} />
    </Head>
  );
};

export default Meta;
