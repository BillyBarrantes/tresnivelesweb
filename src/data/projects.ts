export interface Project {
  id: string;
  industry: string;
  title: string;
  description: string;
  capabilities: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 'logistica-001',
    industry: 'Logística',
    title: 'Plataforma de trazabilidad operativa',
    description:
      'Sistema de seguimiento de envíos con integración a sistemas internos y panel de control en tiempo real.',
    capabilities: ['Software operativo', 'Analítica y BI'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'retail-001',
    industry: 'Retail',
    title: 'Automatización de procesos comerciales',
    description:
      'Flujo de aprobaciones, alertas y sincronización entre áreas comerciales, almacén y facturación.',
    capabilities: ['Automatización de Procesos', 'Software operativo'],
    tech: ['Node.js', 'PostgreSQL', 'n8n'],
  },
  {
    id: 'industria-001',
    industry: 'Industria',
    title: 'Clasificación inteligente de documentos',
    description:
      'Modelo de IA para extraer, clasificar y validar datos provenientes de órdenes de compra, facturas y guías.',
    capabilities: ['IA aplicada al negocio'],
    tech: ['Python', 'PostgreSQL', 'ChatGPT'],
  },
];
