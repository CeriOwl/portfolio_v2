import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    swup()
  ]
});
