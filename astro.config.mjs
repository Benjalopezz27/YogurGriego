// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lucide-astro'],
    },
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
    }
  },
  experimental: {
    // Enable any relevant Astro 5 experimental features if needed
  }
});
