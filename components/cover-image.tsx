import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt: string;
};

const CoverImage = ({ src, alt }: Props) => {
  return (
    <div className="relative h-40 mx-auto md:h-96">
      <a href={src} target="_blank" rel="noreferrer">
        <Image layout="fill" src={src} objectFit="contain" alt={alt} />
      </a>
    </div>
  );
};

export default CoverImage;
