import '../styles/index.css';

import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="snubi.netlify.app">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
