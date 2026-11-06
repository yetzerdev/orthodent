/**
 * Listados largos que cambian entre idiomas: especialidades, ventajas,
 * enfoques, casos y horarios.
 *
 * JavaScript plano por el mismo motivo que en index.js: el frontmatter de los
 * .astro no transpila sintaxis de tipos.
 *
 * Los testimonios NO están acá a propósito. Son citas textuales de pacientes y
 * su voz es el contenido; traducirlas sería reescribir lo que la persona dijo,
 * así que se muestran igual en los dos idiomas.
 */
import { textos } from './index';

const TITULOS = {
  es: {
    ortodoncia: 'Ortodoncia Especializada',
    cirugia: 'Cirugía Maxilofacial',
    cirugiaDestacada: 'Procedimientos Quirúrgicos de Alta Complejidad',
    implantes: 'Implantes Dentales y Rehabilitación',
    endodoncia: 'Endodoncia',
    estetica: 'Estética y Diseño de Sonrisa',
    diagnostico: 'Diagnóstico 3D',
    infantil: 'Odontopediatría Especializada',
    sedacion: 'Sedación Consciente',
  },
  en: {
    ortodoncia: 'Specialised Orthodontics',
    cirugia: 'Maxillofacial Surgery',
    cirugiaDestacada: 'High-Complexity Surgical Procedures',
    implantes: 'Dental Implants and Rehabilitation',
    endodoncia: 'Endodontics',
    estetica: 'Aesthetics and Smile Design',
    diagnostico: '3D Diagnostics',
    infantil: 'Specialised Paediatric Dentistry',
    sedacion: 'Conscious Sedation',
  },
};

export function titulosEspecialidades(locale) {
  return TITULOS[locale === 'en' ? 'en' : 'es'];
}

export function datosEspecialidades(locale) {
  const t = titulosEspecialidades(locale);
  const copy = textos(locale);

  if (locale === 'en') {
    return {
      principales: [
        {
          icon: 'braces',
          titulo: t.ortodoncia,
          desc: 'Design and correction of bites with brackets and advanced self-ligating systems.',
        },
        {
          icon: 'doctor-01',
          titulo: t.cirugia,
          destacada: t.cirugiaDestacada,
          desc: 'High-complexity surgery and facial aesthetic treatments.',
        },
        {
          icon: 'dental-tooth',
          titulo: t.implantes,
          desc: 'Replacement of missing teeth with prostheses on implants.',
        },
      ],
      secundarias: [
        {
          icon: 'syringe',
          titulo: t.endodoncia,
          desc: 'Root canal and nerve treatments to save damaged teeth.',
        },
        {
          icon: 'sparkles',
          titulo: t.estetica,
          tituloCorto: true,
          desc: 'Veneers, professional whitening and gummy smile correction.',
        },
      ],
      diagnostico: {
        icon: '3-d-view',
        titulo: t.diagnostico,
        desc: 'Next-generation digital scanning and design.',
      },
      infantil: {
        icon: 'child',
        titulo: t.infantil,
        desc: 'Friendly preventive dental care in a space adapted to put children at ease.',
        cta: { label: 'Book a paediatric visit', href: '#agendar' },
      },
      franja: {
        icon: 'heart-pulse',
        titulo: t.sedacion,
        desc: 'Dental procedures under conscious sedation, for patients who feel fear or anxiety in the dental chair.',
        cta: copy.agendar.franjaCta,
      },
    };
  }

  return {
principales: [
        {
          icon: 'braces',
          titulo: t.ortodoncia,
          desc: 'Diseño y corrección de mordidas con brackets y autoligado avanzado.',
        },
      {
        icon: 'doctor-01',
        titulo: t.cirugia,
        destacada: t.cirugiaDestacada,
        desc: 'Cirugía de alta complejidad y tratamientos estéticos faciales.',
      },
      {
        icon: 'dental-tooth',
        titulo: t.implantes,
        desc: 'Sustitución de piezas perdidas con prótesis sobre implantes.',
      },
    ],
    secundarias: [
      {
        icon: 'syringe',
        titulo: t.endodoncia,
        desc: 'Tratamientos de canales y nervio para salvar piezas dentales.',
      },
      {
        icon: 'sparkles',
        titulo: t.estetica,
        tituloCorto: true,
        desc: 'Carillas, blanqueamiento profesional y corrección de sonrisa gingival.',
      },
    ],
    diagnostico: {
      icon: '3-d-view',
      titulo: t.diagnostico,
      desc: 'Escaneo y diseño digital de última generación.',
    },
    infantil: {
      icon: 'child',
      titulo: t.infantil,
      desc: 'Atención dental preventiva y amigable, con ambiente adaptado y sin temores.',
      cta: { label: 'Agendar consulta infantil', href: '#agendar' },
    },
    franja: {
      icon: 'heart-pulse',
      titulo: t.sedacion,
      desc: 'Cirugías y tratamientos dentales con sedación consciente, para pacientes que sienten miedo o ansiedad en el consultorio.',
      cta: copy.agendar.franjaCta,
    },
  };
}

export function datosVentajas(locale) {
  if (locale === 'en') {
    return [
      'Digital diagnostics with 3D scanning',
      'Certified specialists in every area',
      'Treatment plan explained step by step',
      'Digital technology and minimally invasive care',
    ];
  }

  return [
    'Diagnostico digital con escaneo 3D',
    'Especialistas certificados en cada area',
    'Plan de tratamiento explicado paso a paso',
    'Tecnologia digital y minima invasion',
  ];
}

