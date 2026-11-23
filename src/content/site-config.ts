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
    categoryLabel: "Fazenda pedagógica",
    tagline: "Um dia no campo. Memórias para a vida toda.",
    subtitle:
      "A Fazendinha Velho Jou proporciona contato direto com os animais, gastronomia caipira no fogão a lenha e momentos especiais para toda a família em Mairiporã - SP (a 30 minutos de São Paulo).",
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
    googleReviews: {
      rating: "4,6",
      countLabel: "986 avaliações no Google",
      category: "Fazenda pedagógica",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Fazendinha+Velho+Jou+R.+Padre+Celestino+Andre+Trevisan+325+Mairipora+SP",
      wazeUrl:
        "https://waze.com/ul?q=R.%20Padre%20Celestino%20Andr%C3%A9%20Trevisan%2C%20325%20-%20Barreiro%2C%20Mairipor%C3%A3%20-%20SP%2C%2007611-425",
    },
  },
  verificationStatus: {
    pricingConfirmed: true,
    locationConfirmed: true,
    scheduleConfirmed: true,
    testimonialsConfirmed: true,
  },
  contact: {
    whatsappNumber: "5511942807987",
    whatsappDisplay: "(11) 94280-7987",
    phoneDisplay: "(11) 4604-9144",
    email: "fazendinhavelhojou@gmail.com",
    instagramHandle: "@fazendinhavelhojou",
    streetAddress: "R. Padre Celestino André Trevisan, 325",
    neighborhood: "Barreiro",
    city: "Mairiporã",
    state: "SP",
    postalCode: "07611-425",
    fullAddress:
      "R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP, 07611-425",
    cityRegionLabel: "R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP",
    openingDaysSummary: "Sábados, Domingos e Feriados, das 10h às 16h",
    bookingRequirementSummary:
      "Ingressos limitados — agendamento antecipado obrigatório pelo WhatsApp (11) 94280-7987",
  },
  pricing: {
    tickets: [
      {
        label: "Crianças de 0 a 2 anos",
        price: "Grátis (Isento)",
        note: "Mediante apresentação de documento na recepção",
      },
      {
        label: "De 3 a 59 anos (Ingresso Individual)",
        price: "R$ 30,00",
        note: "Inclui atividades de fazendeiro e atrações recreativas",
      },
      {
        label: "A partir de 60 anos (Melhor Idade)",
        price: "R$ 15,00 (Meia-entrada)",
        note: "Mediante apresentação de documento oficial com foto",
      },
    ],
    lunchSelfService: [
      {
        label: "Adultos e jovens (a partir de 12 anos)",
        price: "R$ 59,90 por pessoa",
        note: "Self-service no fogão a lenha — coma à vontade",
      },
      {
        label: "Crianças de 9 a 11 anos",
        price: "R$ 25,00",
        note: "Self-service no fogão a lenha — coma à vontade",
      },
      {
        label: "Crianças de 3 a 8 anos",
        price: "R$ 12,00",
        note: "Self-service no fogão a lenha — coma à vontade",
      },
      {
        label: "Crianças de 0 a 2 anos",
        price: "Isento",
        note: "Acompanhadas dos responsáveis no restaurante",
      },
    ],
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
    badge: "Fazenda Pedagógica • Mairiporã - SP (4,6 ★ no Google)",
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
        label: "Endereço em Mairiporã - SP",
        value: "R. Padre Celestino André Trevisan, 325 - Barreiro (30 min de SP)",
      },
      {
        label: "Dias de funcionamento",
        value: "Sábados, Domingos e Feriados das 10h às 16h (Escolas na semana)",
      },
      {
        label: "Agendamento antecipado",
        value: "Ingressos limitados • Reserva via WhatsApp (11) 94280-7987",
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
      durationNote: "Interação das 10h30 às 16h00 e ordenha às 12h00 e 15h00",
      highlights: [
        "Dar mamadeira aos cabritos e alimentar coelhos, aves, bovinos e miniporcos",
        "Vivência de ordenha (12h e 15h) e escovação de pônei com acompanhamento",
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
        "Os clássicos mais amados pelas crianças: voltas de pônei e passeio no famoso trenzinho colorido da Fazendinha Velho Jou.",
      detailedDescription:
        "Para garantir que todas as famílias aproveitem com tranquilidade e sem filas cansativas, os passeios de pônei e de trenzinho acontecem em janelas programadas durante a manhã (10h30 às 12h00) e a tarde (14h00 às 16h00), já inclusos no ingresso da fazendinha.",
      ageRecommendation: "Crianças e famílias (incluso no ingresso)",
      durationNote: "Das 10h30 às 12h00 e das 14h00 às 16h00",
      highlights: [
        "Passeio de pônei acompanhado com cuidado e segurança",
        "Passeio no tradicional trenzinho colorido da Fazendinha Velho Jou",
        "Grade de horários organizada manhã e tarde para aproveitar tudo",
      ],
      image: {
        src: "/images/trenzinho-velho-jou.jpg",
        alt: "Passeio no tradicional trenzinho colorido da Mini Fazendinha Velho Jou",
        width: 1200,
        height: 900,
        objectPosition: "center 35%",
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
      title: "Fazenda Pedagógica: aprendizado prático da vida rural",
      category: "Atividades educativas",
      shortDescription:
        "Reconhecida como Fazenda Pedagógica em Mairiporã: da alimentação dos animais à descoberta da natureza para famílias e escolas.",
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
        "No bairro Barreiro em Mairiporã - SP, a apenas 30 minutos de São Paulo, um refúgio arborizado com clima de sítio da família.",
      detailedDescription:
        "Recebidos com o sorriso e o chapéu característico da equipe da Mini Fazendinha Velho Jou, os visitantes encontram sombra natural, ar puro de Mairiporã e uma estrutura completa com banheiros, fraldário, bebedouro, acessibilidade e restaurante caipira.",
      ageRecommendation: "Todas as idades, de bebês de colo aos avós (60+)",
      durationNote: "Das 10h às 16h aos sábados, domingos e feriados",
      highlights: [
        "Localizada na R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP",
        "Infraestrutura com fraldário, banheiros, bebedouro e acessibilidade",
        "Ambiente familiar avaliado com nota 4,6 (986 avaliações no Google)",
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
    title: "Avaliada com 4,6 ★ por quase mil famílias no Google",
    description:
      "Com 986 avaliações no Google e mais de 52,1 mil seguidores no Instagram, a Mini Fazendinha Velho Jou é referência em passeio infantil e fazenda pedagógica em Mairiporã - SP.",
    pillars: [
      {
        id: "experiencia-familiar",
        title: "Em Mairiporã, a 30 minutos de São Paulo",
        description:
          "Localizada na R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP (CEP 07611-425), com acesso rápido para um dia inteiro no campo.",
      },
      {
        id: "aprendizado-ludico",
        title: "Atividades reais de pequeno fazendeiro",
        description:
          "As crianças dão mamadeira aos cabritos, alimentam coelhos, aves, bovinos e miniporcos, escovam o pônei e participam da ordenha.",
      },
      {
        id: "natureza-autentica",
        title: "Ingressos limitados e agendamento prévio",
        description:
          "Trabalhamos com compra antecipada pelo WhatsApp (11) 94280-7987 para garantir conforto nas atrações e no restaurante.",
      },
      {
        id: "estrutura-apoio",
        title: "Preços justos e acessíveis para a família",
        description:
          "Ingresso a R$ 30,00 (3 a 59 anos), meia-entrada R$ 15,00 (60+) e isenção para bebês de 0 a 2 anos, com todas as atrações inclusas.",
      },
      {
        id: "atendimento-acolhedor",
        title: "Almoço caipira no fogão a lenha à vontade",
        description:
          "Self-service coma à vontade por R$ 59,90 (12+ anos), R$ 25,00 (9 a 11 anos) e R$ 12,00 (3 a 8 anos), elogiado em centenas de avaliações.",
      },
    ],
  },
  gastronomy: {
    eyebrow: "Restaurante Caipira • Fogão a Lenha",
    title: "Comida caipira no fogão a lenha: self-service coma à vontade",
    subtitle:
      "Menu de almoço preparado no fogão a lenha com grande variedade de misturas, acompanhamentos da roça e saladas frescas.",
    description:
      "Um dos pontos mais elogiados nas 986 avaliações do Google! Nosso Restaurante Caipira funciona no sistema self-service (coma à vontade) com valores justos por faixa etária: R$ 59,90 por pessoa (a partir de 12 anos), R$ 25,00 (crianças de 9 a 11 anos), R$ 12,00 (crianças de 3 a 8 anos) e isenção para 0 a 2 anos.",
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
        name: "Valores especiais para crianças",
        category: "Para as crianças",
        description:
          "Macarrão, batata frita, arroz soltinho, feijão fresco e carnes macias. De 3 a 8 anos: R$ 12,00 | De 9 a 11 anos: R$ 25,00 | 12+ anos: R$ 59,90.",
        dietaryNote: "Crianças de 0 a 2 anos são isentas no almoço.",
      },
      {
        id: "doces-caseiros",
        name: "Ambiente familiar e acolhedor",
        category: "Sobremesas caseiras",
        description:
          "Salão coberto e arejado integrado à natureza da fazendinha, com bebidas e opções para encerrar o almoço em família.",
      },
    ] satisfies DishHighlight[],
    policies: [
      "Valores do Almoço Self-Service (coma à vontade): R$ 59,90 por pessoa (12+ anos), R$ 25,00 (de 9 a 11 anos), R$ 12,00 (de 3 a 8 anos) e grátis para 0 a 2 anos.",
      "Importante: o restaurante fica dentro da fazendinha; mesmo quem vem apenas para almoçar precisa adquirir o ingresso de entrada.",
      "Não é permitida a entrada de alimentos e bebidas externos (exceto bolo e docinhos em comemorações de aniversário).",
    ],
  },
  planning: {
    eyebrow: "Planeje seu passeio à Fazendinha Velho Jou",
    title: "Valores, horários das atividades e endereço em Mairiporã",
    subtitle:
      "Transparência total para sua família: confira os valores vigentes, a programação do dia e agende pelo WhatsApp (11) 94280-7987.",
    cards: [
      {
        id: "horarios",
        title: "Horário de funcionamento",
        badge: "10h às 16h",
        summary:
          "Aberto ao público aos sábados, domingos e feriados, das 10h00 às 16h00. É necessário realizar agendamento antecipado.",
        details: [
          "Passeio de Pônei e Trenzinho: 10h30 às 12h00 e 14h00 às 16h00.",
          "Ordenha programada: sessões às 12h00 e às 15h00.",
          "Interação com animais e brinquedos: 10h30 às 16h00.",
        ],
      },
      {
        id: "reservas",
        title: "Agendamento antecipado",
        badge: "Ingressos limitados",
        summary:
          "Os ingressos são limitados por dia e devem ser reservados antecipadamente pelo nosso canal oficial de WhatsApp.",
        details: [
          "WhatsApp de reservas: (11) 94280-7987.",
          "Telefone fixo para dúvidas: (11) 4604-9144.",
          "Use o formulário ao lado para enviar sua mensagem já preenchida.",
        ],
      },
      {
        id: "valores",
        title: "Valores de ingresso e almoço",
        badge: "Tabela Oficial",
        summary:
          "Preços transparentes por faixa etária para você planejar o passeio da família sem surpresas:",
        details: [
          "Ingresso (3 a 59 anos): R$ 30,00 por pessoa | 60+ anos: R$ 15,00 (meia) | 0 a 2 anos: Grátis.",
          "Almoço Self-Service à vontade: R$ 59,90 (12+ anos) | R$ 25,00 (9 a 11 anos) | R$ 12,00 (3 a 8 anos).",
          "O ingresso inclui todas as atividades de fazendeiro e recreativas.",
        ],
      },
      {
        id: "regras",
        title: "Regras importantes",
        badge: "Bem-estar & Segurança",
        summary:
          "Orientações essenciais para o cuidado com os animais e organização do restaurante:",
        details: [
          "Não é permitida a entrada com alimentos e bebidas externos.",
          "Para aniversários, é permitido trazer apenas o bolo e os docinhos.",
          "Mesmo quem vai apenas ao restaurante precisa adquirir o ingresso da fazendinha.",
        ],
      },
      {
        id: "estrutura-acessibilidade",
        title: "Estrutura e acessibilidade",
        badge: "Conforto familiar",
        summary:
          "Infraestrutura completa para receber bebês, crianças, pais e avós durante todo o dia:",
        details: [
          "Banheiros, fraldário completo e bebedouro.",
          "Acessibilidade nas áreas principais e restaurante coberto.",
          "Chafariz, piscina infantil e caixa de areia (traga roupa extra para as crianças).",
        ],
      },
      {
        id: "localizacao",
        title: "Endereço em Mairiporã - SP",
        badge: "CEP 07611-425",
        summary:
          "R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP, 07611-425 (a cerca de 30 minutos de São Paulo).",
        details: [
          "Próximo à Estrada Roseira no bairro Barreiro, Mairiporã.",
          "Rota fácil pelo Google Maps e Waze.",
          "Acesse a página 'Como Chegar' para abrir o mapa e traçar sua rota.",
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
      src: "/images/trenzinho-velho-jou.jpg",
      alt: "Passeio de trenzinho colorido com as famílias na Mini Fazendinha Velho Jou",
      width: 1200,
      height: 900,
      objectPosition: "center 35%",
      caption: "Passeio no tradicional trenzinho colorido da Fazendinha Velho Jou.",
      category: "Família & Infância",
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
    verifiedItems: [
      {
        id: "google-review-1",
        authorName: "Avaliação Verificada de Visitante",
        visitContext: "Almoço & Visita em Família",
        visitDate: "Google Maps (5/5 ★)",
        quote:
          "O almoço é servido no forno a lenha, com diferentes opções de mistura e saladas.",
        sourceLabel: "Comentário do Google",
      },
      {
        id: "google-review-2",
        authorName: "Avaliação Verificada de Visitante",
        visitContext: "Passeio com Crianças",
        visitDate: "Google Maps (5/5 ★)",
        quote:
          "Lugar incrível, ambiente familiar, comida top, preço justo e as crianças se divertem.",
        sourceLabel: "Comentário do Google",
      },
      {
        id: "google-review-3",
        authorName: "Avaliação Verificada de Visitante",
        visitContext: "Passeio de Fim de Semana",
        visitDate: "Google Maps (5/5 ★)",
        quote: "Show de bola, ótimo passeio com a Família!",
        sourceLabel: "Comentário do Google",
      },
    ] satisfies VerifiedTestimonial[],
    editorialCommitment: {
      title: "Nota 4,6 ★ com 986 avaliações no Google e 52,1 mil seguidores",
      description:
        "Confira os comentários autênticos publicados por visitantes no Perfil da Empresa no Google e acompanhe diariamente nossos vídeos e destaques no Instagram verificado @fazendinhavelhojou.",
      highlights: [
        "Nota 4,6 de 5 estrelas baseada em 986 avaliações reais no Google",
        "Mais de 52,1 mil seguidores e 3.618 publicações no Instagram @fazendinhavelhojou",
        "Elogiada pelas famílias pelo ambiente acolhedor, preço justo e almoço no fogão a lenha",
      ],
    },
  },
  faqs: [
    {
      id: "precisa-reservar",
      question: "Precisa reservar ou comprar ingresso antecipadamente?",
      answer:
        "Sim! É necessário realizar agendamento antecipado. Trabalhamos com ingressos limitados por dia para garantir o conforto das famílias e o bem-estar dos animais. Agende diretamente pelo nosso WhatsApp oficial (11) 94280-7987.",
      category: "Reservas e Horários",
    },
    {
      id: "quais-horarios",
      question: "Quais são os dias e horários de funcionamento?",
      answer:
        "Estamos abertos ao público aos sábados, domingos e feriados, das 10h00 às 16h00. As atividades com horário programado incluem Passeio de Pônei e Trenzinho (10h30 às 12h00 e 14h00 às 16h00), Ordenha (12h00 e 15h00) e interação com animais das 10h30 às 16h00.",
      category: "Reservas e Horários",
    },
    {
      id: "quais-atracoes",
      question: "Quais atrações estão inclusas no ingresso de R$ 30,00?",
      answer:
        "O ingresso dá acesso às Atividades de Fazendeiro (alimentar coelhos, aves, bovinos e miniporcos, dar mamadeira aos cabritos, escovar pônei e ordenha) e às Atrações Recreativas (passeio de pônei, passeio de trenzinho, pista de motocas, tobogã, fliperama, caixa de areia, casinha temática, piscina de bolinhas, cama elástica, chafariz e piscina infantil).",
      category: "Atrações e Estrutura",
    },
    {
      id: "almoco-no-local",
      question: "Quanto custa o almoço no local? Precisa de ingresso apenas para almoçar?",
      answer:
        "Nosso Restaurante Caipira no fogão a lenha funciona no sistema self-service (coma à vontade) com os valores: R$ 59,90 por pessoa (a partir de 12 anos), R$ 25,00 (crianças de 9 a 11 anos), R$ 12,00 (crianças de 3 a 8 anos) e grátis para 0 a 2 anos. Como o restaurante fica dentro da propriedade, mesmo quem vai apenas almoçar precisa adquirir o ingresso da fazendinha.",
      category: "Restaurante e Alimentação",
    },
    {
      id: "pode-levar-alimentos",
      question: "Pode levar alimentos ou bebidas?",
      answer:
        "Não é permitida a entrada de alimentos e bebidas externos na fazendinha. A única exceção são bolo e docinhos em comemorações de aniversário nos nossos espaços decorados.",
      category: "Restaurante e Alimentação",
    },
    {
      id: "atividades-para-escolas",
      question: "Existem passeios e atividades para escolas?",
      answer:
        "Sim! Como Fazenda Pedagógica, a Mini Fazendinha Velho Jou recebe escolas com roteiro educativo de contato direto com os animais e vivência rural. Solicite nosso portfólio escolar pelo WhatsApp (11) 94280-7987.",
      category: "Escolas e Aniversários",
    },
    {
      id: "como-comemorar-aniversarios",
      question: "Como comemorar aniversário na Fazendinha Velho Jou?",
      answer:
        "Temos espaços decorados para cantar parabéns em dias normais de funcionamento! Não fechamos a fazendinha para eventos exclusivos nem vendemos pacotes fechados: os convidados pagam o valor normal de ingresso e almoço, sendo permitido trazer apenas o bolo e os docinhos (almoço e bebidas são consumidos no restaurante local).",
      category: "Escolas e Aniversários",
    },
    {
      id: "como-chegar",
      question: "Qual é o endereço exato da Fazendinha Velho Jou?",
      answer:
        "Nosso endereço é R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP, CEP 07611-425 (a cerca de 30 minutos de São Paulo). Você pode abrir a rota direta no Google Maps ou Waze em nossa página 'Como Chegar'.",
      category: "Acesso e Pagamento",
    },
    {
      id: "formas-de-pagamento",
      question: "Qual o valor do ingresso e quem tem direito a meia-entrada ou gratuidade?",
      answer:
        "Crianças de 0 a 2 anos não pagam ingresso. Visitantes de 3 a 59 anos pagam R$ 30,00 por pessoa e idosos a partir de 60 anos pagam meia-entrada (R$ 15,00). A reserva antecipada é realizada pelo WhatsApp (11) 94280-7987.",
      category: "Acesso e Pagamento",
    },
  ] satisfies FAQItem[],
  schoolVisits: {
    title: "Passeio Escolar na Fazenda Pedagógica Velho Jou",
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
      "Localização em Mairiporã - SP (R. Padre Celestino André Trevisan, 325 - Barreiro), a 30 min de SP",
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
          "Não trabalhamos com pacotes fechados: o consumo de almoço no fogão a lenha (R$ 59,90 adultos / R$ 25,00 9–11 anos / R$ 12,00 3–8 anos) e bebidas é feito no nosso restaurante.",
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
