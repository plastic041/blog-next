import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  src: string;
};

const CoverImage = ({ title, src }: Props) => {
  return (
    <div className="relative h-40 mx-auto md:h-96">
      <a href={src} target="_blank" rel="noreferrer">
        <Image
          layout="fill"
          src={src}
          objectFit="contain"
          alt={`${title} 글의 대표 이미지`}
        />
      </a>
    </div>
  );
};

export default CoverImage;
