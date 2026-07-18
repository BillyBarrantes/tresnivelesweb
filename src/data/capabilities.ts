export interface Capability {
  title: string;
  description: string;
  outcome: string;
  useCases: string[];
}

export interface Step {
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    title: 'Software operativo',
    description:
      'Sistemas internos, portales y herramientas a medida para ordenar procesos que hoy dependen de hojas, mensajes o tareas manuales.',
    outcome: 'Menos fricción entre áreas',
    useCases: ['Portales logísticos', 'Tracking de órdenes', 'Gestión de inventario'],
  },
  {
    title: 'Automatización de Procesos',
    description:
      'Flujos que conectan tareas, alertas, aprobaciones y sistemas existentes sin interrumpir la operación actual.',
    outcome: 'Operación más predecible',
    useCases: ['Aprobaciones automáticas', 'Alertas operativas', 'Sincronización entre sistemas'],
  },
  {
    title: 'IA aplicada al negocio',
    description:
      'Agentes y modelos integrados a tareas reales: análisis, soporte, clasificación, extracción de información y asistencia operativa.',
    outcome: 'IA con función concreta',
    useCases: ['Clasificación de documentos', 'Extracción de datos no estructurados', 'Asistencia operativa'],
  },
  {
    title: 'Analítica y BI',
    description:
      'Dashboards, reportes y modelos de datos para convertir información dispersa en decisiones claras y accionables.',
    outcome: 'Decisiones con evidencia',
    useCases: ['Tableros de control operativo', 'Reportes automatizados', 'Conciliación de datos'],
  },
];

export const coreTech = ['Python', 'Node.js', 'PostgreSQL', 'React', 'Supabase', 'ChatGPT', 'n8n', 'Power BI'];

export const steps: Step[] = [
  {
    title: 'Diagnosticamos',
    description:
      'Analizamos tu operación, identificamos los procesos que pueden optimizarse y definimos juntos el alcance técnico y los objetivos de negocio.',
  },
  {
    title: 'Construimos',
    description:
      'Desarrollamos con metodología ágil, integración continua y pruebas constantes. Sin silos, sin entregas sorpresa, sin código sin documentar.',
  },
  {
    title: 'Acompañamos',
    description:
      'Entregamos con soporte post-implementación, documentación clara y la posibilidad de evolucionar el producto según cambie tu operación.',
  },
];
