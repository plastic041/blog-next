import PostType from '../types/post';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

/**
 * @return {string[]} pustSlugs
 */
export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

/**
 * @param {string} slug slug of post
 * @param {string[]} fields array of fields
 * @return {PostType} post
 */
export function getPostBySlug(slug: string): PostType {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const post: PostType = {
    slug: realSlug,
    title: data.title,
    date: data.date,
    description: data.description,
    content: content,
    ogImage: data.ogImage || null,
    modifiedDate: data.modifiedDate || null,
    coverImage: data.coverImage
      ? {
          src: data.coverImage ? data.coverImage.src : null,
          alt: data.coverImage ? data.coverImage.alt : null,
          blurDataURL: '',
        }
      : null,
  };

  return post;
}

/**
 * @param {string[]} fields array of fields
 * @return {Items[]} array if Items
 */
export function getAllPosts(fields: string[] = []): PostType[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
