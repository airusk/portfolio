import { copyFile, mkdir, readdir } from 'node:fs/promises'

const postRoutes = (await readdir('src/blog/posts'))
  .filter((file) => file.endsWith('.md'))
  .map((file) => `blog/${file.slice(0, -3)}`)

for (const route of ['about', 'projects', 'blog', ...postRoutes]) {
  await mkdir(`dist/${route}`, { recursive: true })
  await copyFile('dist/index.html', `dist/${route}/index.html`)
}
