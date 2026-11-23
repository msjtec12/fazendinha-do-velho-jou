# KONNEXY PREMIUM — Diagnóstico, Arquitetura e Plano de Implementação

## 1. Diagnóstico do Projeto e Benchmark

### 1.1 Estado Atual do Workspace
- **Diretório de trabalho (`c:\Users\massa\Desktop\fazendinha`):** Encontra-se completamente vazio.
- **Decisão técnica:** Criar uma estrutura inicial limpa e moderna com **Next.js (App Router)**, **React 19**, **TypeScript (`strict: true`)** e **Tailwind CSS v4**, configurada com arquitetura orientada a dados e arquivos de configuração tipados (`src/content/site-config.ts`), sem acoplamento a banco de dados ou backend complexo neste primeiro momento.

### 1.2 Auditoria do Site de Referência (Estudo de Oportunidades)
A análise técnica e de experiência do site de referência (`https://www.fazendinhavelhojou.com.br/`, verificado via navegador do Antigravity) revelou pontos críticos que nosso projeto supera integralmente:

1. **Arquitetura de Informação e Navegação:**
   - *Referência:* Possui apenas 2 rotas (`/` e `/menus`), concentrando informações densas em uma única página longa sem âncoras, sem CTA no cabeçalho e com a página `/menus` subutilizada (repete preços duas vezes sem listar os pratos).
   - *Nossa Solução:* Arquitetura multipágina semântica com Homepage editorial + 8 páginas dedicadas (`/atracoes`, `/ingressos`, `/restaurante`, `/passeios-escolares`, `/aniversarios`, `/galeria`, `/como-chegar`, `/perguntas-frequentes`), com breadcrumbs, navegação contextual e CTAs orientados à intenção.
2. **Responsividade e Experiência Mobile:**
   - *Referência:* Apresenta overflow horizontal tanto em desktop (`1280x800`) quanto em mobile (`375x812`), sem adaptação real para telas menores e com menu cortado fora da viewport.
   - *Nossa Solução:* Layout 100% responsivo e fluido testado de `360px` a `1920px`, com menu mobile acessível (Radix Dialog / Drawer com trap de foco e suporte a teclado), tipografia fluida (`clamp()`) e imagens com `object-position` individualizado.
3. **Poluição Visual vs. Conversão Limpa:**
   - *Referência:* Quatro elementos flutuantes sobrepostos no canto inferior direito (popup do WhatsApp aberto cobrindo ~50% da tela mobile, pill secundário, botão do Instagram e iframe do Wix Chat com erro HTTP 401), além de formulário pedindo endereço físico sem necessidade.
   - *Nossa Solução:* Fluxo de pré-atendimento consultivo via WhatsApp integrado à jornada (Modal/Drawer e seção dedicada), sem widgets invasivos bloqueando a leitura, permitindo ao visitante selecionar tipo de experiência, data desejada, adultos, crianças e observações para gerar uma mensagem clara e estruturada.
4. **Semântica, Acessibilidade e SEO Técnico:**
   - *Referência:* Zero tags `<h1>` nas páginas, imagens com nomes de arquivo brutos no atributo `alt` (`WhatsApp Image...`, `IMG_...`), FAQ estático e depoimentos em prints de imagem ilegíveis para leitores de tela e mecanismos de busca.
   - *Nossa Solução:* Hierarquia rigorosa de headings (`h1` único por rota, `h2` e `h3` lógicos), `alt` descritivo em todas as fotografias, FAQ interativo acessível via teclado com dados estruturados `FAQPage`, Schema.org (`TouristAttraction` / `LocalBusiness`) apenas com dados verificáveis, e estados explícitos para conteúdos dependentes de confirmação do cliente.

---

## 2. Mapa de Páginas (Sitemap & Rotas)

| Rota | Título Principal (`H1`) | Objetivo Principal e Conversão |
| :--- | :--- | :--- |
| `/` | Um dia no campo. Memórias para a vida toda. | Apresentar a proposta de valor, experiências, gastronomia, planejamento rápido, galeria, FAQ e pré-reserva via WhatsApp. |
| `/atracoes` | Atrações e experiências ao ar livre para toda a família | Detalhar categorias (Contato com animais, Atividades educativas, Passeios, Brincadeiras ao ar livre, Natureza) com filtros e recomendações. |
| `/ingressos` | Ingressos, funcionamento e como planejar sua visita | Explicar o modelo de visitação, categorias de ingresso configuráveis, o que está incluso, regras importantes e iniciar pré-reserva. |
| `/restaurante` | Gastronomia rural autêntica e almoço em família | Apresentar a cozinha de fazenda, destaques do cardápio, informações sobre alimentação infantil/restrições e consulta de menu/preços. |
| `/passeios-escolares` | Roteiros pedagógicos e vivências no campo para escolas | Apresentar a proposta educativa por faixa etária, estrutura de apoio, segurança e formulário/fluxo específico para coordenadores e escolas. |
| `/aniversarios` | Comemore aniversários em meio à natureza | Explicar o formato de comemoração na fazendinha, espaços disponíveis, regras de bolo/alimentação e consulta de data para grupos. |
| `/galeria` | Momentos reais de descoberta e contato com a natureza | Galeria filtrável por categoria com lightbox acessível por teclado (`ArrowLeft`, `ArrowRight`, `Escape`), contador e descrições. |
| `/como-chegar` | Localização, acesso e orientações de chegada | Exibir informações configuráveis de endereço, mapa/rota, dicas de estrada, estacionamento e preparação para o passeio. |
| `/perguntas-frequentes` | Perguntas frequentes sobre a visita à fazendinha | Central de ajuda categorizada cobrindo reservas, horários, atrações, restaurante, alimentos externos, escolas, aniversários, acesso e pagamentos. |

