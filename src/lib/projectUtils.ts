import type { Project, ProjectCategory, ProjectStatus } from '../types/project';

export const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  'in-progress': 'In progress',
  archived: 'Archived',
};

export const statusClasses: Record<ProjectStatus, string> = {
  live: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  'in-progress':
    'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
  archived: 'bg-muted text-muted-foreground border-border',
};

export const statusDotClasses: Record<ProjectStatus, string> = {
  live: 'bg-green-500',
  'in-progress': 'bg-amber-500',
  archived: 'bg-muted-foreground',
};

export const categoryLabel: Record<ProjectCategory, string> = {
  'web-app': 'Web App',
  data: 'Data',
  tool: 'Tool',
};

export const stackGroupLabel: Record<
  Project['stack'][number]['group'],
  string
> = {
  frontend: 'Frontend',
  backend: 'Backend',
  data: 'Data',
};
