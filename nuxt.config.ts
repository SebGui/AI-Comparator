// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@hebilicious/vue-query-nuxt', '@pinia/nuxt'],
  runtimeConfig : {
    googleApiKey : process.env.NUXT_GOOGLE_KEY,
    public : {
      googleApiUrl : process.env.NUXT_GOOGLE_APIURL,
    } // For public variables
  },
  vueQuery: {
    // Options for the Vue Query state key and auto imports
    stateKey: "vue-query-nuxt",
    autoImports: ["useQuery"],
    queryClientOptions: {
      defaultOptions: {
        queries: {
          staleTime: 5000
        }
      }
    }
  }
})