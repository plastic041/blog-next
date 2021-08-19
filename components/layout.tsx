import Footer from './footer';
import Meta from './meta';
import React from 'react';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
