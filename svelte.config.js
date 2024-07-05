import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    mdsvex({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatexSvelte, rehypeSlug, rehypeAutolinkHeadings]
    }),
    vitePreprocess()
  ],
  extensions: ['.svelte', '.svx'],

  kit: {
    adapter: adapter({
      fallback: null
    })
  }
};

export default config;
