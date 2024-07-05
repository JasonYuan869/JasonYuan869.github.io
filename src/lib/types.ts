import type { SvelteComponent } from 'svelte';

export type PostMetadata = {
  title: string;
  slug: string;
  description: string;
  date: string;
};

export type Post = {
  metadata: PostMetadata;
  default: SvelteComponent;
};
