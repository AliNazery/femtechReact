import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // This maps '@' to 'src' directory
    },
  },
  build: {
    outDir: "build", // Change the output directory if needed
  },
});
