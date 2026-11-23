import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageHero } from "@/components/layout/page-hero";
import { WhatsAppBookingCard } from "@/components/booking/whatsapp-booking-card";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import {
  GraduationCap,
  Sprout,
  CheckCircle2,
  ShieldCheck,
  Bus,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Passeios Escolares na Fazendinha — Roteiros Pedagógicos no Campo",
  description:
    "Estudo do meio e passeio escolar em fazendinha para Educação Infantil e Ensino Fundamental: vivências com animais, horta sensorial, educação ambiental e estrutura segura.",
  alternates: {
    canonical: "/passeios-escolares",
  },
  openGraph: {
    title: "Passeios Escolares na Fazendinha — Roteiros Pedagógicos no Campo",
    description:
      "O campo como sala de aula viva: roteiros educativos por faixa etária, monitoria especializada e infraestrutura completa para escolas.",
    url: "/passeios-escolares",
    images: ["/images/educational-garden.jpg"],
  },
};

export default function PasseiosEscolaresPage() {
  const { schoolVisits } = siteConfig;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Passeios Escolares", href: "/passeios-escolares" }]}
        eyebrow="Educação Ambiental & Estudo do Meio"
        title="Roteiros pedagógicos e vivências no campo para escolas"
        description="Transformamos a curiosidade natural dos alunos em aprendizado prático. Recebemos turmas de Educação Infantil e Ensino Fundamental com atividades guiadas sobre animais, ciclo dos alimentos, horta e sustentabilidade."
        ctaLabel="Solicitar portfólio escolar via WhatsApp"
        defaultExperience="Passeio escolar / grupo pedagógico"
        image={siteConfig.experiences[1].image}
      />

      {/* Proposta Pedagógica por Faixa Etária */}
      <section
        aria-labelledby="pedagogical-tracks-heading"
        className="py-16 sm:py-24 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{schoolVisits.title}</span>
            </span>
            <h2
              id="pedagogical-tracks-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C]"
            >
              Vivências adaptadas a cada etapa do desenvolvimento escolar
            </h2>
            <p className="text-base text-[#303A2C]/80 leading-relaxed">
              {schoolVisits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schoolVisits.ageGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-7 space-y-3 shadow-2xs"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315B3D]/12 text-[#315B3D]">
                  <Sprout className="w-5.5 h-5.5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#303A2C]">
                  {group.title}
                </h3>
                <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                  {group.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura para Professores e Coordenadores + Formulário Escolar */}
      <section className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold text-[#315B3D]">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Tranquilidade para a Coordenação Pedagógica</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                  Organização, acolhimento e segurança do desembarque ao retorno
                </h2>
                <p className="text-sm sm:text-base text-[#303A2C]/80 leading-relaxed">
                  Sabemos da responsabilidade que envolve tirar uma turma da escola. Por isso,
                  estruturamos o atendimento escolar em dias e horários dedicados para que seus
                  alunos tenham atenção exclusiva.
                </p>
                <ul className="space-y-3 pt-1">
                  {schoolVisits.differentials.map((diff) => (
                    <li
                      key={diff}
                      className="flex items-start gap-2.5 text-sm text-[#303A2C]/85"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C47A45]">
                  <Bus className="w-4 h-4" aria-hidden="true" />
                  <span>Logística & Alimentação Escolar</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#303A2C]">
                  Opções flexíveis de lanche e almoço para turmas
                </h3>
                <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                  Ao solicitar o portfólio escolar pelo WhatsApp, informe a faixa etária dos alunos,
                  a quantidade estimada de crianças e se a escola deseja incluir lanche da manhã,
                  almoço no{" "}
                  <Link href="/restaurante" className="font-semibold text-[#315B3D] underline">
                    restaurante da fazendinha
                  </Link>{" "}
                  ou período integral.
                </p>
                <div className="pt-1">
                  <Link
                    href="/atracoes"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#315B3D] hover:text-[#24452D]"
                  >
                    <span>Conhecer todas as estações de vivência e animais</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <WhatsAppBookingCard
                title="Solicitar proposta para escola"
                subtitle="Preencha a data pretendida, número estimado de educadores (adultos) e alunos (crianças), e informe o nome da instituição nas observações."
                defaultExperience="Passeio escolar / grupo pedagógico"
                formIdPrefix="school-page-booking"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Agende uma visita técnica para a coordenação da sua escola"
        subtitle="Teremos prazer em apresentar o espaço e enviar nosso material pedagógico completo pelo WhatsApp."
        defaultExperience="Passeio escolar / grupo pedagógico"
        secondaryHref="/galeria"
        secondaryLabel="Ver fotos do espaço na galeria"
      />
    </>
  );
}
