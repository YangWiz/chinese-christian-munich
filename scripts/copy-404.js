import { copyFileSync } from 'fs'
import { join } from 'path'

// Copy index.html to 404.html for GitHub Pages SPA routing
const distPath = join(process.cwd(), 'dist')
copyFileSync(
  join(distPath, 'index.html'),
  join(distPath, '404.html')
)
console.log('✓ Copied index.html to 404.html for GitHub Pages')

