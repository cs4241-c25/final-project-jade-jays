import path from "node:path";
import { defineConfig } from "vite";
import React from "@vitejs/plugin-react-swc";
import ReactCompiler from "babel-plugin-react-compiler";

// https://vite.dev/config/
export default defineConfig({
  plugins: [React({
    babel: {
      plugins: [
        ["babel-plugin-react-compiler", ReactCompiler]
      ]
    }
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  build: {
    target: "es2015",
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http:localhost:8080",
        changeOrigin: true,
      }
    },
  },
});