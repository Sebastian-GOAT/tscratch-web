import tailwindcss from '@tailwindcss/vite';
import viteSvgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,

  vite: {
    plugins: [tailwindcss(), viteSvgLoader()]
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/showcases'
      ]
    }
  },

  colorMode: {
    classSuffix: ''
  },

  modules: ['@nuxt/ui', '@nuxt/image']
});