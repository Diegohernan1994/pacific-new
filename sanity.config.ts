import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import siteSeoSettings, { seoPage } from './src/sanity/schema/site-seo';
import { siteContentTypes } from './src/sanity/schema/site-content';

export const sanityProjectId = 'x5zhsqd0';
export const sanityDataset = 'production';

export default defineConfig({
  name: 'pacific-west-website',
  title: 'Pacific West Website',
  projectId: sanityProjectId,
  dataset: sanityDataset,
  plugins: [
    structureTool({
      structure: (S) => S.list().title('Pacific West').items([
        S.listItem().title('Home page').id('home-content').child(S.document().schemaType('homePageContent').documentId('homePageContent')),
        S.listItem().title('ADU type pages').id('adu-content').child(S.document().schemaType('aduContent').documentId('aduContent')),
        S.listItem().title('Projects and reviews').id('portfolio-content').child(S.document().schemaType('portfolioContent').documentId('portfolioContent')),
        S.listItem().title('Shared internal pages').id('internal-content').child(S.document().schemaType('internalPageContent').documentId('internalPageContent')),
        S.listItem().title('Website settings').id('website-settings').child(S.document().schemaType('websiteSettings').documentId('websiteSettings')),
        S.listItem().title('SEO by page').id('website-seo').child(S.document().schemaType('siteSeoSettings').documentId('siteSeoSettings')),
      ]),
    }),
  ],
  schema: { types: [siteSeoSettings, seoPage, ...siteContentTypes] },
});
