/**
 * Revelado al hacer scroll.
 *
 * El sistema principal es CSS puro con animation-timeline: view(), que solo
 * existe en Chromium. Este script cubre Safari y Firefox con un
 * IntersectionObserver equivalente.
 *
 * En navegadores que ya soportan scroll-timeline el script se aparta: si no,
 * los dos sistemas pelean por opacity/transform y el elemento puede quedar
 * invisible o parpadear.
 */

const raiz = document.documentElement;

/* Sin JS, o con movimiento reducido, el contenido se muestra completo.
   La clase se anade antes del primer pintado para que no haya un destello
   del estado inicial en un elemento que nunca va a animarse. */
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  raiz.classList.add('js-reveal');
}

const soportaTimeline = CSS.supports('animation-timeline: view()');

/* Escalonado de los hijos de un data-reveal-group: 70ms entre cada uno,
   con tope en el sexto hijo para que las listas largas no esperen tanto. */
const RETARDO_POR_HIJO = 70;
const HIJOS_ESCALONADOS = 6;

function aplicarRetardo(elemento: Element, indice: number): void {
  if (indice < 0) return;
  const escalonado = Math.min(indice, HIJOS_ESCALONADOS - 1);
  elemento.style.setProperty('--reveal-delay', `${escalonado * RETARDO_POR_HIJO}ms`);
}

function observar(): void {
  /* Los hijos directos de un grupo se escalonan entre si; los data-reveal
     sueltos empiezan en cero. */
  const objetivos: Element[] = [];

  document.querySelectorAll('[data-reveal-group]').forEach((grupo) => {
    Array.from(grupo.children).forEach((hijo, indice) => {
      if (!hijo.hasAttribute('data-reveal-group') && !hijo.hasAttribute('data-reveal')) {
        hijo.setAttribute('data-reveal', '');
      }
      aplicarRetardo(hijo, indice);
      objetivos.push(hijo);
    });
  });

  document.querySelectorAll('[data-reveal]:not([data-reveal-group])').forEach((el) => {
    if (el.closest('[data-reveal-group] > *')) return;
    objetivos.push(el);
  });

  if (objetivos.length === 0) return;

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('es-visible');
        observador.unobserve(entrada.target);
      });
    },
    {
      /* rootMargin negativo para que el elemento tenga que entrar de verdad
         en pantalla, no solo tocar el borde inferior. */
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.1,
    }
  );

  objetivos.forEach((el) => observador.observe(el));
}

if (soportaTimeline) {
  raiz.classList.remove('js-reveal');
} else {
  observar();
}