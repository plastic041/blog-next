type PostType = {
  slug: string;
  title: string;
  date: string;
  modifiedDate?: string;
  excerpt: string;
  coverImage?: string;
  ogImage?: {
    url: string;
  };
  content: string;
};

export default PostType;
