import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt: string;
  blurDataURL: string;
};

const CoverImage = ({ src, alt, blurDataURL }: Props) => {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <Image
        layout="responsive"
        src={src}
        objectFit="contain"
        alt={alt}
        width={16}
        height={9}
        blurDataURL={blurDataURL}
        placeholder="blur"
      />
    </a>
  );
};

export default CoverImage;
