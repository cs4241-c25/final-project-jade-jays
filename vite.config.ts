import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const options = {
    plugins: [react(), tailwindcss()],
    base: "/",
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "app") }],
    },
    build: {
      publicDir: "/public",
      outDir: "build",
    },
  };

  if (command === "build" && mode === "dev") {
    Object.assign(options.build, { sourcemap: true });
  }

  return options;
});
