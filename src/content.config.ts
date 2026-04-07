import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    stack: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['shipped', 'in-progress', 'archived']).default('shipped'),
    order: z.number().default(0),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    project: z.string(),
    status: z.string().default('in progress'),
    description: z.string(),
    stack: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    devlogTag: z.string().optional(),
  }),
});

export const collections = { writing, projects, now };
