import hast from 'hast';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

function rehypeImgLazyLoad() {
  return (tree: hast.Node) => {
    visit(tree, 'element', (node: hast.Element) => {
      if (node.tagName === 'img') {
        node.properties = {
          ...node.properties,
          loading: 'lazy',
        };
      }
    });
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeImgLazyLoad)
  .use(rehypeStringify);

export default function markdownToHtml(markdown: string) {
  const result = processor.processSync(markdown);
  return result.toString();
}
