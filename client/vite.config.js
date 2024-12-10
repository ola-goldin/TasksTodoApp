import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/get": "http://localhost:5000",
      "/add": "http://localhost:5000",
      "/update": "http://localhost:5000",
      "/delete": "http://localhost:5000",
    },
  },
});
