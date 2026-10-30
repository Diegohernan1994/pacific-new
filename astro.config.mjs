import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'x5zhsqd0',
      dataset: 'production',
      apiVersion: '2026-10-29',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
  ],
  server: {
    port: 4325,
    host: true
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      noDiscovery: true,
      include: ['react', 'react-dom', 'react-dom/client']
    },
    server: {
      fs: {
        allow: [projectRoot]
      }
    }
  }
});
