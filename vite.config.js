import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/validate-otp": "https://otp-backend-taupe.vercel.app", // Proxy to your backend
      "/send": "https://otp-backend-taupe.vercel.app", // Proxy to your backend
    },
  },
});
