import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-mentor-photosnap-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        stories: resolve(__dirname, 'stories.html'),
        features: resolve(__dirname, 'features.html'),
        pricing: resolve(__dirname, 'pricing.html'),
      },
    },
  },
});
