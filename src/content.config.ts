import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Mirko Passeri'),
    tags: z.array(z.string()).optional(),
    // image: usa path relativo dal file .md verso src/assets/blog/
    // Esempio: ../../assets/blog/nome-immagine.webp
    image: image().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
