import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ExperiencesSection() {
  const { experiences } = siteConfig;

  return (
    <section
      id="experiencias"
      aria-labelledby="experiences-heading"
      className="py-16 sm:py-24 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              Vivências no campo
            </span>
            <h2
              id="experiences-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#303A2C] leading-tight"
            >
              Pequenas descobertas. Grandes aventuras.
            </h2>
            <p className="text-base sm:text-lg text-[#303A2C]/80 leading-relaxed">
              Do primeiro toque em um cabrito ao perfume das ervas frescas na horta: conheça as
              experiências pensadas para encantar crianças e reconectar adultos com a natureza.
            </p>
          </div>
          <div>
            <Link
              href="/atracoes"
              className="inline-flex items-center gap-2 rounded-full bg-[#303A2C] hover:bg-[#315B3D] text-[#F7F0E3] font-semibold px-6 py-3 text-sm transition-colors"
            >
              <span>Ver todas as atrações em detalhe</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Composição Assimétrica Editorial (evita excesso de cards idênticos) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {experiences.map((exp, idx) => {
            const isFeatured = idx === 0 || idx === 1;
            const colSpanClass = isFeatured
              ? "lg:col-span-6"
              : "lg:col-span-4";

            return (
              <article
                key={exp.id}
                className={`${colSpanClass} group flex flex-col overflow-hidden rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 shadow-xs hover:shadow-md transition-all`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-[#EFE6D5] ${
                    isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={exp.image.src}
                    alt={exp.image.alt}
                    fill
                    loading="lazy"
                    sizes={
                      isFeatured
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 100vw, 33vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                    style={{ objectPosition: exp.image.objectPosition ?? "center center" }}
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-block rounded-full bg-[#FBF8F1]/95 backdrop-blur-xs border border-[#303A2C]/15 px-3.5 py-1 text-xs font-semibold text-[#315B3D]">
                      {exp.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#303A2C] leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#303A2C]/80 leading-relaxed">
                      {exp.shortDescription}
                    </p>
                    <ul className="pt-2 space-y-1.5">
                      {exp.highlights.slice(0, 2).map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#303A2C]/85"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#303A2C]/10 flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-[#303A2C]/70">
                      {exp.ageRecommendation}
                    </span>
                    <Link
                      href={`/atracoes#${exp.slug}`}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#315B3D] hover:text-[#24452D] shrink-0"
                    >
                      <span>Detalhes</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