export function datosEnfoques(locale) {
  if (locale === 'en') {
    return [
      {
        icon: 'user-circle',
        titulo: 'Personalised care',
        desc: 'Every diagnosis is assessed on its own to guarantee optimal, long-lasting results.',
      },
      {
        icon: 'sparkles',
        titulo: 'Innovative treatments',
        desc: 'Advanced orthodontic techniques for faster and more comfortable treatment.',
      },
      {
        icon: '3-d-view',
        titulo: 'Advanced technology',
        desc: 'Modern equipment aimed at the best clinical experience from your first visit.',
      },
    ];
  }

  return [
    {
      icon: 'user-circle',
      titulo: 'Atención personalizada',
      desc: 'Cada diagnóstico se evalúa de manera única para garantizar resultados óptimos y duraderos.',
    },
    {
      icon: 'sparkles',
      titulo: 'Tratamientos innovadores',
      desc: 'Uso de técnicas avanzadas en ortodoncia para procesos más rápidos y cómodos.',
    },
    {
      icon: '3-d-view',
      titulo: 'Tecnología avanzada',
      desc: 'Equipamiento moderno orientado a dar la mejor experiencia clínica desde la primera cita.',
    },
  ];
}

/* Los sistemas de ortodoncia viven en su propia seccion, asi que aca no van
   como etiquetas sueltas dentro de la tarjeta de especialidad. */
export function datosOrtodoncia(locale) {
  if (locale === 'en') {
    return {
      sistemas: [
        {
          icon: 'refresh-cw',
          esquema: 'cco',
          nombre: 'CCO System Self-Ligated',
          nota: 'Certified',
          desc: 'Brackets that tighten on their own. No tightening appointments, and treatment advances faster with fewer visits.',
        },
        {
          icon: 'eye',
          esquema: 'invisalign',
          nombre: 'Invisalign',
          desc: 'Clear removable aligners. You take them out to eat and brush, and they are barely visible in photos.',
        },
        {
          icon: 'dental-tooth',
          esquema: 'estetico',
          nombre: 'Conventional Aesthetic',
          desc: 'Standard braces in ceramic or composite, for patients who want the result without the metal look.',
        },
        {
          icon: 'diamond',
          esquema: 'zafiro',
          nombre: 'Sapphire',
          desc: 'Sapphire brackets. A hard, clear crystal that does not stain and does not discolour over time.',
        },
        {
          icon: 'settings-02',
          esquema: 'metalico',
          nombre: 'Metal',
          desc: 'Stainless steel brackets. The most resistant option, and the most affordable per tooth.',
        },
      ],
    };
  }

  return {
    sistemas: [
      {
        icon: 'refresh-cw',
        esquema: 'cco',
        nombre: 'CCO System Self-Ligated',
        nota: 'Certificado',
        desc: 'Brackets que se aprietan solos. Sin citas de ajuste, y el tratamiento avanza más rápido con menos visitas.',
      },
      {
        icon: 'eye',
        esquema: 'invisalign',
        nombre: 'Invisalign',
        desc: 'Alineadores transparentes y removibles. Se quitan para comer y cepillarse, y casi no se notan en las fotos.',
      },
      {
        icon: 'dental-tooth',
        esquema: 'estetico',
        nombre: 'Convencionales Estéticos',
        desc: 'Brackets convencionales en cerámica o composite, para quien busca el resultado sin el aspecto metálico.',
      },
      {
        icon: 'diamond',
        esquema: 'zafiro',
        nombre: 'Zafiro',
        desc: 'Brackets de zafiro. Un cristal duro y transparente que no se mancha ni se opaca con el tiempo.',
      },
      {
        icon: 'settings-02',
        esquema: 'metalico',
        nombre: 'Metálicos',
        desc: 'Brackets de acero inoxidable. La opción más resistente y la más accesible por pieza dental.',
      },
    ],
  };
}

export function datosAcreditaciones(locale) {
  if (locale === 'en') {
    return [
      'Honduran College of Dental Surgeons',
      'Certified maxillofacial specialists',
      '3D intraoral scanning protocols',
    ];
  }

  return [
    'Colegio Cirujanos Dentistas Honduras',
    'Especialistas certificados en maxilofacial',
    'Protocolos de escaneo intraoral 3D',
  ];
}

export function datosHorarios(locale) {
  const t = textos(locale);

  return [
    { dias: t.comunes.lunesJueves, rango: '9:00 AM - 5:30 PM' },
    { dias: t.comunes.viernes, rango: '9:00 AM - 5:00 PM' },
    { dias: t.comunes.sabado, rango: '9:00 AM - 1:00 PM' },
    { dias: t.comunes.domingo, rango: t.comunes.cerrado, cerrado: true },
  ];
}

/* Este listado se manda por WhatsApp, asi que van los nombres cortos que usa
   la gente al pedir cita, no los titulos largos de la web. */
export function datosEspecialidadesFormulario(locale) {
  if (locale === 'en') {
    return [
      'Orthodontics',
      'Maxillofacial Surgery',
      'Dental Implants',
      'Endodontics',
      'Dental Aesthetics',
      'Paediatric Dentistry',
      'Conscious Sedation',
    ];
  }

  return [
    'Ortodoncia',
    'Cirugía Maxilofacial',
    'Implantes Dentales',
    'Endodoncia',
    'Estética Dental',
    'Odontopediatría',
    'Sedación Consciente',
  ];
}