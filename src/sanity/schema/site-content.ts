import { defineField, defineType } from 'sanity';
import { aduTypeDefaults, homeContentDefaults, internalPageDefaults, portfolioDefaults, websiteSettingsDefaults } from '../../data/sanity-defaults.js';

const imageField = (name = 'image', title = 'Image') => defineField({
  name,
  title,
  type: 'image',
  options: { hotspot: true },
  description: 'Upload a replacement image. It takes priority over the existing image path below.',
});

const imageUrlField = (name = 'imageUrl', title = 'Current image path') => defineField({
  name,
  title,
  type: 'string',
  description: 'Existing site image path. Usually leave this as-is and upload a replacement above.',
});

const faqItem = defineType({
  name: 'faqItem', title: 'FAQ item', type: 'object', fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required().max(180) }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required().max(1200) }),
  ], preview: { select: { title: 'question', subtitle: 'answer' } },
});

const aduType = defineType({
  name: 'aduTypeItem', title: 'ADU type', type: 'object', fields: [
    defineField({ name: 'key', title: 'Page key', type: 'string', options: { list: [
      { title: 'Detached ADU', value: 'detached' }, { title: 'Attached ADU', value: 'attached' },
      { title: 'Garage Conversion', value: 'garage-conversion' }, { title: 'JADU', value: 'jadu' },
      { title: 'Second-story ADU', value: 'second-story' },
    ] }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'tag', title: 'Short description', type: 'string', validation: (Rule) => Rule.required().max(180) }),
    defineField({ name: 'description', title: 'Card description', type: 'text', rows: 3 }),
    defineField({ name: 'size', title: 'Typical size', type: 'string' }),
    defineField({ name: 'where', title: 'Where it is built', type: 'string' }),
    defineField({ name: 'bestFor', title: 'Best for', type: 'string' }),
    imageField(), imageUrlField(),
    defineField({ name: 'buildTime', title: 'Typical build time', type: 'string' }),
    defineField({ name: 'minRate', title: 'Estimated minimum per sq ft (USD)', type: 'number', validation: (Rule) => Rule.min(0) }),
    defineField({ name: 'maxRate', title: 'Estimated maximum per sq ft (USD)', type: 'number', validation: (Rule) => Rule.min(0) }),
    defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 6, validation: (Rule) => Rule.max(2400) }),
    defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'string' }], validation: (Rule) => Rule.max(8) }),
    defineField({ name: 'considerations', title: 'Things to consider', type: 'array', of: [{ type: 'string' }], validation: (Rule) => Rule.max(8) }),
    defineField({ name: 'plans', title: 'Starting floor plans', type: 'array', of: [{ type: 'object', fields: [
      defineField({ name: 'name', title: 'Plan name', type: 'string', validation: (Rule) => Rule.required() }),
      defineField({ name: 'squareFeet', title: 'Square feet', type: 'number', validation: (Rule) => Rule.required().min(1) }),
    ] }], validation: (Rule) => Rule.max(5) }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'object', fields: [
      imageField(), imageUrlField(), defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (Rule) => Rule.required().max(180) }),
    ], preview: { select: { title: 'alt', media: 'image' } } }], validation: (Rule) => Rule.max(10) }),
    defineField({ name: 'faqs', title: 'Questions and answers', type: 'array', of: [{ type: 'faqItem' }], validation: (Rule) => Rule.max(12) }),
    defineField({ name: 'metaTitle', title: 'SEO title', type: 'string', validation: (Rule) => Rule.max(70).warning('Aim for 50–60 characters.') }),
    defineField({ name: 'metaDescription', title: 'SEO description', type: 'text', rows: 3, validation: (Rule) => Rule.max(170).warning('Aim for 140–160 characters.') }),
    defineField({ name: 'socialImage', title: 'Social sharing image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'noIndex', title: 'Hide this page from search engines', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'name', subtitle: 'key', media: 'image' } },
});

