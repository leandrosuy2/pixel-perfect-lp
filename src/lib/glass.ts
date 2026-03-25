import { cn } from "@/lib/utils";

/** Painel vidro — cards de recurso, preço, depoimento */
export const glassCard =
  "relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-transparent backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/[0.06] transition-all duration-500 hover:border-primary/30 hover:from-white/[0.12] hover:shadow-[0_16px_48px_-12px_hsl(var(--primary)/0.22)]";

/** Plano em destaque (MAIS POPULAR) — overflow visível para o selo não ser cortado */
export function glassPricingPopular(extra?: string) {
  return cn(
    glassCard,
    "overflow-visible border-primary/40 from-primary/[0.18] via-primary/[0.08] to-transparent shadow-[0_8px_48px_-8px_hsl(var(--primary)/0.4)] ring-primary/15 hover:border-primary/50 hover:shadow-[0_20px_56px_-10px_hsl(var(--primary)/0.45)]",
    extra,
  );
}

/** Bloco grande (“Todos os planos incluem”) */
export const glassPanel =
  "relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_12px_48px_-16px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.06] md:p-12";

/** Destaque interno (consultoria) */
export const glassHighlight =
  "rounded-xl border border-primary/25 bg-primary/[0.12] p-3 backdrop-blur-md ring-1 ring-inset ring-primary/10";

/** Barra do rodapé */
export const glassFooter =
  "border-t border-white/10 bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150";

/** Botões sociais no footer */
export const glassSocialBtn =
  "border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-sm hover:border-primary/40 hover:bg-white/[0.1]";
