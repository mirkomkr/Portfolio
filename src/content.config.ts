import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    author: z.string().default('Mirko Passeri'),
    tags: z.array(z.string()).optional(),
    // related: slug degli articoli correlati da mostrare a fondo post (internal linking)
    // Esempio: ["quanto-costa-un-sito-web", "perche-il-sito-non-si-trova-su-google"]
    related: z.array(z.string()).optional(),
    // image: usa path relativo dal file .md verso src/assets/blog/
    // Esempio: ../../assets/blog/nome-immagine.webp
    image: image().optional(),
    imageAlt: z.string().optional(),
    // faq: domande e risposte per FAQPage schema (AEO/AI Visibility)
    // Queste vengono usate da ChatGPT, Gemini e Perplexity per citare il post
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
