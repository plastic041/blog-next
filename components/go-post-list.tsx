import Link from 'next/link';
import React from 'react';

const GoPostList = () => {
  return (
    <>
      <Link as={'/'} href="/" passHref>
        <a className="block mr-4 text-right underline hover:text-blue-500">
          글 목록으로 돌아가기
        </a>
      </Link>
    </>
  );
};

export default GoPostList;
