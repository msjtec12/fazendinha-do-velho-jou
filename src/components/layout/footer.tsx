import React from "react";
import Link from "next/link";
import { Trees, MapPin, Clock, ShieldAlert, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#303A2C] text-[#F7F0E3] border-t border-[#F7F0E3]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Coluna 1: Identidade e Proposta */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[#F7F0E3] focus:outline-none"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315B3D] text-[#F7F0E3] border border-[#F7F0E3]/15">
                <Trees className="h-5.5 w-5.5" aria-hidden="true" />
              </span>
              <div>
                <span className="font-serif text-xl font-semibold block leading-none">
                  Fazendinha
                </span>
                <span className="text-xs uppercase tracking-wider text-[#E5B74A] block mt-1">
                  Experiências Rurais
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#F7F0E3]/80 leading-relaxed max-w-sm">
              {siteConfig.brand.tagline} {siteConfig.brand.subtitle}
            </p>
            <div className="pt-2">
              <BookingTriggerButton
                variant="terracotta"
                size="md"
                experience="Visita em família (Day Use)"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Planejar visita pelo WhatsApp</span>
              </BookingTriggerButton>
            </div>
          </div>

          {/* Coluna 2: Mapa do Site */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="font-serif text-lg font-semibold text-[#F7F0E3]">
              Explorar o site
            </h2>
            <ul className="space-y-2 text-sm text-[#F7F0E3]/80">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#E5B74A] transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Experiências */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="font-serif text-lg font-semibold text-[#F7F0E3]">
              Vivências
            </h2>
            <ul className="space-y-2 text-sm text-[#F7F0E3]/80">
              <li>
                <Link href="/atracoes" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Contato com animais
                </Link>
              </li>
              <li>
                <Link href="/atracoes" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Horta & Oficinas
                </Link>
              </li>
              <li>
                <Link href="/restaurante" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Restaurante Rural
                </Link>
              </li>
              <li>
                <Link href="/passeios-escolares" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Roteiros Escolares
                </Link>
              </li>
              <li>
                <Link href="/aniversarios" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Aniversários no Campo
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Informações de Atendimento */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="font-serif text-lg font-semibold text-[#F7F0E3]">
              Atendimento & Visitação
            </h2>
            <ul className="space-y-3 text-sm text-[#F7F0E3]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5B74A] shrink-0 mt-1" aria-hidden="true" />
                <span>{siteConfig.contact.cityRegionLabel}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E5B74A] shrink-0 mt-1" aria-hidden="true" />
                <span>{siteConfig.contact.openingDaysSummary}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#E5B74A] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  Valores, horários vigentes e confirmação de reserva são informados pelo canal
                  oficial de atendimento.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F7F0E3]/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F0E3]/70">
          <p>
            © {currentYear} {siteConfig.brand.name}. Todos os direitos reservados.
          </p>
          <p>
            Atendimento transparente • Sem coleta desnecessária de dados pessoais.
          </p>
        </div>
      </div>
    </footer>
  );
}