const homeHeroStage = defineType({
  name: 'homeHeroStage', title: 'Hero slide', type: 'object', fields: [
    defineField({ name: 'kicker', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'title', title: 'Heading', type: 'string', validation: (Rule) => Rule.required().max(120) }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    imageField(), imageUrlField(),
    defineField({ name: 'imageAlt', title: 'Alt text', type: 'string', validation: (Rule) => Rule.required().max(180) }),
    defineField({ name: 'isH1', title: 'Use as page H1', type: 'boolean' }),
    defineField({ name: 'showCtas', title: 'Show hero calls to action', type: 'boolean' }),
  ], preview: { select: { title: 'title', subtitle: 'kicker', media: 'image' } },
});

const processStep = defineType({
  name: 'processStep', title: 'Process step', type: 'object', fields: [
    defineField({ name: 'title', title: 'Step title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
  ], preview: { select: { title: 'title', subtitle: 'description' } },
});

const galleryItem = defineType({
  name: 'siteGalleryItem', title: 'Gallery image', type: 'object', fields: [
    imageField(), imageUrlField(),
    defineField({ name: 'caption', title: 'Caption', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (Rule) => Rule.required().max(180) }),
  ], preview: { select: { title: 'caption', subtitle: 'alt', media: 'image' } },
});

const projectItem = defineType({
  name: 'portfolioProject', title: 'Project', type: 'object', fields: [
    defineField({ name: 'slug', title: 'URL slug', type: 'slug', options: { source: 'name', maxLength: 80 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'name', title: 'Project name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'city', title: 'City', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['ADUs', 'Remodels', 'New Construction'] }, validation: (Rule) => Rule.required() }),
    imageField('coverImage', 'Cover image'), imageUrlField('coverUrl', 'Current cover path'),
    defineField({ name: 'coverAlt', title: 'Cover alt text', type: 'string', validation: (Rule) => Rule.required().max(180) }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'year', title: 'Year completed', type: 'string' }),
    defineField({ name: 'size', title: 'Size', type: 'string' }),
    defineField({ name: 'time', title: 'Build time', type: 'string' }),
    defineField({ name: 'budget', title: 'Investment range', type: 'string' }),
    defineField({ name: 'brief', title: 'The brief', type: 'text', rows: 4 }),
    defineField({ name: 'challenge', title: 'The challenge', type: 'text', rows: 4 }),
    defineField({ name: 'solution', title: 'Our solution', type: 'text', rows: 4 }),
    defineField({ name: 'result', title: 'The result', type: 'text', rows: 4 }),
    defineField({ name: 'gallery', title: 'Project gallery', type: 'array', of: [{ type: 'siteGalleryItem' }], validation: (Rule) => Rule.max(20) }),
    defineField({ name: 'published', title: 'Show on the website', type: 'boolean', initialValue: true }),
  ], preview: { select: { title: 'name', subtitle: 'city', media: 'coverImage' } },
});

const reviewItem = defineType({
  name: 'customerReview', title: 'Customer review', type: 'object', fields: [
    defineField({ name: 'name', title: 'Customer name or initials', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'project', title: 'Project label', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', title: 'Filter category', type: 'string', options: { list: ['adu', 'construction', 'remodel'] } }),
    defineField({ name: 'platform', title: 'Review platform', type: 'string', options: { list: ['Google', 'Yelp', 'Thumbtack', 'HomeAdvisor', 'Other'] } }),
    defineField({ name: 'quote', title: 'Review text', type: 'text', rows: 5, validation: (Rule) => Rule.required().max(1600) }),
    defineField({ name: 'rating', title: 'Rating (out of 5)', type: 'number', initialValue: 5, validation: (Rule) => Rule.min(1).max(5) }),
    imageField(), imageUrlField(),
    defineField({ name: 'imageAlt', title: 'Alt text', type: 'string' }),
    defineField({ name: 'sourceUrl', title: 'Original review URL', type: 'url' }),
    defineField({ name: 'featured', title: 'Feature on home page', type: 'boolean', initialValue: false }),
    defineField({ name: 'published', title: 'Show on the website', type: 'boolean', initialValue: true }),
  ], preview: { select: { title: 'name', subtitle: 'project' } },
});

const internalPage = defineType({
  name: 'internalPageContentItem', title: 'Internal page', type: 'object', fields: [
    defineField({ name: 'path', title: 'Existing page path', type: 'string', validation: (Rule) => Rule.required().custom((value) => value?.startsWith('/') ? true : 'Path must start with /.') }),
    defineField({ name: 'pageName', title: 'Page name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'eyebrow', title: 'Hero eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Hero heading', type: 'string', validation: (Rule) => Rule.max(180) }),
    defineField({ name: 'intro', title: 'Hero introduction', type: 'text', rows: 4 }),
    imageField('heroImage', 'Hero image'), imageUrlField('heroImageUrl', 'Current hero image path'),
    defineField({ name: 'heroImageAlt', title: 'Hero image alt text', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'SEO title', type: 'string', validation: (Rule) => Rule.max(70) }),
    defineField({ name: 'metaDescription', title: 'SEO description', type: 'text', rows: 3, validation: (Rule) => Rule.max(170) }),
    defineField({ name: 'noIndex', title: 'Hide this page from search engines', type: 'boolean', initialValue: false }),
  ], preview: { select: { title: 'pageName', subtitle: 'path', media: 'heroImage' } },
});

const homePageContent = defineType({
  name: 'homePageContent', title: 'Home page content', type: 'document',
  initialValue: () => ({
    types: homeContentDefaults.types,
    heroStages: homeContentDefaults.heroStages,
    process: homeContentDefaults.process,
    testimonials: homeContentDefaults.testimonials.map((review) => ({
      ...review,
      platform: review.platform?.toLowerCase() === 'google' ? 'Google' : 'Yelp',
      published: true,
    })),
    gallery: homeContentDefaults.gallery,
    faq: homeContentDefaults.faq,
    contact: homeContentDefaults.contact,
  }),
  fields: [
    defineField({ name: 'types', title: 'ADU types introduction', type: 'object', fields: [
      defineField({ name: 'kicker', title: 'Eyebrow', type: 'string' }), defineField({ name: 'title', title: 'Heading', type: 'string' }), defineField({ name: 'description', title: 'Supporting text', type: 'text', rows: 3 }),
    ] }),
    defineField({ name: 'heroStages', title: 'Build journey hero slides', type: 'array', of: [{ type: 'homeHeroStage' }], validation: (Rule) => Rule.min(1).max(12) }),
    defineField({ name: 'process', title: 'Process section', type: 'object', fields: [
      defineField({ name: 'kicker', title: 'Eyebrow', type: 'string' }), defineField({ name: 'title', title: 'Heading', type: 'string' }),
      defineField({ name: 'steps', title: 'Steps', type: 'array', of: [{ type: 'processStep' }], validation: (Rule) => Rule.max(10) }),
    ] }),
    defineField({ name: 'gallery', title: 'ADU gallery section', type: 'object', fields: [
      defineField({ name: 'kicker', title: 'Eyebrow', type: 'string' }), defineField({ name: 'title', title: 'Heading', type: 'string' }),
      defineField({ name: 'ctaLabel', title: 'Button label', type: 'string' }),
      defineField({ name: 'items', title: 'Images', type: 'array', of: [{ type: 'siteGalleryItem' }], validation: (Rule) => Rule.max(20) }),
    ] }),
    defineField({ name: 'testimonials', title: 'Home page testimonials', type: 'array', of: [{ type: 'customerReview' }], validation: (Rule) => Rule.max(12) }),
    defineField({ name: 'faq', title: 'Home FAQ section', type: 'object', fields: [
      defineField({ name: 'kicker', title: 'Eyebrow', type: 'string' }), defineField({ name: 'title', title: 'Heading', type: 'string' }),
      defineField({ name: 'items', title: 'Questions and answers', type: 'array', of: [{ type: 'faqItem' }], validation: (Rule) => Rule.max(20) }),
    ] }),
    defineField({ name: 'contact', title: 'Home contact section', type: 'object', fields: [
      defineField({ name: 'title', title: 'Heading', type: 'string' }), defineField({ name: 'kicker', title: 'Eyebrow', type: 'string' }), defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 3 }),
      imageField(), imageUrlField(), defineField({ name: 'imageAlt', title: 'Alt text', type: 'string' }),
    ] }),
    defineField({ name: 'lastReviewed', title: 'Content reviewed on', type: 'date' }),
  ], preview: { prepare: () => ({ title: 'Home page content', subtitle: 'Hero, process, gallery and FAQs' }) },
});

const aduContent = defineType({
  name: 'aduContent', title: 'ADU type pages', type: 'document',
  initialValue: () => ({ types: aduTypeDefaults }),
  fields: [
    defineField({ name: 'types', title: 'ADU types', type: 'array', of: [{ type: 'aduTypeItem' }], validation: (Rule) => Rule.min(5).max(5).custom((items = []) => {
      const keys = items.map((item) => item?.key).filter(Boolean);
      return new Set(keys).size === keys.length ? true : 'Each ADU page key must be unique.';
    }) }),
    defineField({ name: 'lastReviewed', title: 'Content reviewed on', type: 'date' }),
  ],
  preview: { prepare: () => ({ title: 'ADU type pages', subtitle: 'Descriptions, photos, FAQs and SEO for five ADU types' }) },
});

const portfolioContent = defineType({
  name: 'portfolioContent', title: 'Projects and reviews', type: 'document',
  initialValue: () => ({
    projects: portfolioDefaults.projects.map((project) => ({
      ...project,
      slug: { current: project.slug },
      coverUrl: project.cover,
      coverAlt: project.name + ' in ' + project.city,
      published: true,
      gallery: project.gallery.map((url, index) => ({
        imageUrl: url,
        caption: project.name + ' photo ' + (index + 1),
        alt: project.name + ' in ' + project.city,
      })),
    })),
    reviews: portfolioDefaults.reviews.map((review) => ({ ...review, imageUrl: review.image, imageAlt: review.project + ' project', published: true })),
    reviewPlatforms: portfolioDefaults.reviewPlatforms,
  }),
  fields: [
    defineField({ name: 'projects', title: 'Project case studies', type: 'array', of: [{ type: 'portfolioProject' }], validation: (Rule) => Rule.max(100) }),
    defineField({ name: 'reviews', title: 'Customer reviews', type: 'array', of: [{ type: 'customerReview' }], validation: (Rule) => Rule.max(100) }),
    defineField({ name: 'reviewPlatforms', title: 'Review platform links', type: 'array', of: [{ type: 'object', fields: [
      defineField({ name: 'name', title: 'Platform', type: 'string', validation: (Rule) => Rule.required() }),
      defineField({ name: 'href', title: 'Review page URL', type: 'url', validation: (Rule) => Rule.required() }),
    ] }], validation: (Rule) => Rule.max(8) }),
    defineField({ name: 'lastReviewed', title: 'Content reviewed on', type: 'date' }),
  ],
  preview: { prepare: () => ({ title: 'Projects and reviews', subtitle: 'Portfolio, case studies and customer reviews' }) },
});

const websiteSettings = defineType({
  name: 'websiteSettings', title: 'Website settings', type: 'document',
  initialValue: () => {
    const { _id, ...values } = websiteSettingsDefaults;
    return values;
  },
  fields: [
    defineField({ name: 'companyName', title: 'Company name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'phone', title: 'Display phone', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'phoneLink', title: 'Phone link', type: 'string', description: 'tel:+1… format' }),
    defineField({ name: 'email', title: 'Email address', type: 'email' }),
    defineField({ name: 'license', title: 'Contractor license number', type: 'string' }),
    defineField({ name: 'footerDescription', title: 'Footer introduction', type: 'text', rows: 3 }),
    defineField({ name: 'offices', title: 'Office addresses', type: 'array', of: [{ type: 'object', fields: [
      defineField({ name: 'name', title: 'Office name', type: 'string' }), defineField({ name: 'address', title: 'Street address', type: 'string' }), defineField({ name: 'city', title: 'City, state and ZIP', type: 'string' }),
    ] }] }),
    defineField({ name: 'socialLinks', title: 'Social and business profiles', type: 'array', of: [{ type: 'object', fields: [
      defineField({ name: 'label', title: 'Name', type: 'string' }), defineField({ name: 'url', title: 'URL', type: 'url' }),
    ] }], validation: (Rule) => Rule.max(12) }),
    defineField({ name: 'businessHours', title: 'Business hours', type: 'text', rows: 3 }),
    defineField({ name: 'googleTagManagerId', title: 'Google Tag Manager ID', type: 'string', description: 'Example: GTM-ABC1234' }),
    defineField({ name: 'lastReviewed', title: 'Business details reviewed on', type: 'date' }),
  ],
  preview: { prepare: () => ({ title: 'Website settings', subtitle: 'Company details, contact information and profiles' }) },
});

const internalPageContent = defineType({
  name: 'internalPageContent', title: 'Internal page content', type: 'document', initialValue: () => ({ pages: internalPageDefaults }),
  fields: [
    defineField({ name: 'pages', title: 'Pages using the shared site template', type: 'array', of: [{ type: 'internalPageContentItem' }], validation: (Rule) => Rule.custom((items = []) => {
      const paths = items.map((item) => item?.path).filter(Boolean);
      return new Set(paths).size === paths.length ? true : 'Each page path must be unique.';
    }) }),
  ],
  preview: { prepare: () => ({ title: 'Internal page content', subtitle: 'Hero copy and SEO for About, Contact, Financing and other shared pages' }) },
});

// SEO types stay in site-seo.ts. Registering those definitions twice causes
// Sanity's schema compiler to reject the Studio.
export const siteContentTypes = [faqItem, aduType, homeHeroStage, processStep, galleryItem, projectItem, reviewItem, internalPage, homePageContent, aduContent, portfolioContent, websiteSettings, internalPageContent];
