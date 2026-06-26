import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        'calculator-app': resolve(__dirname, 'src/calculator-app/index.html'),
        'greeting-app':   resolve(__dirname, 'src/greeting-app/index.html'),
      }
    }
  }
})
