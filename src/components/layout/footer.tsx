import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#303A2C] text-[#F7F0E3] border-t border-[#F7F0E3]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Coluna 1: Identidade Oficial Mini Fazendinha Velho Jou */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[#F7F0E3] focus:outline-none"
            >
              <div className="relative h-14 w-32 overflow-hidden rounded-2xl bg-white border border-[#F7F0E3]/20 p-1 shrink-0">
                <Image
                  src="/images/logo-velho-jou.png"
                  alt="Logotipo Mini Fazendinha Velho Jou"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-semibold block leading-tight">
                  Mini Fazendinha Velho Jou
                </span>
                <span className="text-xs uppercase tracking-wider text-[#E5B74A] block mt-0.5">
                  Mairiporã - SP
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#F7F0E3]/80 leading-relaxed max-w-sm">
              {siteConfig.brand.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <BookingTriggerButton
                variant="terracotta"
                size="md"
                experience="Visita em família (Day Use)"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp {siteConfig.contact.whatsappDisplay}</span>
              </BookingTriggerButton>

              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#F7F0E3]/25 hover:bg-[#F7F0E3]/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#F7F0E3] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E5B74A]" aria-hidden="true" />
                <span>{siteConfig.social.instagramHandle}</span>
              </a>
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
                  Atividades de Fazendeiro
                </Link>
              </li>
              <li>
                <Link href="/atracoes" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Pônei & Trenzinho
                </Link>
              </li>
              <li>
                <Link href="/restaurante" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Restaurante Caipira
                </Link>
              </li>
              <li>
                <Link href="/passeios-escolares" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Passeio Escolar
                </Link>
              </li>
              <li>
                <Link href="/aniversarios" className="hover:text-[#E5B74A] transition-colors py-0.5 inline-block">
                  Aniversários
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Informações de Atendimento */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="font-serif text-lg font-semibold text-[#F7F0E3]">
              Atendimento & Contato
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
                <Phone className="w-4 h-4 text-[#E5B74A] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <a
                    href={`tel:+551146049144`}
                    className="hover:text-[#E5B74A] transition-colors block"
                  >
                    Fixo: {siteConfig.contact.phoneDisplay}
                  </a>
                  <span className="text-xs text-[#F7F0E3]/70">
                    WhatsApp: {siteConfig.contact.whatsappDisplay}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E5B74A] shrink-0 mt-1" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#E5B74A] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F7F0E3]/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F0E3]/70">
          <p>
            © {currentYear} {siteConfig.brand.name}. Todos os direitos reservados.
          </p>
          <p>
            Ingressos limitados com agendamento antecipado via WhatsApp {siteConfig.contact.whatsappDisplay}.
          </p>
        </div>
      </div>
    </footer>
  );
}
