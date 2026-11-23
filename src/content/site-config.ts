import { ExperienceType } from "@/lib/whatsapp";

export interface EditorialImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  caption?: string;
  category:
    | "Animais"
    | "Família & Infância"
    | "Natureza"
    | "Gastronomia"
    | "Educativo";
}

export interface ExperienceItem {
  id: string;
  slug: string;
  title: string;
  category:
    | "Contato com animais"
    | "Atividades educativas"
    | "Passeios"
    | "Brincadeiras ao ar livre"
    | "Experiências na natureza";
  shortDescription: string;
  detailedDescription: string;
  ageRecommendation: string;
  durationNote: string;
  highlights: string[];
  image: EditorialImage;
  isConfirmedByClient: boolean;
}

export interface DishHighlight {
  id: string;
  name: string;
  category: "Fogão a lenha" | "Acompanhamentos da roça" | "Para as crianças" | "Sobremesas caseiras";
  description: string;
  dietaryNote?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category:
    | "Reservas e Horários"
    | "Atrações e Estrutura"
    | "Restaurante e Alimentação"
    | "Escolas e Aniversários"
    | "Acesso e Pagamento";
  requiresConfirmationNote?: string;
}

export interface VerifiedTestimonial {
  id: string;
  authorName: string;
  visitContext: string;
  visitDate: string;
  quote: string;
  sourceLabel: string;
}

