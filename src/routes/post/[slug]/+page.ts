import type { PostMetadata } from '$lib/types';

export async function load({ params }) {
  const post = await import(`../${params.slug}.svx`);
  const metadata = post.metadata as PostMetadata;

  const content = post.default;

  return {
    content,
    metadata
  };
}
