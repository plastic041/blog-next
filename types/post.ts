type PostType = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  ogImage: string;
  modifiedDate: string;
  coverImage: {
    src: string;
    alt: string;
    blurDataURL: string;
  };
};

export default PostType;