export const siteConfig = {
  brand: {
    name: "Mini Fazendinha Velho Jou",
    shortName: "Fazendinha Velho Jou",
    tagline: "Um dia no campo. Memórias para a vida toda.",
    subtitle:
      "A Fazendinha Velho Jou proporciona contato direto com os animais, gastronomia caipira no fogão a lenha e momentos especiais para toda a família a 30 minutos de São Paulo.",
    siteUrl: "https://fazendinha-do-velho-jou.vercel.app",
    logoSrc: "/images/logo-velho-jou.png",
  },
  social: {
    instagramUrl: "https://www.instagram.com/fazendinhavelhojou/",
    instagramHandle: "@fazendinhavelhojou",
    followersLabel: "52,1 mil seguidores",
    postsLabel: "3.618 publicações",
    verified: true,
    bio: "A Fazendinha Velho Jou proporciona contato direto com os animais, é um ótimo passeio em família. Agende sua visita pelo WhatsApp!",
    highlights: [
      "Restaurante Caipira",
      "Visitantes",
      "Aniversário",
      "Feedbacks",
      "Aventuras FVJ",
      "Escolas",
    ],
  },
  verificationStatus: {
    pricingConfirmed: true,
    locationConfirmed: true,
    scheduleConfirmed: true,
    testimonialsConfirmed: false,
  },
  contact: {
    whatsappNumber: "5511942807987",
    whatsappDisplay: "(11) 94280-7987",
    phoneDisplay: "(11) 4604-9144",
    email: "fazendinhavelhojou@gmail.com",
    instagramHandle: "@fazendinhavelhojou",
    cityRegionLabel: "Mairiporã - SP (Aprox. 30 min de São Paulo)",
    openingDaysSummary: "Sábados, Domingos e Feriados, das 10h às 16h",
    bookingRequirementSummary:
      "Ingressos limitados — agende sua visita antecipadamente pelo WhatsApp",
  },
  navigation: [
    { label: "Início", href: "/" },
    { label: "Atrações", href: "/atracoes" },
    { label: "Ingressos", href: "/ingressos" },
    { label: "Restaurante", href: "/restaurante" },
    { label: "Passeios Escolares", href: "/passeios-escolares" },
    { label: "Aniversários", href: "/aniversarios" },
    { label: "Galeria", href: "/galeria" },
    { label: "Como Chegar", href: "/como-chegar" },
    { label: "FAQ", href: "/perguntas-frequentes" },
  ],
  hero: {
    badge: "Mini Fazendinha Velho Jou • Mairiporã - SP",
    title: "Um dia no campo. Memórias para a vida toda.",
    subtitle:
      "Natureza, descobertas e momentos especiais para toda a família. Viva o contato direto com os animais, passeio de pônei e trenzinho, mamadeira para cabritos, ordenha e almoço caipira no fogão a lenha.",
    primaryCta: "Planejar minha visita",
    secondaryCta: "Conhecer as atrações",
    desktopImage: {
      src: "/images/hero-family-farm.jpg",
      alt: "Família caminhando ao ar livre no campo verde da Mini Fazendinha Velho Jou com árvores e animais ao fundo",
      width: 1600,
      height: 1067,
      objectPosition: "center 38%",
      category: "Família & Infância" as const,
    },
    mobileSecondaryImage: {
      src: "/images/velho-jou-miniporco.jpg",
      alt: "Anfitrião da Mini Fazendinha Velho Jou com chapéu de fazendeiro interagindo com miniporco no cercado",
      width: 800,
      height: 1000,
      objectPosition: "center 35%",
      category: "Animais" as const,
    },
    complementaryInfo: [
      {
        label: "Cidade e região",
        value: "Mairiporã - SP (A cerca de 30 minutos de São Paulo)",
      },
      {
        label: "Dias de funcionamento",
        value: "Sábados, Domingos e Feriados das 10h às 16h (Escolas na semana)",
      },
      {
        label: "Agendamento",
        value: "Ingressos limitados com reserva antecipada via WhatsApp (11) 94280-7987",
      },
    ],
  },
  experiences: [
    {
      id: "contato-com-animais",
      slug: "contato-com-animais",
      title: "Atividades de Fazendeiro: contato direto com os animais",
      category: "Contato com animais",
      shortDescription:
        "Dar mamadeira aos cabritos, alimentar coelhos, aves, bovinos e miniporcos, escovar o pônei e participar da ordenha assistida.",
      detailedDescription:
        "Na Mini Fazendinha Velho Jou, as crianças vivem a rotina real de um pequeno fazendeiro. Em cercados seguros e acompanhados de perto pela equipe, toda a família alimenta coelhos, cabritos, miniporcos, aves e bovinos, participa da ordenha e aprende a respeitar o tempo e o carinho de cada animal.",
      ageRecommendation: "Todas as idades (crianças acompanhadas dos responsáveis)",
      durationNote: "Interação ao longo do dia e ordenha em horários programados",
      highlights: [
        "Dar mamadeira aos cabritos e alimentar coelhos, aves, bovinos e miniporcos",
        "Vivência de ordenha e escovação de pônei com acompanhamento",
        "Contato real, educativo e acolhedor conduzido pela equipe do Velho Jou",
      ],
      image: {
        src: "/images/velho-jou-miniporco.jpg",
        alt: "Interação direta com o miniporco no cercado da Mini Fazendinha Velho Jou",
        width: 900,
        height: 1100,
        objectPosition: "center 30%",
        category: "Animais",
      },
      isConfirmedByClient: true,
    },
    {
      id: "passeios-no-campo",
      slug: "passeios-no-campo",
      title: "Passeio de Pônei e Passeio de Trenzinho pela fazendinha",
      category: "Passeios",
      shortDescription:
        "Os clássicos mais amados pelas crianças: voltas de pônei e passeio de trenzinho com horários organizados ao longo do dia.",
      detailedDescription:
        "Para garantir que todas as famílias aproveitem com tranquilidade e sem filas cansativas, os passeios de pônei e de trenzinho acontecem em janelas programadas durante a manhã e a tarde, proporcionando alegria e fotos inesquecíveis para os pequenos.",
      ageRecommendation: "Crianças e famílias (conforme orientação de cada atração)",
      durationNote: "Janelas programadas das 10h30 às 16h00",
      highlights: [
        "Passeio de pônei acompanhado com cuidado e segurança",
        "Passeio de trenzinho divertido para a família",
        "Grade de horários organizada para você não perder nenhuma atividade",
      ],
      image: {
        src: "/images/pony-ride-pasture.jpg",
        alt: "Pônei caramelo em área verde da Mini Fazendinha Velho Jou",
        width: 1200,
        height: 900,
        objectPosition: "center 28%",
        category: "Animais",
      },
      isConfirmedByClient: true,
    },
    {
      id: "brincadeiras-ao-ar-livre",
      slug: "brincadeiras-ao-ar-livre",
      title: "Recreação completa: pista de motocas, tobogã, cama elástica e mais",
      category: "Brincadeiras ao ar livre",
      shortDescription:
        "Pista de motocas, escorregador/tobogã, caixa de areia, casinha temática, piscina de bolinhas, cama elástica, fliperama, chafariz e piscina infantil.",
      detailedDescription:
        "Além do contato com os animais, a Mini Fazendinha Velho Jou conta com uma estrutura recreativa completa para as crianças brincarem longe das telas: pista de motocas, tobogã, casinha temática, caixa de areia, cama elástica, piscina de bolinhas e áreas refrescantes com chafariz e piscina infantil.",
      ageRecommendation: "Crianças de todas as idades",
      durationNote: "Acesso livre durante todo o período da visita (10h às 16h)",
      highlights: [
        "Pista de motocas, tobogã, cama elástica, piscina de bolinhas e fliperama",
        "Caixa de areia, casinha temática, chafariz e piscina infantil nos dias quentes",
        "Gramados e áreas abertas com visão ampla para os pais acompanharem",
      ],
      image: {
        src: "/images/outdoor-play-meadow.jpg",
        alt: "Crianças brincando ao ar livre no gramado ensolarado da fazendinha",
        width: 1200,
        height: 900,
        objectPosition: "center 40%",
        category: "Família & Infância",
      },
      isConfirmedByClient: true,
    },
    {
      id: "atividades-educativas",
      slug: "atividades-educativas",
      title: "Vivências pedagógicas e aprendizado prático da vida rural",
      category: "Atividades educativas",
      shortDescription:
        "Aprender fazendo: da alimentação dos animais à descoberta da natureza e da rotina do campo para famílias e escolas.",
      detailedDescription:
        "Cada atividade na Mini Fazendinha Velho Jou desperta a curiosidade natural das crianças. Elas compreendem de onde vem o leite na ordenha, aprendem sobre a alimentação de cada espécie e desenvolvem respeito pela vida rural de maneira prática e afetuosa.",
      ageRecommendation: "Ideal para Educação Infantil, Fundamental e famílias",
      durationNote: "Atividades contínuas e roteiros especiais para escolas",
      highlights: [
        "Contato educativo com a origem dos alimentos e rotina da fazenda",
        "Estímulo sensorial e desenvolvimento de empatia pelos animais",
        "Roteiros dedicados para passeios escolares mediante agendamento",
      ],
      image: {
        src: "/images/educational-garden.jpg",
        alt: "Canteiros verdes e natureza cultivada ao ar livre sob o sol",
        width: 1200,
        height: 900,
        objectPosition: "center 45%",
        category: "Educativo",
      },
      isConfirmedByClient: true,
    },
    {
      id: "experiencias-na-natureza",
      slug: "experiencias-na-natureza",
      title: "Ar puro de Mairiporã e hospitalidade do Velho Jou",
      category: "Experiências na natureza",
      shortDescription:
        "A apenas 30 minutos de São Paulo, um refúgio arborizado com clima de sítio da família para desacelerar no fim de semana.",
      detailedDescription:
        "Recebidos com o sorriso e o chapéu característico da equipe da Mini Fazendinha Velho Jou, os visitantes encontram sombra natural, ar puro da Serra da Cantareira / Mairiporã e uma estrutura completa com banheiros, fraldário, bebedouro, acessibilidade e restaurante caipira.",
      ageRecommendation: "Todas as idades, de bebês de colo aos avós (60+)",
      durationNote: "Das 10h às 16h aos sábados, domingos e feriados",
      highlights: [
        "Localização privilegiada em Mairiporã - SP, pertinho da capital",
        "Infraestrutura com fraldário, banheiros, bebedouro e acessibilidade",
        "Ambiente familiar com lotação controlada para o conforto de todos",
      ],
      image: {
        src: "/images/velho-jou-anfitriao.jpg",
        alt: "Anfitrião da Mini Fazendinha Velho Jou recebendo as famílias com chapéu no espaço arborizado",
        width: 800,
        height: 1000,
        objectPosition: "center 25%",
        category: "Família & Infância",
      },
      isConfirmedByClient: true,
    },
  ] satisfies ExperienceItem[],
  whyVisit: {
    eyebrow: "A essência da Mini Fazendinha Velho Jou",
    title: "Hospitalidade verdadeira de quem ama receber famílias no campo",
    description:
      "Mais de 52 mil seguidores acompanham diariamente nossa rotina em Mairiporã. Aqui seus filhos saem das telas para dar mamadeira aos cabritos, alimentar coelhos e miniporcos e viver um dia de fazendeiro de verdade.",
    pillars: [
      {
        id: "experiencia-familiar",
        title: "A 30 minutos de São Paulo (Mairiporã - SP)",
        description:
          "Fácil acesso para um bate-volta perfeito de fim de semana ou feriado, trocando o trânsito pelo ar puro do campo das 10h às 16h.",
      },
      {
        id: "aprendizado-ludico",
        title: "Atividades reais de pequeno fazendeiro",
        description:
          "As crianças não ficam apenas olhando: elas dão mamadeira aos cabritos, alimentam coelhos e miniporcos, escovam o pônei e acompanham a ordenha.",
      },
      {
        id: "natureza-autentica",
        title: "Ingressos limitados e ambiente acolhedor",
        description:
          "Trabalhamos com compra antecipada e limite de visitantes para garantir que toda família aproveite as atrações e o restaurante com tranquilidade.",
      },
      {
        id: "estrutura-apoio",
        title: "Estrutura completa para bebês, crianças e avós",
        description:
          "Banheiros, fraldário, bebedouro, acessibilidade, brinquedos recreativos variados e meia-entrada para a melhor idade (60+).",
      },
      {
        id: "atendimento-acolhedor",
        title: "Comida caipira no fogão a lenha à vontade",
        description:
          "Nosso restaurante rural serve almoço self-service no fogão a lenha preparado no capricho para recarregar as energias de toda a família.",
      },
    ],
  },
  gastronomy: {
    eyebrow: "Restaurante Caipira • Fogão a Lenha",
    title: "Comida caipira no fogão a lenha servida à vontade",
    subtitle:
      "O verdadeiro sabor da roça na Mini Fazendinha Velho Jou: buffet self-service à vontade com receitas tradicionais preparadas no fogão a lenha.",
    description:
      "Depois das atividades de fazendeiro pela manhã, o aroma do fogão a lenha convida a família para a mesa. Nosso Restaurante Caipira oferece grande variedade de pratos quentes, carnes, acompanhamentos da roça e saladas frescas, com valores diferenciados por faixa etária.",
    imageMain: {
      src: "/images/rural-gastronomy-table.jpg",
      alt: "Mesa rústica do Restaurante Caipira da Mini Fazendinha Velho Jou com pratos preparados no fogão a lenha",
      width: 1200,
      height: 900,
      objectPosition: "center 45%",
      category: "Gastronomia" as const,
    },
    imageSecondary: {
      src: "/images/country-kitchen-fresh.jpg",
      alt: "Acompanhamentos caseiros e ingredientes frescos da culinária caipira",
      width: 1000,
      height: 800,
      objectPosition: "center 50%",
      category: "Gastronomia" as const,
    },
    highlights: [
      {
        id: "fogao-a-lenha",
        name: "Carnes e pratos do fogão a lenha",
        category: "Fogão a lenha",
        description:
          "Costelinha de porco, frango caipira/assado, linguiça, carne de panela, feijão gordo, feijão tropeiro, arroz branquinho e virado à paulista.",
      },
      {
        id: "horta-e-saladas",
        name: "Acompanhamentos clássicos da roça",
        category: "Acompanhamentos da roça",
        description:
          "Polenta, mandioca, batata doce, abobrinha, couve refogada, banana à milanesa, torresmo crocante, farofa e mesa de saladas frescas.",
      },
      {
        id: "menu-infantil",
        name: "Opções que as crianças adoram",
        category: "Para as crianças",
        description:
          "Macarrão, batata frita, arroz soltinho, feijão fresco e carnes macias, com faixas de preço específicas para crianças (3 a 8 anos, 9 a 11 anos e 12+).",
        dietaryNote: "Crianças de 0 a 2 anos possuem isenção; consulte valores atualizados no WhatsApp.",
      },
      {
        id: "doces-caseiros",
        name: "Sabores de interior para toda a família",
        category: "Sobremesas caseiras",
        description:
          "Bebidas, sucos e delícias para completar o almoço em família em um ambiente coberto, arejado e integrado à natureza da fazendinha.",
      },
    ] satisfies DishHighlight[],
    policies: [
      "O almoço no Restaurante Caipira funciona no sistema self-service (coma à vontade) com valores escalonados por faixa etária (3 a 8 anos, 9 a 11 anos e a partir de 12 anos).",
      "Importante: o restaurante fica dentro da propriedade; por isso, para almoçar no local é necessária a aquisição do ingresso de entrada da fazendinha.",
      "Não é permitida a entrada de alimentos e bebidas externos (exceto bolo e docinhos em comemorações de aniversário previamente alinhadas ou alimentação específica de bebês).",
    ],
  },
  planning: {
    eyebrow: "Planeje seu passeio à Fazendinha Velho Jou",
    title: "Horários, atividades programadas e informações práticas",
    subtitle:
      "Confira como funciona nosso dia na fazendinha em Mairiporã e agende seus ingressos antecipadamente pelo WhatsApp oficial.",
    cards: [
      {
        id: "horarios",
        title: "Horário de funcionamento",
        badge: "10h às 16h",
        summary:
          "Aberto ao público aos sábados, domingos e feriados, das 10h00 às 16h00. Durante a semana, atendimento dedicado a passeios escolares.",
        details: [
          "Passeio de Pônei e Trenzinho: 10h30 às 12h00 e 14h00 às 16h00.",
          "Ordenha e mamadeira: janelas programadas (ex.: 12h00 e 15h00).",
          "Interação com animais e recreação: 10h30 às 16h00.",
        ],
      },
      {
        id: "reservas",
        title: "Reserva e compra antecipada",
        badge: "Ingressos limitados",
        summary:
          "Para garantir uma experiência confortável e sem superlotação, os ingressos são limitados e devem ser adquiridos antecipadamente.",
        details: [
          "Preencha o formulário ao lado para iniciar o atendimento no WhatsApp (11) 94280-7987.",
          "Nossa equipe confirma a disponibilidade para a data escolhida.",
          "Dúvidas também podem ser esclarecidas pelo telefone fixo (11) 4604-9144.",
        ],
      },
      {
        id: "valores",
        title: "Valores de ingresso e almoço",
        badge: "Por faixa etária",
        summary:
          "Ingressos individuais de acesso às atrações da fazendinha e almoço self-service no fogão a lenha cobrado à parte por faixa etária.",
        details: [
          "Crianças até 2 anos não pagam ingresso; cobrança normal de 3 a 59 anos.",
          "Idosos a partir de 60 anos pagam meia-entrada no ingresso.",
          "Almoço à vontade com faixas para 3–8 anos, 9–11 anos e 12+ anos (consulte tabela vigente no WhatsApp).",
        ],
      },
      {
        id: "regras",
        title: "Regras importantes da visita",
        badge: "Bem-estar & Segurança",
        summary:
          "Cuidados essenciais para proteger nossos animais e garantir um dia agradável para todas as famílias.",
        details: [
          "Não é permitida a entrada com alimentos e bebidas externos.",
          "Alimente os animais apenas nos cercados e com a orientação dos monitores.",
          "Para uso do chafariz, piscina infantil e caixa de areia, traga roupa extra e toalha para as crianças.",
        ],
      },
      {
        id: "estrutura-acessibilidade",
        title: "Estrutura e acessibilidade",
        badge: "Conforto familiar",
        summary:
          "Espaço preparado para receber desde bebês de colo até avós com toda comodidade durante o passeio.",
        details: [
          "Banheiros, fraldário completo e bebedouro à disposição.",
          "Acessibilidade nas áreas principais de convivência e restaurante.",
          "Estacionamento e apoio para chegada das famílias e ônibus escolares.",
        ],
      },
      {
        id: "localizacao",
        title: "Localização em Mairiporã - SP",
        badge: "30 min de SP",
        summary:
          "Localizada em Mairiporã - SP, em meio ao verde e a apenas cerca de 30 minutos da capital paulista.",
        details: [
          "Receba a localização exata e rota recomendada pelo WhatsApp ao reservar.",
          "Acesso rápido para famílias da Grande São Paulo, Zona Norte, Guarulhos e região.",
          "Consulte a página 'Como Chegar' para dicas completas de deslocamento.",
        ],
      },
    ],
  },
  gallery: [
    {
      src: "/images/velho-jou-anfitriao.jpg",
      alt: "Anfitrião da Mini Fazendinha Velho Jou dando boas-vindas às famílias no campo",
      width: 800,
      height: 1000,
      objectPosition: "center 25%",
      caption: "Acolhimento familiar e alegria em cada fim de semana na Mini Fazendinha Velho Jou.",
      category: "Família & Infância",
    },
    {
      src: "/images/velho-jou-miniporco.jpg",
      alt: "Anfitrião da Mini Fazendinha Velho Jou acariciando o miniporco no cercado",
      width: 800,
      height: 1000,
      objectPosition: "center 30%",
      caption: "Contato direto e carinhoso com os miniporcos e moradores da fazendinha.",
      category: "Animais",
    },
    {
      src: "/images/animal-goat-feeding.jpg",
      alt: "Cabrito dócil aproximando-se da cerca de madeira para receber alimento e mamadeira",
      width: 1200,
      height: 900,
      objectPosition: "center 35%",
      caption: "Dar mamadeira aos cabritos é uma das atividades favoritas das crianças.",
      category: "Animais",
    },
    {
      src: "/images/pony-ride-pasture.jpg",
      alt: "Pônei caramelo em área de pastagem verde cercada por árvores",
      width: 1200,
      height: 900,
      objectPosition: "center 30%",
      caption: "Passeio de pônei e escovação em horários programados manhã e tarde.",
      category: "Animais",
    },
    {
      src: "/images/animal-rabbits-close.jpg",
      alt: "Coelhos no espaço educativo da fazendinha sobre forragem natural",
      width: 1200,
      height: 900,
      objectPosition: "center 40%",
      caption: "Alimentação de coelhos: delicadeza e encantamento para os pequenos.",
      category: "Animais",
    },
    {
      src: "/images/rural-gastronomy-table.jpg",
      alt: "Mesa rústica do Restaurante Caipira servida com pratos feitos no fogão a lenha",
      width: 1200,
      height: 900,
      objectPosition: "center 45%",
      caption: "Restaurante Caipira com comida no fogão a lenha servida à vontade.",
      category: "Gastronomia",
    },
    {
      src: "/images/outdoor-play-meadow.jpg",
      alt: "Crianças brincando ao ar livre no gramado amplo cercado por natureza",
      width: 1200,
      height: 900,
      objectPosition: "center 40%",
      caption: "Recreação ao ar livre: gramados, pista de motocas, tobogã, cama elástica e piscina.",
      category: "Família & Infância",
    },
    {
      src: "/images/educational-garden.jpg",
      alt: "Vivências educativas e contato com a natureza para crianças e escolas",
      width: 1200,
      height: 900,
      objectPosition: "center 45%",
      caption: "Passeios escolares e atividades educativas em contato direto com a vida no campo.",
      category: "Educativo",
    },
    {
      src: "/images/nature-trail-trees.jpg",
      alt: "Área arborizada com sombra natural na região de Mairiporã",
      width: 1200,
      height: 900,
      objectPosition: "center 50%",
      caption: "Ar puro de Mairiporã a apenas 30 minutos de São Paulo.",
      category: "Natureza",
    },
  ] satisfies EditorialImage[],
  testimonials: {
    verifiedItems: [] as VerifiedTestimonial[],
    editorialCommitment: {
      title: "Mais de 52 mil seguidores e milhares de famílias recebidas",
      description:
        "Acompanhe os feedbacks reais, vídeos das crianças alimentando os animais e os destaques de visitantes diretamente no nosso Instagram oficial verificado @fazendinhavelhojou. Aqui não exibimos avaliações fictícias: nossa maior prova social é o carinho das famílias que nos visitam todo fim de semana.",
      highlights: [
        "Mais de 52,1 mil seguidores e 3.600+ registros reais no Instagram @fazendinhavelhojou",
        "Destaque exclusivo 'Feedbacks' e 'Visitantes' em nosso perfil oficial",
        "Reconhecimento gastronômico pelo nosso Restaurante Caipira no fogão a lenha",
      ],
    },
  },
  faqs: [
    {
      id: "precisa-reservar",
      question: "Precisa reservar ou comprar ingresso antecipadamente?",
      answer:
        "Sim! Trabalhamos com ingressos limitados por dia para garantir o conforto das famílias e o bem-estar dos animais. A compra e o agendamento devem ser feitos antecipadamente pelo nosso WhatsApp oficial (11) 94280-7987.",
      category: "Reservas e Horários",
    },
    {
      id: "quais-horarios",
      question: "Quais são os dias e horários de funcionamento?",
      answer:
        "Abrimos ao público aos sábados, domingos e feriados, das 10h00 às 16h00. As atividades com horário programado incluem Passeio de Pônei e Trenzinho (10h30 às 12h00 e 14h00 às 16h00), Ordenha (12h00 e 15h00) e interação com animais durante todo o período (10h30 às 16h00).",
      category: "Reservas e Horários",
    },
    {
      id: "quais-atracoes",
      question: "Quais atrações estão inclusas na visita?",
      answer:
        "O ingresso dá acesso às Atividades de Fazendeiro (alimentar coelhos, aves, bovinos e miniporcos, dar mamadeira aos cabritos, escovar pônei e ordenha) e às Atrações Recreativas (passeio de pônei, passeio de trenzinho, pista de motocas, tobogã, fliperama, caixa de areia, casinha temática, piscina de bolinhas, cama elástica, chafariz e piscina infantil).",
      category: "Atrações e Estrutura",
    },
    {
      id: "almoco-no-local",
      question: "É possível almoçar no local? Precisa de ingresso apenas para almoçar?",
      answer:
        "Sim, contamos com o Restaurante Caipira no fogão a lenha no sistema self-service (coma à vontade), cobrado à parte por faixa etária (3 a 8 anos, 9 a 11 anos e 12+ anos). Como o restaurante fica dentro da fazendinha, mesmo quem vem apenas para almoçar precisa adquirir o ingresso de entrada.",
      category: "Restaurante e Alimentação",
    },
    {
      id: "pode-levar-alimentos",
      question: "Pode levar alimentos ou bebidas?",
      answer:
        "Não é permitida a entrada de alimentos e bebidas externos na fazendinha, pois contamos com restaurante completo no local e seguimos rigoroso controle na alimentação dos animais. A única exceção são bolo e docinhos em comemorações de aniversário previamente combinadas pelo WhatsApp.",
      category: "Restaurante e Alimentação",
    },
    {
      id: "atividades-para-escolas",
      question: "Existem passeios e atividades para escolas?",
      answer:
        "Sim! A Mini Fazendinha Velho Jou recebe passeios escolares com uma experiência educativa e inesquecível de contato com os animais e vida no campo. Solicite nosso portfólio escolar completo diretamente pelo WhatsApp (11) 94280-7987.",
      category: "Escolas e Aniversários",
    },
    {
      id: "como-comemorar-aniversarios",
      question: "Como funciona para comemorar aniversário na Fazendinha Velho Jou?",
      answer:
        "Dispomos de espaços decorados para você cantar parabéns com sua família e convidados em dias normais de funcionamento! Não fechamos a fazendinha para eventos exclusivos e não trabalhamos com pacotes fechados: os convidados pagam o valor normal de ingresso e almoço, e o aniversariante pode trazer apenas o bolo e os docinhos (almoço e bebidas são consumidos no restaurante local).",
      category: "Escolas e Aniversários",
    },
    {
      id: "como-chegar",
      question: "Onde fica a fazendinha e como chegar?",
      answer:
        "Estamos localizados em Mairiporã - SP, a cerca de 30 minutos de São Paulo. Ao realizar seu agendamento pelo WhatsApp (11) 94280-7987, nossa equipe envia a localização exata e as melhores instruções de rota.",
      category: "Acesso e Pagamento",
    },
    {
      id: "formas-de-pagamento",
      question: "Como funciona a meia-entrada e quais as formas de pagamento?",
      answer:
        "Crianças de 0 a 2 anos são isentas, visitantes de 3 a 59 anos pagam ingresso integral e idosos a partir de 60 anos pagam meia-entrada. A reserva antecipada é feita via WhatsApp (11) 94280-7987, onde nossa equipe informa os dados de pagamento (PIX/cartões) e confirma seus ingressos.",
      category: "Acesso e Pagamento",
    },
  ] satisfies FAQItem[],
  schoolVisits: {
    title: "Passeio Escolar na Mini Fazendinha Velho Jou",
    subtitle:
      "Convidamos sua escola para conhecer nosso espaço em Mairiporã e viver uma experiência pedagógica real de contato com os animais do campo.",
    ageGroups: [
      {
        title: "Educação Infantil",
        focus:
          "Descoberta sensorial, dar mamadeira aos cabritos, alimentar coelhos e aves, passeio de trenzinho e recreação segura.",
      },
      {
        title: "Ensino Fundamental I",
        focus:
          "Vivência prática de ordenha, rotina de cuidado com bovinos, pôneis e miniporcos, respeito ambiental e convivência ao ar livre.",
      },
      {
        title: "Grupos Escolares & Excursões Pedagógicas",
        focus:
          "Roteiro estruturado com monitoria, infraestrutura completa (banheiros, bebedouros, área de refeição) e fácil acesso a 30 min de SP.",
      },
    ],
    differentials: [
      "Envio de portfólio escolar oficial pelo WhatsApp (11) 94280-7987",
      "Atividades autênticas de fazendeiro: mamadeira para cabritos, ordenha e alimentação dos animais",
      "Estrutura recreativa ampla com pista de motocas, tobogã, cama elástica e áreas cobertas",
      "Localização próxima a São Paulo (Mairiporã - SP), reduzindo o tempo de estrada dos alunos",
    ],
  },
  birthdays: {
    title: "Aniversários na Mini Fazendinha Velho Jou",
    subtitle:
      "Comemore em nossos espaços decorados durante os dias de funcionamento, com contato direto com os animais e almoço caipira no fogão a lenha.",
    steps: [
      {
        step: "01",
        title: "Agende antecipadamente pelo WhatsApp",
        description:
          "Como os ingressos são limitados, entre em contato pelo (11) 94280-7987 informando a data desejada e a quantidade de adultos e crianças.",
      },
      {
        step: "02",
        title: "Traga seu bolo e docinhos de parabéns",
        description:
          "Para aniversários, permitimos trazer exclusivamente o bolo e os docinhos para cantar parabéns nos nossos espaços decorados.",
      },
      {
        step: "03",
        title: "Almoço e bebidas no nosso Restaurante Caipira",
        description:
          "Não trabalhamos com pacotes fechados: o consumo de almoço no fogão a lenha e bebidas é feito no nosso restaurante com os valores fixos por faixa etária.",
      },
    ],
  },
  defaultExperienceForPage: {
    "/": "Visita em família (Day Use)" as ExperienceType,
    "/atracoes": "Visita em família (Day Use)" as ExperienceType,
    "/ingressos": "Visita em família (Day Use)" as ExperienceType,
    "/restaurante": "Almoço no restaurante rural" as ExperienceType,
    "/passeios-escolares": "Passeio escolar / grupo pedagógico" as ExperienceType,
    "/aniversarios": "Comemoração de aniversário" as ExperienceType,
    "/galeria": "Visita em família (Day Use)" as ExperienceType,
    "/como-chegar": "Outras dúvidas sobre a visita" as ExperienceType,
    "/perguntas-frequentes": "Outras dúvidas sobre a visita" as ExperienceType,
  },
};
