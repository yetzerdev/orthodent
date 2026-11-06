/**
 * Textos de la web en los dos idiomas.
 *
 * El español es el idioma por defecto y vive sin prefijo (/). El inglés va bajo
 * /en/. Todo el copy del sitio sale de acá, así que agregar un idioma es agregar
 * una clave más en diccionarios, no tocar componentes.
 *
 * JavaScript plano a propósito: el transform interno de Vite en este proyecto
 * rechaza la sintaxis de tipos en los módulos que se importan desde el
 * frontmatter de los .astro, y un `export type` ahi rompe el build.
 */

/** @typedef {'es' | 'en'} Locale */

export const locales = ['es', 'en'];

export const nombresLocale = {
  es: 'ES',
  en: 'EN',
};

export const etiquetaIdioma = {
  es: 'Español',
  en: 'English',
};

const es = {
  meta: {
    title: 'Orthodent | Dentistas especialistas en La Ceiba',
    description:
      'Odontología digital, ortodoncia, cirugía maxilofacial, implantes y estética dental en La Ceiba. Diagnóstico con escaneo 3D y especialistas certificados.',
  },
  nav: {
    agendar: 'Agendar cita',
  },
  salto: 'Saltar al contenido',
  cookies: {
    titulo: 'Cookies',
    desc: 'Usamos cookies para medir el uso del sitio y mostrar el mapa de la sede. Puedes aceptar todas, rechazar las opcionales o consultar nuestra política de privacidad.',
    mas: 'Más información',
    rechazar: 'Rechazar',
    aceptar: 'Aceptar',
  },
  hero: {
    titulo: 'Tu sonrisa merece el cuidado de especialistas de primer nivel.',
    bajada:
      'En Orthodent combinamos odontología digital de vanguardia y profesionales calificados para transformar tu salud dental en La Ceiba.',
    destacado: 'Cuidamos de ti sin dolor, con tecnología moderna y especialistas certificados.',
    destacadoEtiqueta: 'Equipo multidisciplinario',
    cta1: 'Ver sedes y horarios',
    cta1Corto: 'Ver sedes',
    cta2: 'Agendar cita online',
    cta2Corto: 'Agendar cita',
  },
  especialidades: {
    titulo: 'Nuestras Especialidades Médicas',
    bajada:
      'Atención integral con tecnología de punta y especialistas calificados en cada rama odontológica.',
  },
  reconocimiento: {
    titulo: 'Tecnología Avanzada & Diferenciadores Clínicos',
    bajada:
      'Equipamiento de última generación y protocolos modernos para brindarte diagnósticos exactos y tratamientos cómodos y predecibles.',
    etiquetaGrupo: 'Diferenciadores clínicos',
    anterior: 'Imagen anterior',
    siguiente: 'Imagen siguiente',
  },
  /* El primero arranca activo y es el que lleva el color de marca. Cada
     diferencia tiene su foto: `foto` elige cual se muestra en el panel y
     `fotoAlt` la describe. El quinto comparte el escaner 3D porque la
     planificacion digital es la misma foto. */
  reconocimientoItems: [
    {
      etiqueta: 'Innovación Digital',
      titulo: 'Escaneo Digital 3D sin Moldes',
      desc: 'Diagnóstico y modelos virtuales inmediatos sin las incómodas pastas tradicionales.',
      enlace: 'Conoce nuestras sedes',
      href: '#sedes',
      foto: 'tresd',
      fotoAlt: 'Escáner digital 3D tomando la forma de la arcada dental',
    },
    {
      titulo: 'Sedación Consciente en la Clinica',
      desc: 'Cirugías y tratamientos dentales con sedación para pacientes con ansiedad o fobia dental.',
      foto: 'sedacion',
      fotoAlt: 'Instrumental y monitor de sedación consciente en el consultorio',
    },
    {
      titulo: 'Radiografías Panorámicas en Sitio',
      desc: 'Estudio completo de maxilar y mandíbula en el consultorio, sin traslados ni esperas.',
      foto: 'panoramica',
      fotoAlt: 'Radiografía panorámica de maxilar y mandíbula',
    },
    {
      titulo: 'Fotografías Clínicas Digitales',
      desc: 'Registro fotográfico para planificar tu caso y mostrarte el antes y el después.',
      foto: 'clinicas',
      fotoAlt: 'Fotografía clínica intraoral de la dentición',
    },
    {
      titulo: 'Laboratorio Clínico y Cirugía Guiada',
      desc: 'Planificación milimétrica digital por computadora y resultados predecibles.',
      foto: 'laboratorio',
      fotoAlt: 'Laboratorio clínico de la clínica Orthodent',
    },
  ],
  especialista: {
    kicker: 'Especialista',
    titulo: 'Dra. Karen Chinchilla',
    especialidad: 'Especialista en Sonrisas Saludables',
    bio: 'La Dra. Karen Chinchilla es especialista en Ortodoncia y Ortopedia Maxilofacial, liderando el equipo de Clínica Dental Orthodent para transformar la salud dental de los pacientes en La Ceiba. Con una sólida formación y un enfoque centrado en el paciente, combina experiencia, calidez humana y tecnología de vanguardia para diseñar tratamientos personalizados que devuelven la función y la estética a cada sonrisa.',
    enfoqueTitulo: 'Enfoque profesional',
    alt: 'Dra. Karen Chinchilla, especialista en ortodoncia y ortopedia maxilofacial',
  },
  casos: {
    kicker: 'Casos clínicos',
    titulo: 'Resultados Reales en Pacientes',
    bajada:
      'Arrastra el divisor para comparar cada tratamiento. Transformaciones documentadas con protocolos fotográficos estandarizados y escaneo digital tridimensional en Orthodent.',
  },
  casosItems: [
    {
      titulo: 'Blanqueamiento y Microdiseño',
      antesAlt: 'Dientes antes del blanqueamiento con microdiseño',
      despuesAlt: 'Dientes después del blanqueamiento con microdiseño',
    },
    {
      titulo: 'Corrección de Apiñamiento',
      antesAlt: 'Dientes antes de la corrección de apiñamiento',
      despuesAlt: 'Dientes después de la corrección de apiñamiento',
    },
    {
titulo: 'Sonrisa Gingival',
          antesAlt: 'Encías antes de la gingivoplastia',
          despuesAlt: 'Encías después de la gingivoplastia con carillas',
        },
        {
          /* Los tres casos nuevos vienen de las carpetas 4, 5 y 6. El titulo va
             neutro a proposito: no se esta adivinando el tratamiento para no
             publicar una etiqueta clinica que las imagenes no sostienen. Se
             muestran tal cual en la tarjeta; el texto visible del carrusel es el
             contador, no el titulo. */
          titulo: 'Caso clínico 4',
          antesAlt: 'Antes del tratamiento',
          despuesAlt: 'Después del tratamiento',
        },
        {
          titulo: 'Caso clínico 5',
          antesAlt: 'Antes del tratamiento',
          despuesAlt: 'Después del tratamiento',
        },
        {
          titulo: 'Caso clínico 6',
          antesAlt: 'Antes del tratamiento',
          despuesAlt: 'Después del tratamiento',
        },
      ],
  testimonios: {
    kicker: 'Testimonios',
    titulo: 'Experiencias que Transforman Sonrisas',
  },
  sedes: {
    titulo: 'Sedes y horarios',
    carga: 'Cargando mapa…',
    errorMapa: 'El mapa no pudo cargarse. Escríbenos por WhatsApp para confirmar la ubicación.',
    tituloSede: 'Uniplaza La Ceiba',
    calle: 'Local exterior, junto a Punto Farma',
    zona: 'La Ceiba, Honduras',
    comoLlegar: 'Cómo llegar',
    avisoUbicacion: 'Avísanos tu ubicación',
  },
  agendar: {
    estado: 'Atención personalizada e inmediata',
    titulo: 'Agenda tu cita',
    bajada:
      'Agenda hoy tu consulta en Orthodent. Recibirás una evaluación clínica detallada con escaneo y el respaldo de un equipo de odontólogos especialistas.',
    formTitulo: 'Agendar cita rápida',
    formNota: 'Completa el formulario y te confirmaremos vía WhatsApp.',
    directo: '¿Prefieres llamar o escribirnos ahora?',
    llamar: 'Llamar',
    whatsapp: 'WhatsApp',
    nombre: 'Nombre completo',
    nombrePlaceholder: 'Carlos Rivera',
    whatsappCampo: 'WhatsApp',
    especialidad: 'Especialidad',
    seleccionar: 'Selecciona',
    mensaje: 'Mensaje',
    opcional: '(opcional)',
    mensajePlaceholder: 'Breve mensaje',
    enviar: 'Confirmar solicitud de cita',
    franjaCta: 'Agendar una cita',
    waSaludo: 'Hola Orthodent, quiero agendar una cita.',
    waNombre: 'Nombre',
    waEspecialidad: 'Especialidad',
    waSede: 'Sede',
    waMotivo: 'Motivo',
  },
  footer: {
    lema:
      'Especialistas dentales de primer nivel combinando odontología digital de vanguardia, cirugía maxilofacial y calidez humana.',
    sede: 'Sede',
    contacto: 'Contacto',
    acreditaciones: 'Acreditaciones',
    legal: '© {anio} Orthodent Clínica Dental Especializada. Todos los derechos reservados.',
    credito: 'Desarrollado por',
  },
  comunes: {
    lunesJueves: 'Lunes a jueves',
    viernes: 'Viernes',
    sabado: 'Sábado',
    domingo: 'Domingo',
    cerrado: 'Cerrado',
  },
};

