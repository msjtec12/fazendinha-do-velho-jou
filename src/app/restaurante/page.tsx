import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageHero } from "@/components/layout/page-hero";
import { WhatsAppBookingCard } from "@/components/booking/whatsapp-booking-card";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import {
  Utensils,
  Flame,
  Salad,
  Baby,
  Coffee,
  Info,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Menu de Almoço — Comida Caipira no Fogão a Lenha | Fazendinha Velho Jou",
  description:
    "Menu de almoço da Mini Fazendinha Velho Jou: Comida caipira no fogão a lenha, Self-Service coma à vontade por R$ 59,90 por pessoa. Crianças de 3 a 8 anos R$ 12,00 e de 9 a 11 anos R$ 25,00.",
  alternates: {
    canonical: "/restaurante",
  },
  openGraph: {
    title: "Menu de Almoço — Comida Caipira no Fogão a Lenha | Fazendinha Velho Jou",
    description:
      "Self-Service coma à vontade no fogão a lenha: R$ 59,90 por pessoa. Crianças de 3 a 8 anos: R$ 12,00 | De 9 a 11 anos: R$ 25,00.",
    url: "/restaurante",
    images: ["/images/rural-gastronomy-table.jpg"],
  },
};

const highlightIcons = [Flame, Salad, Baby, Coffee];

export default function RestaurantePage() {
  const { gastronomy, pricing } = siteConfig;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Restaurante", href: "/restaurante" }]}
        eyebrow="Comida Caipira no Fogão a Lenha"
        title="Menu de almoço: Self-Service coma à vontade no fogão a lenha"
        description="Saboreie as panelas de barro fumegantes do nosso Restaurante Caipira! Grande variedade de misturas, carnes, acompanhamentos da roça e saladas frescas para toda a família."
        ctaLabel="Agendar visita e almoço no WhatsApp"
        defaultExperience="Almoço no restaurante rural"
        image={gastronomy.imageMain}
      />

      {/* Tabela Oficial de Preços do Menu de Almoço (igual ao menu oficial) */}
      <section
        aria-labelledby="lunch-pricing-heading"
        className="py-12 sm:py-16 bg-[#FBF8F1] border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#EFE6D5]/80 border border-[#303A2C]/15 p-6 sm:p-10">
            <div className="max-w-2xl space-y-2 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C47A45]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#A6602E]">
                <Flame className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Self-Service Coma à Vontade</span>
              </span>
              <h2
                id="lunch-pricing-heading"
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#303A2C]"
              >
                Valores do Menu de Almoço por faixa etária
              </h2>
              <p className="text-sm sm:text-base text-[#303A2C]/80">
                Almoço cobrado à parte do ingresso da fazendinha. Sirva-se à vontade nas panelas do
                nosso fogão a lenha:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pricing.lunchSelfService.map((tier) => (
                <div
                  key={tier.label}
                  className="rounded-2xl bg-[#FBF8F1] border border-[#303A2C]/12 p-5 flex flex-col justify-between space-y-3 shadow-2xs"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
                      {tier.label}
                    </p>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-[#303A2C] mt-1.5">
                      {tier.price}
                    </p>
                  </div>
                  <p className="text-xs text-[#303A2C]/75 flex items-center gap-1.5 pt-2 border-t border-[#303A2C]/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#315B3D] shrink-0" aria-hidden="true" />
                    <span>{tier.note}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destaques do Cardápio e Experiência à Mesa */}
      <section
        aria-labelledby="menu-highlights-heading"
        className="py-16 sm:py-24 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#C47A45]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#A6602E]">
              <Utensils className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Cardápio do Fogão a Lenha</span>
            </span>
            <h2
              id="menu-highlights-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C]"
            >
              Pratos preparados no nosso fogão a lenha
            </h2>
            <p className="text-base text-[#303A2C]/80 leading-relaxed">
              Confira as opções tradicionais servidas nas panelas de barro do nosso buffet caipira:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gastronomy.highlights.map((item, idx) => {
              const IconComponent = highlightIcons[idx % highlightIcons.length];
              return (
                <article
                  key={item.id}
                  className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C47A45]/15 text-[#A6602E]">
                      <IconComponent className="w-5.5 h-5.5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-[#EFE6D5] px-3 py-1 text-xs font-semibold text-[#A6602E]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#303A2C]">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#303A2C]/80 leading-relaxed">
                    {item.description}
                  </p>
                  {item.dietaryNote && (
                    <p className="text-xs font-medium text-[#315B3D] pt-1">
                      Nota: {item.dietaryNote}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Políticas de Alimentação + Consulta via WhatsApp */}
      <section className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#303A2C]/15 shadow-sm">
                <Image
                  src={gastronomy.imageMain.src}
                  alt={gastronomy.imageMain.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  style={{ objectPosition: gastronomy.imageMain.objectPosition }}
                />
              </div>

              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
                  <Info className="w-4 h-4" aria-hidden="true" />
                  <span>Orientações importantes sobre o restaurante</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-[#303A2C]">
                  Funcionamento do almoço e regras de alimentação
                </h2>
                <ul className="space-y-3 text-sm text-[#303A2C]/85 list-disc pl-5 leading-relaxed">
                  {gastronomy.policies.map((policy) => (
                    <li key={policy}>{policy}</li>
                  ))}
                  <li>
                    Confira os valores do{" "}
                    <Link href="/ingressos" className="font-semibold text-[#315B3D] underline">
                      ingresso da fazendinha (R$ 30,00)
                    </Link>{" "}
                    e faça seu agendamento antecipado pelo WhatsApp.
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/aniversarios"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#315B3D] hover:text-[#24452D]"
                  >
                    <span>Vai comemorar aniversário no almoço? Veja as regras para bolo e docinhos</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Agendar visita e almoço"
                subtitle="Garanta seus ingressos antecipados pelo WhatsApp (11) 94280-7987 e venha almoçar conosco no fim de semana."
                defaultExperience="Almoço no restaurante rural"
                formIdPrefix="restaurant-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Combine nosso almoço no fogão a lenha com um dia inteiro de fazendinha"
        subtitle="Agende pelo WhatsApp (11) 94280-7987 e traga as crianças para viver momentos inesquecíveis em Mairiporã."
        defaultExperience="Almoço no restaurante rural"
        secondaryHref="/atracoes"
        secondaryLabel="Conhecer as atrações da fazendinha"
      />
    </>
  );
}
