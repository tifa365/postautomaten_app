// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    rehypePlugins: [],
    remarkPlugins: []
  },
  vite: {
    css: {
      preprocessorOptions: {
        postcss: {
          plugins: ["@tailwindcss/postcss"],
        },
      },
    },
  },
});