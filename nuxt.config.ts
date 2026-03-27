// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // title
  app: {
    head: {
      title: "My Application",
      titleTemplate: "%s - Nuxt Setup",
    },
  },
  // npm run dev
  $development: {
    app: {
      head: {
        title: "Dev",
      },
    },
  },
  // npm run build
  // then node .output/server/index.mjs (will generate if you run above script)
  $production: {
    app: {
      head: {
        title: "Prod",
      },
    },
  },
  // defaults when app created
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
