import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageHero } from "@/components/layout/page-hero";
import { WhatsAppBookingCard } from "@/components/booking/whatsapp-booking-card";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import {
  PartyPopper,
  Cake,
  CheckCircle2,
  Utensils,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aniversários na Fazendinha — Comemore em Meio à Natureza",
  description:
    "Comemore o aniversário infantil ou familiar ao ar livre na fazendinha: contato com animais, brincadeiras na natureza, almoço rural e espaço para cantar parabéns.",
  alternates: {
    canonical: "/aniversarios",
  },
  openGraph: {
    title: "Aniversários na Fazendinha — Comemore em Meio à Natureza",
    description:
      "Uma festa diferente, com pé na grama, animais dóceis, ar puro e comida de fazenda para celebrar com quem você ama.",
    url: "/aniversarios",
    images: ["/images/pony-ride-pasture.jpg"],
  },
};

export default function AniversariosPage() {
  const { birthdays } = siteConfig;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Aniversários", href: "/aniversarios" }]}
        eyebrow="Celebrações ao Ar Livre"
        title="Comemore aniversários em meio à natureza"
        description="Substitua o barulho dos salões fechados pela alegria de um dia inteiro no campo. As crianças alimentam animais, correm na grama e você reúne amigos e familiares em torno de um almoço rural inesquecível."
        ctaLabel="Consultar data para aniversário"
        defaultExperience="Comemoração de aniversário"
        image={siteConfig.experiences[2].image}
      />

      {/* Passo a passo para organizar a comemoração */}
      <section
        aria-labelledby="birthday-steps-heading"
        className="py-16 sm:py-24 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E5B74A]/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#303A2C]">
              <PartyPopper className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{birthdays.title}</span>
            </span>
            <h2
              id="birthday-steps-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C]"
            >
              Como funciona a comemoração de aniversário na fazendinha
            </h2>
            <p className="text-base text-[#303A2C]/80 leading-relaxed">
              {birthdays.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {birthdays.steps.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-4 shadow-2xs"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315B3D] text-[#F7F0E3] font-serif text-lg font-semibold">
                  {item.step}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#303A2C]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Orientações de Bolo, Convidados e Restaurante + Formulário */}
      <section className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C47A45]/15 px-3.5 py-1 text-xs font-semibold text-[#A6602E]">
                  <Cake className="w-4 h-4" aria-hidden="true" />
                  <span>Hora do Parabéns & Organização</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                  Dúvidas comuns de quem comemora conosco
                </h2>
                <ul className="space-y-3 pt-1">
                  <li className="flex items-start gap-2.5 text-sm text-[#303A2C]/85">
                    <CheckCircle2
                      className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-[#303A2C]">
                        Bolo e docinhos de aniversário:
                      </strong>{" "}
                      Consulte nossa equipe sobre as orientações para trazer o bolo e docinhos de
                      parabéns em dias normais de visitação.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#303A2C]/85">
                    <CheckCircle2
                      className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-[#303A2C]">
                        Lista de convidados descomplicada:
                      </strong>{" "}
                      Orientamos como organizar a chegada dos seus convidados na portaria e como
                      funciona a aquisição individual ou em grupo dos{" "}
                      <Link href="/ingressos" className="font-semibold text-[#315B3D] underline">
                        ingressos de acesso
                      </Link>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#303A2C]/85">
                    <CheckCircle2
                      className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-[#303A2C]">
                        Almoço e bebidas no local:
                      </strong>{" "}
                      Os convidados contam com toda a comodidade do nosso{" "}
                      <Link href="/restaurante" className="font-semibold text-[#315B3D] underline">
                        restaurante rural
                      </Link>{" "}
                      para almoçar sem que a família precise se preocupar com buffet externo.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#315B3D]">
                    <Utensils className="w-4 h-4" aria-hidden="true" />
                    <span>Gastronomia para seus convidados</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#303A2C]">
                    Quer conhecer os pratos servidos no almoço?
                  </h3>
                </div>
                <Link
                  href="/restaurante"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#EFE6D5] hover:bg-[#315B3D] hover:text-[#F7F0E3] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#303A2C] transition-colors shrink-0"
                >
                  <span>Ver página do restaurante</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Consultar aniversário na fazendinha"
                subtitle="Informe a data desejada, a quantidade estimada de adultos e crianças convidados e a idade do aniversariante nas observações."
                defaultExperience="Comemoração de aniversário"
                formIdPrefix="birthday-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Transforme o próximo aniversário em uma memória para a vida toda"
        subtitle="Fale com nossa equipe pelo WhatsApp oficial e veja como organizar uma comemoração leve e autêntica no campo."
        defaultExperience="Comemoração de aniversário"
        secondaryHref="/atracoes"
        secondaryLabel="Conhecer todas as atrações"
      />
    </>
  );
}
