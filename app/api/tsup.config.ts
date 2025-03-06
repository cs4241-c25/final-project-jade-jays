import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./api/index.ts"],
  clean: true,
  format: ["cjs"],
  ...options,
}));