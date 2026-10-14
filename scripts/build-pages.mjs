import { copyFile, mkdir } from 'node:fs/promises'

for (const route of ['about', 'projects']) {
  await mkdir(`dist/${route}`, { recursive: true })
  await copyFile('dist/index.html', `dist/${route}/index.html`)
}
