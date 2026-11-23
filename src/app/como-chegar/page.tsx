import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageHero } from "@/components/layout/page-hero";
import { WhatsAppBookingCard } from "@/components/booking/whatsapp-booking-card";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import {
  MapPin,
  Navigation,
  Car,
  Accessibility,
  ExternalLink,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Como Chegar — R. Padre Celestino André Trevisan, 325 - Mairiporã, SP",
  description:
    "Veja o endereço e como chegar à Mini Fazendinha Velho Jou: R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP, 07611-425 (a 30 minutos de São Paulo).",
  alternates: {
    canonical: "/como-chegar",
  },
  openGraph: {
    title: "Como Chegar — Mini Fazendinha Velho Jou (Mairiporã - SP)",
    description:
      "R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP, 07611-425. Abra a rota direta no Google Maps ou Waze.",
    url: "/como-chegar",
    images: ["/images/nature-trail-trees.jpg"],
  },
};

const travelGuidelines = [
  {
    id: "endereco-oficial",
    title: "Endereço Oficial em Mairiporã - SP",
    icon: MapPin,
    description:
      "R. Padre Celestino André Trevisan, 325 - Barreiro, Mairiporã - SP, CEP 07611-425 (próximo à Estrada Roseira, a cerca de 30 minutos de São Paulo).",
  },
  {
    id: "estacionamento",
    title: "Chegada e funcionamento",
    icon: Car,
    description:
      "Aberto aos sábados, domingos e feriados das 10h00 às 16h00 (mediante agendamento antecipado pelo WhatsApp (11) 94280-7987).",
  },
  {
    id: "acessibilidade-apoio",
    title: "Estrutura e acessibilidade",
    icon: Accessibility,
    description:
      "Contamos com acessibilidade nas áreas principais, banheiros, fraldário, bebedouro e restaurante caipira coberto dentro da propriedade.",
  },
];

export default function ComoChegarPage() {
  const { contact, social } = siteConfig;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Como Chegar", href: "/como-chegar" }]}
        eyebrow="Mairiporã - SP • A 30 min de São Paulo"
        title="Localização, endereço e rota para a Fazendinha Velho Jou"
        description={`Estamos na ${contact.fullAddress}. Trajeto rápido e tranquilo para famílias de São Paulo, Guarulhos e toda a região.`}
        ctaLabel="Agendar visita pelo WhatsApp"
        defaultExperience="Visita em família (Day Use)"
        image={siteConfig.experiences[4].image}
        secondaryAction={
          <a
            href={social.googleReviews.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#303A2C]/25 bg-[#FBF8F1] hover:border-[#315B3D] px-6 py-3.5 text-sm sm:text-base font-semibold text-[#303A2C] transition-colors"
          >
            <Navigation className="w-4.5 h-4.5 text-[#315B3D]" aria-hidden="true" />
            <span>Abrir no Google Maps</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        }
      />

      {/* Endereço Oficial + Botões Google Maps e Waze */}
      <section
        aria-labelledby="access-guidelines-heading"
        className="py-16 sm:py-24 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelGuidelines.map((item) => {
              const IconComponent = item.icon;
              return (
                <article
                  key={item.id}
                  className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-7 space-y-3.5 shadow-2xs"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315B3D]/12 text-[#315B3D]">
                    <IconComponent className="w-5.5 h-5.5" aria-hidden="true" />
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#303A2C]">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Mapa Incorporado + Cartão de Endereço Completo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-[#303A2C]/15 shadow-sm bg-[#EFE6D5] min-h-[360px]">
              <iframe
                title="Mapa de localização da Mini Fazendinha Velho Jou em Mairiporã - SP"
                src="https://www.google.com/maps?q=Fazendinha+Velho+Jou,+R.+Padre+Celestino+Andr%C3%A9+Trevisan,+325+-+Barreiro,+Mairipor%C3%A3+-+SP,+07611-425&output=embed"
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/15 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold text-[#315B3D]">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Dados Oficiais de Localização</span>
                </span>

                <h3
                  id="access-guidelines-heading"
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]"
                >
                  Mini Fazendinha Velho Jou
                </h3>

                <div className="space-y-3 text-sm text-[#303A2C]/85">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C47A45] shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong>Endereço:</strong> {contact.fullAddress}
                    </span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#315B3D] shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong>Horário:</strong> {contact.openingDaysSummary} (com agendamento
                      antecipado)
                    </span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#315B3D] shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong>WhatsApp:</strong> {contact.whatsappDisplay} |{" "}
                      <strong>Fixo:</strong> {contact.phoneDisplay}
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#303A2C]/10">
                <a
                  href={social.googleReviews.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#315B3D] hover:bg-[#24452D] text-[#F7F0E3] font-semibold px-6 py-3.5 text-sm transition-colors"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Traçar rota no Google Maps</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={social.googleReviews.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#303A2C]/25 bg-[#EFE6D5] hover:bg-[#303A2C] hover:text-[#F7F0E3] text-[#303A2C] font-semibold px-6 py-3 text-sm transition-colors"
                >
                  <Car className="w-4 h-4" aria-hidden="true" />
                  <span>Abrir navegação no Waze</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist antes de sair + Formulário de Atendimento */}
      <section className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                  Lembre-se de agendar antes de pegar a estrada
                </h2>
                <p className="text-sm sm:text-base text-[#303A2C]/85 leading-relaxed">
                  Na Mini Fazendinha Velho Jou os ingressos são limitados e vendidos
                  antecipadamente para garantir uma experiência tranquila para todas as famílias.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/ingressos"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#315B3D] hover:text-[#24452D]"
                  >
                    <span>Ver valores de ingressos (R$ 45,00 inteira) e meia-entrada</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/restaurante"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C47A45] hover:text-[#A6602E]"
                  >
                    <span>Ver menu do almoço no fogão a lenha (R$ 59,90)</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Agende seus ingressos pelo WhatsApp"
                subtitle="Informe a data desejada e a quantidade de adultos e crianças para garantir sua reserva antes de sair de casa."
                defaultExperience="Visita em família (Day Use)"
                formIdPrefix="directions-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Esperamos sua família em Mairiporã!"
        subtitle="Fale com nossa equipe pelo WhatsApp (11) 94280-7987 e garanta seus ingressos antecipados."
        defaultExperience="Visita em família (Day Use)"
      />
    </>
  );
}
