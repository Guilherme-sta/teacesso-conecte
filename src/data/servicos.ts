export type Servico = {
  nome: string;
  tipo: string;
  descricao: string;
  endereco: string;
  telefone: string;
  whatsapp?: string;
  horario: string;
};

export const servicos: Servico[] = [
  {
    nome: "CeTEA - Centro Estadual de Referência em TEA",
    tipo: "Saúde · Diagnóstico",
    descricao: "Avaliação multidisciplinar, terapias e acompanhamento especializado para crianças com TEA.",
    endereco: "Av. Higino Cunha, 1000 - Cristo Rei, Teresina-PI",
    telefone: "(86) 3216-3232",
    whatsapp: "5586999990001",
    horario: "Seg a Sex · 7h às 17h",
  },
  {
    nome: "CRAS Centro",
    tipo: "Assistência Social",
    descricao: "Cadastro Único, BPC, encaminhamentos sociais e apoio às famílias.",
    endereco: "R. Areolino de Abreu, 1234 - Centro, Teresina-PI",
    telefone: "(86) 3215-7777",
    whatsapp: "5586999990002",
    horario: "Seg a Sex · 8h às 17h",
  },
  {
    nome: "Hospital Infantil Lucídio Portella - Neuropediatria",
    tipo: "Saúde · SUS",
    descricao: "Atendimento neuropediátrico, exames e laudo diagnóstico pelo SUS.",
    endereco: "Av. Frei Serafim, 2352 - Centro, Teresina-PI",
    telefone: "(86) 3216-3434",
    whatsapp: "5586999990003",
    horario: "Seg a Sex · 7h às 19h",
  },
  {
    nome: "NAPNE - IFPI Campus Teresina",
    tipo: "Educação · Inclusão",
    descricao: "Núcleo de Atendimento a Pessoas com Necessidades Específicas. Apoio educacional e orientação às famílias.",
    endereco: "Praça da Liberdade, 1597 - Centro, Teresina-PI",
    telefone: "(86) 3131-1500",
    whatsapp: "5586999990004",
    horario: "Seg a Sex · 8h às 21h",
  },
];