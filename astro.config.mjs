import { defineConfig } from "astro/config";

// import markdown from '@astrojs/markdown-remark';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
});
