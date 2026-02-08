import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'

export default defineConfig({
  base: '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Plugin to copy robots.txt and sitemap.xml to dist
    {
      name: 'copy-seo-files',
      closeBundle() {
        const publicDir = path.resolve(__dirname, 'public')
        const distDir = path.resolve(__dirname, 'dist')
        
        const filesToCopy = ['robots.txt', 'sitemap.xml']
        filesToCopy.forEach(file => {
          const src = path.join(publicDir, file)
          const dest = path.join(distDir, file)
          if (existsSync(src)) {
            copyFileSync(src, dest)
            console.log(`Copied ${file} to dist`)
          }
        })
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
