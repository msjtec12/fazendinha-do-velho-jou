import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { WhyVisitSection } from "@/components/sections/why-visit-section";
import { GastronomySection } from "@/components/sections/gastronomy-section";
import { PlanVisitSection } from "@/components/sections/plan-visit-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Um dia no campo. Memórias para a vida toda.",
  description:
    "Fazendinha turística para famílias e crianças: contato com animais, horta educativa, brincadeiras ao ar livre, restaurante rural, passeios escolares e aniversários.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <HeroSection />
      <ExperiencesSection />
      <WhyVisitSection />
      <GastronomySection />
      <PlanVisitSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
