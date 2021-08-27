import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt: string;
};

const CoverImage = ({ src, alt }: Props) => {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <Image
        layout="responsive"
        src={src}
        objectFit="contain"
        alt={alt}
        width={1920}
        height={1054}
      />
    </a>
  );
};

export default CoverImage;
