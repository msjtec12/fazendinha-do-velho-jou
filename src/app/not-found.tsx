import React from "react";
import Link from "next/link";
import { Trees, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#315B3D]/12 text-[#315B3D]">
          <Trees className="w-7 h-7" aria-hidden="true" />
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#303A2C]">
          Página não encontrada
        </h1>
        <p className="text-base sm:text-lg text-[#303A2C]/80 max-w-xl mx-auto">
          Parece que você saiu da trilha principal. Volte para a página inicial para conhecer nossas
          atrações, restaurante rural e planejar sua visita.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#315B3D] hover:bg-[#24452D] text-[#F7F0E3] font-semibold px-7 py-3.5 text-sm sm:text-base transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Voltar para a Página Inicial</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
