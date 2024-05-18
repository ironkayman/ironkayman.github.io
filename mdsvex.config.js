import { defineMDSveXConfig as defineConfig } from "mdsvex";
// import { wikiLinkPlugin } from "remark-wiki-link";

const config = defineConfig({
  extensions: [".mdx", ".md",],

  smartypants: {
    dashes: true,
    backticks: false,
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
