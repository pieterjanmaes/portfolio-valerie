import { fileURLToPath } from 'url';
import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);
const currentDir: string = dirname(fileURLToPath(import.meta.url));
import { dirname, join } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxthq/studio'
  ],

  content: {
    markdown: {
      anchorLinks: false,
    }
  },

  fonts: {
    families: [
      { name: 'Playfair display', provider: 'google' },
      { name: 'Poppins', provider: 'google' }
    ]
  },

  components: [
    { path: resolve('./components'), global: true },
  ],

  css: [
    'swiper/scss',
    'plyr/src/sass/plyr.scss',
    join(currentDir, './node_modules/minireset.css/minireset.sass'),
    join(currentDir, './assets/styles/index.scss'),
  ],

  site: {
    url: 'https://valerievernaillen.be',
    name: 'Valerie Vernaillen',
    description: 'Porfolio Valerie Vernaillen',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/styles/_shared.scss" as *;',
        },
      },
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/favicons/safari-pinnend-tab.svg', color: '#000000' },
      ],
      script: [
        {
          src: 'https://cdn.plyr.io/3.7.8/plyr.js',
        },
      ],
    },
  },
})
