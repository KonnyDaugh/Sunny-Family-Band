import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    base: '/Sunny-Family-Band/',
    build: {
        rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
        },
    },
  },
})