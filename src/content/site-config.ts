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
    name: "Fazendinha & Experiências Rurais",
    shortName: "Fazendinha",
    tagline: "Um dia no campo. Memórias para a vida toda.",
    subtitle: "Natureza, descobertas e momentos especiais para toda a família.",
    siteUrl: "https://fazendinha-premium.com.br",
  },
  verificationStatus: {
    /**
     * Quando false, a interface deixa explícito que horários, valores,
     * endereço exato e disponibilidade são confirmados diretamente no canal oficial,
     * jamais exibindo preços ou dados fictícios como fatos.
     */
    pricingConfirmed: false,
    locationConfirmed: false,
    scheduleConfirmed: false,
    testimonialsConfirmed: false,
  },
  contact: {
    whatsappNumber: "5511942807987",
    whatsappDisplay: "(11) 94280-7987",
    email: "atendimento@fazendinha.com.br",
    instagramHandle: "@fazendinha.experiencias",
    cityRegionLabel: "Interior & Cinturão Verde (Localização exata sob confirmação)",
    openingDaysSummary: "Fins de semana, feriados e datas programadas (mediante consulta)",
    bookingRequirementSummary: "Atendimento com capacidade controlada — consulte necessidade de agendamento prévio",
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
    badge: "Turismo Rural Familiar & Vivências no Campo",
    title: "Um dia no campo. Memórias para a vida toda.",
    subtitle: "Natureza, descobertas e momentos especiais para toda a família.",
    primaryCta: "Planejar minha visita",
    secondaryCta: "Conhecer as atrações",
    desktopImage: {
      src: "/images/hero-family-farm.jpg",
      alt: "Família caminhando ao ar livre no campo verde da fazendinha com árvores e animais ao fundo em luz dourada da manhã",
      width: 1600,
      height: 1067,
      objectPosition: "center 38%",
      category: "Família & Infância" as const,
    },
    mobileSecondaryImage: {
      src: "/images/animal-goat-feeding.jpg",
      alt: "Criança interagindo com cabrito dócil no cercado de madeira da fazendinha",
      width: 1200,
      height: 900,
      objectPosition: "center 35%",
      category: "Animais" as const,
    },
    complementaryInfo: [
      {
        label: "Região atendida",
        value: "Clima de campo com acesso asfaltado (endereço oficial enviado na confirmação)",
      },
      {
        label: "Funcionamento",
        value: "Sábados, domingos, feriados e agenda especial para escolas",
      },
      {
        label: "Agendamento",
        value: "Recomendamos consulta antecipada para garantir conforto e acolhimento",
      },
    ],
  },
  experiences: [
    {
      id: "contato-com-animais",
      slug: "contato-com-animais",
      title: "Contato próximo e respeitoso com animais da fazenda",
      category: "Contato com animais",
      shortDescription:
        "Vivências guiadas para alimentar coelhos, cabritos, aves e pôneis, aprendendo sobre o cuidado diário e o bem-estar animal.",
      detailedDescription:
        "As crianças e famílias entram em contato direto com os moradores da fazendinha em espaços seguros, limpos e acompanhados por monitores. O foco é o respeito ao ritmo dos animais, permitindo acariciar, alimentar nos horários orientados e compreender os hábitos de cada espécie.",
      ageRecommendation: "Todas as idades (crianças pequenas acompanhadas dos responsáveis)",
      durationNote: "Atividade contínua com janelas guiadas ao longo do dia",
      highlights: [
        "Alimentação assistida de pequenos animais nos viveiros e cercados",
        "Observação de cabritos, ovelhas, coelhos, aves e minipôneis",
        "Mediação educativa sobre respeito e cuidado com a fauna rural",
      ],
      image: {
        src: "/images/animal-goat-feeding.jpg",
        alt: "Cabrito jovem aproximando-se da cerca de madeira para receber alimento na fazendinha",
        width: 1200,
        height: 900,
        objectPosition: "center 32%",
        category: "Animais",
      },
      isConfirmedByClient: true,
    },
    {
      id: "atividades-educativas",
      slug: "atividades-educativas",
      title: "Horta sensorial, ciclo dos alimentos e oficinas da terra",
      category: "Atividades educativas",
      shortDescription:
        "Da semente ao prato: atividades mão na massa na horta orgânica, reconhecimento de ervas aromáticas e curiosidades da vida rural.",
      detailedDescription:
        "Pensada para despertar a curiosidade natural da infância, esta vivência aproxima as crianças da origem real dos alimentos. Elas sentem o cheiro das ervas frescas, conhecem o preparo do solo, entendem a compostagem e descobrem como legumes e verduras chegam até a cozinha da fazenda.",
      ageRecommendation: "Ideal a partir de 3 anos e grupos escolares",
      durationNote: "Roteiros de 30 a 45 minutos com acompanhamento",
      highlights: [
        "Visita sensorial à horta com toque e olfato de ervas e hortaliças",
        "Explicação lúdica sobre plantio, colheita e sustentabilidade no campo",
        "Integração com roteiros pedagógicos da Educação Infantil e Fundamental",
      ],
      image: {
        src: "/images/educational-garden.jpg",
        alt: "Canteiros verdes de horta rural cultivada ao ar livre com vegetais frescos sob a luz do sol",
        width: 1200,
        height: 900,
        objectPosition: "center 45%",
        category: "Educativo",
      },
      isConfirmedByClient: true,
    },
    {
      id: "passeios-no-campo",
      slug: "passeios-no-campo",
      title: "Passeios pelo sítio e vivências tradicionais da roça",
      category: "Passeios",
      shortDescription:
        "Percursos tranquilos pelos caminhos arborizados da propriedade, contato com pôneis e contemplação da paisagem rural.",
      detailedDescription:
        "Caminhar sem pressa entre árvores frutíferas, gramados amplos e trilhas leves faz parte do encanto de um dia no campo. Os passeios internos são organizados em horários programados para que todas as famílias aproveitem com calma e segurança.",
      ageRecommendation: "Livre para toda a família",
      durationNote: "Horários programados informados na recepção",
      highlights: [
        "Caminhos internos seguros, planos e cercados por vegetação nativa",
        "Vivência com pôneis e passeios recreativos conforme programação do dia",
        "Pontos de descanso sombreados para pais e avós acompanharem com conforto",
      ],
      image: {
        src: "/images/pony-ride-pasture.jpg",
        alt: "Pônei de pelagem caramelo em pasto verde cercado por árvores no ambiente tranquilo da fazenda",
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
      title: "Infância livre de telas: gramados, areia e brincadeiras de quintal",
      category: "Brincadeiras ao ar livre",
      shortDescription:
        "Espaços abertos para correr na grama, brincar na sombra das árvores e redescobrir a alegria das brincadeiras clássicas.",
      detailedDescription:
        "Longe da correria urbana e das telas, as crianças encontram espaço de sobra para gastar energia com liberdade supervisionada. Gramados amplos, estruturas lúdicas de madeira e recantos naturais estimulam a imaginação, o movimento e a socialização.",
      ageRecommendation: "Crianças de 1 a 12 anos",
      durationNote: "Acesso livre durante todo o período de funcionamento",
      highlights: [
        "Áreas gramadas amplas com visibilidade clara para os responsáveis",
        "Brinquedos rústicos e espaços de exploração motora ao ar livre",
        "Ambiente acolhedor para piqueniques visuais e descanso sob as árvores",
      ],
      image: {
        src: "/images/outdoor-play-meadow.jpg",
        alt: "Crianças correndo e brincando juntas em gramado verde iluminado pelo sol da tarde",
        width: 1200,
        height: 900,
        objectPosition: "center 40%",
        category: "Família & Infância",
      },
      isConfirmedByClient: true,
    },
    {
      id: "experiencias-na-natureza",
      slug: "experiencias-na-natureza",
      title: "Pausa, ar puro e conexão com o ritmo da natureza",
      category: "Experiências na natureza",
      shortDescription:
        "Bosques arborizados, canto dos pássaros e recantos de contemplação para desacelerar em família.",
      detailedDescription:
        "Mais do que um parque de atividades, a fazendinha é um refúgio de natureza preservada. Os visitantes desfrutam do som das árvores, observam aves silvestres e encontram bancos e varandas pensados para conversas tranquilas após o almoço.",
      ageRecommendation: "Todas as idades, incluindo idosos e bebês",
      durationNote: "Disponível durante toda a permanência no local",
      highlights: [
        "Sombra natural abundante e microclima agradável de campo",
        "Observação de pássaros, borboletas e flora típica da região",
        "Espaços de convivência que acolhem desde bebês de colo até avós",
      ],
      image: {
        src: "/images/nature-trail-trees.jpg",
        alt: "Caminho arborizado cercado por árvores altas e vegetação verde com luz natural filtrada pelas folhas",
        width: 1200,
        height: 900,
        objectPosition: "center 50%",
        category: "Natureza",
      },
      isConfirmedByClient: true,
    },
  ] satisfies ExperienceItem[],
  whyVisit: {
    eyebrow: "Por que escolher nossa fazendinha",
    title: "Hospitalidade de interior com organização pensada para famílias",
    description:
      "Cada detalhe do espaço foi planejado para que pais, filhos, avós e educadores vivam um dia leve, seguro e autêntico — sem tumulto e com atendimento humano de verdade.",
    pillars: [
      {
        id: "experiencia-familiar",
        title: "Experiência verdadeiramente familiar",
        description:
          "Ritmo acolhedor que respeita o tempo das crianças e oferece conforto real para pais e avós acompanharem cada descoberta.",
      },
      {
        id: "aprendizado-ludico",
        title: "Aprendizado lúdico e vivo",
        description:
          "O contato com animais e com a horta desperta empatia, curiosidade científica e respeito pelo meio ambiente de forma espontânea.",
      },
      {
        id: "natureza-autentica",
        title: "Contato genuíno com a natureza",
        description:
          "Gramados reais, sombra de árvores, ar puro e paisagem rural preservada, longe de cenários artificiais de plástico.",
      },
      {
        id: "estrutura-apoio",
        title: "Estrutura de apoio cuidada",
        description:
          "Banheiros limpos, espaço de apoio para famílias com crianças pequenas, áreas sombreadas de descanso e circulação confortável.",
      },
      {
        id: "atendimento-acolhedor",
        title: "Atendimento próximo e transparente",
        description:
          "Equipe preparada para orientar sua visita desde a dúvida inicial no WhatsApp até o acolhimento na porteira e nos viveiros.",
      },
    ],
  },
  gastronomy: {
    eyebrow: "Sabor de fazenda",
    title: "Cozinha afetiva de campo para reunir toda a mesa",
    subtitle:
      "Almoço preparado com ingredientes frescos, tempero caseiro e aquele aroma inconfundível de comida feita com calma.",
    description:
      "Sabemos que um passeio completo em família pede uma refeição saborosa e descomplicada. Nosso restaurante rural valoriza receitas tradicionais da culinária caipira, opções leves que agradam o paladar infantil e sobremesas de tacho.",
    imageMain: {
      src: "/images/rural-gastronomy-table.jpg",
      alt: "Mesa rústica de madeira servida com pratos tradicionais da culinária de fazenda, saladas frescas e acompanhamentos caseiros",
      width: 1200,
      height: 900,
      objectPosition: "center 45%",
      category: "Gastronomia" as const,
    },
    imageSecondary: {
      src: "/images/country-kitchen-fresh.jpg",
      alt: "Ingredientes frescos da horta e pães artesanais dispostos em bancada rústica de cozinha rural",
      width: 1000,
      height: 800,
      objectPosition: "center 50%",
      category: "Gastronomia" as const,
    },
    highlights: [
      {
        id: "fogao-a-lenha",
        name: "Clássicos da cozinha caipira",
        category: "Fogão a lenha",
        description:
          "Pratos quentes preparados lentamente, carnes selecionadas, feijão fresco, arroz soltinho, polenta cremosa e farofas artesanais.",
      },
      {
        id: "horta-e-saladas",
        name: "Colheita fresca e acompanhamentos",
        category: "Acompanhamentos da roça",
        description:
          "Variedade de folhas, legumes da estação, mandioca macia, abóbora cabotiá e temperos naturais colhidos no dia.",
      },
      {
        id: "menu-infantil",
        name: "Opções amigáveis para as crianças",
        category: "Para as crianças",
        description:
          "Preparações simples, nutritivas e com tempero suave pensadas para que os pequenos almocem bem entre uma brincadeira e outra.",
        dietaryNote: "Consulte a equipe sobre restrições alimentares ou papinhas para bebês.",
      },
      {
        id: "doces-caseiros",
        name: "Doces de fazenda e café coado",
        category: "Sobremesas caseiras",
        description:
          "Compotas tradicionais, doce de leite, bolo caseiro e café fresquinho para encerrar o almoço olhando para o verde.",
      },
    ] satisfies DishHighlight[],
    policies: [
      "Horário de serviço do almoço e formato do cardápio (buffet ou pratos do dia) são informados na confirmação da visita.",
      "Para manter a segurança alimentar e a limpeza das áreas dos animais, consulte previamente a política sobre entrada de alimentos e bebidas externos.",
      "Em caso de alergias alimentares severas ou alimentação especial para bebês de colo, avise nossa equipe no pré-atendimento pelo WhatsApp.",
    ],
  },
  planning: {
    eyebrow: "Planeje seu passeio",
    title: "Tudo o que você precisa saber antes de colocar o pé na estrada",
    subtitle:
      "Transparência em cada etapa: confira como funcionam os horários, as consultas de ingresso e as recomendações para aproveitar o dia ao máximo.",
    cards: [
      {
        id: "horarios",
        title: "Horário de funcionamento",
        badge: "Sob programação",
        summary:
          "Atendimento ao público em fins de semana, feriados e datas especiais, além de dias úteis reservados para passeios escolares.",
        details: [
          "Abertura habitual no período da manhã com permanência até o fim da tarde.",
          "Atividades guiadas com animais ocorrem em janelas distribuídas ao longo do dia.",
          "Confirme o calendário do fim de semana desejado pelo canal oficial.",
        ],
      },
      {
        id: "reservas",
        title: "Como realizar sua reserva",
        badge: "Simples & Direto",
        summary:
          "Trabalhamos com limite confortável de visitantes por dia para preservar a tranquilidade das famílias e o bem-estar dos animais.",
        details: [
          "Preencha o formulário rápido de pré-atendimento nesta página.",
          "Sua solicitação abre uma mensagem organizada no nosso WhatsApp oficial.",
          "Nossa equipe responde com a disponibilidade real e orientações de confirmação.",
        ],
      },
      {
        id: "valores",
        title: "Valores de ingresso e almoço",
        badge: "Consulta atualizada",
        summary:
          "Condições organizadas por faixa etária (crianças, adultos e melhor idade), com opções para visitação e restaurante.",
        details: [
          "Não exibimos tarifas desatualizadas: você recebe a tabela vigente diretamente no WhatsApp.",
          "Consulte regras de isenção para bebês, meia-entrada e condições para aniversariantes.",
          "Ingressos e alimentação não são cobrados automaticamente pelo site.",
        ],
      },
      {
        id: "regras",
        title: "Regras importantes e dicas",
        badge: "Bem-estar & Segurança",
        summary:
          "Pequenos cuidados garantem um passeio seguro para as crianças e tranquilo para todos os animais da propriedade.",
        details: [
          "Alimente os animais exclusivamente com a ração e orientações fornecidas pelos monitores.",
          "Traga roupas confortáveis, calçados fechados, protetor solar, chapéu e uma troca extra para as crianças.",
          "Consulte a política vigente sobre animais de estimação (pets) e dias de chuva antes de sair.",
        ],
      },
      {
        id: "estrutura-acessibilidade",
        title: "Estacionamento e acessibilidade",
        badge: "Apoio à família",
        summary:
          "Infraestrutura acolhedora para receber carros de passeio, vans escolares, carrinhos de bebê e visitantes com mobilidade reduzida.",
        details: [
          "Áreas de embarque e estacionamento informadas no roteiro de confirmação.",
          "Percursos principais em terreno natural plano; informe necessidades específicas de acessibilidade no pré-atendimento.",
          "Sanitários e espaço de apoio familiar disponíveis nas áreas centrais.",
        ],
      },
      {
        id: "localizacao",
        title: "Localização e rota segura",
        badge: "Acesso orientado",
        summary:
          "Enviamos o ponto exato de chegada e as melhores rotas por rodovia (evitando estradas de terra precárias geradas por GPS).",
        details: [
          "Receba o link verificado do Google Maps e Waze diretamente no WhatsApp ao agendar.",
          "Dicas de pontos de referência na estrada para uma viagem tranquila com crianças.",
          "Consulte a página 'Como Chegar' para orientações gerais de deslocamento.",
        ],
      },
    ],
  },
  gallery: [
    {
      src: "/images/hero-family-farm.jpg",
      alt: "Família caminhando junta pelo campo verde da fazendinha em manhã ensolarada",
      width: 1600,
      height: 1067,
      objectPosition: "center 38%",
      caption: "Manhãs tranquilas em família nos gramados arborizados da propriedade.",
      category: "Família & Infância",
    },
    {
      src: "/images/animal-goat-feeding.jpg",
      alt: "Cabrito dócil aproximando-se da cerca de madeira para interação com visitantes",
      width: 1200,
      height: 900,
      objectPosition: "center 35%",
      caption: "Interação respeitosa e alimentação assistida nos cercados dos cabritos.",
      category: "Animais",
    },
    {
      src: "/images/pony-ride-pasture.jpg",
      alt: "Pônei caramelo em área de pastagem verde cercada por árvores",
      width: 1200,
      height: 900,
      objectPosition: "center 30%",
      caption: "Contato com pôneis e animais de porte dócil acompanhados por monitores.",
      category: "Animais",
    },
    {
      src: "/images/animal-rabbits-close.jpg",
      alt: "Coelhos no espaço educativo da fazendinha sobre forragem natural",
      width: 1200,
      height: 900,
      objectPosition: "center 40%",
      caption: "O cantinho dos coelhos é uma das paradas preferidas das crianças pequenas.",
      category: "Animais",
    },
    {
      src: "/images/educational-garden.jpg",
      alt: "Horta rural com canteiros verdes de hortaliças orgânicas cultivadas ao sol",
      width: 1200,
      height: 900,
      objectPosition: "center 45%",
      caption: "Horta educativa onde as crianças descobrem a origem real dos alimentos.",
      category: "Educativo",
    },
    {
      src: "/images/rural-gastronomy-table.jpg",
      alt: "Mesa rústica de madeira com refeição tradicional de fazenda e ingredientes frescos",
      width: 1200,
      height: 900,
      objectPosition: "center 45%",
      caption: "Almoço rural com receitas caseiras preparadas com ingredientes frescos.",
      category: "Gastronomia",
    },
    {
      src: "/images/outdoor-play-meadow.jpg",
      alt: "Crianças brincando ao ar livre no gramado amplo cercado por natureza",
      width: 1200,
      height: 900,
      objectPosition: "center 40%",
      caption: "Espaço aberto de sobra para correr, brincar e viver a infância longe das telas.",
      category: "Família & Infância",
    },
    {
      src: "/images/nature-trail-trees.jpg",
      alt: "Trilha arborizada com sombra natural de árvores altas na fazendinha",
      width: 1200,
      height: 900,
      objectPosition: "center 50%",
      caption: "Caminhos sombreados e ar puro para desacelerar no ritmo do campo.",
      category: "Natureza",
    },
    {
      src: "/images/country-kitchen-fresh.jpg",
      alt: "Pães rústicos e vegetais recém-colhidos na bancada da cozinha de fazenda",
      width: 1000,
      height: 800,
      objectPosition: "center 50%",
      caption: "Sabores autênticos da roça do café ao encerramento do almoço.",
      category: "Gastronomia",
    },
  ] satisfies EditorialImage[],
  testimonials: {
    /**
     * Seguindo a diretriz estrita:
     * "Exibir somente avaliações autênticas, autorizadas e devidamente atribuídas.
     * Não criar comentários fictícios, estrelas ou números de avaliações."
     */
    verifiedItems: [] as VerifiedTestimonial[],
    editorialCommitment: {
      title: "Compromisso com avaliações 100% autênticas",
      description:
        "Não utilizamos depoimentos fictícios, notas simuladas ou contadores artificiais de estrelas. As avaliações reais de famílias e escolas são publicadas exclusivamente mediante autorização formal dos visitantes ou consultadas diretamente nos canais oficiais verificados do estabelecimento.",
      highlights: [
        "Zero avaliações inventadas ou geradas artificialmente",
        "Relatos publicados apenas com atribuição real e autorização dos visitantes",
        "Atendimento aberto no WhatsApp para tirar dúvidas e enviar referências de visitas escolares e familiares",
      ],
    },
  },
  faqs: [
    {
      id: "precisa-reservar",
      question: "Precisa reservar antecipadamente?",
      answer:
        "Recomendamos sempre realizar a consulta e o pré-agendamento antes de se deslocar. Como prezamos por uma experiência tranquila, sem superlotação e com atenção dedicada nos espaços dos animais e no restaurante, a capacidade diária é controlada. Utilize o botão 'Planejar minha visita' para consultar a data desejada diretamente no WhatsApp oficial.",
      category: "Reservas e Horários",
    },
    {
      id: "quais-horarios",
      question: "Quais são os horários de funcionamento?",
      answer:
        "A fazendinha opera habitualmente aos sábados, domingos, feriados e datas programadas durante o período diurno, além de atender escolas em dias úteis mediante agendamento. Os horários exatos de abertura da porteira, encerramento e programação das atividades guiadas do fim de semana são confirmados diretamente pelo nosso atendimento oficial.",
      category: "Reservas e Horários",
    },
    {
      id: "quais-atracoes",
      question: "Quais atrações estão disponíveis durante a visita?",
      answer:
        "As famílias desfrutam de contato supervisionado com animais da fazenda (como cabritos, coelhos, aves e pôneis), vivências educativas na horta, passeios pelas áreas verdes, espaços de brincadeiras ao ar livre nos gramados e áreas de descanso sombreadas. A programação específica do dia é apresentada pela equipe na chegada.",
      category: "Atrações e Estrutura",
    },
    {
      id: "almoco-no-local",
      question: "É possível almoçar no local?",
      answer:
        "Sim! Contamos com restaurante rural próprio que serve comida caseira de fazenda preparada com ingredientes frescos, incluindo opções que agradam às crianças. Você pode consultar o cardápio do fim de semana e os valores de almoço por faixa etária ao iniciar seu pré-atendimento via WhatsApp.",
      category: "Restaurante e Alimentação",
    },
    {
      id: "pode-levar-alimentos",
      question: "Pode levar alimentos ou bebidas de fora?",
      answer:
        "Por questões de segurança alimentar dos animais (que seguem dieta rigorosa acompanhada por profissionais) e operação do restaurante local, a entrada de coolers, bebidas e refeições externas possui regras específicas. Caso você tenha bebês de colo que necessitem de papinhas/fórmulas ou crianças com restrição alimentar severa, informe nossa equipe no WhatsApp para orientação prévia.",
      category: "Restaurante e Alimentação",
    },
    {
      id: "atividades-para-escolas",
      question: "Existem atividades e roteiros para escolas?",
      answer:
        "Sim. Recebemos escolas de Educação Infantil e Ensino Fundamental com roteiros pedagógicos adaptados à faixa etária da turma, integrando educação ambiental, horta sensorial, cuidado com os animais e alimentação no local. Acesse a página 'Passeios Escolares' para solicitar a proposta pedagógica para sua instituição.",
      category: "Escolas e Aniversários",
    },
    {
      id: "como-comemorar-aniversarios",
      question: "Como comemorar aniversários na fazendinha?",
      answer:
        "É possível celebrar aniversários infantis e familiares em meio à natureza durante os dias de funcionamento, reunindo convidados para um dia de vivências no campo e almoço rural. As regras sobre reserva de mesas, bolo, docinhos e quantidade mínima de convidados são enviadas de forma personalizada pelo nosso atendimento no WhatsApp.",
      category: "Escolas e Aniversários",
    },
    {
      id: "como-chegar",
      question: "Como chegar à fazendinha?",
      answer:
        "O acesso é feito por rodovias principais da região com trecho final sinalizado. Para evitar rotas incorretas sugeridas automaticamente por aplicativos de GPS em áreas rurais, enviamos a localização oficial verificada (Google Maps e Waze) junto às instruções de chegada no momento do seu atendimento pelo WhatsApp.",
      category: "Acesso e Pagamento",
    },
    {
      id: "formas-de-pagamento",
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "As modalidades aceitas para pré-reserva (como PIX ou transferência) e para consumo local no dia da visita (cartões de débito, crédito e PIX) são detalhadas pela equipe oficial durante a confirmação da sua visita no WhatsApp. Nenhum pagamento é solicitado ou processado automaticamente por este site.",
      category: "Acesso e Pagamento",
    },
  ] satisfies FAQItem[],
  schoolVisits: {
    title: "O campo como sala de aula viva",
    subtitle:
      "Roteiros pedagógicos alinhados à curiosidade infantil, segurança monitorada e acolhimento completo para professores e alunos.",
    ageGroups: [
      {
        title: "Educação Infantil (2 a 5 anos)",
        focus: "Estímulo sensorial, descoberta gentil dos animais, texturas da horta e convivência ao ar livre.",
      },
      {
        title: "Ensino Fundamental I (6 a 10 anos)",
        focus: "Ciclo dos alimentos, sustentabilidade, compostagem, bem-estar animal e ecossistemas rurais.",
      },
      {
        title: "Ensino Fundamental II & Projetos Especiais",
        focus: "Agroecologia, produção rural responsável, conservação ambiental e vivências práticas em grupo.",
      },
    ],
    differentials: [
      "Roteiro organizado por janelas de atividade para manter o engajamento da turma",
      "Acompanhamento por monitores habituados ao atendimento escolar",
      "Estrutura de apoio com sanitários, área coberta para refeições e fácil acesso para ônibus/vans",
      "Envio de portfólio escolar e orientações prévias para a coordenação pedagógica",
    ],
  },
  birthdays: {
    title: "Aniversários com pé na grama e memória afetiva",
    subtitle:
      "Troque o salão fechado por um dia inteiro de sol, animais, comida de fazenda e brincadeiras ao ar livre com quem você ama.",
    steps: [
      {
        step: "01",
        title: "Consulte a data e o tamanho do seu grupo",
        description:
          "Informe pelo WhatsApp a data pretendida, a idade do aniversariante e a estimativa de adultos e crianças convidados.",
      },
      {
        step: "02",
        title: "Conheça os espaços e regras de parabéns",
        description:
          "Nossa equipe explica como funciona o apoio para a hora do bolo, uso das mesas e integração com o almoço no restaurante rural.",
      },
      {
        step: "03",
        title: "Viva um dia leve com seus convidados",
        description:
          "Enquanto as crianças exploram a fazendinha com segurança, adultos e familiares aproveitam o ar puro e a gastronomia do campo.",
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
