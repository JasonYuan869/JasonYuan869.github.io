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
      rehypePlugins: [
        rehypeKatexSvelte,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'before',
            group: {
              type: 'element',
              tagName: 'div',
              properties: {
                className: 'relative group'
              }
            },
            content: {
              type: 'element',
              tagName: 'div',
              properties: {
                className: 'hidden absolute md:block absolute -left-8 pr-8 bottom-1 group'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'span',
                  properties: {
                    className:
                      'text-2xl iconify ic--baseline-link invisible group-hover:visible hover:visible group align-middle'
                  }
                }
              ]
            }
          }
        ]
      ]
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
