// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  // devtools: { enabled: true }
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // ssr: false,
  routeRules: {
    '/': { prerender: true },
    '/api/**': { cors: true },
  }
});
