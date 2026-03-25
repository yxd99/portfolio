export type EducationEntry = {
  id: string;
  institution: string;
  degree: Record<'en' | 'es', string>;
  startYear: number;
  endYear: number;
};

export const education: EducationEntry[] = [
  {
    id: 'sena-technologist',
    institution: 'Servicio Nacional del Aprendizaje (SENA)',
    degree: {
      en: 'Technologist in Information Systems Analysis and Development',
      es: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
    },
    startYear: 2021,
    endYear: 2023,
  },
  {
    id: 'sena-technician',
    institution: 'Servicio Nacional del Aprendizaje (SENA)',
    degree: {
      en: 'Technician in Software Programming',
      es: 'Técnico en Programación de Software',
    },
    startYear: 2018,
    endYear: 2019,
  },
  
];
