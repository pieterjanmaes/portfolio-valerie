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

  fonts: {
    families: [
      { name: 'Playfair display', provider: 'google' }
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
    description: 'CV Valerie Vernaillen',
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
})
