import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), mdx()],
  adapter: vercel({
    analytics: true,
  }),
});
