export const EMAIL = 'nikkocausapin61@gmail.com';
export const SITE_URL = 'https://nikkocausapin.vercel.app';
export const PROFILE_IMAGE = '/images/profile.webp';
export const RESUME_PATH = '/resume.pdf';

export const SOCIAL_LINKS = {
  github: {
    label: 'GitHub',
    value: 'github.com/niks0501',
    href: 'https://github.com/niks0501',
  },
  linkedin: {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nikko-causapin-2357b8414',
    href: 'https://www.linkedin.com/in/nikko-causapin-2357b8414/',
  },
} as const;

export const AUTHOR = {
  name: 'Nikko Causapin',
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  image: `${SITE_URL}/images/profile.webp`,
  jobTitle: 'Software Engineer',
  location: 'Batangas, Philippines · GMT+8',
  sameAs: [SOCIAL_LINKS.github.href, SOCIAL_LINKS.linkedin.href],
} as const;

export const BADGES = [
  {
    src: '/images/badges/microsoft-office-specialist-excel-office-2016.png',
    name: 'Microsoft Office Specialist — Excel',
    label: 'MOS<br />Excel',
    category: 'Microsoft Office Specialist',
  },
  {
    src: '/images/badges/it-specialist-data-analytics.png',
    name: 'IT Specialist — Data Analytics',
    label: 'Data<br />Analytics',
    category: 'IT Specialist',
  },
  {
    src: '/images/badges/it-specialist-device-configuration-and-management.png',
    name: 'IT Specialist — Device Configuration and Management',
    label: 'Device Config<br />&amp; Management',
    category: 'IT Specialist',
  },
  {
    src: '/images/badges/it-specialist-databases.png',
    name: 'IT Specialist — Databases',
    label: 'Databases',
    category: 'IT Specialist',
  },
  {
    src: '/images/badges/data-analytics-essentials.png',
    name: 'Data Analytics Essentials',
    label: 'Data Analytics<br />Essentials',
    category: 'Cisco Networking Academy',
  },
  {
    src: '/images/badges/ccna-switching-routing-and-wireless-essentials.1.png',
    name: 'CCNA — Switching, Routing, and Wireless Essentials',
    label: 'CCNA<br />SRWE',
    category: 'Cisco Networking Academy',
  },
  {
    src: '/images/badges/apply-ai-analyze-customer-reviews.png',
    name: 'Apply AI to Analyze Customer Reviews',
    label: 'AI Customer<br />Reviews',
    category: 'AI Skills',
  },
] as const;
