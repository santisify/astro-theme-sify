import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array
  const lowercaseItems = array.map((str) => str.toLowerCase())
  const distinctItems = new Set(lowercaseItems)
  return Array.from(distinctItems)
}

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().default(() => new Date()),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    category: z.string().optional(),
    cover: z.string().optional(),
    series: z.string().optional(),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const weeklyCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/weekly' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().default(() => new Date()),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    cover: z.string().optional(),
    issue: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  weekly: weeklyCollection,
};
