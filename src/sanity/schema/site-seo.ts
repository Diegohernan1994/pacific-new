import { defineField, defineType } from 'sanity';
import { pageSeoDefaults } from '../../data/site-seo-defaults.js';

export const seoPage = defineType({
  name: 'seoPage',
  title: 'Page SEO',
  type: 'object',
  fields: [
    defineField({ name: 'pageName', title: 'Page', type: 'string', readOnly: true }),
    defineField({
      name: 'path',
      title: 'URL path',
      type: 'string',
      validation: (Rule) => Rule.required().custom((value) => value?.startsWith('/') ? true : 'Use a path beginning with /'),
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO title',
      type: 'string',
      description: 'Title shown in browser tabs and search results.',
      validation: (Rule) => Rule.max(70).warning('Keep the title concise for search results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(170).warning('Keep the description concise for search results.'),
    }),
    defineField({ name: 'canonical', title: 'Canonical URL', type: 'url' }),
    defineField({
      name: 'noIndex',
      title: 'Hide this page from search engines',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'openGraphTitle', title: 'Social sharing title', type: 'string' }),
    defineField({ name: 'openGraphDescription', title: 'Social sharing description', type: 'text', rows: 2 }),
    defineField({
      name: 'openGraphImage',
      title: 'Social sharing image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional image used when this page is shared on social networks.',
    }),
  ],
});

export default defineType({
  name: 'siteSeoSettings',
  title: 'Website SEO',
  type: 'document',
  initialValue: () => ({ pages: pageSeoDefaults }),
  fields: [
    defineField({
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [seoPage],
      validation: (Rule) => Rule.custom((pages = []) => {
        const paths = pages.map((page) => page?.path).filter(Boolean);
        return new Set(paths).size === paths.length ? true : 'Each page path must be unique.';
      }),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Website SEO', subtitle: 'SEO metadata for every page' }),
  },
});
