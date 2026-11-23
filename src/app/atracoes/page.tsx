import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";
import {
  CheckCircle2,
  Clock,
  Users,
  CalendarCheck,
  Utensils,
  GraduationCap,
  PartyPopper,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Atrações e Experiências Rurais para Crianças e Famílias",
  description:
    "Conheça todas as atrações da fazendinha: contato supervisionado com animais, horta educativa, passeios no campo, brincadeiras ao ar livre e vivências na natureza.",
  alternates: {
    canonical: "/atracoes",
  },
  openGraph: {
    title: "Atrações e Experiências Rurais para Crianças e Famílias",
    description:
      "Vivências reais no campo para crianças e adultos: alimentação assistida de animais, horta sensorial, gramados amplos e descanso na natureza.",
    url: "/atracoes",
    images: ["/images/animal-goat-feeding.jpg"],
  },
};

export default function AtracoesPage() {
  const { experiences } = siteConfig;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Atrações", href: "/atracoes" }]}
        eyebrow="Vivências ao ar livre"
        title="Atrações e experiências no campo para toda a família"
        description="Nossa proposta une o encanto das descobertas infantis ao sossego da vida rural. Todas as atividades priorizam o respeito aos animais, a segurança das crianças e o convívio familiar sem pressa."
        ctaLabel="Consultar visita pelo WhatsApp"
        defaultExperience="Visita em família (Day Use)"
        image={siteConfig.experiences[0].image}
      />

      {/* Navegação rápida por âncoras das categorias */}
      <section
        aria-label="Índice de categorias de atrações"
        className="py-6 bg-[#FBF8F1] border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#303A2C]/70 mr-2">
            Ir direto para:
          </span>
          {experiences.map((exp) => (
            <a
              key={exp.id}
              href={`#${exp.slug}`}
              className="rounded-full bg-[#EFE6D5] hover:bg-[#315B3D] hover:text-[#F7F0E3] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#303A2C] transition-colors"
            >
              {exp.category}
            </a>
          ))}
        </div>
      </section>

      {/* Detalhamento editorial de cada categoria de experiência */}
      <section className="py-16 sm:py-24 border-b border-[#303A2C]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {experiences.map((exp, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <article
                key={exp.id}
                id={exp.slug}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#303A2C]/15 shadow-md bg-[#EFE6D5]">
                    <Image
                      src={exp.image.src}
                      alt={exp.image.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: exp.image.objectPosition ?? "center center" }}
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="inline-flex items-center rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
                    {exp.category}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#303A2C] leading-tight">
                    {exp.title}
                  </h2>

                  <p className="text-base text-[#303A2C]/85 leading-relaxed">
                    {exp.detailedDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="rounded-2xl bg-[#FBF8F1] border border-[#303A2C]/12 p-3.5 flex items-start gap-2.5">
                      <Users className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-[#303A2C]">Faixa etária</p>
                        <p className="text-xs text-[#303A2C]/80 mt-0.5">
                          {exp.ageRecommendation}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#FBF8F1] border border-[#303A2C]/12 p-3.5 flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#C47A45] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-[#303A2C]">Dinâmica</p>
                        <p className="text-xs text-[#303A2C]/80 mt-0.5">{exp.durationNote}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#303A2C]/75">
                      Destaques da vivência:
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((item) => (
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

                  <div className="pt-2">
                    <BookingTriggerButton
                      experience="Visita em família (Day Use)"
                      variant="primary"
                      size="md"
                    >
                      <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                      <span>Consultar programação desta atividade</span>
                    </BookingTriggerButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Links Internos Contextuais para Jornada Completa */}
      <section
        aria-labelledby="related-journeys-heading"
        className="py-16 bg-[#EFE6D5]/70 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="related-journeys-heading"
            className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C] mb-8"
          >
            Complete o planejamento do seu dia na fazendinha
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/restaurante"
              className="group rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 space-y-3 hover:border-[#315B3D] transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C47A45]/15 text-[#A6602E]">
                <Utensils className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#303A2C] group-hover:text-[#315B3D]">
                Almoço no Restaurante Rural
              </h3>
              <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                Veja como funciona nossa cozinha de fazenda, pratos típicos e opções para as
                crianças recarregarem as energias.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#315B3D]">
                <span>Explorar cardápio e restaurante</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>

            <Link
              href="/passeios-escolares"
              className="group rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 space-y-3 hover:border-[#315B3D] transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#315B3D]/12 text-[#315B3D]">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#303A2C] group-hover:text-[#315B3D]">
                Roteiros para Escolas
              </h3>
              <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                Conheça as atividades pedagógicas estruturadas para Educação Infantil e Ensino
                Fundamental com monitoria.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#315B3D]">
                <span>Ver proposta pedagógica</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>

            <Link
              href="/aniversarios"
              className="group rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 space-y-3 hover:border-[#315B3D] transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E5B74A]/25 text-[#303A2C]">
                <PartyPopper className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#303A2C] group-hover:text-[#315B3D]">
                Aniversários no Campo
              </h3>
              <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                Descubra como reunir amigos e familiares para cantar parabéns ao ar livre após um
                dia inteiro de vivências.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#315B3D]">
                <span>Como comemorar conosco</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Gostou das experiências? Consulte a programação do próximo fim de semana"
        subtitle="Nossa equipe informa os horários das atividades guiadas e ajuda você a planejar o passeio ideal para a idade dos seus filhos."
        defaultExperience="Visita em família (Day Use)"
      />
    </>
  );
}
