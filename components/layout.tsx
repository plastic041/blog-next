import Meta from './meta';
import React from 'react';

type Props = {
  description?: string;
  children: React.ReactNode;
};

const Layout = (prop: Props) => {
  return (
    <>
      <Meta description={prop.description} />
      <div>
        <main>{prop.children}</main>
      </div>
    </>
  );
};

export default Layout;
