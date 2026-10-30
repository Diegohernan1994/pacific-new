import { projects } from './reviews-projects.js';

const internalPages = [
  { pageName: 'About', path: '/about/', metaTitle: 'Pacific West Home Builders' },
  { pageName: 'ADU', path: '/adu/', metaTitle: 'Pacific West Home Builders' },
  { pageName: 'ADUs', path: '/adus/', metaTitle: 'Pacific West Home Builders' },
  { pageName: 'Contact', path: '/contact/', metaTitle: 'Pacific West Home Builders' },
  { pageName: 'Financing', path: '/financing/', metaTitle: 'Pacific West Home Builders' },
  { pageName: 'Remodel', path: '/remodel/', metaTitle: 'Pacific West Home Builders' },
  { pageName: 'Remodeling', path: '/remodeling/', metaTitle: 'Pacific West Home Builders' },
];

export const pageSeoDefaults = [
  {
    pageName: 'Home',
    path: '/',
    metaTitle: 'Pacific West Home Builders · ADUs',
    metaDescription: 'Pacific West designs, permits and builds accessory dwelling units across Southern California. Custom detached ADUs, garage conversions, and additions.',
  },
  ...internalPages,
  {
    pageName: 'Reviews',
    path: '/reviews/',
    metaTitle: 'Reviews | Pacific West Home Builders',
    metaDescription: 'Read what homeowners say about their ADU, construction and remodeling projects with Pacific West Home Builders.',
    canonical: 'https://pwhbuilders.com/reviews/',
  },
  {
    pageName: 'Projects',
    path: '/projects/',
    metaTitle: 'Projects | Pacific West Home Builders',
    metaDescription: 'Explore ADU and remodeling projects by Pacific West Home Builders across Southern California. See the brief, challenge, and solution behind each build.',
    canonical: 'https://pwhbuilders.com/projects/',
  },
  ...projects.map((project) => ({
    pageName: `${project.name} · ${project.city}`,
    path: `/projects/${project.slug}/`,
    metaTitle: `${project.name} in ${project.city} | Pacific West Home Builders`,
    metaDescription: project.summary,
    canonical: `https://pwhbuilders.com/projects/${project.slug}/`,
  })),
];
