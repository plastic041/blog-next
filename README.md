# 스넙 블로그

Next.js의 [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)로 만든 블로그

`/_posts`안의 마크다운 파일을 [`remark`](https://github.com/remarkjs/remark)와 [`remark-html`](https://github.com/remarkjs/remark-html)을 사용해 자동으로 SSR한다.

메타데이터는 [`gray-matter`](https://github.com/jonschlinkert/gray-matter)로 파싱함.

---

## TODO:

- [x] 마지막 수정일 표시 ([#2](https://github.com/plastic041/blog-next/issues/2))

- [x] 글 작성일 파싱 방법 변경 ([#3](https://github.com/plastic041/blog-next/issues/3))

- [ ] Slug 생성 방법 바꾸기. 파일이름 -> `/_posts/*.md`의 파일명 ([#1](https://github.com/plastic041/blog-next/issues/1))
