"use client";

import React from "react";
import { ExperienceType } from "@/lib/whatsapp";
import { WhatsAppBookingForm } from "./whatsapp-booking-form";
import { Sparkles } from "lucide-react";

interface WhatsAppBookingCardProps {
  title?: string;
  subtitle?: string;
  defaultExperience?: ExperienceType;
  formIdPrefix?: string;
}

export function WhatsAppBookingCard({
  title = "Consulte sua visita pelo WhatsApp",
  subtitle = "Preencha os dados básicos do passeio para gerar uma mensagem organizada diretamente para a nossa equipe.",
  defaultExperience = "Visita em família (Day Use)",
  formIdPrefix = "inline-booking",
}: WhatsAppBookingCardProps) {
  return (
    <div className="rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/15 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#315B3D]/10 px-3 py-1 text-xs font-semibold text-[#315B3D] mb-2.5">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Atendimento Humano & Rápido</span>
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-[#303A2C]/80 leading-relaxed">
          {subtitle}
        </p>
      </div>
      <WhatsAppBookingForm
        defaultExperience={defaultExperience}
        formIdPrefix={formIdPrefix}
      />
    </div>
  );
}
