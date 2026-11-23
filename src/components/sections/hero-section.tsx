import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";
import {
  CalendarCheck,
  Compass,
  MapPin,
  Clock,
  Info,
  Instagram,
  BadgeCheck,
} from "lucide-react";

export function HeroSection() {
  const { hero, social } = siteConfig;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Coluna Editorial (Logo + Badge Instagram + Título + CTAs + Info) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Barra de Identidade Oficial: Emblema Velho Jou + Instagram Verificado */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 border border-[#315B3D]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
                <span className="h-2 w-2 rounded-full bg-[#315B3D]" aria-hidden="true" />
                <span>{hero.badge}</span>
              </div>

              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FBF8F1] border border-[#303A2C]/15 hover:border-[#315B3D] px-3.5 py-1.5 text-xs font-semibold text-[#303A2C] transition-colors shadow-2xs"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C47A45]" aria-hidden="true" />
                <span>{social.instagramHandle}</span>
                <BadgeCheck className="w-3.5 h-3.5 text-[#1D9BF0]" aria-hidden="true" />
                <span className="text-[#303A2C]/70 font-normal">({social.followersLabel})</span>
              </a>
            </div>

            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold text-[#303A2C] leading-[1.08] tracking-tight"
            >
              {hero.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#303A2C]/85 leading-relaxed max-w-xl">
              {hero.subtitle}
            </p>

            {/* CTAs principais */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <BookingTriggerButton
                experience="Visita em família (Day Use)"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                <span>{hero.primaryCta}</span>
              </BookingTriggerButton>

              <Link
                href="/atracoes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#303A2C]/25 bg-[#FBF8F1] hover:border-[#315B3D] hover:bg-[#315B3D]/6 text-[#303A2C] font-semibold px-7 py-3.5 text-sm sm:text-base transition-colors"
              >
                <Compass className="w-5 h-5 text-[#315B3D]" aria-hidden="true" />
                <span>{hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Informações complementares verificadas (Mairiporã-SP, Dias, Agendamento) */}
            <div className="pt-4 border-t border-[#303A2C]/12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C47A45] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#303A2C]">
                    {hero.complementaryInfo[0].label}
                  </p>
                  <p className="text-xs text-[#303A2C]/80 mt-0.5 leading-snug">
                    {hero.complementaryInfo[0].value}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#315B3D] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#303A2C]">
                    {hero.complementaryInfo[1].label}
                  </p>
                  <p className="text-xs text-[#303A2C]/80 mt-0.5 leading-snug">
                    {hero.complementaryInfo[1].value}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#315B3D] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#303A2C]">
                    {hero.complementaryInfo[2].label}
                  </p>
                  <p className="text-xs text-[#303A2C]/80 mt-0.5 leading-snug">
                    {hero.complementaryInfo[2].value}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Fotográfica Responsiva Unificada com Logo e Fotos Reais Velho Jou */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full">
              {/* Moldura Principal Ampla (Único recurso visual LCP priorizado) */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-3xl lg:rounded-[2rem] border border-[#303A2C]/15 shadow-lg bg-[#EFE6D5]">
                <Image
                  src={hero.desktopImage.src}
                  alt={hero.desktopImage.alt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 48vw"
                  className="object-cover"
                  style={{ objectPosition: hero.desktopImage.objectPosition }}
                />

                {/* Selo Oficial com o Logo da Mini Fazendinha Velho Jou */}
                <div className="absolute bottom-3.5 left-3.5 rounded-2xl bg-white/95 backdrop-blur-xs border border-[#303A2C]/15 px-3 py-2 shadow-md flex items-center gap-3">
                  <div className="relative h-12 w-28 shrink-0">
                    <Image
                      src="/images/logo-velho-jou.png"
                      alt="Emblema Mini Fazendinha Velho Jou"
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                  <div className="hidden sm:block pr-1 border-l border-[#303A2C]/15 pl-3">
                    <p className="text-xs font-bold text-[#303A2C] leading-tight">
                      Mini Fazendinha Velho Jou
                    </p>
                    <p className="text-[11px] text-[#315B3D] font-medium">
                      Contato direto com animais • Mairiporã
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Secundário com as 2 fotos reais do Anfitrião Velho Jou */}
              <div className="mt-3.5 sm:mt-4 grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 items-stretch w-full">
                <div className="sm:col-span-4 relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#303A2C]/15 shadow-sm bg-[#EFE6D5]">
                  <Image
                    src="/images/velho-jou-miniporco.jpg"
                    alt="Anfitrião da Mini Fazendinha Velho Jou com miniporco no cercado"
                    fill
                    sizes="(max-width: 640px) 92vw, 18vw"
                    className="object-cover"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
                <div className="sm:col-span-4 relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#303A2C]/15 shadow-sm bg-[#EFE6D5]">
                  <Image
                    src="/images/velho-jou-anfitriao.jpg"
                    alt="Anfitrião da Mini Fazendinha Velho Jou recebendo visitantes com chapéu"
                    fill
                    sizes="(max-width: 640px) 92vw, 18vw"
                    className="object-cover"
                    style={{ objectPosition: "center 25%" }}
                  />
                </div>
                <div className="sm:col-span-4 rounded-2xl bg-[#FBF8F1] border border-[#303A2C]/12 p-4 shadow-xs flex flex-col justify-center">
                  <p className="font-serif text-base font-semibold text-[#303A2C] leading-snug">
                    Recepção acolhedora do Velho Jou
                  </p>
                  <p className="text-xs text-[#303A2C]/80 mt-1 leading-relaxed">
                    Mamadeira para cabritos, miniporcos, pônei, trenzinho e comida caipira no fogão a
                    lenha.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
