import type { Project, ProjectCategory, ProjectStatus } from '../types/project';

export const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  'in-progress': 'In progress',
  archived: 'Archived',
};

export const statusClasses: Record<ProjectStatus, string> = {
  live: 'bg-green-500/10 text-green-700 border-green-500/20 dark:bg-green-400/15 dark:text-green-200 dark:border-green-300/30',
  'in-progress':
    'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:bg-amber-400/15 dark:text-amber-200 dark:border-amber-300/30',
  archived:
    'bg-muted text-muted-foreground border-border dark:bg-white/10 dark:text-foreground/[0.85] dark:border-white/20',
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
