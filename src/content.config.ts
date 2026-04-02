import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsletter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/newsletter' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { newsletter };
