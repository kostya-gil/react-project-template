import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import legacy from '@vitejs/plugin-legacy'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    envCompatible(),
    legacy({
      targets: ['> 5%', 'IE 11', 'not dead']
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@shared': path.resolve(__dirname, 'src/shared')
    }
  }
})
