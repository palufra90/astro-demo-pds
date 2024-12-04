// @ts-check
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

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
  },

  output: "server",
  adapter: vercel({})
});