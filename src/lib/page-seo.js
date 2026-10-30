import { sanityClient } from 'sanity:client';

const pageSeoQuery = `*[_type == "siteSeoSettings" && _id == "siteSeoSettings"][0].pages[path == $path][0]{
  metaTitle,
  metaDescription,
  canonical,
  noIndex,
  openGraphTitle,
  openGraphDescription,
  "openGraphImageUrl": openGraphImage.asset->url
}`;

export async function getPageSeo(path, fallback = {}) {
  try {
    const pathname = path.split('?')[0];
    const cmsPage = await sanityClient.fetch(pageSeoQuery, { path })
      || (path !== pathname ? await sanityClient.fetch(pageSeoQuery, { path: pathname }) : null);
    if (!cmsPage) return fallback;

    return {
      ...fallback,
      title: cmsPage.metaTitle?.trim() || fallback.title,
      description: cmsPage.metaDescription?.trim() || fallback.description,
      canonical: cmsPage.canonical || fallback.canonical,
      noIndex: cmsPage.noIndex ?? fallback.noIndex ?? false,
      openGraphTitle: cmsPage.openGraphTitle?.trim() || fallback.openGraphTitle || cmsPage.metaTitle || fallback.title,
      openGraphDescription: cmsPage.openGraphDescription?.trim() || fallback.openGraphDescription || cmsPage.metaDescription || fallback.description,
      socialImage: cmsPage.openGraphImageUrl || fallback.socialImage,
    };
  } catch (error) {
    console.warn(`[Sanity] Could not load SEO metadata for ${path}; using Astro defaults.`, error);
    return fallback;
  }
}
