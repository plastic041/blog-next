import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-4">
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
    </h2>
  );
};

export default Header;
