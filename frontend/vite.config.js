import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  allowedHosts: [
    'uapplication-frontend.onrender.com',  // Разрешаем этот хост
    'localhost',
  ]
})
