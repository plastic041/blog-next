import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  src: string;
};

const CoverImage = ({ title, src }: Props) => {
  return (
    <div className="relative h-40 md:h-96 mx-auto">
      <a href={src} target="_blank">
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
