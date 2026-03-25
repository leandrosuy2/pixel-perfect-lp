import { useEffect } from "react";
import { absoluteUrl, getSiteUrl } from "@/lib/site";
import { SEO } from "@/lib/seo";

type PageSeoOptions = {
  title: string;
  description: string;
  path?: string;
  /** Caminho da imagem OG (padrão: og-image.png 1200×630) */
  imagePath?: string;
  /** index | noindex */
  robots?: "index, follow" | "noindex, follow";
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageSeo({
  title,
  description,
  path = "/",
  imagePath = SEO.defaultOgImage,
  robots = "index, follow",
}: PageSeoOptions) {
  useEffect(() => {
    const site = getSiteUrl();
    const canonical = site ? `${site}${path === "/" ? "/" : path}` : "";
    const ogImage = absoluteUrl(imagePath);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "pt_BR");
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:width", String(SEO.ogImageWidth));
    upsertMeta("property", "og:image:height", String(SEO.ogImageHeight));
    upsertMeta("property", "og:image:type", "image/png");
    if (canonical) {
      upsertMeta("property", "og:url", canonical);
      upsertLink("canonical", canonical);
    }

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
  }, [title, description, path, imagePath, robots]);
}
