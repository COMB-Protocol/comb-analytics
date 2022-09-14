import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
  vue: {
    compilerOptions: {
      // isCustomElement: (tag) => ["apexchart"].includes(tag),
    },
  },

  app: {
    head: {
      title: "Blockchain Data Analytics Platform",
      titleTemplate: "%s - COMB Analytics",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "A general purpose analytics dashboard for the COMB protocol. The dashboard provides access to data about the protocol's ongoing transactions, resources and blocks.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Blockchain Data Analytics Platform - COMB Analytics",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "A general purpose analytics dashboard for the COMB protocol. The dashboard provides access to data about the protocol's ongoing transactions, resources and blocks.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://analytics.comb.financial/_nuxt/waterfall.82d69c55.jpeg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://analytics.comb.financial/",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Blockchain Data Analytics Platform - COMB Analytics",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "A general purpose analytics dashboard for the COMB protocol. The dashboard provides access to data about the protocol's ongoing transactions, resources and blocks.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://analytics.comb.financial/_nuxt/waterfall.82d69c55.jpeg",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://analytics.comb.financial/",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
