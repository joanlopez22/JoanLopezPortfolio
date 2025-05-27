// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://joanlopez22.github.io', // Reemplaza USERNAME con tu usuario de GitHub
  base: 'JoanLopezPortfolio', // Reemplaza REPOSITORY_NAME con el nombre de tu repositorio
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
