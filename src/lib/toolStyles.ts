const toolStyles = {
  laravel:
    'bg-red-500/10 text-red-700 ring-1 ring-red-500/15 dark:bg-red-400/15 dark:text-red-200 dark:ring-red-300/30',
  vue: 'bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/15 dark:bg-emerald-400/15 dark:text-emerald-200 dark:ring-emerald-300/30',
  react:
    'bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:bg-sky-400/15 dark:text-sky-200 dark:ring-sky-300/30',
  tailwind:
    'bg-teal-500/10 text-teal-700 ring-1 ring-teal-500/15 dark:bg-teal-400/15 dark:text-teal-200 dark:ring-teal-300/30',
  'tailwind css':
    'bg-teal-500/10 text-teal-700 ring-1 ring-teal-500/15 dark:bg-teal-400/15 dark:text-teal-200 dark:ring-teal-300/30',
  astro:
    'bg-orange-500/10 text-orange-700 ring-1 ring-orange-500/15 dark:bg-orange-400/15 dark:text-orange-200 dark:ring-orange-300/30',
  mysql:
    'bg-cyan-500/10 text-cyan-700 ring-1 ring-cyan-500/15 dark:bg-cyan-400/15 dark:text-cyan-200 dark:ring-cyan-300/30',
  php: 'bg-indigo-500/10 text-indigo-700 ring-1 ring-indigo-500/15 dark:bg-indigo-400/15 dark:text-indigo-200 dark:ring-indigo-300/30',
  java: 'bg-orange-500/10 text-orange-700 ring-1 ring-orange-500/15 dark:bg-orange-400/15 dark:text-orange-200 dark:ring-orange-300/30',
  javafx:
    'bg-orange-500/10 text-orange-700 ring-1 ring-orange-500/15 dark:bg-orange-400/15 dark:text-orange-200 dark:ring-orange-300/30',
  typescript:
    'bg-blue-500/10 text-blue-700 ring-1 ring-blue-500/15 dark:bg-blue-400/15 dark:text-blue-200 dark:ring-blue-300/30',
  bootstrap:
    'bg-purple-500/10 text-purple-700 ring-1 ring-purple-500/15 dark:bg-purple-400/15 dark:text-purple-200 dark:ring-purple-300/30',
  inertia:
    'bg-pink-500/10 text-pink-700 ring-1 ring-pink-500/15 dark:bg-pink-400/15 dark:text-pink-200 dark:ring-pink-300/30',
  analytics:
    'bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/15 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-300/30',
  'data analytics':
    'bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/15 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-300/30',
  'power bi':
    'bg-yellow-500/10 text-yellow-700 ring-1 ring-yellow-500/15 dark:bg-yellow-400/15 dark:text-yellow-200 dark:ring-yellow-300/30',
  knime:
    'bg-yellow-500/10 text-yellow-700 ring-1 ring-yellow-500/15 dark:bg-yellow-400/15 dark:text-yellow-200 dark:ring-yellow-300/30',
  'livestock mgmt':
    'bg-lime-500/10 text-lime-700 ring-1 ring-lime-500/15 dark:bg-lime-400/15 dark:text-lime-200 dark:ring-lime-300/30',
  database:
    'bg-slate-500/10 text-slate-700 ring-1 ring-slate-500/15 dark:bg-slate-400/15 dark:text-slate-100 dark:ring-slate-300/30',
  mvc: 'bg-slate-500/10 text-slate-700 ring-1 ring-slate-500/15 dark:bg-slate-400/15 dark:text-slate-100 dark:ring-slate-300/30',
  git: 'bg-rose-500/10 text-rose-700 ring-1 ring-rose-500/15 dark:bg-rose-400/15 dark:text-rose-200 dark:ring-rose-300/30',
  github:
    'bg-zinc-500/10 text-zinc-700 ring-1 ring-zinc-500/15 dark:bg-zinc-300/15 dark:text-zinc-100 dark:ring-zinc-200/30',
  networking:
    'bg-violet-500/10 text-violet-700 ring-1 ring-violet-500/15 dark:bg-violet-400/15 dark:text-violet-200 dark:ring-violet-300/30',
  'barangay system':
    'bg-violet-500/10 text-violet-700 ring-1 ring-violet-500/15 dark:bg-violet-400/15 dark:text-violet-200 dark:ring-violet-300/30',
} as const;

const fallback =
  'bg-primary/10 text-primary ring-1 ring-primary/15 dark:bg-primary/15 dark:ring-primary/30';

export function getToolTagClasses(label: string): string {
  return (
    toolStyles[label.toLowerCase().trim() as keyof typeof toolStyles] ??
    fallback
  );
}
