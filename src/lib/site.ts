/**
 * URL pública do site (sem barra final).
 * Defina no deploy: `VITE_SITE_URL=https://seu-dominio.com`
 */
export function getSiteUrl(): string {
  const env = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, "");
  if (env) return env;
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