---

## 3. Arquitetura de Componentes e Pastas

```text
src/
├── app/
│   ├── layout.tsx                 # Fontes (Fraunces + Manrope), Header, Footer, Modal de Reserva e JSON-LD global
│   ├── page.tsx                   # Homepage completa (Seções 3.1 a 3.10)
│   ├── globals.css                # Tailwind CSS v4 + Design Tokens + utilitários editoriais
│   ├── sitemap.ts                 # Sitemap XML dinâmico
│   ├── robots.ts                  # Robots.txt dinâmico
│   ├── atracoes/page.tsx          # Página dedicada de Atrações
│   ├── ingressos/page.tsx         # Página dedicada de Ingressos e Planejamento
│   ├── restaurante/page.tsx       # Página dedicada de Experiência Gastronômica
│   ├── passeios-escolares/page.tsx# Página dedicada de Passeios Escolares
│   ├── aniversarios/page.tsx      # Página dedicada de Aniversários
│   ├── galeria/page.tsx           # Página dedicada de Galeria com Lightbox
│   ├── como-chegar/page.tsx       # Página dedicada de Localização e Acesso
│   └── perguntas-frequentes/page.tsx # Página dedicada de FAQ completo
├── components/
│   ├── layout/
│   │   ├── header.tsx             # Header sticky discreto + navegação desktop + drawer mobile acessível
│   │   ├── footer.tsx             # Rodapé editorial com links, horários configuráveis e aviso de confirmação
│   │   ├── breadcrumbs.tsx        # Breadcrumbs semânticos com Schema.org BreadcrumbList
│   │   └── page-hero.tsx          # Cabeçalho editorial reutilizável para páginas internas
│   ├── sections/
│   │   ├── hero-section.tsx       # Hero da Homepage com composição responsiva desktop/mobile
│   │   ├── experiences-section.tsx# Cards editoriais de experiências com object-position individual
│   │   ├── why-visit-section.tsx  # Diferenciais autênticos e estrutura de acolhimento
│   │   ├── gastronomy-section.tsx # Seção editorial do restaurante rural
│   │   ├── plan-visit-section.tsx # Planeje seu passeio (horários, reservas, regras, ingressos, rota)
│   │   ├── gallery-section.tsx    # Galeria interativa com filtro por categoria e Lightbox acessível
│   │   ├── testimonials-section.tsx # Seção ética de depoimentos verificados / estado configurável
│   │   ├── faq-section.tsx        # Acordeão acessível (Radix Accordion) com perguntas verificadas
│   │   └── final-cta-section.tsx  # Chamada visual de encerramento com gatilho para pré-reserva
│   ├── booking/
│   │   ├── booking-context.tsx    # Provider leve para abrir o modal de pré-reserva já contextualizado
│   │   ├── whatsapp-booking-modal.tsx # Modal acessível (Radix Dialog) com React Hook Form + Zod
│   │   └── whatsapp-booking-card.tsx  # Formulário inline de pré-atendimento para páginas de conversão
│   └── seo/
│       └── json-ld.tsx            # Renderizador seguro de dados estruturados Schema.org
├── content/
│   └── site-config.ts             # Fonte única de verdade tipada (dados configuráveis, flags de confirmação, textos e fotos)
└── lib/
    ├── utils.ts                   # Utilitários (cn, formatação de datas)
    └── whatsapp.ts                # Construtor determinístico e testável de links/mensagens para WhatsApp
```

---

## 4. Design System Proposto ("Campo Editorial & Memórias Afetivas")

