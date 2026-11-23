import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";
import { Utensils, ArrowRight, Info } from "lucide-react";

export function GastronomySection() {
  const { gastronomy } = siteConfig;

  return (
    <section
      id="gastronomia"
      aria-labelledby="gastronomy-heading"
      className="py-16 sm:py-24 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Composição Visual Editorial */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#303A2C]/15 shadow-md bg-[#EFE6D5]">
              <Image
                src={gastronomy.imageMain.src}
                alt={gastronomy.imageMain.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: gastronomy.imageMain.objectPosition }}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto rounded-2xl bg-[#303A2C]/90 backdrop-blur-xs text-[#F7F0E3] px-4 py-3 text-xs sm:text-sm">
                <span className="font-semibold text-[#E5B74A] block">
                  Restaurante Rural no Local
                </span>
                <span>Receitas tradicionais feitas com ingredientes frescos da estação</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-5 relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#303A2C]/15">
                <Image
                  src={gastronomy.imageSecondary.src}
                  alt={gastronomy.imageSecondary.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 20vw"
                  className="object-cover"
                  style={{ objectPosition: gastronomy.imageSecondary.objectPosition }}
                />
              </div>
              <div className="sm:col-span-7 rounded-2xl bg-[#EFE6D5] border border-[#303A2C]/12 p-4 text-xs sm:text-sm text-[#303A2C]/85 leading-relaxed">
                <strong className="font-semibold text-[#303A2C] block mb-1">
                  Atenção às famílias com crianças pequenas:
                </strong>
                Contamos com opções suaves para o paladar infantil. Em caso de alergias ou
                alimentação para bebês, avise nossa equipe no pré-atendimento.
              </div>
            </div>
          </div>

          {/* Conteúdo Editorial + Destaques do Cardápio + CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C47A45]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#A6602E]">
                <Utensils className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{gastronomy.eyebrow}</span>
              </span>
              <h2
                id="gastronomy-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#303A2C] leading-tight"
              >
                {gastronomy.title}
              </h2>
              <p className="text-base sm:text-lg text-[#303A2C]/85 leading-relaxed">
                {gastronomy.subtitle}
              </p>
              <p className="text-sm sm:text-base text-[#303A2C]/75 leading-relaxed">
                {gastronomy.description}
              </p>
            </div>

            {/* Destaques do Cardápio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {gastronomy.highlights.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#FBF8F1] border border-[#303A2C]/12 p-4 space-y-1.5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C47A45]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#303A2C]">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#303A2C]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Informações sobre alimentação */}
            <div className="rounded-2xl bg-[#EFE6D5]/70 border border-[#303A2C]/12 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#303A2C]">
                <Info className="w-4 h-4 text-[#315B3D]" aria-hidden="true" />
                <span>Informações sobre alimentação</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#303A2C]/80 list-disc pl-5">
                {gastronomy.policies.map((policy) => (
                  <li key={policy}>{policy}</li>
                ))}
              </ul>
            </div>

            {/* CTAs para consultar menu e preços */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <BookingTriggerButton
                experience="Almoço no restaurante rural"
                variant="terracotta"
                size="lg"
              >
                <Utensils className="w-4.5 h-4.5" aria-hidden="true" />
                <span>Consultar menu e preços no WhatsApp</span>
              </BookingTriggerButton>

              <Link
                href="/restaurante"
                className="inline-flex items-center gap-2 rounded-full border border-[#303A2C]/25 bg-[#FBF8F1] hover:border-[#315B3D] px-6 py-3.5 text-sm font-semibold text-[#303A2C] transition-colors"
              >
                <span>Conhecer o restaurante</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
