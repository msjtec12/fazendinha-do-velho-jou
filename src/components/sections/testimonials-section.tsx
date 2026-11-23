import React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import {
  BadgeCheck,
  Instagram,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Star,
  MapPin,
} from "lucide-react";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";

export function TestimonialsSection() {
  const { testimonials, social } = siteConfig;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              Avaliações Reais & Comunidade Oficial
            </span>
            <h2
              id="testimonials-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#303A2C] leading-tight"
            >
              {testimonials.editorialCommitment.title}
            </h2>
            <p className="text-base sm:text-lg text-[#303A2C]/80 leading-relaxed">
              {testimonials.editorialCommitment.description}
            </p>
          </div>

          {/* Selo Resumo Google Maps 4,6 ★ (986 avaliações) */}
          <a
            href={social.googleReviews.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/15 hover:border-[#315B3D] px-6 py-4 shadow-2xs transition-colors shrink-0 self-start lg:self-auto"
          >
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold text-[#303A2C]">
                  {social.googleReviews.rating}
                </span>
                <div className="flex items-center text-[#E5B74A]" aria-label="4,6 de 5 estrelas">
                  <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-current opacity-75" aria-hidden="true" />
                </div>
              </div>
              <p className="text-xs font-semibold text-[#315B3D] mt-0.5">
                {social.googleReviews.countLabel}
              </p>
              <p className="text-[11px] text-[#303A2C]/70">
                {social.googleReviews.category} • Mairiporã - SP
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-[#303A2C]/50" aria-hidden="true" />
          </a>
        </div>

        {/* 3 Comentários Reais do Google Business Profile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.verifiedItems.map((item) => (
            <blockquote
              key={item.id}
              className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/15 p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[#E5B74A]" aria-label="5 estrelas">
                    <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-[#EFE6D5] px-2.5 py-0.5 text-[11px] font-semibold text-[#315B3D]">
                    {item.sourceLabel}
                  </span>
                </div>
                <p className="text-base text-[#303A2C] font-medium leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <footer className="pt-3 border-t border-[#303A2C]/10 flex items-center justify-between text-xs text-[#303A2C]/75">
                <span className="font-semibold text-[#303A2C]">{item.visitContext}</span>
                <span>{item.visitDate}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Card Editorial do Perfil Verificado @fazendinhavelhojou */}
        <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/15 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Coluna 1: Cabeçalho e Destaques fiéis ao Instagram @fazendinhavelhojou */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Avatar com aro colorido de Stories e Logo Velho Jou */}
                <div className="relative h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-[#E5B74A] via-[#C47A45] to-[#315B3D] shrink-0">
                  <div className="relative h-full w-full rounded-full overflow-hidden bg-white border-2 border-[#FBF8F1]">
                    <Image
                      src="/images/logo-velho-jou.png"
                      alt="Avatar oficial Mini Fazendinha Velho Jou no Instagram"
                      fill
                      sizes="96px"
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#303A2C]">
                      fazendinhavelhojou
                    </h3>
                    <BadgeCheck
                      className="w-5 h-5 text-[#1D9BF0]"
                      aria-label="Perfil Verificado"
                    />
                    <span className="rounded-full bg-[#315B3D]/12 px-2.5 py-0.5 text-xs font-semibold text-[#315B3D]">
                      Fazendinha Velho Jou
                    </span>
                  </div>

                  {/* Contadores reais do perfil */}
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#303A2C]">
                    <span>
                      <strong className="font-bold">3.618</strong> posts
                    </span>
                    <span>
                      <strong className="font-bold">52,1 mil</strong> seguidores
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#315B3D] font-semibold">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Mairiporã - SP</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#303A2C]/85 leading-relaxed max-w-xl">
                    {social.bio}
                  </p>
                </div>
              </div>

              {/* Destaques do Perfil (Restaurante, Visitantes, Aniversário, Feedbacks, Aventuras FVJ, Escolas) */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#303A2C]/70 mb-3">
                  Destaques reais para assistir no nosso Instagram:
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  {social.highlights.map((highlight) => (
                    <a
                      key={highlight}
                      href={social.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-full bg-[#EFE6D5] hover:bg-[#315B3D] text-[#303A2C] hover:text-[#F7F0E3] border border-[#303A2C]/12 px-3.5 py-2 text-xs font-semibold transition-colors"
                    >
                      <Sparkles
                        className="w-3.5 h-3.5 text-[#C47A45] group-hover:text-[#E5B74A]"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </a>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 pt-2 border-t border-[#303A2C]/10">
                {testimonials.editorialCommitment.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#303A2C]/85"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#303A2C] hover:bg-[#315B3D] text-[#F7F0E3] font-semibold px-6 py-3 text-xs sm:text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E5B74A]" aria-hidden="true" />
                  <span>Seguir @fazendinhavelhojou</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <BookingTriggerButton
                  experience="Visita em família (Day Use)"
                  variant="primary"
                  size="md"
                >
                  <span>Agendar visita pelo WhatsApp</span>
                </BookingTriggerButton>
              </div>
            </div>

            {/* Coluna 2: Mosaico com as fotos reais do Velho Jou e da Fazendinha */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#303A2C]/15 shadow-sm">
                <Image
                  src="/images/velho-jou-anfitriao.jpg"
                  alt="Anfitrião da Mini Fazendinha Velho Jou sorrindo com chapéu de fazendeiro"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#303A2C]/15 shadow-sm">
                <Image
                  src="/images/velho-jou-miniporco.jpg"
                  alt="Anfitrião da Mini Fazendinha Velho Jou interagindo com o miniporco"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                  style={{ objectPosition: "center 25%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
