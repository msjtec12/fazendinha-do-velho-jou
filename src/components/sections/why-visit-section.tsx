import React from "react";
import { siteConfig } from "@/content/site-config";
import { HeartHandshake, Sprout, Trees, Baby, SmilePlus } from "lucide-react";

const pillarIcons = [
  HeartHandshake,
  Sprout,
  Trees,
  Baby,
  SmilePlus,
];

export function WhyVisitSection() {
  const { whyVisit } = siteConfig;

  return (
    <section
      aria-labelledby="why-visit-heading"
      className="py-16 sm:py-24 bg-[#EFE6D5]/70 border-b border-[#303A2C]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Coluna Esquerda: Posicionamento Editorial */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#315B3D]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
              {whyVisit.eyebrow}
            </span>
            <h2
              id="why-visit-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#303A2C] leading-tight"
            >
              {whyVisit.title}
            </h2>
            <p className="text-base text-[#303A2C]/85 leading-relaxed">
              {whyVisit.description}
            </p>
            <div className="rounded-2xl bg-[#FBF8F1] border border-[#303A2C]/12 p-5 space-y-2">
              <p className="font-serif text-base font-semibold text-[#303A2C]">
                Compromisso com a verdade
              </p>
              <p className="text-xs sm:text-sm text-[#303A2C]/80 leading-relaxed">
                Aqui você encontra uma rotina genuína de fazendinha: animais bem tratados, áreas
                verdes preservadas e informações claras antes mesmo de sair de casa.
              </p>
            </div>
          </div>

          {/* Coluna Direita: Os 5 Diferenciais Autênticos */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyVisit.pillars.map((pillar, index) => {
              const IconComponent = pillarIcons[index % pillarIcons.length];
              const isLastOdd =
                index === whyVisit.pillars.length - 1 &&
                whyVisit.pillars.length % 2 !== 0;

              return (
                <div
                  key={pillar.id}
                  className={`${
                    isLastOdd ? "sm:col-span-2" : ""
                  } rounded-3xl bg-[#FBF8F1] border border-[#303A2C]/12 p-6 space-y-3 shadow-2xs`}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315B3D]/12 text-[#315B3D]">
                    <IconComponent className="w-5.5 h-5.5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#303A2C]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#303A2C]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
