import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  src: string;
  slug?: string;
  className?: string;
};

const CoverImage = ({ title, src, slug, className }: Props) => {
  return (
    <Image
      width={1200}
      height={Math.floor((9 / 16) * 1200)}
      layout="responsive"
      src={src}
      alt={`${title} 글의 대표 이미지`}
      className={`object-cover ${className}`}
    />
  );
};

export default CoverImage;
