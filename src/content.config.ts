// TODO:

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\/[^/]+$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string().optional(),
      tags: z.array(z.string()).default([]),
      category: z.string().optional(),
      image: z.optional(image()),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\/[^/]+$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.optional(image()),
      technologies: z.array(z.string()).default([]),
      github: z.url().optional(),
      demo: z.url().optional(),
      documentation: z.url().optional(),
      npm: z.url().optional(),
      type: z.enum(['Open Source', 'SaaS', 'Client Work', 'Personal', 'Experiment']).optional(),
      status: z.enum(['live', 'in-progress', 'showcase-only']).default('live'),
      year: z.number(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };
