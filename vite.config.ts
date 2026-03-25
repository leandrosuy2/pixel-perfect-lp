import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl =
    (env.VITE_SITE_URL || (mode === "development" ? "http://localhost:8080" : "https://example.com")).replace(
      /\/$/,
      "",
    );

  return {
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  /** Produção: `npm start` — escuta em 0.0.0.0 na porta 8080 (ou `process.env.PORT`). */
  preview: {
    host: true,
    port: Number(process.env.PORT) || 8080,
    allowedHosts: [
      "kl-melhor-chat.r97lfn.easypanel.host",
    ],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "html-seo-site-url",
      transformIndexHtml(html) {
        return html.replace(/%SITE_URL%/g, siteUrl);
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
};
});
