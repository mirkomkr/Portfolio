// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mirkopasseri.it",
  integrations: [icon(), sitemap(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});
