// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
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
});