### 4.1 Paleta de Cores e Tokens Semânticos
- **Forest Green (`#315B3D`):** Cor primária de marca, botões principais, destaques naturais e cabeçalhos editoriais.
- **Natural Cream (`#F7F0E3`):** Superfície principal de fundo (substitui o branco clínico por um tom acolhedor de papel algodão/linho).
- **Soft Sand (`#EFE5D4`):** Superfície secundária para alternância suave de seções e cards.
- **Terracotta (`#C47A45`):** Cor de destaque afetivo, badges editoriais, detalhes gastronômicos e estados de foco/hover quentes.
- **Sunshine Yellow (`#E5B74A`):** Selos de atenção suave, ícones solares e realces em fundos escuros.
- **Deep Green (`#303A2C`):** Cor principal de texto e superfícies escuras de alto contraste (garante relação de contraste WCAG AA/AAA sobre `#F7F0E3`).

### 4.2 Tipografia
- **Display & Headings (`Fraunces` via `next/font/google`):** Serifada contemporânea de toque orgânico e calor humano, usada em títulos com `letter-spacing: -0.02em` e `line-height: 1.12`.
- **Interface & Corpo (`Manrope` via `next/font/google`):** Sans-serif geométrica humanista de altíssima legibilidade para textos corridos, tabelas de planejamento, botões e formulários.

### 4.3 Superfícies, Bordas e Animações
- **Bordas orgânicas sutis:** `1px solid rgba(48, 58, 44, 0.12)` para delimitar cards sem pesar visualmente.
- **Raios de borda:** `1rem` (`16px`) para cards internos, `1.5rem` (`24px`) para molduras fotográficas editoriais e `9999px` para botões e tags.
- **Sombras suaves:** `0 16px 40px -12px rgba(48, 58, 44, 0.08)`.
- **Movimento consciente:** Transições suaves respeitando integralmente `@media (prefers-reduced-motion: reduce)`.

---

## 5. Plano de Implementação

1. **Etapa 1 & 2 (Fundação e Design System):** Inicializar projeto Next.js + TypeScript + Tailwind v4, configurar fontes `Fraunces` e `Manrope`, variáveis CSS do Design System e camada de conteúdo tipado (`src/content/site-config.ts`) com fotografias reais de domínio público/licença aberta curadas localmente em `public/images/` (com indicação clara para substituição pelo acervo autoral do cliente).
2. **Etapa 5 (Motor de Pré-Reserva via WhatsApp):** Construir utilitário `buildWhatsAppUrl` validado com `zod` e `react-hook-form`, suportando seleção de experiência (Visita em Família, Passeio Escolar, Aniversário, Almoço no Restaurante), data desejada, adultos, crianças e observações, sem jamais simular disponibilidade ou confirmar reservas automaticamente.
3. **Etapa 3 (Homepage Completa):** Implementar Header acessível, Hero responsivo com composição adaptada para mobile e desktop, Experiências com `object-position` individual, Por que visitar, Experiência Gastronômica, Planeje seu Passeio configurável, Galeria com Lightbox acessível por teclado, Depoimentos éticos (sem avaliações fictícias), FAQ verificado e CTA Final.
4. **Etapa 4 (8 Páginas Internas):** Desenvolver `/atracoes`, `/ingressos`, `/restaurante`, `/passeios-escolares`, `/aniversarios`, `/galeria`, `/como-chegar` e `/perguntas-frequentes` com conteúdo rico, útil, links internos cruzados e metadata individual.
5. **Etapa 7, 8 e 9 (SEO, Performance e Acessibilidade WCAG 2.2 AA):** Configurar `sitemap.ts`, `robots.ts`, `JsonLd`, skip-link, landmarks semânticos, foco visível e otimização LCP.
6. **Etapa 10 e 11 (Bateria de Testes Reais):** Executar `npm run build`, `npm run lint`, `npx tsc --noEmit`, testes automatizados e inspeção nos 8 breakpoints obrigatórios (`360px` a `1920px`) e auditoria Lighthouse real.

---

## 6. Itens que Dependem de Confirmação do Cliente

Para cumprir rigorosamente a diretriz de **não inventar preços, distâncias, avaliações, certificações ou disponibilidade**, o sistema foi arquitetado em `src/content/site-config.ts` com flags explícitas de confirmação (`isConfirmed: boolean`). Enquanto não confirmados pelo estabelecimento, a interface exibe orientações transparentes de consulta via atendimento oficial para:

1. **Dados Empresariais e Geográficos:** Razão social, CNPJ, número oficial de WhatsApp, telefone fixo, e-mail, endereço completo, cidade/UF e coordenadas exatas do Google Maps / Waze.
2. **Tabela de Valores e Políticas:** Preços vigentes de ingressos por faixa etária, regras de meia-entrada/gratuidade, valores do restaurante (buffet ou à la carte) e formas de pagamento aceitas.
3. **Grade de Horários e Agendamento:** Dias exatos de abertura ao público, horários das atividades guiadas e obrigatoriedade de reserva antecipada por temporada.
4. **Acervo Fotográfico Autoral e Depoimentos:** Substituição das fotografias editoriais de referência pelas fotos reais autorizadas do espaço físico da fazendinha e inclusão de depoimentos reais com autorização expressa dos visitantes.
