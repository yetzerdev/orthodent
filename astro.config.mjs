// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio raiz. Necesario para que el sitemap y las URL canonicas
  // se generen como URLs absolutas (https://midominio.com/...)
  site: 'https://midominio.com',

  // Sin JavaScript en cliente: Astro no lo envia salvo que se use client:*
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  // Optimizacion de imagenes (WebP/AVIF) via astro:assets
  image: {
    responsiveStyles: false,
  },

  // El sitemap se autogenera durante el build en /sitemap-index.xml
  integrations: [sitemap()],

  // Español es el idioma por defecto y va sin prefijo (/). El inglés vive bajo
  // /en/. routing.prefixDefaultLocale false evita que el español salga como /es.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
