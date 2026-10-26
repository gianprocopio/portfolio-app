import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" hace que el build funcione en GitHub Pages, Netlify, Vercel, etc.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
