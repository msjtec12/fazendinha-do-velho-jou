import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.brand.siteUrl;
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/atracoes", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/ingressos", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/restaurante", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/passeios-escolares", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/aniversarios", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/galeria", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/como-chegar", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/perguntas-frequentes", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
