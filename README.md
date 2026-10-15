# My Portfolio built on React + Vite 

## Quickstart:
To view live changes while developing in local use ``npm run dev``

To deploy to [airusk.dev](https://airusk.dev), use ``npm run deploy``. GitHub Pages should publish the root of the ``gh-pages`` branch with ``airusk.dev`` set as its custom domain.

Using default vite port on [localhost:5173](http://localhost:5173/)

## Blog posts

Add a Markdown file to `src/blog/posts/` using a lowercase, hyphenated filename. The filename becomes the URL, for example `project-update.md` becomes `/blog/project-update/`.

Start each post with a title, date, and summary:

```md
---
title: Project update
date: '2026-10-14'
summary: A short description for the blog list.
---

Write the post here in Markdown.
```

Run `npm run build` to generate the blog pages. To include images, put them in `public/blog-media/` and reference them with an absolute path such as `![Description](/blog-media/image.webp)`.
