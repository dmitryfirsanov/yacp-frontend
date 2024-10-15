import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const YacpPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },
  }
});

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: ['@pinia/nuxt', '@primevue/nuxt-module'],
  css: ['@/assets/css/style.css'],
  primevue: {
    options: {
      theme: {
        preset: YacpPreset,
        darkModeSelector: 'dark-mode',
      }
    }
  },
});