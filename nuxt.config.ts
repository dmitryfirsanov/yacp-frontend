import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const Yacp = definePreset(Aura, {
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
    colorScheme: {
      light: {
        formField: {
          hoverBorderColor: '{primary.color}',
        },
        surface: {
          0: '#fff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
      },
      dark: {
        formField: {
          hoverBorderColor: '{primary.color}',
        },
        surface: {
          0: '#fff',
          50: '{neutral.50}',
          100: '{neutral.100}',
          200: '{neutral.200}',
          300: '{neutral.300}',
          400: '{neutral.400}',
          500: '{neutral.500}',
          600: '{neutral.600}',
          700: '{neutral.700}',
          800: '{neutral.800}',
          900: '{neutral.900}',
          950: '{neutral.950}'
        },
      }
    },
  }
});
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
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
        preset: Yacp,
        options: {
          darkModeSelector: '.dark-mode',
        }
      }
    }
  },
});