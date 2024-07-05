import { getPosts } from '$lib';
import { json } from '@sveltejs/kit';
import type { PostMetadata } from '$lib/types';

export interface PostsByMonth {
  [month: string]: { metadata: PostMetadata; path: string }[];
}

export async function load({ fetch }) {
  const allPosts = await getPosts();

  // Sort by date
  allPosts.sort((a, b) => {
    return new Date(a.metadata.date) < new Date(b.metadata.date) ? 1 : -1;
  });

  // Group by month/year
  const postsByMonth = allPosts.reduce<PostsByMonth>((acc, post) => {
    const date = new Date(post.metadata.date);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const key = `${month} ${year}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(post);

    return acc;
  }, {});

  return {
    postsByMonth
  };
}
