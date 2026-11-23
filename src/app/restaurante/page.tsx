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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurante Rural — Comida Caseira de Fazenda para a Família",
  description:
    "Saboreie um almoço rural autêntico na fazendinha: pratos tradicionais com tempero caseiro, ingredientes frescos da horta, opções infantis e sobremesas de fazenda.",
  alternates: {
    canonical: "/restaurante",
  },
  openGraph: {
    title: "Restaurante Rural — Comida Caseira de Fazenda para a Família",
    description:
      "Almoço em família cercado por natureza: clássicos da culinária caipira, saladas frescas, opções suaves para crianças e doces caseiros.",
    url: "/restaurante",
    images: ["/images/rural-gastronomy-table.jpg"],
  },
};

const highlightIcons = [Flame, Salad, Baby, Coffee];

export default function RestaurantePage() {
  const { gastronomy } = siteConfig;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Restaurante", href: "/restaurante" }]}
        eyebrow="Gastronomia de Fazenda"
        title="Gastronomia rural autêntica e almoço em família"
        description="Depois de uma manhã inteira alimentando os animais e correndo pelos gramados, nada melhor do que sentar à mesa com calma e saborear uma refeição preparada com ingredientes frescos e tempero de interior."
        ctaLabel="Consultar cardápio e valores no WhatsApp"
        defaultExperience="Almoço no restaurante rural"
        image={gastronomy.imageMain}
      />

      {/* Destaques do Cardápio e Experiência à Mesa */}
      <section
        aria-labelledby="menu-highlights-heading"
        className="py-16 sm:py-24 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#C47A45]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#A6602E]">
              <Utensils className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Sabores da Nossa Cozinha</span>
            </span>
            <h2
              id="menu-highlights-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C]"
            >
              O que esperar do nosso almoço no campo
            </h2>
            <p className="text-base text-[#303A2C]/80 leading-relaxed">
              Nosso cardápio respeita a sazonalidade dos ingredientes e a tradição da culinária de
              fazenda, oferecendo variedade para adultos e pratos acolhedores para o paladar das
              crianças.
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
                  src={gastronomy.imageSecondary.src}
                  alt={gastronomy.imageSecondary.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  style={{ objectPosition: gastronomy.imageSecondary.objectPosition }}
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
                    Consulte com antecedência se a visita ao restaurante requer aquisição conjunta
                    do{" "}
                    <Link href="/ingressos" className="font-semibold text-[#315B3D] underline">
                      ingresso da fazendinha
                    </Link>{" "}
                    na data escolhida.
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/aniversarios"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#315B3D] hover:text-[#24452D]"
                  >
                    <span>Vai comemorar aniversário no almoço? Veja as regras para bolo e grupos</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Consultar cardápio do fim de semana"
                subtitle="Fale com nossa equipe pelo WhatsApp para conferir os pratos programados, horários de serviço do almoço e valores por faixa etária."
                defaultExperience="Almoço no restaurante rural"
                formIdPrefix="restaurant-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Combine um almoço delicioso com um dia inteiro de descobertas"
        subtitle="Consulte disponibilidade para sua família e venha viver a hospitalidade do campo."
        defaultExperience="Almoço no restaurante rural"
        secondaryHref="/atracoes"
        secondaryLabel="Conhecer as atrações da fazendinha"
      />
    </>
  );
}
