// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@vexip-ui/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/i18n',
  ],
  supabase: {
    redirect: false
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  i18n: {
    
  }
})