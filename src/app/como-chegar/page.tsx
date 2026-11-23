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
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Como Chegar, Localização e Orientações de Acesso",
  description:
    "Veja como chegar à fazendinha com segurança: orientações de rota verificada, dicas de estrada para famílias, estacionamento e acessibilidade.",
  alternates: {
    canonical: "/como-chegar",
  },
  openGraph: {
    title: "Como Chegar, Localização e Orientações de Acesso",
    description:
      "Informações práticas sobre acesso rodoviário, envio de localização verificada via Google Maps/Waze, estacionamento e dicas para a viagem.",
    url: "/como-chegar",
    images: ["/images/nature-trail-trees.jpg"],
  },
};

const travelGuidelines = [
  {
    id: "rota-verificada",
    title: "Rota oficial verificada (Google Maps & Waze)",
    icon: Navigation,
    description:
      "Em regiões rurais, aplicativos de GPS às vezes sugerem atalhos por estradas de terra não pavimentadas. Ao iniciar seu atendimento no WhatsApp, enviamos o pino exato e o trajeto recomendado pelas vias principais.",
  },
  {
    id: "estacionamento",
    title: "Chegada e estacionamento",
    icon: Car,
    description:
      "Recebemos veículos de passeio, vans familiares e ônibus escolares (mediante agendamento prévio). As orientações de entrada e desembarque são confirmadas antes da sua visita.",
  },
  {
    id: "acessibilidade-apoio",
    title: "Acessibilidade e circulação interna",
    icon: Accessibility,
    description:
      "As áreas principais de convivência, restaurante e viveiros contam com percursos planos em terreno natural. Caso alguém da família utilize cadeira de rodas ou tenha mobilidade reduzida, avise no pré-atendimento para prepararmos a melhor recepção.",
  },
];

export default function ComoChegarPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Como Chegar", href: "/como-chegar" }]}
        eyebrow="Localização & Deslocamento"
        title="Localização, acesso e orientações de chegada"
        description="Queremos que seu passeio seja tranquilo desde o momento em que a família entra no carro. Confira nossas recomendações de deslocamento e solicite o link oficial de rota no pré-atendimento."
        ctaLabel="Solicitar localização e rota no WhatsApp"
        defaultExperience="Outras dúvidas sobre a visita"
        image={siteConfig.experiences[4].image}
      />

      {/* Diretrizes de Acesso e Segurança na Estrada */}
      <section
        aria-labelledby="access-guidelines-heading"
        className="py-16 sm:py-24 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Viagem Tranquila em Família</span>
            </span>
            <h2
              id="access-guidelines-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C]"
            >
              Cuidados que facilitam sua chegada ao campo
            </h2>
            <p className="text-base text-[#303A2C]/80 leading-relaxed">
              Não inventamos distâncias nem tempos estimados genéricos, pois o trajeto varia
              conforme seu ponto de partida. Nossa equipe envia as referências rodoviárias reais
              durante a confirmação da visita.
            </p>
          </div>

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
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#303A2C]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Checklist antes de sair de casa + Formulário de Atendimento */}
      <section className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold text-[#315B3D]">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Antes de pegar a estrada</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                  3 passos recomendados antes do deslocamento
                </h2>
                <ol className="space-y-4 pt-2 text-sm text-[#303A2C]/85 list-decimal pl-5 leading-relaxed">
                  <li>
                    <strong className="font-semibold text-[#303A2C]">
                      Confirme o funcionamento e a disponibilidade do dia:
                    </strong>{" "}
                    Verifique pelo WhatsApp se a data escolhida possui vagas disponíveis e confira a
                    previsão das atividades ao ar livre.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#303A2C]">
                      Salve o link da rota antes de entrar em trechos de serra ou campo:
                    </strong>{" "}
                    Assim você garante a navegação no Waze ou Google Maps mesmo se o sinal de dados
                    oscilar na estrada.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#303A2C]">
                      Revise as regras de ingressos e alimentação:
                    </strong>{" "}
                    Confira nossas páginas de{" "}
                    <Link href="/ingressos" className="font-semibold text-[#315B3D] underline">
                      Ingressos
                    </Link>{" "}
                    e{" "}
                    <Link
                      href="/perguntas-frequentes"
                      className="font-semibold text-[#315B3D] underline"
                    >
                      Perguntas Frequentes
                    </Link>{" "}
                    para saber o que levar na mochila das crianças.
                  </li>
                </ol>
                <div className="pt-2">
                  <Link
                    href="/ingressos"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#315B3D] hover:text-[#24452D]"
                  >
                    <span>Ver checklist completo do que levar na visita</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Receber localização e planejar visita"
                subtitle="Preencha a data desejada e envie sua mensagem para receber o endereço confirmado, o link do mapa e as informações de funcionamento."
                defaultExperience="Visita em família (Day Use)"
                formIdPrefix="directions-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Ficou com alguma dúvida sobre o trajeto ou estacionamento?"
        subtitle="Nossa equipe responde rapidamente pelo WhatsApp oficial para orientar sua vinda."
        defaultExperience="Outras dúvidas sobre a visita"
      />
    </>
  );
}
