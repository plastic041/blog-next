import { BLOG_NAME, HOME_OG_IMAGE } from '../lib/constants';

import Head from 'next/head';
import React from 'react';

type Props = {
  description?: string;
};

const Meta = (prop: Props) => {
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
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta property="og:image" content={HOME_OG_IMAGE} />
      <meta property="og:title" content={BLOG_NAME} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <script
        defer
        data-domain="snubi.netlify.app"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </Head>
  );
};

export default Meta;
