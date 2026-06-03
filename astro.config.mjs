// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://my-portfolio-2026.vercel.app',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), sitemap()],
});
