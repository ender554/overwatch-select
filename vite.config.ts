import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/overwatch-select/", // <-- Set to your GitHub repo name
});
