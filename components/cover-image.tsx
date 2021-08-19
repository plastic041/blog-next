import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  src: string;
  slug?: string;
  className?: string;
};

const CoverImage = ({ title, src, slug, className }: Props) => {
  return (
    <img
      src={src}
      alt={`${title} 글의 대표 이미지`}
      className={`max-w-2xl object-cover ${className}`}
    />
  );
};

export default CoverImage;
