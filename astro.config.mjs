import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    compress({
      HTMl: false,
    }),
    react(),
  ],
  image: {
    domain: ['fcqqtwiqiuvkdnbqaait.supabase.co'],
    service: passthroughImageService(),
  },
});
