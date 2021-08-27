type PostType = {
  slug: string;
  title: string;
  date: string;
  modifiedDate?: string;
  description: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  ogImage: string;
  content: string;
};

export default PostType;