const en = {
  meta: {
    title: 'Orthodent | Specialist dentists in La Ceiba',
    description:
      'Digital dentistry, orthodontics, maxillofacial surgery, implants and dental aesthetics in La Ceiba. 3D scan diagnostics with certified specialists.',
  },
  nav: {
    agendar: 'Book a visit',
  },
  salto: 'Skip to content',
  cookies: {
    titulo: 'Cookies',
    desc: 'We use cookies to measure site usage and show the clinic map. Accept all, reject the optional ones, or read our privacy policy.',
    mas: 'Learn more',
    rechazar: 'Reject',
    aceptar: 'Accept',
  },
  hero: {
    titulo: 'Your smile deserves top-tier specialist care.',
    bajada:
      'At Orthodent we combine cutting-edge digital dentistry with qualified professionals to transform your dental health in La Ceiba.',
    destacado: 'Painless care, modern technology and certified specialists.',
    destacadoEtiqueta: 'Multidisciplinary team',
    cta1: 'See locations and hours',
    cta1Corto: 'Locations',
    cta2: 'Book online',
    cta2Corto: 'Book a visit',
  },
  especialidades: {
    titulo: 'Our Medical Specialties',
    bajada:
      'Complete care with cutting-edge technology and qualified specialists in every branch of dentistry.',
  },
  reconocimiento: {
    titulo: 'Advanced Technology & Clinical Differentiators',
    bajada:
      'State-of-the-art equipment and modern protocols to give you accurate diagnoses and comfortable, predictable treatment.',
    etiquetaGrupo: 'Clinical differentiators',
    anterior: 'Previous image',
    siguiente: 'Next image',
  },
  /* El primero arranca activo y es el que lleva el color de marca. Cada
     diferencia tiene su foto: `foto` elige cual se muestra en el panel y
     `fotoAlt` la describe. El quinto comparte el escaner 3D porque la
     planificacion digital es la misma foto. */
  reconocimientoItems: [
    {
      etiqueta: 'Digital Innovation',
      titulo: '3D Digital Scanning Without Impressions',
      desc: 'Immediate digital diagnostics and virtual models without uncomfortable traditional pastes.',
      enlace: 'See our locations',
      href: '#sedes',
      foto: 'tresd',
      fotoAlt: '3D digital scanner mapping the shape of the dental arch',
    },
    {
      titulo: 'Conscious Sedation at the Clinic',
      desc: 'Surgical and dental treatment under sedation for patients with dental anxiety or phobia.',
      foto: 'sedacion',
      fotoAlt: 'Sedation equipment and monitor in the practice',
    },
    {
      titulo: 'On-Site Panoramic X-Rays',
      desc: 'A full upper and lower jaw study in the practice, with no trips and no waiting.',
      foto: 'panoramica',
      fotoAlt: 'Panoramic X-ray of the upper and lower jaw',
    },
    {
      titulo: 'Digital Clinical Photography',
      desc: 'Photo records to plan your case and show you the before and after.',
      foto: 'clinicas',
      fotoAlt: 'Intraoral clinical photograph of the dentition',
    },
    {
      titulo: 'Clinical Lab and Guided Surgery',
      desc: 'Computer-based millimetric planning and predictable results.',
      foto: 'laboratorio',
      fotoAlt: 'Clinical laboratory at the Orthodent clinic',
    },
  ],
  especialista: {
    kicker: 'Specialist',
    titulo: 'Dr. Karen Chinchilla',
    especialidad: 'Specialist in Healthy Smiles',
    bio: 'Dr. Karen Chinchilla is a specialist in Orthodontics and Maxillofacial Orthopaedics, leading the Orthodent Dental Clinic team to transform dental health for patients in La Ceiba. With solid training and a patient-centred approach, she combines experience, human warmth and advanced technology to design personalised treatments that restore function and aesthetics to every smile.',
    enfoqueTitulo: 'Professional approach',
    alt: 'Dr. Karen Chinchilla, specialist in orthodontics and maxillofacial orthopaedics',
  },
  casos: {
    kicker: 'Clinical cases',
    titulo: 'Real Patient Results',
    bajada:
      'Drag the divider to compare each treatment. Transformations documented with standardised photographic protocols and 3D digital scanning at Orthodent.',
  },
  casosItems: [
    {
      titulo: 'Whitening and Micro-design',
      antesAlt: 'Teeth before whitening with micro-design',
      despuesAlt: 'Teeth after whitening with micro-design',
    },
    {
      titulo: 'Crowding Correction',
      antesAlt: 'Teeth before crowding correction',
      despuesAlt: 'Teeth after crowding correction',
    },
    {
titulo: 'Gummy Smile',
          antesAlt: 'Gums before gingivoplasty',
          despuesAlt: 'Gums after gingivoplasty with veneers',
        },
        {
          /* Cases 4, 5 and 6 come from folders 4, 5 and 6. The title is
             deliberately neutral: guessing the treatment would publish a
             clinical label the images cannot back up. The visible text in the
             carousel is the counter, not the title. */
          titulo: 'Clinical case 4',
          antesAlt: 'Before treatment',
          despuesAlt: 'After treatment',
        },
        {
          titulo: 'Clinical case 5',
          antesAlt: 'Before treatment',
          despuesAlt: 'After treatment',
        },
        {
          titulo: 'Clinical case 6',
          antesAlt: 'Before treatment',
          despuesAlt: 'After treatment',
        },
      ],
  testimonios: {
    kicker: 'Testimonials',
    titulo: 'Experiences That Transform Smiles',
  },
  sedes: {
    titulo: 'Locations and hours',
    carga: 'Loading map…',
    errorMapa: 'The map could not be loaded. Message us on WhatsApp to confirm the location.',
    tituloSede: 'Uniplaza La Ceiba',
    calle: 'Exterior unit, next to Punto Farma',
    zona: 'La Ceiba, Honduras',
    comoLlegar: 'Get directions',
    avisoUbicacion: 'Send us your location',
  },
  agendar: {
    estado: 'Personalised, immediate care',
    titulo: 'Book your visit',
    bajada:
      'Book your consultation at Orthodent today. You will receive a detailed clinical assessment with scanning, backed by a team of specialist dentists.',
    formTitulo: 'Quick booking',
    formNota: 'Fill in the form and we will confirm via WhatsApp.',
    directo: 'Prefer to call or write us now?',
    llamar: 'Call',
    whatsapp: 'WhatsApp',
    nombre: 'Full name',
    nombrePlaceholder: 'Carlos Rivera',
    whatsappCampo: 'WhatsApp',
    especialidad: 'Specialty',
    seleccionar: 'Select',
    mensaje: 'Message',
    opcional: '(optional)',
    mensajePlaceholder: 'Short message',
    enviar: 'Confirm appointment request',
    franjaCta: 'Book an appointment',
    waSaludo: 'Hi Orthodent, I would like to book an appointment.',
    waNombre: 'Name',
    waEspecialidad: 'Specialty',
    waSede: 'Location',
    waMotivo: 'Reason',
  },
  footer: {
    lema:
      'Top-tier dental specialists combining cutting-edge digital dentistry, maxillofacial surgery and human warmth.',
    sede: 'Location',
    contacto: 'Contact',
    acreditaciones: 'Accreditations',
    legal: '© {anio} Orthodent Specialized Dental Clinic. All rights reserved.',
    credito: 'Developed by',
  },
  comunes: {
    lunesJueves: 'Monday to Thursday',
    viernes: 'Friday',
    sabado: 'Saturday',
    domingo: 'Sunday',
    cerrado: 'Closed',
  },
};

