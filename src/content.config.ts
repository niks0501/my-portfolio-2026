import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectItem = z.object({
  label: z.string(),
  icon: z.string().optional(),
  group: z.enum(['frontend', 'backend', 'data']).optional(),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    longDescription: z.string(),
    highlights: z.array(z.string()),
    challenges: z.array(z.string()),
    tags: z.array(projectItem.required({ icon: true })),
    stack: z.array(projectItem.required({ group: true })),
    metrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      }),
    ),
    image: z.string(),
    imageWidth: z.number(),
    imageHeight: z.number(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      }),
    ),
    githubUrl: z.url(),
    liveDemoUrl: z.url().nullable().default(null),
    sourceOnly: z.boolean().default(true),
    featured: z.boolean().default(false),
    categories: z.array(z.enum(['web-app', 'data', 'tool'])),
    year: z.string(),
    role: z.string(),
    status: z.enum(['live', 'in-progress', 'archived']),
    accent: z
      .string()
      .regex(
        /^oklch\(\s*[\d.]+%?\s+[\d.]+\s+[\d.]+(?:\s*\/\s*[\d.]+%?)?\s*\)$/,
        'Must be a valid oklch color (e.g. oklch(0.555 0.163 48.998))',
      ),
    problem: z.string(),
    approach: z.string(),
    result: z.string(),
  }),
});

export const collections = { projects };
