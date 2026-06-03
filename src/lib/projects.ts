import { getCollection, type CollectionEntry } from 'astro:content';
import type { Project } from '../types/project';

type ProjectEntry = CollectionEntry<'projects'>;

export const projectFromEntry = (entry: ProjectEntry): Project => ({
  slug: entry.id,
  ...entry.data,
});

export const getProjects = async () => {
  const entries = await getCollection('projects');

  return entries
    .map(projectFromEntry)
    .sort((a, b) => Number(b.year) - Number(a.year));
};

export const getProjectEntries = async () => getCollection('projects');
