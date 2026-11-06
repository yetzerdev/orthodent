# Orthodent | Landing

Sitio de conversión para Orthodent (La Ceiba, Honduras), bilingüe español/inglés,
construido con [Astro](https://astro.build) y pensado para Core Web Vitals y SEO
orgánico.

- Español: `/`
- Inglés: `/en/`

## Requisitos

- Node 22 o superior
- npm

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview   # opcional, sirve dist/ en local
```

La salida estática queda en `dist/`. El host solo necesita:

| Ajuste        | Valor          |
| ------------- | -------------- |
| Build command | `npm run build` |
| Output dir    | `dist`          |
| Node          | 22+             |

## Variables de entorno

El mapa de la sede usa Mapbox GL y necesita un token **público** (`pk.`) que
Astro incrusta en el HTML durante el build:

```bash
PUBLIC_MAPBOX_TOKEN=pk.xxxxxxxx
```

- Se declara como variable de entorno **de build** en el panel del host
  (Netlify, Vercel, Cloudflare Pages). Si se agrega después de construir, no
  tiene efecto.
- En <https://account.mapbox.com/access-tokens/> el token debe tener el dominio
  de producción en *URL restrictions*. Si está restringido a `localhost`,
  Mapbox responde 401 en el sitio publicado.
- Sin token el sitio compila igual y muestra un aviso en la sección de sedes.

El archivo `.env` local nunca se sube (está en `.gitignore`). Hay una plantilla
en `.env.example`.

## Antes de publicar

1. **Dominio**: cambiar `site` en `astro.config.mjs` (hoy es un placeholder).
   De ahí salen las URL canónicas, los `hreflang` y el `sitemap-index.xml`.
2. **Token de Mapbox**: declararlo en el host como variable de build.
3. **Restricciones del token**: agregar el dominio de producción.

## Estructura

```
src/
  assets/images/     fotos y logotipo (optimizadas en el build)
  components/        secciones de la landing y piezas reutilizables
  i18n/              textos ES/EN y listados
  layouts/           LayoutSEO (metadatos, hreflang, JSON-LD)
  pages/             rutas ES/EN, legales y robots.txt
  scripts/           JS de cliente (comparador, mapa, revelados)
  styles/            tokens y estilos globales
public/              favicons, OG y estáticos
```

## Contenido

Los textos viven en `src/i18n/index.js`, no en los componentes: cualquier
cambio de copy se hace ahí y afecta a los dos idiomas por separado. Los casos
clínicos usan pares de imágenes en `src/assets/images/casos/<n>/{antes,despues}.png`
y los títulos/descripciones se editan en `casosItems`.
