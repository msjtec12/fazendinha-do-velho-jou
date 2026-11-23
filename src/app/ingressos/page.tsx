import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageHero } from "@/components/layout/page-hero";
import { WhatsAppBookingCard } from "@/components/booking/whatsapp-booking-card";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import {
  Ticket,
  Users,
  Baby,
  HeartHandshake,
  CheckCircle2,
  ShieldAlert,
  Backpack,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ingressos, Funcionamento e Como Planejar sua Visita",
  description:
    "Saiba como funcionam os ingressos para a fazendinha, categorias por faixa etária, o que está incluso no passeio e como consultar valores vigentes pelo WhatsApp oficial.",
  alternates: {
    canonical: "/ingressos",
  },
  openGraph: {
    title: "Ingressos, Funcionamento e Como Planejar sua Visita",
    description:
      "Informações transparentes sobre categorias de ingresso, regras de visitação, o que levar na mochila das crianças e pré-reserva via WhatsApp.",
    url: "/ingressos",
    images: ["/images/outdoor-play-meadow.jpg"],
  },
};

const ticketCategories = [
  {
    id: "adultos-e-juvenil",
    title: "Adultos & Crianças",
    badge: "Acesso às vivências",
    icon: Users,
    description:
      "Inclui permanência durante o horário de funcionamento do dia, acesso aos espaços dos animais, horta educativa, trilhas leves e áreas de recreação ao ar livre.",
    notes: [
      "Valores atualizados informados no pré-atendimento conforme temporada",
      "Almoço no restaurante rural pode ser consultado junto ao ingresso",
    ],
  },
  {
    id: "primeira-infancia",
    title: "Bebês & Primeira Infância",
    badge: "Condição especial",
    icon: Baby,
    description:
      "Política acolhedora para famílias com bebês de colo. Consulte a faixa etária exata de isenção vigente no momento do seu agendamento.",
    notes: [
      "Apresentação de documento da criança na recepção",
      "Acesso às estruturas de apoio familiar e áreas sombreadas",
    ],
  },
  {
    id: "melhor-idade",
    title: "Melhor Idade (60+) & Meia-Entrada",
    badge: "Benefício garantido",
    icon: HeartHandshake,
    description:
      "Avós são muito bem-vindos na fazendinha! Contamos com caminhos planos, bancos à sombra e condições de meia-entrada conforme legislação e política local.",
    notes: [
      "Mediante apresentação de documento oficial com foto na portaria",
      "Consulte condições para PCD e acompanhantes no canal oficial",
    ],
  },
];

const backpackChecklist = [
  "Roupas leves e confortáveis que possam sujar de terra ou grama sem preocupação",
  "Calçados fechados ou tênis antiderrapantes (ideais para caminhar nos cercados e trilhas)",
  "Chapéu ou boné, protetor solar e repelente infantil",
  "Uma muda extra de roupa para as crianças aproveitarem todas as brincadeiras",
  "Garrafinha de água reutilizável para hidratação ao longo do passeio",
];

export default function IngressosPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Ingressos", href: "/ingressos" }]}
        eyebrow="Planejamento & Acesso"
        title="Ingressos, funcionamento e como planejar sua visita"
        description="Prezamos pela transparência total: veja o que está incluído na experiência da fazendinha, conheça as categorias de visitantes e consulte a tabela vigente diretamente no nosso WhatsApp oficial."
        ctaLabel="Consultar valores no WhatsApp"
        defaultExperience="Visita em família (Day Use)"
        image={siteConfig.gallery[6]}
      />

      {/* Categorias de Ingresso e Transparência de Valores */}
      <section
        aria-labelledby="ticket-categories-heading"
        className="py-16 sm:py-24 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              <Ticket className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Modalidades de Visitação</span>
            </span>
            <h2
              id="ticket-categories-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C]"
            >
              Categorias pensadas para todas as gerações da família
            </h2>
            <p className="text-base text-[#303A2C]/80 leading-relaxed">
              Para evitar qualquer informação desatualizada ou cobrança automática indevida, todos os
              valores de ingresso e almoço são enviados de forma oficial pela nossa equipe de
              atendimento conforme a data escolhida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ticketCategories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <article
                  key={cat.id}
                  className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-2xs"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315B3D]/12 text-[#315B3D]">
                        <IconComponent className="w-5.5 h-5.5" aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-[#EFE6D5] px-3 py-1 text-xs font-semibold text-[#315B3D]">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-semibold text-[#303A2C]">
                      {cat.title}
                    </h3>

                    <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <ul className="pt-4 border-t border-[#303A2C]/10 space-y-2">
                    {cat.notes.map((note) => (
                      <li
                        key={note}
                        className="flex items-start gap-2 text-xs text-[#303A2C]/85"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* O que preparar + Formulário Inline de Pré-Atendimento */}
      <section className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              {/* Checklist da Mochila */}
              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C47A45]/15 px-3.5 py-1 text-xs font-semibold text-[#A6602E]">
                  <Backpack className="w-4 h-4" aria-hidden="true" />
                  <span>Dica de Ouro para os Pais</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                  O que colocar na mochila para um dia no campo
                </h2>
                <p className="text-sm sm:text-base text-[#303A2C]/80 leading-relaxed">
                  Um passeio ao ar livre fica ainda mais gostoso quando a família vem preparada para
                  caminhar na grama e aproveitar o sol com conforto:
                </p>
                <ul className="space-y-2.5 pt-1">
                  {backpackChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#303A2C]/85"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aviso sobre Lotação Controlada e Alimentação */}
              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold text-[#315B3D]">
                  <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                  <span>Regras de Bem-Estar & Funcionamento</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-[#303A2C]">
                  Por que recomendamos a consulta antecipada?
                </h2>
                <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                  Diferente de grandes parques comerciais, nossa fazendinha preserva o ritmo natural
                  dos animais e o acolhimento familiar. Por isso, trabalhamos com capacidade diária
                  planejada. Ao consultar pelo WhatsApp, você confirma se há vagas para o dia
                  escolhido e recebe todas as orientações sobre o{" "}
                  <Link href="/restaurante" className="font-semibold text-[#315B3D] underline">
                    restaurante rural
                  </Link>{" "}
                  e{" "}
                  <Link href="/como-chegar" className="font-semibold text-[#315B3D] underline">
                    rota verificada de chegada
                  </Link>
                  .
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/perguntas-frequentes"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#315B3D] hover:text-[#24452D]"
                  >
                    <span>Ler dúvidas frequentes sobre ingressos e pagamentos</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Consultar ingressos e vagas"
                subtitle="Informe a data e a quantidade de adultos e crianças para receber a tabela atualizada diretamente no WhatsApp."
                defaultExperience="Visita em família (Day Use)"
                formIdPrefix="tickets-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Vai comemorar aniversário ou trazer uma turma escolar?"
        subtitle="Temos condições e orientações específicas para grupos. Conheça nossas páginas dedicadas ou fale direto com o atendimento."
        secondaryHref="/aniversarios"
        secondaryLabel="Ver comemorações de aniversário"
      />
    </>
  );
}
