export type ProjectCategory = 'web-app' | 'data' | 'tool';
export type ProjectStatus = 'live' | 'in-progress' | 'archived';
export type ProjectStackGroup = 'frontend' | 'backend' | 'data';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectStackItem {
  label: string;
  group: ProjectStackGroup;
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  longDescription: string;
  highlights: string[];
  challenges: string[];
  tags: { label: string; icon: string }[];
  stack: ProjectStackItem[];
  metrics: ProjectMetric[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  gallery: ProjectGalleryItem[];
  githubUrl: string;
  liveDemoUrl: string | null;
  sourceOnly: boolean;
  featured: boolean;
  categories: ProjectCategory[];
  year: string;
  role: string;
  status: ProjectStatus;
  accent: string;
  problem: string;
  approach: string;
  result: string;
}
