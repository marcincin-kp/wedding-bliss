import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/wedding-bliss/" : "/",
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "pages.html"),
    },
  },
});
