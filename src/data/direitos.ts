export type Direito = {
  slug: string;
  titulo: string;
  resumo: string;
  cor: "primary" | "secondary";
  passos: { titulo: string; descricao: string }[];
  documentos?: string[];
  onde?: string;
};

export const direitos: Direito[] = [
  {
    slug: "passe-livre",
    titulo: "Passe Livre Intermunicipal",
    resumo: "Transporte gratuito entre cidades para pessoas com TEA e um acompanhante.",
    cor: "primary",
    passos: [
      { titulo: "1. Reúna os documentos", descricao: "RG, CPF, comprovante de residência e laudo médico recente." },
      { titulo: "2. Faça o requerimento", descricao: "Acesse o site da ANTT ou compareça ao posto da Strans em Teresina." },
      { titulo: "3. Aguarde a análise", descricao: "O prazo médio é de 30 dias. Você recebe a carteirinha em casa." },
      { titulo: "4. Use o passe", descricao: "Apresente a carteirinha na bilheteria com 3 horas de antecedência." },
    ],
    documentos: ["RG e CPF", "Comprovante de residência", "Laudo médico (CID F84)"],
    onde: "Strans Teresina ou site da ANTT",
  },
  {
    slug: "bpc",
    titulo: "BPC - Benefício de Prestação Continuada",
    resumo: "Um salário mínimo mensal para pessoas com deficiência de baixa renda.",
    cor: "secondary",
    passos: [
      { titulo: "1. Cadastro no CadÚnico", descricao: "Vá ao CRAS mais próximo e atualize o CadÚnico da família." },
      { titulo: "2. Solicite no INSS", descricao: "Pelo app Meu INSS, telefone 135 ou em uma agência." },
      { titulo: "3. Perícia médica e social", descricao: "O INSS agenda avaliação para confirmar a deficiência e a renda." },
      { titulo: "4. Acompanhe", descricao: "Em caso de negativa, é possível recorrer com ajuda da Defensoria Pública." },
    ],
    documentos: ["RG, CPF e certidão", "Laudo médico", "CadÚnico atualizado"],
    onde: "CRAS + INSS (Meu INSS / 135)",
  },
  {
    slug: "estacionamento",
    titulo: "Vaga de Estacionamento Especial",
    resumo: "Credencial para estacionar em vagas reservadas a pessoas com deficiência.",
    cor: "primary",
    passos: [
      { titulo: "1. Acesse a Strans", descricao: "Solicitação feita pela Strans Teresina, presencial ou online." },
      { titulo: "2. Apresente o laudo", descricao: "Laudo médico com CID F84 e indicação de mobilidade reduzida." },
      { titulo: "3. Receba a credencial", descricao: "Validade de até 5 anos. Deve ficar visível no painel do veículo." },
    ],
    documentos: ["RG e CPF", "CNH (se houver)", "Laudo médico"],
    onde: "Strans - Teresina",
  },
  {
    slug: "laudo",
    titulo: "Laudo e Diagnóstico de TEA",
    resumo: "Caminho pelo SUS para conseguir o laudo médico oficial.",
    cor: "secondary",
    passos: [
      { titulo: "1. Procure a UBS", descricao: "Agende consulta na Unidade Básica de Saúde do seu bairro." },
      { titulo: "2. Encaminhamento", descricao: "O médico encaminha para neuropediatra ou psiquiatra infantil." },
      { titulo: "3. Avaliação multidisciplinar", descricao: "CeTEA e Hospital Infantil realizam a avaliação completa." },
      { titulo: "4. Receba o laudo", descricao: "O documento abre porta para benefícios, terapias e direitos." },
    ],
    documentos: ["Cartão SUS", "RG e CPF", "Histórico escolar/relatórios"],
    onde: "UBS → CeTEA / Hospital Infantil",
  },
];