// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  modules: [
    '@nuxt/image',
    'nuxt-swiper',
    'nuxt-icon',
    '@formkit/auto-animate/nuxt',
    '@formkit/nuxt',
    '@pinia/nuxt',
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
