import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const Yacp = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{violet.50}',
      100: '{violet.100}',
      200: '{violet.200}',
      300: '{violet.300}',
      400: '{violet.400}',
      500: '{violet.500}',
      600: '{violet.600}',
      700: '{violet.700}',
      800: '{violet.800}',
      900: '{violet.900}',
      950: '{violet.950}'
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
  css: ['@/assets/scss/style.scss'],
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