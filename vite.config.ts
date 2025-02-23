import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "components"),
      "@context": path.resolve(__dirname, "context"),
      "@custom-hooks": path.resolve(__dirname, "custom-hooks"),
      "@services": path.resolve(__dirname, "services"),
    },
  },
});
