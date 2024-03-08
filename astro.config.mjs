import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://unique-gaufre-2e101b.netlify.app/",
  integrations: [preact()]
});