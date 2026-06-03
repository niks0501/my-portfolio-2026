// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://nikkocausapin.vercel.app',
  trailingSlash: 'always',
  prefetch: true,
  output: 'static',
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { '@': '/src' },
    },
  },

  integrations: [icon(), sitemap()],
});
