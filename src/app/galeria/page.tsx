import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { GallerySection } from "@/components/sections/gallery-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { Compass, Utensils, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeria de Fotos — Animais, Natureza e Vida no Campo",
  description:
    "Explore a galeria de fotografias da fazendinha: interação das crianças com animais, horta educativa, trilhas arborizadas, brincadeiras ao ar livre e restaurante rural.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: "Galeria de Fotos — Animais, Natureza e Vida no Campo",
    description:
      "Veja imagens da atmosfera acolhedora da nossa fazendinha: animais, família, gastronomia rural e áreas verdes.",
    url: "/galeria",
    images: ["/images/hero-family-farm.jpg"],
  },
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Galeria", href: "/galeria" }]}
        eyebrow="Acervo Visual & Atmosfera"
        title="Momentos reais de descoberta e contato com a natureza"
        description="Explore os ambientes, o cuidado com os animais, a horta educativa e a gastronomia de fazenda. Use os filtros por categoria ou amplie as imagens com navegação por teclado."
        ctaLabel="Planejar nossa visita"
        defaultExperience="Visita em família (Day Use)"
      />

      <GallerySection showViewAllLink={false} headingLevel="h2" />

      {/* Navegação Contextual */}
      <section
        aria-labelledby="gallery-context-heading"
        className="py-14 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2
                id="gallery-context-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]"
              >
                Quer saber como cada atividade funciona na prática?
              </h2>
              <p className="text-sm sm:text-base text-[#303A2C]/80 mt-1">
                Confira o detalhamento de cada vivência ou veja os pratos do nosso restaurante.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/atracoes"
                className="inline-flex items-center gap-2 rounded-full bg-[#303A2C] hover:bg-[#315B3D] text-[#F7F0E3] px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Ver guia de atrações</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/restaurante"
                className="inline-flex items-center gap-2 rounded-full border border-[#303A2C]/25 bg-[#FBF8F1] hover:border-[#315B3D] text-[#303A2C] px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Utensils className="w-4 h-4 text-[#C47A45]" aria-hidden="true" />
                <span>Conhecer o restaurante</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Venha viver essas experiências ao vivo com sua família"
        subtitle="Consulte a programação do próximo fim de semana diretamente pelo nosso WhatsApp oficial."
        defaultExperience="Visita em família (Day Use)"
      />
    </>
  );
}
