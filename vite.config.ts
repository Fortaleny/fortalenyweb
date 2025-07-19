import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // or "@vitejs/plugin-react"
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: '/fortalenyweb/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(), // optional: keep this if you're using it
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
