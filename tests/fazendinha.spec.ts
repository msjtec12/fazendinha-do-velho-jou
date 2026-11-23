import { test, expect } from "@playwright/test";

const allRoutes = [
  { path: "/", expectedH1: "Um dia no campo. Memórias para a vida toda." },
  { path: "/atracoes", expectedH1: "Atrações e experiências no campo para toda a família" },
  { path: "/ingressos", expectedH1: "Ingressos, valores e como agendar sua visita" },
  { path: "/restaurante", expectedH1: "Menu de almoço: Self-Service coma à vontade no fogão a lenha" },
  { path: "/passeios-escolares", expectedH1: "Roteiros pedagógicos e vivências no campo para escolas" },
  { path: "/aniversarios", expectedH1: "Comemore aniversários em meio à natureza" },
  { path: "/galeria", expectedH1: "Momentos reais de descoberta e contato com a natureza" },
  { path: "/como-chegar", expectedH1: "Localização, endereço e rota para a Fazendinha Velho Jou" },
  { path: "/perguntas-frequentes", expectedH1: "Perguntas frequentes sobre a visita à fazendinha" },
];

const mandatoryViewports = [360, 390, 430, 768, 1024, 1280, 1440, 1920];

test.describe("Auditoria Completa — Fazendinha & Experiências Rurais", () => {
  test("1. Todas as 9 páginas carregam com HTTP 200, H1 único, imagens com alt descritivo e zero erros de console", async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    for (const route of allRoutes) {
      const response = await page.goto(route.path, { waitUntil: "domcontentloaded" });
      expect(response?.status(), `Status HTTP da rota ${route.path}`).toBe(200);

      const h1s = page.locator("h1");
      await expect(h1s, `H1 único na rota ${route.path}`).toHaveCount(1);
      await expect(h1s.first()).toContainText(route.expectedH1);

      // Verifica se todas as imagens têm atributo alt preenchido e não genérico
      const images = page.locator("img");
      const imgCount = await images.count();
      expect(imgCount).toBeGreaterThan(0);
      for (let i = 0; i < imgCount; i++) {
        const alt = await images.nth(i).getAttribute("alt");
        expect(alt, `Imagem ${i} em ${route.path} deve ter alt descritivo`).toBeTruthy();
        expect(alt!.length).toBeGreaterThan(10);
      }
    }

    expect(consoleErrors).toEqual([]);
  });

  test("2. Responsividade nos 8 breakpoints obrigatórios (360px a 1920px) sem overflow horizontal", async ({
    page,
  }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    for (const width of mandatoryViewports) {
      await page.setViewportSize({ width, height: 840 });
      await page.waitForTimeout(150);

      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(
        hasHorizontalOverflow,
        `Não deve haver overflow horizontal na largura ${width}px`
      ).toBe(false);
    }
  });

  test("3. Fluxo de pré-atendimento WhatsApp: validação de erros e geração de mensagem estruturada", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Abre modal de pré-atendimento pelo botão do header
    await page.getByRole("button", { name: /Planejar visita/i }).first().click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    // Tenta submeter sem data para validar mensagem de erro acessível
    await dialog.getByRole("button", { name: /Continuar atendimento no WhatsApp/i }).click();
    await expect(dialog.getByText(/Informe a data desejada para a visita/i)).toBeVisible();

    // Preenche campos válidos
    await dialog.locator("#modal-booking-experienceType").selectOption("Comemoração de aniversário");
    await dialog.locator("#modal-booking-desiredDate").fill("2026-12-12");
    await dialog.locator("#modal-booking-adultsCount").fill("4");
    await dialog.locator("#modal-booking-childrenCount").fill("3");
    await dialog
      .locator("#modal-booking-notes")
      .fill("Gostaríamos de informações sobre a mesa do bolo.");

    await dialog.getByRole("button", { name: /Continuar atendimento no WhatsApp/i }).click();

    const generatedLink = dialog.getByTestId("whatsapp-generated-link");
    await expect(generatedLink).toBeVisible();

    const href = await generatedLink.getAttribute("href");
    expect(href).toContain("https://wa.me/");
    const decodedHref = decodeURIComponent(href ?? "");
    expect(decodedHref).toContain(
      "Olá! Gostaria de consultar uma visita à fazendinha para 12/12/2026, com 4 adultos e 3 crianças."
    );
    expect(decodedHref).toContain("Comemoração de aniversário");
    expect(decodedHref).toContain("Gostaríamos de informações sobre a mesa do bolo.");
  });

  test("4. Galeria interativa: filtro por categoria e Lightbox acessível por teclado", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/galeria", { waitUntil: "domcontentloaded" });

    // Filtra por Animais
    const filterButton = page.getByRole("button", { name: "Animais", exact: true });
    await filterButton.click();
    await expect(filterButton).toHaveAttribute("aria-pressed", "true");

    // Abre a primeira foto no Lightbox
    const firstPhotoBtn = page.getByRole("button", { name: /Ampliar fotografia:/i }).first();
    await firstPhotoBtn.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("Foto 1 de");

    // Navega com seta direita do teclado
    await page.keyboard.press("ArrowRight");
    await expect(dialog).toContainText("Foto 2 de");

    // Fecha com Escape
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test("5. Menu mobile acessível em telas pequenas (390px)", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const menuTrigger = page.getByRole("button", { name: /Abrir menu de navegação/i });
    await expect(menuTrigger).toBeVisible();
    await menuTrigger.click();

    const mobileDialog = page.getByRole("dialog");
    await expect(mobileDialog).toBeVisible();

    await mobileDialog.getByRole("link", { name: "Restaurante" }).click();
    await expect(page).toHaveURL(/\/restaurante$/);
  });

  test("6. Sitemap.xml e Robots.txt respondem corretamente", async ({ request }) => {
    const sitemapRes = await request.get("/sitemap.xml");
    expect(sitemapRes.status()).toBe(200);
    const sitemapText = await sitemapRes.text();
    expect(sitemapText).toContain("/atracoes");
    expect(sitemapText).toContain("/passeios-escolares");

    const robotsRes = await request.get("/robots.txt");
    expect(robotsRes.status()).toBe(200);
    const robotsText = await robotsRes.text();
    expect(robotsText).toContain("Sitemap:");
  });
});
