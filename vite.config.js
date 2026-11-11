import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 주소가 /recruitment/ 아래라서 base 지정
export default defineConfig({
  plugins: [react()],
  base: '/recruitment/',
})
