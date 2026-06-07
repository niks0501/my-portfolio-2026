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
    name: `${AUTHOR.name} Portfolio`,
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
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Batangas',
      addressCountry: 'PH',
    },
    knowsAbout: [
      'Full-stack development',
      'Laravel',
      'Vue',
      'React',
      'MySQL',
      'Business analytics',
      'Internal tools',
    ],
    sameAs: AUTHOR.sameAs,
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

export function serializeJsonLd(item: unknown): string {
  return JSON.stringify(item)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
