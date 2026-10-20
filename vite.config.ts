import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Для GitHub Pages: если это проектый сайт (username.github.io/repo), нужен base "/repo/"
// Для персонального сайта (username.github.io) — base "/"
// Чтобы работало везде: используем относительный "./" в режиме singleFile
export default defineConfig({
  // Важно для GitHub Pages: делаем относительные пути, сайт откроется и как /repo/ и как /
  base: "./",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
