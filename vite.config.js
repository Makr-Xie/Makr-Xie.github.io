import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // Changed from '/Makr-Xie.github.io/' to '/' since it's a user/org site
  plugins: [svgr(), react()],
})
