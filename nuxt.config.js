export default {
  head: {
    title: "outside-digital",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    bodyAttrs: {
      class: "body"
    }
  },
  css: ["@/assets/styles/style.scss"],

  styleResources: {
    scss: ["@/assets/styles/variables.scss"]
  },

  plugins: [{ src: "~/plugins/plugins.js", mode: "client" }],

  components: true,

  buildModules: ["nuxt-compress"],

  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
