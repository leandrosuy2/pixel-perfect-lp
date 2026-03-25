import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
