// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://joanlopez22.github.io',
  base: '/JoanLopezPortfolio',
  integrations: [
    react(), 
    tailwind(),
    icon()
  ],
  vite: {
    ssr: {
      noExternal: ['astro-icon']
    }
  }
});
