import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { WhatsAppBookingCard } from "@/components/booking/whatsapp-booking-card";
import {
  Clock,
  CalendarCheck,
  Ticket,
  ShieldCheck,
  Accessibility,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const cardIcons = {
  horarios: Clock,
  reservas: CalendarCheck,
  valores: Ticket,
  regras: ShieldCheck,
  "estrutura-acessibilidade": Accessibility,
  localizacao: MapPin,
};

export function PlanVisitSection() {
  const { planning } = siteConfig;

  return (
    <section
      id="planeje-seu-passeio"
      aria-labelledby="plan-visit-heading"
      className="py-16 sm:py-24 bg-[#EFE6D5]/65 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
            {planning.eyebrow}
          </span>
          <h2
            id="plan-visit-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#303A2C] leading-tight"
          >
            {planning.title}
          </h2>
          <p className="text-base sm:text-lg text-[#303A2C]/80 leading-relaxed">
            {planning.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Grade dos 6 blocos funcionais configuráveis */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {planning.cards.map((card) => {
              const IconComponent =
                cardIcons[card.id as keyof typeof cardIcons] ?? Clock;

              return (
                <div
                  key={card.id}
                  className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 flex flex-col justify-between space-y-4 shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#315B3D]/12 text-[#315B3D]">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-[#EFE6D5] px-3 py-1 text-[11px] font-semibold text-[#303A2C]/85">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#303A2C]">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#303A2C]/80 leading-relaxed">
                      {card.summary}
                    </p>

                    <ul className="space-y-1.5 pt-1 text-xs text-[#303A2C]/80 list-disc pl-4">
                      {card.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            <div className="sm:col-span-2 rounded-2xl bg-[#303A2C] text-[#F7F0E3] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-serif text-lg font-semibold">
                  Quer conferir orientações de estrada e regras detalhadas?
                </p>
                <p className="text-xs text-[#F7F0E3]/80">
                  Acesse nossas páginas dedicadas de Ingressos e Como Chegar.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <Link
                  href="/ingressos"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F0E3] text-[#303A2C] hover:bg-[#E5B74A] px-4 py-2 text-xs font-semibold transition-colors"
                >
                  <span>Ingressos</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/como-chegar"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#F7F0E3]/30 text-[#F7F0E3] hover:bg-[#F7F0E3]/10 px-4 py-2 text-xs font-semibold transition-colors"
                >
                  <span>Como chegar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Fluxo de Pré-Atendimento via WhatsApp Integrado */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <WhatsAppBookingCard
              title="Inicie seu pré-atendimento"
              subtitle="Escolha a experiência, a data desejada e o número de visitantes para receber valores atualizados e disponibilidade diretamente no WhatsApp."
              formIdPrefix="home-plan-booking"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
