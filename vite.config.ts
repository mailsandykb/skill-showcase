import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // Always use production JSX runtime when building (avoids _jsxDEV on Render/cloud)
  const effectiveMode = command === "build" ? "production" : mode;
  return {
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "sandesh-balakrishna.onrender.com",
      ".onrender.com", // preview deployments
    ],
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), effectiveMode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};});
