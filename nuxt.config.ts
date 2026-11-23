// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      emailjsPublicKey: '',
      emailjsServiceId: '',
      emailjsTemplateId: '',
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@emailjs/browser',
        '@vue/devtools-core'
      ],
    },
  },
})
