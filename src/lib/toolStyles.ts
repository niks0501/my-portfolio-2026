const toolStyles = {
  laravel: 'bg-red-500/10 text-red-700 dark:text-red-400',
  vue: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  react: 'bg-sky-500/10 text-sky-700 dark:text-sky-400',
  tailwind: 'bg-teal-500/10 text-teal-700 dark:text-teal-400',
  'tailwind css': 'bg-teal-500/10 text-teal-700 dark:text-teal-400',
  mysql: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400',
  php: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400',
  typescript: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
  bootstrap: 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
  inertia: 'bg-pink-500/10 text-pink-700 dark:text-pink-400',
  analytics: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
  'livestock mgmt': 'bg-lime-500/10 text-lime-700 dark:text-lime-400',
  database: 'bg-slate-500/10 text-slate-700 dark:text-slate-400',
} as const;

const fallback = 'bg-primary/10 text-primary';

export function getToolTagClasses(label: string): string {
  return toolStyles[label.toLowerCase().trim() as keyof typeof toolStyles] ?? fallback;
}
