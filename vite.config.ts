import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: '/fortalenyweb/',
  plugins: [react()],
});
