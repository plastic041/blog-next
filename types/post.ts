type PostType = {
  slug: string;
  title: string;
  date: string;
  modifiedDate?: string;
  description: string;
  coverImage?: string;
  ogImage?: {
    url: string;
  };
  content: string;
};

export default PostType;
