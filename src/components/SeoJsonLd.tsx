import { useMemo } from "react";
import { absoluteUrl, getSiteUrl } from "@/lib/site";
import { SEO } from "@/lib/seo";

/** Dados estruturados Schema.org (Organization + WebSite) na home. */
export function SeoJsonLd() {
  const json = useMemo(() => {
    const site = getSiteUrl();
    if (!site) return null;

    const logo = absoluteUrl("/logo.png");

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${site}/#organization`,
          name: SEO.siteName,
          url: site,
          description: SEO.homeDescription,
          logo: {
            "@type": "ImageObject",
            url: logo,
          },
        },
        {
          "@type": "WebSite",
          "@id": `${site}/#website`,
          name: SEO.siteName,
          url: site,
          description: SEO.homeDescription,
          publisher: { "@id": `${site}/#organization` },
          inLanguage: "pt-BR",
        },
      ],
    };
  }, []);

  if (!json) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
