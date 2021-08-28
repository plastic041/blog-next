import rehypeImgLoad from 'rehype-imgload';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeImgLoad)
  .use(rehypeStringify);

export default function markdownToHtml(markdown: string) {
  const result = processor.processSync(markdown);
  return result.toString();
}
