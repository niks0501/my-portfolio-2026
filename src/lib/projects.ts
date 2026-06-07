import { getCollection, type CollectionEntry } from 'astro:content';
import type { Project } from '../types/project';

type ProjectEntry = CollectionEntry<'projects'>;

export const projectFromEntry = (entry: ProjectEntry): Project => ({
  slug: entry.id,
  ...entry.data,
});

export const getProjects = async () => {
  const entries = await getCollection('projects');
  const projects = entries.map(projectFromEntry);
  const featuredProjects = projects.filter((project) => project.featured);

  if (featuredProjects.length > 1) {
    throw new Error(
      `Only one featured project is allowed. Found: ${featuredProjects
        .map((project) => project.slug)
        .join(', ')}`,
    );
  }

  return projects.sort((a, b) => Number(b.year) - Number(a.year));
};

export const getProjectEntries = async () => getCollection('projects');
