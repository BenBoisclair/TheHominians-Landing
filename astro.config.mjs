// @ts-check
import { defineConfig } from "astro/config";
// @ts-ignore
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
});
