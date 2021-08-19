import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cn from 'classnames';

type Props = {
  title: string;
  src: string;
  slug?: string;
  className?: string;
};

const CoverImage = ({ title, src, slug, className }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`${title} 글의 대표 이미지`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );

  return (
    <div className={`mb-2 max-w-2xl mx-auto ${className}`}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
