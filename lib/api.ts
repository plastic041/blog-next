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

type Items = {
  [key: string]:
    | string
    | {
        [key: string]: string;
      };
};

/**
 * @param {string} slug slug of post
 * @param {string[]} fields array of fields
 * @return {items} Items
 */
export function getPostBySlug(slug: string, fields: string[]): Items {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    switch (field) {
      case 'slug':
        items[field] = realSlug;
        break;
      case 'content':
        items[field] = content;
        break;
      default:
        if (data[field]) {
          items[field] = data[field];
        }
    }
  });

  return items;
}

/**
 * @param {string[]} fields array of fields
 * @return {Items[]} array if Items
 */
export function getAllPosts(fields: string[] = []): Items[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
