import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ENV === "dev" ? "/" : "/connect-plus/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
