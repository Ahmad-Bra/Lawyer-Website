// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
  modules: ["@pinia/nuxt"],
});
