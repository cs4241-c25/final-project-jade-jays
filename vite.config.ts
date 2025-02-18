import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const options = {
    plugins: [react(), tailwindcss()],
    build: {
      outDir: "build",
    },
  };

  if (command === "build" && mode === "dev") {
    Object.assign(options.build, { sourcemap: true });
  }

  return options;
});
