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
  Utensils,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ingressos e Valores — Mini Fazendinha Velho Jou (Mairiporã - SP)",
  description:
    "Confira os valores de ingressos da Mini Fazendinha Velho Jou: R$ 45,00 por pessoa (inteira de 3 a 59 anos), meia-entrada R$ 22,50 (60+) e grátis de 0 a 2 anos. Agende pelo WhatsApp (11) 94280-7987.",
  alternates: {
    canonical: "/ingressos",
  },
  openGraph: {
    title: "Ingressos e Valores — Mini Fazendinha Velho Jou",
    description:
      "Ingresso Inteira R$ 45,00 (3 a 59 anos) | Meia 60+ R$ 22,50 | 0 a 2 anos Grátis. Inclui atividades de fazendeiro, pônei, trenzinho e recreação.",
    url: "/ingressos",
    images: ["/images/outdoor-play-meadow.jpg"],
  },
};

const ticketCategories = [
  {
    id: "adultos-e-juvenil",
    title: "De 3 a 59 anos (Inteira)",
    price: "R$ 45,00 por pessoa",
    badge: "Ingresso Inteira",
    icon: Users,
    description:
      "Inclui todas as Atividades de Fazendeiro (alimentar coelhos, aves, bovinos e miniporcos, mamadeira aos cabritos, escovar pônei e ordenha) e Atrações Recreativas (passeio de pônei, trenzinho, motocas, tobogã, cama elástica, piscina e mais).",
    notes: [
      "Ingressos limitados — compra antecipada obrigatória pelo WhatsApp",
      "Almoço no fogão a lenha cobrado à parte no Restaurante Caipira",
    ],
  },
  {
    id: "primeira-infancia",
    title: "Crianças de 0 a 2 anos",
    price: "Grátis (Isento)",
    badge: "Gratuidade",
    icon: Baby,
    description:
      "Bebês e crianças até 2 anos completos têm entrada gratuita acompanhados dos responsáveis, com fraldário completo e estrutura acolhedora.",
    notes: [
      "Mediante apresentação de documento da criança na recepção",
      "Acesso livre com a família a todos os espaços e áreas sombreadas",
    ],
  },
  {
    id: "melhor-idade",
    title: "Melhor Idade (60+ anos)",
    price: "R$ 22,50 (Meia-entrada)",
    badge: "Benefício 60+",
    icon: HeartHandshake,
    description:
      "A partir de 60 anos paga meia-entrada! Os avós aproveitam o ar puro de Mairiporã, o contato com os animais junto aos netos e a comida caipira no fogão a lenha.",
    notes: [
      "Mediante apresentação de documento oficial com foto na portaria",
      "Acessibilidade nas áreas principais e restaurante coberto",
    ],
  },
];

const backpackChecklist = [
  "Roupas leves e confortáveis para as crianças brincarem à vontade",
  "Calçados fechados ou tênis antiderrapantes para os cercados e passeios",
  "Chapéu ou boné, protetor solar e repelente infantil",
  "Roupa de banho, toalha e troca extra para aproveitar o chafariz, a piscina infantil e a caixa de areia",
];

export default function IngressosPage() {
  const { pricing } = siteConfig;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Ingressos", href: "/ingressos" }]}
        eyebrow="Valores Oficiais • Sábados, Domingos e Feriados (10h às 16h)"
        title="Ingressos, valores e como agendar sua visita"
        description="Na Mini Fazendinha Velho Jou você paga um valor justo e acessível com todas as atividades de fazendeiro, passeio de pônei, trenzinho e brinquedos recreativos inclusos no ingresso."
        ctaLabel="Reservar ingressos pelo WhatsApp"
        defaultExperience="Visita em família (Day Use)"
        image={siteConfig.gallery[6]}
      />

      {/* Categorias de Ingresso e Valores Oficiais */}
      <section
        aria-labelledby="ticket-categories-heading"
        className="py-16 sm:py-24 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              <Ticket className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Tabela Oficial de Ingressos</span>
            </span>
            <h2
              id="ticket-categories-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C]"
            >
              Valores de entrada por faixa etária
            </h2>
            <p className="text-base text-[#303A2C]/80 leading-relaxed">
              É necessário realizar agendamento antecipado pelo WhatsApp{" "}
              <strong className="font-semibold text-[#303A2C]">(11) 94280-7987</strong>. Os
              ingressos são limitados por dia.
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

                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#303A2C]">
                        {cat.title}
                      </h3>
                      <p className="font-serif text-2xl sm:text-3xl font-bold text-[#315B3D] mt-1">
                        {cat.price}
                      </p>
                    </div>

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

          {/* Resumo dos valores do Almoço Self-Service no Fogão a Lenha */}
          <div className="rounded-3xl bg-[#EFE6D5]/80 border border-[#303A2C]/15 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A6602E]">
                <Utensils className="w-4 h-4" aria-hidden="true" />
                <span>Restaurante Caipira no Fogão a Lenha (Cobrado à parte)</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#303A2C]">
                Menu de Almoço: Self-Service coma à vontade
              </h3>
              <p className="text-sm text-[#303A2C]/85">
                {pricing.lunchSelfService.map((t) => `${t.label}: ${t.price}`).join(" • ")}
              </p>
            </div>
            <Link
              href="/restaurante"
              className="inline-flex items-center gap-2 rounded-full bg-[#303A2C] hover:bg-[#315B3D] text-[#F7F0E3] px-6 py-3.5 text-xs sm:text-sm font-semibold transition-colors shrink-0 self-start lg:self-auto"
            >
              <span>Ver pratos do fogão a lenha</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
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
                  <span>O que trazer para as crianças</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                  Dicas para aproveitar todas as atrações
                </h2>
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
                  <span>Regras Importantes</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-[#303A2C]">
                  Agendamento obrigatório e regras de acesso
                </h2>
                <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                  Não é permitida a entrada de alimentos e bebidas externos na propriedade. Mesmo
                  quem desejar vir apenas para almoçar no{" "}
                  <Link href="/restaurante" className="font-semibold text-[#315B3D] underline">
                    Restaurante Caipira
                  </Link>{" "}
                  precisa adquirir o ingresso da fazendinha, pois o restaurante fica dentro do
                  espaço de visitação. Confira também o endereço completo em{" "}
                  <Link href="/como-chegar" className="font-semibold text-[#315B3D] underline">
                    Como Chegar
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Reservar ingressos no WhatsApp"
                subtitle="Informe a data do fim de semana/feriado e a quantidade de adultos e crianças para garantir seus ingressos no (11) 94280-7987."
                defaultExperience="Visita em família (Day Use)"
                formIdPrefix="tickets-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Vai comemorar aniversário ou trazer uma turma escolar?"
        subtitle="Confira como funcionam nossos espaços decorados para cantar parabéns e nossos passeios pedagógicos."
        secondaryHref="/aniversarios"
        secondaryLabel="Ver comemorações de aniversário"
      />
    </>
  );
}
