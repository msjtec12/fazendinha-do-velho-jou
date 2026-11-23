import React from "react";
import Image from "next/image";
import { Breadcrumbs, BreadcrumbItem } from "./breadcrumbs";
import { BookingTriggerButton } from "@/components/booking/booking-trigger-button";
import { ExperienceType } from "@/lib/whatsapp";
import { EditorialImage } from "@/content/site-config";
import { CalendarCheck } from "lucide-react";

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  defaultExperience?: ExperienceType;
  image?: EditorialImage;
  secondaryAction?: React.ReactNode;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  ctaLabel = "Planejar minha visita",
  defaultExperience = "Visita em família (Day Use)",
  image,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#303A2C]/10 bg-[#EFE6D5]/65 pt-8 pb-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-2">
          <div className={image ? "lg:col-span-7 space-y-5" : "lg:col-span-9 space-y-5"}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              {eyebrow}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#303A2C] leading-[1.12] tracking-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-[#303A2C]/85 leading-relaxed max-w-2xl">
              {description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <BookingTriggerButton
                experience={defaultExperience}
                variant="primary"
                size="lg"
              >
                <CalendarCheck className="w-4.5 h-4.5" aria-hidden="true" />
                <span>{ctaLabel}</span>
              </BookingTriggerButton>
              {secondaryAction}
            </div>
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#303A2C]/15 shadow-md bg-[#303A2C]/5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  style={{ objectPosition: image.objectPosition ?? "center center" }}
                />
              </div>
              {image.caption && (
                <p className="mt-2.5 text-xs text-[#303A2C]/70 italic">
                  {image.caption}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
