import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    //代理设置
    proxy: {
      //开发环境
      '/dev': {
        target: 'http://xxxxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, '')
      },
      //生产环境
      '/prod': {
        target: 'http://xxxxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/prod/, '')
      }
    }
  }
})
