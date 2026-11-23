import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import { BookingProvider } from "@/components/booking/booking-context";
import { WhatsAppBookingModal } from "@/components/booking/whatsapp-booking-modal";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";

const fraunces = localFont({
  src: "./fonts/fraunces-latin.woff2",
  variable: "--font-fraunces",
  display: "swap",
  weight: "400 700",
});

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "400 700",
});

export const viewport: Viewport = {
  themeColor: "#F7F0E3",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.siteUrl),
  title: {
    default: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description:
    "Passeio em família, contato respeitoso com animais, gastronomia rural, atividades educativas na natureza, passeios escolares e comemorações de aniversário no campo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.brand.siteUrl,
    siteName: siteConfig.brand.name,
    title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    description:
      "Natureza, descobertas e momentos especiais para toda a família. Conheça nossas atrações rurais, restaurante de fazenda, passeios escolares e aniversários.",
    images: [
      {
        url: "/images/hero-family-farm.jpg",
        width: 1600,
        height: 1067,
        alt: siteConfig.hero.desktopImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    description:
      "Um dia no campo com animais da fazenda, brincadeiras ao ar livre e almoço rural para toda a família.",
    images: ["/images/hero-family-farm.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "LocalBusiness"],
    name: siteConfig.brand.name,
    description:
      "Fazendinha turística com experiências infantis, contato supervisionado com animais, gastronomia rural, passeios escolares e comemorações em família.",
    url: siteConfig.brand.siteUrl,
    image: `${siteConfig.brand.siteUrl}/images/hero-family-farm.jpg`,
    touristType: [
      "Famílias com crianças",
      "Escolas de Educação Infantil e Ensino Fundamental",
      "Turismo rural e pedagógico",
    ],
    isAccessibleForFree: false,
    publicAccess: true,
  };

  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F7F0E3] text-[#303A2C] antialiased selection:bg-[#315B3D] selection:text-[#F7F0E3]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#315B3D] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#F7F0E3] focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        <JsonLd data={organizationSchema} />
        <BookingProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppBookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
