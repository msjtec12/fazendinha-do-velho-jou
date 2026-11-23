import React from "react";
import { siteConfig } from "@/content/site-config";
import { ShieldCheck, MessageSquareHeart, CheckCircle2 } from "lucide-react";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";

export function TestimonialsSection() {
  const { testimonials } = siteConfig;
  const hasVerifiedTestimonials = testimonials.verifiedItems.length > 0;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-20 bg-[#EFE6D5]/60 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
            Relatos & Transparência
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C] leading-tight"
          >
            A confiança de quem valoriza experiências reais
          </h2>
        </div>

        {hasVerifiedTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.verifiedItems.map((item) => (
              <blockquote
                key={item.id}
                className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 flex flex-col justify-between space-y-4"
              >
                <p className="text-sm sm:text-base text-[#303A2C]/90 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="pt-3 border-t border-[#303A2C]/10">
                  <p className="font-serif text-base font-semibold text-[#303A2C]">
                    {item.authorName}
                  </p>
                  <p className="text-xs text-[#303A2C]/70">
                    {item.visitContext} • {item.visitDate} ({item.sourceLabel})
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/15 p-6 sm:p-10 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/10 px-3.5 py-1 text-xs font-semibold text-[#315B3D]">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Política de Integridade Editorial</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                  {testimonials.editorialCommitment.title}
                </h3>
                <p className="text-sm sm:text-base text-[#303A2C]/80 leading-relaxed">
                  {testimonials.editorialCommitment.description}
                </p>
                <ul className="space-y-2 pt-1">
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
              </div>

              <div className="lg:col-span-4 rounded-2xl bg-[#EFE6D5] border border-[#303A2C]/12 p-6 space-y-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315B3D] text-[#F7F0E3]">
                  <MessageSquareHeart className="w-5.5 h-5.5" aria-hidden="true" />
                </div>
                <p className="font-serif text-lg font-semibold text-[#303A2C]">
                  Já visitou a fazendinha ou quer referências para sua escola?
                </p>
                <p className="text-xs sm:text-sm text-[#303A2C]/80 leading-relaxed">
                  Converse com nossa equipe no WhatsApp para conhecer nossos registros oficiais ou
                  compartilhar o relato autorizado da sua família.
                </p>
                <BookingTriggerButton
                  experience="Outras dúvidas sobre a visita"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  <span>Falar com o atendimento oficial</span>
                </BookingTriggerButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
