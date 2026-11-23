import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageHero } from "@/components/layout/page-hero";
import { FAQSection } from "@/components/sections/faq-section";
import { WhatsAppBookingCard } from "@/components/booking/whatsapp-booking-card";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Compass, Ticket, Utensils, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Perguntas Frequentes (FAQ) — Reservas, Horários, Regras e Almoço",
  description:
    "Tire todas as suas dúvidas sobre a visita à fazendinha: necessidade de reserva antecipada, horários, atrações, restaurante rural, entrada de alimentos, escolas e aniversários.",
  alternates: {
    canonical: "/perguntas-frequentes",
  },
  openGraph: {
    title: "Perguntas Frequentes (FAQ) — Reservas, Horários, Regras e Almoço",
    description:
      "Respostas transparentes para planejar seu passeio em família, excursão escolar ou comemoração de aniversário na fazendinha.",
    url: "/perguntas-frequentes",
  },
};

export default function PerguntasFrequentesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        breadcrumbs={[
          { label: "Perguntas Frequentes", href: "/perguntas-frequentes" },
        ]}
        eyebrow="Central de Ajuda & Transparência"
        title="Perguntas frequentes sobre a visita à fazendinha"
        description="Reunimos aqui as respostas verificadas para as principais dúvidas de famílias, aniversariantes e coordenadores escolares. Caso sua pergunta seja específica, fale diretamente conosco no WhatsApp."
        ctaLabel="Tirar dúvida no WhatsApp"
        defaultExperience="Outras dúvidas sobre a visita"
        image={siteConfig.gallery[3]}
      />

      <FAQSection
        items={siteConfig.faqs}
        showPageLink={false}
        title="Todas as respostas para um passeio tranquilo"
        subtitle="Clique em cada pergunta para expandir os detalhes. Não exibimos informações não confirmadas como fatos."
      />

      {/* Atalhos Rápidos + Formulário de Pré-Atendimento */}
      <section className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                Explore também nossas páginas detalhadas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/atracoes"
                  className="group rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-5 space-y-2 hover:border-[#315B3D] transition-colors"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#315B3D]/12 text-[#315B3D]">
                    <Compass className="w-4.5 h-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#303A2C] group-hover:text-[#315B3D]">
                    Atrações & Vivências
                  </h3>
                  <p className="text-xs text-[#303A2C]/80 leading-relaxed">
                    Veja como funciona o contato com animais, a horta e as brincadeiras ao ar livre.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#315B3D]">
                    <span>Acessar atrações</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>

                <Link
                  href="/ingressos"
                  className="group rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-5 space-y-2 hover:border-[#315B3D] transition-colors"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#315B3D]/12 text-[#315B3D]">
                    <Ticket className="w-4.5 h-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#303A2C] group-hover:text-[#315B3D]">
                    Ingressos & Preparação
                  </h3>
                  <p className="text-xs text-[#303A2C]/80 leading-relaxed">
                    Confira as modalidades de ingresso e o checklist do que levar na mochila.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#315B3D]">
                    <span>Acessar ingressos</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>

                <Link
                  href="/restaurante"
                  className="group rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-5 space-y-2 hover:border-[#315B3D] transition-colors sm:col-span-2"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#C47A45]/15 text-[#A6602E]">
                    <Utensils className="w-4.5 h-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#303A2C] group-hover:text-[#315B3D]">
                    Restaurante Rural & Alimentação Infantil
                  </h3>
                  <p className="text-xs text-[#303A2C]/80 leading-relaxed">
                    Saiba tudo sobre os pratos caseiros, sobremesas e atenção a restrições
                    alimentares ou bebês de colo.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#315B3D]">
                    <span>Conhecer o restaurante</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Ainda tem alguma dúvida?"
                subtitle="Envie sua pergunta acompanhada da data em que pensa nos visitar para que nossa equipe dê uma resposta completa."
                defaultExperience="Outras dúvidas sobre a visita"
                formIdPrefix="faq-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Tudo pronto para planejar seu dia no campo?"
        subtitle="Inicie seu pré-atendimento pelo WhatsApp oficial e receba todas as informações atualizadas."
        defaultExperience="Visita em família (Day Use)"
      />
    </>
  );
}
