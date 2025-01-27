import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: process.env.PORT || 5173,  // Использовать порт из переменной окружения (PORT), или 5173 как дефолт
    host: true,                      // Привязать сервер к всем интерфейсам (не только localhost)
  },
})
