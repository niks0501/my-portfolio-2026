import { AUTHOR } from './constants';
import type { Project } from '../types/project';

export function getJsonLdAuthor() {
  return {
    '@type': 'Person' as const,
    name: AUTHOR.name,
    url: AUTHOR.url,
  };
}

export function getJsonLdWebsite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: AUTHOR.name,
    url: AUTHOR.url,
  };
}

export function getJsonLdPerson() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR.name,
    url: AUTHOR.url,
    image: AUTHOR.image,
    email: AUTHOR.email,
    jobTitle: AUTHOR.jobTitle,
  };
}

export function getJsonLdProject(project: Project, site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: new URL(`/projects/${project.slug}/`, site).href,
    image: new URL(project.image, site).href,
    author: getJsonLdAuthor(),
    programmingLanguage: project.stack.map((item) => item.label),
  };
}
