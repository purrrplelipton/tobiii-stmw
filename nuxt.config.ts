// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],

  googleFonts: {
    families: {
      "Bellefair": [400],
      "Barlow Condensed": [400]
    }
  },

  tailwindcss: {
    viewer: false,
    cssPath: ['~/assets/css/index.css', { injectPosition: 'first' }],
    config: {
      content: ['~/**/*.vue'],
      theme: {
        extend: {
          fontFamily: {
            bellefair: ['"Bellefair"', "serif"],
            "barlow-condensed": ['"Barlow Condensed"', "sans-serif"]
          },
          backgroundImage: {
            "home-mobile": "url(~/assets/home/background-home-mobile.jpg)",
            "home-tablet": "url(~/assets/home/background-home-tablet.jpg)",
            "home-desktop": "url(~/assets/home/background-home-desktop.jpg)",
          }
        }
      }
    }
  },

  app: {
    head: {
      title: 'Space Tourism | Frontend Mentor',
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: ' icon',
          type: 'image/png',
          href: '/favicon-32x32.png'
        }
      ],
      meta: []
    }
  },

  vite: {
    plugins: [svgLoader()]
  },

  compatibilityDate: '2024-08-02',
});