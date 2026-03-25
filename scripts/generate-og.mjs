/**
 * Gera `public/og-image.png` (1200×630) para preview em WhatsApp, Facebook, LinkedIn, etc.
 * Usa `public/logo.png`. Executado no `prebuild` (requer `sharp`).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const logoPath = path.join(publicDir, "logo.png");
const outPath = path.join(publicDir, "og-image.png");

const W = 1200;
const H = 630;

async function main() {
  let sharp;
  try {
    const mod = await import("sharp");
    sharp = mod.default;
  } catch {
    console.warn("[og] sharp não disponível — copiando logo.png para og-image.png (menos ideal para redes sociais).");
    if (fs.existsSync(logoPath)) {
      fs.copyFileSync(logoPath, outPath);
    }
    process.exit(0);
  }

  const gradientSvg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#c026d3"/>
      <stop offset="45%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#1e0b2e"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" rx="0" fill="url(#g)"/>
</svg>`);

  let base = await sharp(gradientSvg).png().toBuffer();

  if (fs.existsSync(logoPath)) {
    const logoBuf = await sharp(logoPath)
      .resize({ width: 560, height: 300, fit: "inside", withoutEnlargement: true })
      .png()
      .toBuffer();

    base = await sharp(base)
      .composite([{ input: logoBuf, gravity: "center" }])
      .png()
      .toBuffer();
  } else {
    console.warn("[og] public/logo.png não encontrado — og-image só com fundo.");
  }

  fs.writeFileSync(outPath, base);
  console.log("[og] gerado:", outPath, `(${W}×${H})`);
}

main().catch((e) => {
  console.error("[og] falha:", e);
  process.exit(1);
});
