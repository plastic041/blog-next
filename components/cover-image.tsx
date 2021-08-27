import Image from 'next/image';
import React from 'react';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

type Props = {
  src: string;
  alt: string;
};

const CoverImage = ({ src, alt }: Props) => {
  return (
    <a href={src} target="_blank" rel="noreferrer" className="relative mx-auto">
      <Image
        layout="responsive"
        objectFit="contain"
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(640, 360))}`}
        width={640}
        height={360}
      />
    </a>
  );
};

export default CoverImage;