export const diccionarios = { es, en };

/**
 * Devuelve el diccionario del idioma pedido. Cualquier valor que no sea 'en'
 * cae al español, que es el idioma por defecto del sitio.
 */
export function textos(locale) {
  return locale === 'en' ? en : es;
}

/**
 * Rutas cuyo nombre no coincide entre idiomas. La clave es la ruta en español,
 * sin prefijo y con barra inicial. La traduccion es en los dos sentidos: el
 * selector de idioma se puede usar desde cualquier version de la pagina, asi
 * que '/privacy' tambien tiene que poder volverse '/privacidad'.
 */
const rutasPorIdioma = {
  '/privacidad': '/privacy',
  '/terminos-y-condiciones': '/terms',
};

/**
 * Ruta del mismo documento en el otro idioma.
 *
 * Se deriva del pathname, no de una tabla de pares: primero se quita el
 * prefijo /en, despues se busca el nombre de la pagina en la tabla (en ambos
 * sentidos) y al final se devuelve a poner el prefijo segun el destino. Asi las
 * paginas legales quedan enlazadas entre si sin duplicar logica en cada
 * componente.
 */
export function rutaAlterna(pathname, destino) {
  const haciaEn = destino === 'en';

  /* Se quita el prefijo /en sin reemplazarlo por nada: sustituirlo por '/'
     produce '//privacy' en '/en/privacy', y new URL lee eso como URL relativa
     al protocolo y revienta. */
  const limpio = pathname.replace(/^\/en/, '').replace(/\/+$/, '') || '/';

  /* Traduce el nombre de la pagina. Sin esto '/privacidad' apuntaria a
     '/en/privacidad', que no existe. */
  let nombre = limpio;
  if (rutasPorIdioma[limpio]) {
    nombre = rutasPorIdioma[limpio];
  } else {
    const inverso = Object.entries(rutasPorIdioma).find(([, en]) => en === limpio);
    if (inverso) nombre = inverso[0];
  }

  const final = haciaEn ? nombre : nombre;
  return haciaEn ? (final === '/' ? '/en' : `/en${final}`) : final;
}