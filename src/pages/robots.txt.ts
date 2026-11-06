import type { APIRoute } from 'astro';

/* robots.txt generado en el build: el sitemap se resuelve contra el dominio
   declarado en astro.config.mjs, asi no queda un dominio escrito a mano aqui
   que se olvide al cambiar de hosting. */

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://orthodent.hn');
  const sitemap = new URL('sitemap-index.xml', base).href;

  const cuerpo = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join('\n');

  return new Response(cuerpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
