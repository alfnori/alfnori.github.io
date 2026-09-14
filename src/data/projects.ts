export interface Project {
  id: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
}

// 6 projetos dummy em ordem cronológica reversa (mais recente primeiro)
// TODO: substitua título, descrição, tech, link e repo pelos seus projetos reais
export const projects: Project[] = [
  {
    id: "p6",
    year: "2025",
    title: "Projeto 06 — Plataforma de Comunicação com IA",
    description:
      "Evolução de uma plataforma de comunicação corporativa para ampliar a automação do atendimento e reduzir dependências de processos manuais. A arquitetura foi direcionada para processamento assíncrono e integração com WhatsApp, chatbots e LLMs, mantendo espaço para evolução contínua. O trabalho também envolveu decisões de observabilidade, performance e resolução de incidentes críticos em produção.",
    tech: ["Node.js", "TypeScript", "OpenAI", "WhatsApp API"],
    link: "#",
    repo: "#",
    featured: true,
  },
  {
    id: "p5",
    year: "2024",
    title: "Projeto 05 — Dashboard Corporativo em React",
    description:
      "Evolução de uma aplicação corporativa utilizada no contexto de seguros, equilibrando novas necessidades de negócio com uma experiência consistente para o usuário. As decisões envolveram integração entre diferentes camadas da aplicação e instrumentação do produto para tornar seu comportamento mensurável. Isso permitiu acompanhar métricas, investigar problemas e orientar melhorias contínuas.",
    tech: ["React", "TypeScript", "Kotlin", "Spring Boot"],
    link: "#",
    repo: "#",
  },
  {
    id: "p4",
    year: "2023",
    title: "Projeto 04 — Plataforma de Auditoria de Câmbio",
    description:
      "Evolução de uma plataforma voltada ao monitoramento de operações financeiras críticas, onde confiabilidade e rastreabilidade eram requisitos centrais do produto. A principal decisão arquitetural foi estruturar a solução de forma distribuída, permitindo separar responsabilidades e processar eventos de maneira assíncrona. O resultado foi uma plataforma preparada para maior escala, disponibilidade e integração com diferentes parceiros.",
    tech: ["NestJS", "RabbitMQ", "AWS", "Redis"],
    link: "#",
    repo: "#",
  },
  {
    id: "p2",
    year: "2020",
    title: "Projeto 02 — Modernização Monólito → Microsserviços",
    description:
      "Modernização de uma plataforma de banking digital sem interromper a evolução do produto. Em vez de uma reescrita completa, foi adotada uma estratégia de migração gradual, permitindo substituir partes do monólito conforme novas capacidades eram desenvolvidas. A decisão reduziu o risco da transformação e criou uma arquitetura mais preparada para escala, novas integrações e evolução independente dos serviços.",
    tech: ["Node.js", "AWS Lambda", "SQS", "Ruby"],
    link: "#",
    repo: "#",
  },
  {
    id: "p1",
    year: "2016",
    title: "Projeto Ometznet — Sistema de Gestão Corporativa",
    description:
      "Evolução de uma plataforma de gestão utilizada para apoiar operações administrativas e escolas de idiomas. O foco foi transformar necessidades do negócio em funcionalidades integradas, mantendo a evolução de um sistema já estabelecido. As decisões envolveram organização dos módulos, integração entre áreas da aplicação e construção gradual de novas capacidades para acompanhar as necessidades da operação.",
    tech: ["PHP", "Java", "Spring", "DB2"],
    link: "#",
    repo: "#",
  },
];
