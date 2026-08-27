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
      "Exemplo: integração WhatsApp Business + LLM para atendimento automatizado. Substitua por seu projeto real: contexto, problema resolvido e impacto. 2–3 linhas.",
    tech: ["Node.js", "TypeScript", "OpenAI", "WhatsApp API"],
    link: "#",
    repo: "https://github.com/alfnori",
    featured: true,
  },
  {
    id: "p5",
    year: "2024",
    title: "Projeto 05 — Dashboard Corporativo em React",
    description:
      "Exemplo: dashboard de monitoramento com observabilidade (Adobe Analytics/Splunk). Descreva métricas, desafios de performance e arquitetura.",
    tech: ["React", "TypeScript", "Kotlin", "Spring Boot"],
    link: "#",
    repo: "https://github.com/alfnori",
  },
  {
    id: "p4",
    year: "2023",
    title: "Projeto 04 — Plataforma de Câmbio com Microsserviços",
    description:
      "Exemplo: APIs financeiras críticas com RabbitMQ e alta disponibilidade na AWS/Azure. Explique escalabilidade e segurança.",
    tech: ["NestJS", "RabbitMQ", "AWS", "Redis"],
    link: "#",
    repo: "https://github.com/alfnori",
  },
  {
    id: "p3",
    year: "2022",
    title: "Projeto 03 — LinkAPI / Integrações Serverless",
    description:
      "Exemplo: orquestração de integrações REST/SOAP serverless com observabilidade Grafana/Loki. Fale sobre integrações entre sistemas.",
    tech: ["Koa", "Next.js", "Azure", "Elasticsearch"],
    link: "#",
    repo: "https://github.com/alfnori",
  },
  {
    id: "p2",
    year: "2020",
    title: "Projeto 02 — Modernização Monólito → Microsserviços",
    description:
      "Exemplo: migração Ruby → Node.js/AWS com Lambda/SQS no Boticário. Destaque estratégia de migração gradual e resultados.",
    tech: ["Node.js", "AWS Lambda", "SQS", "Ruby"],
    link: "#",
    repo: "https://github.com/alfnori",
  },
  {
    id: "p1",
    year: "2018",
    title: "Projeto 01 — Sistema de Gestão Corporativa",
    description:
      "Exemplo: sistema PHP/Java para gestão administrativa. Mencione modelagem de dados, APIs REST e impacto no negócio.",
    tech: ["PHP", "Java", "Spring", "MySQL"],
    link: "#",
    repo: "https://github.com/alfnori",
  },
];
