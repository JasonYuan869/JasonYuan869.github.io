// place files you want to import through the `$lib` alias in this folder.
import type { Post } from '$lib/types';

export async function getPosts() {
  const posts = import.meta.glob('/src/routes/post/*.svx');

  return await Promise.all(
    Object.entries(posts).map(async ([path, resolver]) => {
      const slug = path.split('/').pop()!.split('.')[0];
      const post = (await resolver()) as Post;
      return {
        metadata: post.metadata,
        path: `/post/${slug}`
      };
    })
  );
}
