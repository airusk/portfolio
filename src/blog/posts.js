import { parse } from 'yaml'

const files = import.meta.glob('./posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
    if (!frontmatter) throw new Error(`Missing post metadata in ${path}`)

    const data = parse(frontmatter[1])
    const content = raw.slice(frontmatter[0].length)

    return {
      slug: path.split('/').pop().replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      summary: data.summary,
      content,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))
