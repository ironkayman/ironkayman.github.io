import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
// import { mdsvex } from "mdsvex";
// import { fileURLToPath } from 'node:url';
//
// import glsl from "vite-plugin-glsl";

// import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars';

export default defineConfig({
  plugins: [sveltekit()],
});
