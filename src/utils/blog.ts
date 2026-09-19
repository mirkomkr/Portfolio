import { getCollection } from 'astro:content';

export const getPublishedBlogPosts = async () => {
  const posts = await getCollection('blog');
  return posts.filter((post) => !post.data.draft);
};
