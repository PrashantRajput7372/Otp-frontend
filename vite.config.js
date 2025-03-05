import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/validate-otp": "http://localhost:3000", // Proxy to your backend
      "/send": "http://localhost:3000", // Proxy to your backend
    },
  },
});
