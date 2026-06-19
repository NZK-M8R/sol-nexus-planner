import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 3008, strictPort: true },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react:     ['react', 'react-dom'],
          supabase:  ['@supabase/supabase-js'],
          forcegraph: ['react-force-graph-2d'],
        },
      },
    },
  },
})
