"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { siteConfig, EditorialImage } from "@/content/site-config";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  "Todas",
  "Animais",
  "Família & Infância",
  "Natureza",
  "Gastronomia",
  "Educativo",
] as const;

type GalleryCategory = (typeof categories)[number];

interface GallerySectionProps {
  showViewAllLink?: boolean;
  headingLevel?: "h2" | "h3";
}

export function GallerySection({
  showViewAllLink = true,
  headingLevel = "h2",
}: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>("Todas");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages: EditorialImage[] =
    selectedCategory === "Todas"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((img) => img.category === selectedCategory);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null || filteredImages.length === 0) return null;
      return (prev - 1 + filteredImages.length) % filteredImages.length;
    });
  }, [filteredImages.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null || filteredImages.length === 0) return null;
      return (prev + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handlePrevious, handleNext]);

  const activeImage =
    activeIndex !== null && filteredImages[activeIndex]
      ? filteredImages[activeIndex]
      : null;

  const HeadingTag = headingLevel;

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-heading"
      className="py-16 sm:py-24 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              Registros do campo
            </span>
            <HeadingTag
              id="gallery-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#303A2C] leading-tight"
            >
              A atmosfera de um dia ao ar livre
            </HeadingTag>
            <p className="text-base sm:text-lg text-[#303A2C]/80 leading-relaxed">
              Navegue pelas categorias abaixo e clique em qualquer fotografia para ampliar no
              visualizador com suporte a teclado.
            </p>
          </div>

          {showViewAllLink && (
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 rounded-full border border-[#303A2C]/25 bg-[#FBF8F1] hover:border-[#315B3D] px-5 py-2.5 text-sm font-semibold text-[#303A2C] transition-colors self-start md:self-auto"
            >
              <span>Abrir página da galeria</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Filtros por Categoria */}
        <div
          role="toolbar"
          aria-label="Filtrar fotografias por categoria"
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(null);
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer min-h-[40px]",
                  isSelected
                    ? "bg-[#315B3D] text-[#F7F0E3] shadow-2xs"
                    : "bg-[#EFE6D5] text-[#303A2C]/85 hover:bg-[#303A2C]/12"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grade Responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <figure
              key={`${img.src}-${index}`}
              className="group relative overflow-hidden rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 shadow-2xs flex flex-col"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ampliar fotografia: ${img.alt}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE6D5] text-left cursor-pointer focus:outline-none"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: img.objectPosition ?? "center center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#303A2C]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <span className="rounded-full bg-[#FBF8F1]/95 px-3 py-1 text-xs font-semibold text-[#303A2C]">
                    {img.category}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#315B3D] text-[#F7F0E3]">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
              <figcaption className="p-4 flex items-start justify-between gap-3">
                <p className="text-xs sm:text-sm text-[#303A2C]/85 leading-snug">
                  {img.caption ?? img.alt}
                </p>
                <span className="shrink-0 rounded-full bg-[#EFE6D5] px-2.5 py-0.5 text-[11px] font-semibold text-[#315B3D]">
                  {img.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Lightbox Acessível com Navegação por Teclado */}
        <Dialog.Root
          open={activeIndex !== null}
          onOpenChange={(open) => !open && setActiveIndex(null)}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-[#303A2C]/85 backdrop-blur-xs" />
            <Dialog.Content
              className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[#F7F0E3] border border-[#303A2C]/20 p-4 sm:p-6 shadow-2xl focus:outline-none"
            >
              {activeImage && activeIndex !== null && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <Dialog.Title className="font-serif text-lg sm:text-xl font-semibold text-[#303A2C]">
                        {activeImage.category} — Foto {activeIndex + 1} de{" "}
                        {filteredImages.length}
                      </Dialog.Title>
                      <Dialog.Description className="text-xs sm:text-sm text-[#303A2C]/75">
                        Use as setas do teclado (← ou →) para navegar ou ESC para fechar.
                      </Dialog.Description>
                    </div>
                    <Dialog.Close
                      aria-label="Fechar visualização ampliada"
                      className="rounded-full p-2.5 bg-[#EFE6D5] text-[#303A2C] hover:bg-[#315B3D] hover:text-[#F7F0E3] transition-colors cursor-pointer min-h-[42px] min-w-[42px] inline-flex items-center justify-center"
                    >
                      <X className="w-5 h-5" aria-hidden="true" />
                    </Dialog.Close>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#303A2C]/10 border border-[#303A2C]/12">
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      sizes="(max-width: 1024px) 95vw, 900px"
                      className="object-cover"
                      style={{
                        objectPosition: activeImage.objectPosition ?? "center center",
                      }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <p className="text-sm text-[#303A2C] font-medium">
                      {activeImage.caption ?? activeImage.alt}
                    </p>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        type="button"
                        onClick={handlePrevious}
                        aria-label="Fotografia anterior"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#303A2C]/20 bg-[#FBF8F1] hover:bg-[#EFE6D5] px-4 py-2 text-xs sm:text-sm font-semibold text-[#303A2C] cursor-pointer min-h-[40px]"
                      >
                        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                        <span>Anterior</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Próxima fotografia"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#315B3D] hover:bg-[#24452D] px-4 py-2 text-xs sm:text-sm font-semibold text-[#F7F0E3] cursor-pointer min-h-[40px]"
                      >
                        <span>Próxima</span>
                        <ChevronRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
