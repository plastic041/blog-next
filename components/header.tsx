import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <h2 className="pt-4 pb-20 text-4xl font-bold leading-tight tracking-tight md:text-6xl md:tracking-tighter">
      <Link href="/">
        <a className="hover:underline">스넙</a>
      </Link>
    </h2>
  );
};

export default Header;
