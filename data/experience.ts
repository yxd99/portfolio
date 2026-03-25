export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: Record<'en' | 'es', string>;
  impacts: Record<'en' | 'es', string[]>;
};

export const experience: ExperienceEntry[] = [
  {
    id: 'alegra',
    company: 'Alegra',
    role: 'Backend Developer',
    startDate: '2025-05',
    endDate: null,
    description: {
      en: 'Contributing to the migration from a legacy PHP monolith to a serverless, event-driven microservices architecture, improving scalability and cloud-native adoption.',
      es: 'Contribuyo a la migración de un monolito en PHP legacy hacia una arquitectura de microservicios serverless y orientada a eventos, mejorando escalabilidad y adopción cloud-native.',
    },
    impacts: {
      en: [
        'Supporting migration to serverless, event-driven microservices using CDKless.',
        'Planning and defining new microservices: domain boundaries, event flows, and infrastructure design.',
        'Helping establish architectural standards for a scalable distributed system.',
      ],
      es: [
        'Apoyo en la migración a microservicios serverless y orientados a eventos con CDKless.',
        'Planificación y definición de nuevos microservicios: límites de dominio, flujos de eventos e infraestructura.',
        'Contribución a estándares arquitectónicos para un sistema distribuido escalable.',
      ],
    },
  },
  {
    id: 'magiclog',
    company: 'MagicLog',
    role: 'Fullstack Developer',
    startDate: '2025-04',
    endDate: '2025-11',
    description: {
      en: 'Developed frontend and backend for scalable web applications using React and NestJS, with a focus on performance, reusability, and microservices.',
      es: 'Desarrollé frontend y backend para aplicaciones web escalables con React y NestJS, con foco en rendimiento, reutilización y microservicios.',
    },
    impacts: {
      en: [
        'Developed frontend components from scratch with React, focusing on performance, reusability, and UX following scalable best practices.',
        'Contributed to backend development and optimization with NestJS and microservices architecture.',
        'Improved API response times, scalability, and system reliability.',
      ],
      es: [
        'Desarrollé componentes frontend desde cero con React, enfocado en rendimiento, reutilización y UX.',
        'Contribuí al backend con NestJS y arquitectura de microservicios.',
        'Mejoré tiempos de respuesta de APIs, escalabilidad y confiabilidad del sistema.',
      ],
    },
  },
  {
    id: 'tbb',
    company: 'TBB',
    role: 'Fullstack Developer',
    startDate: '2024-06',
    endDate: '2025-04',
    description: {
      en: 'Developed integrations and communication between corporate and administrative applications; contributed to interfaces for high-demand platforms.',
      es: 'Desarrollé integraciones y comunicación entre aplicaciones corporativas y administrativas; contribuí en interfaces para plataformas de alta demanda.',
    },
    impacts: {
      en: [
        'Developed integrations between corporate and administrative applications.',
        'Contributed to interfaces for highly demanded platforms.',
      ],
      es: [
        'Desarrollé integraciones entre aplicaciones corporativas y administrativas.',
        'Contribuí en interfaces para plataformas de alta demanda.',
      ],
    },
  },
  {
    id: 'bemaster',
    company: 'BeMaster',
    role: 'Fullstack Developer',
    startDate: '2024-02',
    endDate: '2024-11',
    description: {
      en: 'Implemented reusable web components and integrated Firebase to improve platform functionality, uptime, and data management.',
      es: 'Implementé componentes web reutilizables e integré Firebase para mejorar la funcionalidad de la plataforma, disponibilidad y gestión de datos.',
    },
    impacts: {
      en: [
        'Implemented reusable web components, enhancing platform functionality and maintainable design.',
        'Integrated Firebase, improving uptime and system performance through efficient data management and interactive solutions.',
      ],
      es: [
        'Implementé componentes web reutilizables mejorando la funcionalidad y el diseño mantenible de la plataforma.',
        'Integré Firebase mejorando disponibilidad y rendimiento mediante gestión de datos e interfaces interactivas.',
      ],
    },
  },
  {
    id: 'globant',
    company: 'Globant',
    role: 'RPA Developer',
    startDate: '2021-08',
    endDate: '2024-02',
    description: {
      en: 'Designed and developed automations to improve efficiency and reduce time on complex tasks; supervised and improved automations in production.',
      es: 'Diseñé y desarrollé automatizaciones para mejorar la eficiencia y reducir tiempos en tareas complejas; supervisé y mejoré automatizaciones en producción.',
    },
    impacts: {
      en: [
        'Designed and developed automations that improved efficiency and reduced time spent on complex tasks.',
        'Supervised and made continuous improvements to production automations, ensuring optimal performance and problem solving.',
      ],
      es: [
        'Diseñé y desarrollé automatizaciones que mejoraron la eficiencia y redujeron tiempos en tareas complejas.',
        'Supervisé y mejoré continuamente las automatizaciones en producción, asegurando rendimiento y resolución de problemas.',
      ],
    },
  },
  {
    id: 'tufactura',
    company: 'Tu Factura 123 SAS',
    role: 'Web Developer',
    startDate: '2020-12',
    endDate: '2021-03',
    description: {
      en: 'Contributed to web projects on frontend and backend, delivering scalable solutions and collaborating with cross-functional teams to align with business goals.',
      es: 'Contribuí en proyectos web en frontend y backend, entregando soluciones escalables y colaborando con equipos multidisciplinarios alineados a objetivos de negocio.',
    },
    impacts: {
      en: [
        'Actively contributed to various web projects on both frontend and backend for efficient, scalable solutions.',
        'Collaborated with designers and product managers to gather requirements and deliver high-quality web applications aligned with business goals.',
      ],
      es: [
        'Contribuí en proyectos web en frontend y backend con soluciones escalables.',
        'Colaboré con diseñadores y product managers para requisitos y aplicaciones web alineadas con objetivos de negocio.',
      ],
    },
  },
];
