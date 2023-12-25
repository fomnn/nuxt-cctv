// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@vexip-ui/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/i18n',,
  ],
  supabase: {
    redirect: false
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Monitoring CCTV",
    }
  },
  i18n: {
    lazy: true,
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'id-ID',
        iso: 'id-ID',
        name: 'Indonesia',
        file: 'id-ID.json'
      },
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json'
      },
    ],
    defaultLocale: 'id-ID',
    
  },
})