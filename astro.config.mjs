// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["mixed-decls"], // Silences warnings from imported PDS SCSS
          quietDeps: true // Silences warnings from imported PDS SCSS
        }
      }
    }
  }
});