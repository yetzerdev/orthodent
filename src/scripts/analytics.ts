/**
 * Google Analytics 4 con consentimiento previo.
 *
 * El ID llega por `PUBLIC_GA_ID` en el build. Si la variable está vacía no se
 * descarga nada ni se contacta con Google: el sitio funciona igual.
 *
 * No se carga ninguna cookie de medición hasta que la persona pulsa "Aceptar"
 * en el banner (localStorage `orthodent:cookies === 'aceptadas'`). El banner
 * avisa con el evento `orthodent:cookies-aceptadas` para que Analytics arranque
 * en esa misma visita, sin recargar.
 */

const GA_ID = import.meta.env.PUBLIC_GA_ID;

const CLAVE_CONSENTIMIENTO = 'orthodent:cookies';
const EVENTO_ACEPTADO = 'orthodent:cookies-aceptadas';
const ID_SCRIPT = 'ga4-script';

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function cargar(): void {
  if (!GA_ID || document.getElementById(ID_SCRIPT)) return;

  const script = document.createElement('script');
  script.id = ID_SCRIPT;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
    /* Sin señales de Google ni publicidad personalizada: es una web de
       captación, no una tienda que necesite remarketing. */
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

function consentimientoAceptado(): boolean {
  try {
    return localStorage.getItem(CLAVE_CONSENTIMIENTO) === 'aceptadas';
  } catch {
    /* Storage bloqueado: se trata como sin consentimiento. */
    return false;
  }
}

if (consentimientoAceptado()) cargar();
window.addEventListener(EVENTO_ACEPTADO, cargar);
