import React from "react";
import Link from "next/link";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";
import { ExperienceType } from "@/lib/whatsapp";
import { CalendarCheck, Compass, Sparkles } from "lucide-react";

interface FinalCTASectionProps {
  title?: string;
  subtitle?: string;
  defaultExperience?: ExperienceType;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function FinalCTASection({
  title = "Pronto para viver um dia inesquecível no campo com sua família?",
  subtitle = "Organize sua consulta em menos de um minuto e fale diretamente com nossa equipe pelo WhatsApp oficial para confirmar horários, valores e programação.",
  defaultExperience = "Visita em família (Day Use)",
  secondaryHref = "/ingressos",
  secondaryLabel = "Ver informações de ingressos",
}: FinalCTASectionProps) {
  return (
    <section aria-labelledby="final-cta-heading" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#315B3D] text-[#F7F0E3] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 shadow-xl border border-[#303A2C]/15">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F7F0E3]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#E5B74A]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Canal Oficial de Atendimento</span>
            </span>

            <h2
              id="final-cta-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F7F0E3] leading-tight"
            >
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#F7F0E3]/85 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <BookingTriggerButton
                experience={defaultExperience}
                variant="light"
                size="lg"
                className="w-full sm:w-auto"
              >
                <CalendarCheck className="w-5 h-5 text-[#315B3D]" aria-hidden="true" />
                <span>Planejar minha visita pelo WhatsApp</span>
              </BookingTriggerButton>

              <Link
                href={secondaryHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#F7F0E3]/35 hover:bg-[#F7F0E3]/10 text-[#F7F0E3] font-semibold px-7 py-3.5 text-sm sm:text-base transition-colors"
              >
                <Compass className="w-5 h-5 text-[#E5B74A]" aria-hidden="true" />
                <span>{secondaryLabel}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
