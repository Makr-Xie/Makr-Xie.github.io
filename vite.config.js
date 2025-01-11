import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // Changed from '/Makr-Xie.github.io/' to '/' since it's a user/org site
  plugins: [react()],
})
