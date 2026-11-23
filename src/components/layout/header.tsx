"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, CalendarCheck, ArrowRight, Instagram } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { useBooking } from "@/components/booking/booking-context";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { openBookingModal } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const currentDefaultExperience =
    siteConfig.defaultExperienceForPage[
      pathname as keyof typeof siteConfig.defaultExperienceForPage
    ] ?? "Visita em família (Day Use)";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200 border-b",
        isScrolled
          ? "bg-[#F7F0E3]/95 backdrop-blur-md border-[#303A2C]/12 shadow-xs py-2 sm:py-2.5"
          : "bg-[#F7F0E3] border-[#303A2C]/8 py-3 sm:py-3.5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logo Oficial Mini Fazendinha Velho Jou à esquerda */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-[#303A2C] focus:outline-none rounded-xl py-0.5 shrink-0"
          aria-label="Ir para a página inicial da Mini Fazendinha Velho Jou"
        >
          <div className="relative h-11 w-24 sm:h-12 sm:w-28 overflow-hidden rounded-xl bg-white border border-[#303A2C]/15 shadow-2xs shrink-0 p-0.5">
            <Image
              src="/images/logo-velho-jou.png"
              alt="Logotipo Mini Fazendinha Velho Jou"
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-serif text-base sm:text-lg font-semibold leading-none tracking-tight text-[#303A2C]">
              Velho Jou
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#315B3D] mt-0.5">
              Mini Fazendinha
            </span>
          </div>
        </Link>

        {/* Navegação principal desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden xl:flex items-center gap-0.5 2xl:gap-1"
        >
          {siteConfig.navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 2xl:px-3.5 py-2 text-[13px] 2xl:text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#315B3D]/12 text-[#315B3D] font-semibold"
                    : "text-[#303A2C]/85 hover:text-[#303A2C] hover:bg-[#303A2C]/6"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Ações à direita: Instagram + CTA destacado + Menu Mobile */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar Instagram oficial @fazendinhavelhojou"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-[#303A2C]/20 bg-[#FBF8F1] hover:border-[#315B3D] p-2.5 text-[#303A2C] transition-colors min-h-[42px] min-w-[42px]"
          >
            <Instagram className="w-4 h-4 text-[#C47A45]" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => openBookingModal(currentDefaultExperience)}
            className="whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#315B3D] hover:bg-[#24452D] text-[#F7F0E3] font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm transition-colors cursor-pointer shadow-xs min-h-[42px]"
          >
            <CalendarCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Planejar visita</span>
          </button>

          {/* Gatilho do Menu Mobile / Tablet */}
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                className="xl:hidden inline-flex items-center justify-center rounded-full border border-[#303A2C]/20 bg-[#FBF8F1] p-2.5 text-[#303A2C] hover:bg-[#EFE6D5] transition-colors cursor-pointer min-h-[42px] min-w-[42px]"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-[#303A2C]/55 backdrop-blur-xs xl:hidden" />
              <Dialog.Content
                className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#F7F0E3] border-l border-[#303A2C]/15 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto xl:hidden focus:outline-none"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-[#303A2C]/12">
                    <div className="flex items-center gap-2.5">
                      <div className="relative h-10 w-20 overflow-hidden rounded-lg bg-white border border-[#303A2C]/15 p-0.5">
                        <Image
                          src="/images/logo-velho-jou.png"
                          alt="Logotipo Mini Fazendinha Velho Jou"
                          fill
                          sizes="80px"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <Dialog.Title className="font-serif text-base font-semibold text-[#303A2C] leading-none">
                          Mini Fazendinha Velho Jou
                        </Dialog.Title>
                        <Dialog.Description className="text-xs text-[#303A2C]/70 mt-0.5">
                          Menu de navegação do site
                        </Dialog.Description>
                      </div>
                    </div>
                    <Dialog.Close
                      aria-label="Fechar menu"
                      className="rounded-full p-2.5 text-[#303A2C] hover:bg-[#303A2C]/10 transition-colors cursor-pointer min-h-[42px] min-w-[42px] inline-flex items-center justify-center"
                    >
                      <X className="w-5 h-5" aria-hidden="true" />
                    </Dialog.Close>
                  </div>

                  <nav aria-label="Menu mobile" className="mt-5 space-y-1">
                    {siteConfig.navigation.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                            isActive
                              ? "bg-[#315B3D] text-[#F7F0E3] font-semibold"
                              : "text-[#303A2C] hover:bg-[#303A2C]/8"
                          )}
                        >
                          <span>{item.label}</span>
                          <ArrowRight
                            className={cn(
                              "w-4 h-4",
                              isActive ? "text-[#F7F0E3]" : "text-[#303A2C]/45"
                            )}
                            aria-hidden="true"
                          />
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                <div className="mt-8 pt-5 border-t border-[#303A2C]/12 space-y-3">
                  <div className="rounded-2xl bg-[#EFE6D5] p-4 text-xs text-[#303A2C]/85 space-y-1">
                    <p className="font-semibold text-[#303A2C]">
                      {siteConfig.contact.cityRegionLabel}
                    </p>
                    <p>{siteConfig.contact.openingDaysSummary}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openBookingModal(currentDefaultExperience);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#315B3D] hover:bg-[#24452D] text-[#F7F0E3] font-semibold px-5 py-3.5 text-sm transition-colors cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                    <span>Planejar minha visita via WhatsApp</span>
                  </button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
