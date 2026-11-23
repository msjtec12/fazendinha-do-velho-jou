"use client";

import React from "react";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { siteConfig, FAQItem } from "@/content/site-config";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";

interface FAQSectionProps {
  items?: FAQItem[];
  showPageLink?: boolean;
  title?: string;
  subtitle?: string;
}

export function FAQSection({
  items = siteConfig.faqs,
  showPageLink = true,
  title = "Dúvidas frequentes antes da visita",
  subtitle = "Respostas claras e transparentes sobre reservas, horários, atrações, restaurante, escolas e aniversários.",
}: FAQSectionProps) {
  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Coluna Esquerda: Introdução */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Perguntas Frequentes</span>
            </span>
            <h2
              id="faq-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C] leading-tight"
            >
              {title}
            </h2>
            <p className="text-base text-[#303A2C]/80 leading-relaxed">
              {subtitle}
            </p>

            {showPageLink && (
              <div className="pt-2">
                <Link
                  href="/perguntas-frequentes"
                  className="inline-flex items-center gap-2 rounded-full border border-[#303A2C]/25 bg-[#FBF8F1] hover:border-[#315B3D] px-5 py-2.5 text-sm font-semibold text-[#303A2C] transition-colors"
                >
                  <span>Acessar central completa de FAQ</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          {/* Coluna Direita: Acordeão Acessível */}
          <div className="lg:col-span-7">
            <Accordion.Root
              type="single"
              collapsible
              defaultValue={items[0]?.id}
              className="space-y-3"
            >
              {items.map((faq) => (
                <Accordion.Item
                  key={faq.id}
                  value={faq.id}
                  className="rounded-2xl bg-[#FBF8F1] border border-[#303A2C]/14 overflow-hidden transition-colors data-[state=open]:border-[#315B3D]/40"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 items-center justify-between gap-4 px-5 sm:px-6 py-4.5 text-left font-serif text-base sm:text-lg font-semibold text-[#303A2C] hover:text-[#315B3D] transition-colors cursor-pointer">
                      <span>{faq.question}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EFE6D5] text-[#303A2C] transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:bg-[#315B3D] group-data-[state=open]:text-[#F7F0E3]">
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#303A2C]/85 leading-relaxed">
                    <div className="space-y-2">
                      <p>{faq.answer}</p>
                      <span className="inline-block rounded-full bg-[#EFE6D5] px-2.5 py-0.5 text-[11px] font-semibold text-[#315B3D]">
                        Categoria: {faq.category}
                      </span>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
