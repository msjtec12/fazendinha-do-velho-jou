"use client";

import React from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingSocialActions() {
  const quickMessage =
    "Olá! Vim pelo site da Mini Fazendinha Velho Jou e gostaria de informações sobre ingressos e agendamento de visita.";
  const whatsappHref = buildWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    quickMessage
  );

  return (
    <aside
      aria-label="Acesso rápido ao WhatsApp e Instagram"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none"
    >
      {/* Botão Flutuante do Instagram Oficial @fazendinhavelhojou */}
      <a
        href={siteConfig.social.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir @fazendinhavelhojou no Instagram"
        title="Ver vídeos e fotos no Instagram @fazendinhavelhojou"
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#C47A45] via-[#C13584] to-[#E5B74A] p-0.5 shadow-lg hover:scale-105 transition-transform"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FBF8F1] group-hover:bg-transparent group-hover:text-white text-[#303A2C] px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition-colors">
          <Instagram
            className="w-5 h-5 text-[#C13584] group-hover:text-white shrink-0 transition-colors"
            aria-hidden="true"
          />
          <span className="hidden sm:inline">@fazendinhavelhojou</span>
        </span>
      </a>

      {/* Botão Flutuante Principal do WhatsApp Oficial (11) 94280-7987 */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp ${siteConfig.contact.whatsappDisplay}`}
        title={`Agendar visita pelo WhatsApp ${siteConfig.contact.whatsappDisplay}`}
        className="pointer-events-auto group inline-flex items-center gap-2.5 rounded-full bg-[#1F8A4C] hover:bg-[#176B3A] text-white font-semibold px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm shadow-xl hover:scale-105 transition-all border border-white/20"
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A7F3D0] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6EE7B7]" />
        </span>
        <MessageCircle className="w-5 h-5 shrink-0 fill-white/15" aria-hidden="true" />
        <span>WhatsApp</span>
        <span className="hidden md:inline text-white/90 font-normal">
          • Agendar visita
        </span>
      </a>
    </aside>
  );
}
