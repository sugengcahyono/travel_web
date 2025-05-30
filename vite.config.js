import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',  // Tailwind
        'resources/js/app.jsx',   // React
      ],
      refresh: true,
    }),
    react(), // Enable React JSX, HMR, Fast Refresh
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'), // Shortcut alias for imports
    },
  },
  build: {
    manifest: true,
    outDir: 'public/build',
    rollupOptions: {
      input: {
        main: 'resources/js/app.jsx',
        style: 'resources/css/app.css',
      },
      output: {
        manualChunks: undefined, // Disable code splitting if you prefer a single JS output
      },
    },
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    hmr: {
      host: 'localhost',
    },
  },
})
