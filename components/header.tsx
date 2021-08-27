import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <h2 className="xl:px-40 pt-4 pb-20 text-4xl font-bold md:text-6xl">
        <Link href="/">
          <a className="hover:text-blue-500">스넙</a>
        </Link>
      </h2>
    </header>
  );
};

export default Header;
