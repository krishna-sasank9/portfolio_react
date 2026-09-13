import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, open: true },
  // Vite's conventional output dir; pinned to match vercel.json.
  build: { outDir: 'dist' },
})
